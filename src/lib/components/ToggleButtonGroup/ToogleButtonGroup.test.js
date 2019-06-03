/* global
  afterEach
  describe,
  beforeEach,
  it,
  jest,
*/
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import ToggleButtonGroup from './ToggleButtonGroup';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import AAAThemeProvider from '../AAAPrimaryTheme/AAAPrimaryTheme';

function getFakeProps(overrides) {
  return {
    options: [{ id: 1, text: 'Yes' }, { id: 2, text: 'No' }],
    onSelect: jest.fn(v => v),
    ...overrides
  };
}

function createToggleButtonWithTheme(props) {
  return mount(
    <AAAThemeProvider theme={props.theme}>
      <ToggleButtonGroup {...props} />
    </AAAThemeProvider>
  );
}

describe('ToggleButtonGroup', () => {
  let props;
  let wrappedComponent;
  let buttonGroup;

  beforeEach(() => {
    props = getFakeProps();
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });

  it('contains button elements when it has valid options', () => {
    expect(buttonGroup.props.children.length).to.be.above(0);
  });

  it('do NOT render button elements when it has NO options', () => {
    props = getFakeProps({ options: [] });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);

    expect(buttonGroup).not.to.equal(undefined);
  });

  it('do NOT render button elements when has Invalid options', () => {
    props = getFakeProps({
      options: [
        { idx: 1, display: 'Invalid' },
        { idx: 2, display: 'Invalid 2' }
      ]
    });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);

    expect(buttonGroup).not.to.equal(undefined);

    props = getFakeProps({ options: null });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);

    expect(buttonGroup).not.to.equal(undefined);

    props = getFakeProps({ options: undefined });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);

    expect(buttonGroup).not.to.equal(undefined);
  });

  it('renders text', () => {
    const button1Text = buttonGroup.props.children[0].props.children;
    const button2Text = buttonGroup.props.children[1].props.children;

    expect(button1Text).to.equal('Yes');
    expect(button2Text).to.equal('No');
  });

  it('should set button to active when has value', () => {
    props = getFakeProps({ value: { id: 1, text: 'Yes' } });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);

    const button1 = buttonGroup.props.children[0];
    const button2 = buttonGroup.props.children[1];

    expect(button1.props.className).to.contains('active');
    expect(button2.props.className).to.not.contains('active');
  });

  it('should set all elements to disabled', () => {
    props = getFakeProps({ disabled: true });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);

    const button1 = buttonGroup.props.children[0];
    const button2 = buttonGroup.props.children[1];

    expect(button1.props.disabled).to.be.equal(true);
    expect(button2.props.disabled).to.be.equal(true);
  });
});

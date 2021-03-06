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
import sinon from 'sinon';
import ACEThemeProvider from '../ACEPrimaryTheme/ACEPrimaryTheme';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ToggleButtonGroup from './ToggleButtonGroup';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';
import Button from '../Button/Button';

// Constants
import {
  ACE_COLOR_MAIN_BLUE,
  ACE_COLOR_MAIN_DISABLED,
} from '../../constants/colors';

function getFakeProps(overrides) {
  return {
    options: [
      { id: 0, value: 'Y', text: 'Yes' },
      { id: 1, value: 'N', text: 'No' },
    ],
    onSelect: jest.fn(v => v),
    ...overrides,
  };
}

function createToggleButtonWithTheme(props) {
  return mount(
    <ACEThemeProvider theme={props.theme}>
      <ToggleButtonGroup {...props} />
    </ACEThemeProvider>
  );
}

describe('ToggleButtonGroup', () => {
  let spy;
  let props;
  let ToggleButtonWrapper;
  let buttonGroup;

  beforeEach(() => {
    spy = sinon.spy();
    props = getFakeProps({ onSelect: spy });
    ToggleButtonWrapper = createToggleButtonWithTheme(props);
    buttonGroup = ToggleButtonWrapper.find(ButtonGroup).get(0);
  });

  afterEach(() => {
    ToggleButtonWrapper.unmount();
  });

  describe('rendering', () => {
    it('contains 2 button elements when it has valid options', () => {
      expect(buttonGroup.props.children.length).to.be.equal(2);
    });

    it('rendered text should match passed options text', () => {
      props = getFakeProps({
        options: [{ id: 0, text: 'Yes !!!' }, { id: 1, text: 'No !!!' }],
      });
      ToggleButtonWrapper = createToggleButtonWithTheme(props);
      buttonGroup = ToggleButtonWrapper.find(ButtonGroup).get(0);

      const leftButton = ToggleButtonWrapper.find(Button).at(0);
      const rightButton = ToggleButtonWrapper.find(Button).at(1);

      expect(leftButton.props().children).to.equal(props.options[0].text);
      expect(rightButton.props().children).to.equal(props.options[1].text);
    });

    it('throws Error when toggleButton is rendered with null/undefined/empty options', () => {
      props = getFakeProps({ options: [] });

      expect(() => {
        ToggleButtonWrapper = createToggleButtonWithTheme(props);
        ToggleButtonWrapper.find(ButtonGroup).get(0);
      }).to.throw(
        'Invariant failed: Invalid length of options. You must passed maximum number of two options'
      );

      props = getFakeProps({ options: null });

      expect(() => {
        ToggleButtonWrapper = createToggleButtonWithTheme(props);
        ToggleButtonWrapper.find(ButtonGroup).get(0);
      }).to.throw(
        'Invariant failed: Invalid length of options. You must passed maximum number of two options'
      );

      props = getFakeProps({ options: undefined });

      expect(() => {
        ToggleButtonWrapper = createToggleButtonWithTheme(props);
        ToggleButtonWrapper.find(ButtonGroup).get(0);
      }).to.throw(
        'Invariant failed: Invalid length of options. You must passed maximum number of two options'
      );
    });

    it('throws Error when toggleButton is rendered with Invalid keys in options', () => {
      props = getFakeProps({
        options: [
          {
            idx: 1,
            texts: 'Invalid Prop',
          },
          {
            idx: 2,
            texts: 'Invalid ',
          },
        ],
      });

      expect(() => {
        ToggleButtonWrapper = createToggleButtonWithTheme(props);
        ToggleButtonWrapper.find(ButtonGroup).get(0);
      }).to.throw(
        'Invalid object keys are present. Keys should contain id and text'
      );
    });

    it('attaches a data-quid attribute to the input base element', () => {
      expect(
        ToggleButtonWrapper.find('button')
          .at(0)
          .getDOMNode().dataset.quid
      ).to.equal(`ToggleButton-${props.options[0].id}`);
    });
  });

  describe('event handlers', () => {
    it('will call it\'s click event handler and return selected button value', () => {
      const leftButton = ToggleButtonWrapper.find(Button).at(0);

      leftButton.simulate('click');

      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.deep.equal(props.options[0]);
    });
  });

  describe('base styles', () => {
    it('has 48px height', () => {
      const heightStyle = getDOMNodeComputedStyle(
        ToggleButtonWrapper.find(Button)
          .at(0)
          .getDOMNode(),
        'height'
      );
      expect(heightStyle).to.equal('48px');
    });

    it('has 18px label', () => {
      const label = ToggleButtonWrapper.find(
        'button[data-quid="ToggleButton-1"]'
      ).getDOMNode();
      const heightStyle = getDOMNodeComputedStyle(label, 'font-size');
      expect(heightStyle).to.equal('18px');
    });
  });

  describe('button states', () => {
    it('has a background color of transparent', () => {
      const backgroundStyle = getDOMNodeComputedStyle(
        ToggleButtonWrapper.find(Button)
          .at(0)
          .getDOMNode(),
        'background'
      );

      expect(backgroundStyle).to.equal('transparent');
    });

    it('has a border color of ACE_COLOR_MAIN_BLUE', () => {
      const borderColorStyle = getDOMNodeComputedStyle(
        ToggleButtonWrapper.find(Button)
          .at(0)
          .getDOMNode(),
        'border-top-color'
      );
      expect(borderColorStyle).to.equal(ACE_COLOR_MAIN_BLUE);
    });

    it('has text color of ACE_COLOR_MAIN_BLUE', () => {
      const textColor = getDOMNodeComputedStyle(
        ToggleButtonWrapper.find(Button)
          .at(0)
          .getDOMNode(),
        'color'
      );
      expect(textColor).to.equal(ACE_COLOR_MAIN_BLUE);
    });

    it('should set button to active when has matched value in options', () => {
      props = getFakeProps({ value: 'Y' });
      ToggleButtonWrapper = createToggleButtonWithTheme(props);

      const leftButton = ToggleButtonWrapper.find(Button).at(0);
      const rightButton = ToggleButtonWrapper.find(Button).at(1);

      expect(leftButton.props().className).to.contains('active');
      expect(rightButton.props().className).to.not.contains('active');
    });

    it('should set toggle buttons color ACE_COLOR_MAIN_DISABLED when disabled', () => {
      props = getFakeProps({ disabled: true });
      ToggleButtonWrapper = createToggleButtonWithTheme(props);

      const leftButton = ToggleButtonWrapper.find(Button).at(0);
      const rightButton = ToggleButtonWrapper.find(Button).at(1);

      const leftButtonBorderColorStyle = getDOMNodeComputedStyle(
        leftButton.getDOMNode(),
        'border-top-color'
      );

      const rightButtonBorderColorStyle = getDOMNodeComputedStyle(
        rightButton.getDOMNode(),
        'border-top-color'
      );

      expect(leftButtonBorderColorStyle).to.equal(ACE_COLOR_MAIN_DISABLED);
      expect(rightButtonBorderColorStyle).to.equal(ACE_COLOR_MAIN_DISABLED);
    });
  });
});

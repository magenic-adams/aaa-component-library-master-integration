import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

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
  return _objectSpread({
    options: [{
      id: 1,
      text: 'Yes'
    }, {
      id: 2,
      text: 'No'
    }],
    onSelect: jest.fn(function (v) {
      return v;
    })
  }, overrides);
}

function createToggleButtonWithTheme(props) {
  return mount(React.createElement(AAAThemeProvider, {
    theme: props.theme
  }, React.createElement(ToggleButtonGroup, props)));
}

describe('ToggleButtonGroup', function () {
  var props;
  var wrappedComponent;
  var buttonGroup;
  beforeEach(function () {
    props = getFakeProps();
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
  });
  afterEach(function () {
    wrappedComponent.unmount();
  });
  it('contains button elements when it has valid options', function () {
    expect(buttonGroup.props.children.length).to.be.above(0);
  });
  it('renders text', function () {
    var button1Text = buttonGroup.props.children[0].props.children;
    var button2Text = buttonGroup.props.children[1].props.children;
    expect(button1Text).to.equal('Yes');
    expect(button2Text).to.equal('No');
  });
  it('should set button to active when has value', function () {
    props = getFakeProps({
      value: 1
    });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
    var button1 = buttonGroup.props.children[0];
    var button2 = buttonGroup.props.children[1];
    expect(button1.props.className).to.contains('active');
    expect(button2.props.className).to.not.contains('active');
  });
  it('should set all elements to disabled', function () {
    props = getFakeProps({
      disabled: true
    });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
    var button1 = buttonGroup.props.children[0];
    var button2 = buttonGroup.props.children[1];
    expect(button1.props.disabled).to.be.equal(true);
    expect(button2.props.disabled).to.be.equal(true);
  });
});
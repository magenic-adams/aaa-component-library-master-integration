import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { expect } from "chai";
import { mount, shallow } from 'enzyme';
import ToggleButtonGroup from './ToggleButtonGroup';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import AAAThemeProvider from '../AAAPrimaryTheme/AAAPrimaryTheme';
import Button from '../Button/Button';

function getFakeProps(overrides) {
  return _objectSpread({
    options: [{
      value: 0,
      text: "Yes"
    }, {
      value: 1,
      text: "No"
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

describe("ToggleButtonGroup", function () {
  var props;
  var wrappedComponent;
  var buttonGroup;
  beforeEach(function () {
    props = getFakeProps();
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup);
  });
  afterEach(function () {
    wrappedComponent.unmount();
  });
  it('contains button elements when it has options', function () {
    expect(buttonGroup.get(0).props.children.length).to.be.above(0);
  });
  it('do NOT render button elements when it has NO options', function () {
    var props = getFakeProps({
      options: []
    });
    var wrappedComponent = createToggleButtonWithTheme(props);
    var buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
    expect(buttonGroup).to.be.undefined;
  });
  it('renders text', function () {
    var button1Text = buttonGroup.get(0).props.children[0].props.children;
    var button2Text = buttonGroup.get(0).props.children[1].props.children;
    expect(button1Text).to.equal('Yes');
    expect(button2Text).to.equal('No');
  });
  it('should set only one button to active', function () {
    var button1 = wrappedComponent.find(ButtonGroup).find(Button).at(0);
    var button2 = wrappedComponent.find(ButtonGroup).find(Button).at(1);
    button1.simulate("click");
    var clickedButton = wrappedComponent.find(ButtonGroup).find(Button).at(0);
    expect(clickedButton.props().className).to.contains("active");
    expect(button2.props().className).to.not.contains("active");
  });
  it('should set all elements to disabled', function () {
    var props = getFakeProps({
      disabled: true
    });
    var wrappedComponent = createToggleButtonWithTheme(props);
    var button1 = wrappedComponent.find(ButtonGroup).find(Button).at(0);
    var button2 = wrappedComponent.find(ButtonGroup).find(Button).at(1);
    expect(button1.props().disabled).to.be.equal(true);
    expect(button2.props().disabled).to.be.equal(true);
  });
});
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/* eslint-disable no-unused-expressions */

/* eslint-disable func-names */

/* eslint-disable no-undef */
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
  it('do NOT render button elements when it has NO options', function () {
    props = getFakeProps({
      options: []
    });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
    expect(buttonGroup).to.be.undefined;
  });
  it('do NOT render button elements when has Invalid options', function () {
    props = getFakeProps({
      options: [{
        idx: 1,
        display: 'Invalid'
      }, {
        idx: 2,
        display: 'Invalid 2'
      }]
    });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
    expect(buttonGroup).to.be.undefined;
    props = getFakeProps({
      options: null
    });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
    expect(buttonGroup).to.be.undefined;
    props = getFakeProps({
      options: undefined
    });
    wrappedComponent = createToggleButtonWithTheme(props);
    buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
    expect(buttonGroup).to.be.undefined;
  });
  it('renders text', function () {
    var button1Text = buttonGroup.props.children[0].props.children;
    var button2Text = buttonGroup.props.children[1].props.children;
    expect(button1Text).to.equal('Yes');
    expect(button2Text).to.equal('No');
  });
  it('should set button to active when has value', function () {
    props = getFakeProps({
      value: {
        id: 1,
        text: 'Yes'
      }
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
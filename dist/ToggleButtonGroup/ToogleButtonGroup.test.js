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
import sinon from 'sinon';
import AAAThemeProvider from '../AAAPrimaryTheme/AAAPrimaryTheme';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ToggleButtonGroup from './ToggleButtonGroup'; // Test Utilities

import { getDOMNodeComputedStyle } from '../../../../test/DOM';
import Button from '../Button/Button'; // Constants

import { AAA_COLOR_TRANSPARENT, AAA_COLOR_MAIN_BLUE, AAA_COLOR_MAIN_DISABLED, AAA_COLOR_MAIN_WHITE } from '../../constants/colors';

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
  var spy;
  var props;
  var ToggleButtonWrapper;
  var buttonGroup;
  beforeEach(function () {
    spy = sinon.spy();
    props = getFakeProps({
      onSelect: spy
    });
    ToggleButtonWrapper = createToggleButtonWithTheme(props);
    buttonGroup = ToggleButtonWrapper.find(ButtonGroup).get(0);
  });
  afterEach(function () {
    ToggleButtonWrapper.unmount();
  });
  describe('rendering', function () {
    it('contains 2 button elements when it has valid options', function () {
      expect(buttonGroup.props.children.length).to.be.equal(2);
    });
    it('rendered text should match passed options text', function () {
      props = getFakeProps({
        options: [{
          id: 1,
          text: 'Yes !!!'
        }, {
          id: 2,
          text: 'No !!!'
        }]
      });
      ToggleButtonWrapper = createToggleButtonWithTheme(props);
      buttonGroup = ToggleButtonWrapper.find(ButtonGroup).get(0);
      var leftButton = ToggleButtonWrapper.find(Button).at(0);
      var rightButton = ToggleButtonWrapper.find(Button).at(1);
      expect(leftButton.props().children).to.equal(props.options[0].text);
      expect(rightButton.props().children).to.equal(props.options[1].text);
    });
    it('throws Error when toggleButton is rendered with null/undefined/empty options', function () {
      props = getFakeProps({
        options: []
      });
      expect(function () {
        ToggleButtonWrapper = createToggleButtonWithTheme(props);
        ToggleButtonWrapper.find(ButtonGroup).get(0);
      }).to.throw('Invariant failed: Invalid length of options. You must passed maximum number of two options');
      props = getFakeProps({
        options: null
      });
      expect(function () {
        ToggleButtonWrapper = createToggleButtonWithTheme(props);
        ToggleButtonWrapper.find(ButtonGroup).get(0);
      }).to.throw('Invariant failed: Invalid length of options. You must passed maximum number of two options');
      props = getFakeProps({
        options: undefined
      });
      expect(function () {
        ToggleButtonWrapper = createToggleButtonWithTheme(props);
        ToggleButtonWrapper.find(ButtonGroup).get(0);
      }).to.throw('Invariant failed: Invalid length of options. You must passed maximum number of two options');
    });
    it('throws Error when toggleButton is rendered with Invalid keys in options', function () {
      props = getFakeProps({
        options: [{
          idx: 1,
          texts: 'Invalid Prop'
        }, {
          idx: 2,
          texts: 'Invalid '
        }]
      });
      expect(function () {
        ToggleButtonWrapper = createToggleButtonWithTheme(props);
        ToggleButtonWrapper.find(ButtonGroup).get(0);
      }).to.throw('Invalid object keys are present. Keys should contain id and text');
    });
    it('attaches a data-quid attribute to the input base element', function () {
      expect(ToggleButtonWrapper.find('button').at(0).getDOMNode().dataset.quid).to.equal("ToggleButton-".concat(props.options[0].id));
    });
  });
  describe('event handlers', function () {
    it('will call it\'s click event handler and return selected button value', function () {
      var leftButton = ToggleButtonWrapper.find(Button).at(0);
      leftButton.simulate('click');
      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.deep.equal({
        id: 1,
        text: 'Yes'
      });
    });
  });
  describe('base styles', function () {
    it('has 48px height', function () {
      var heightStyle = getDOMNodeComputedStyle(ToggleButtonWrapper.find(Button).at(0).getDOMNode(), 'height');
      expect(heightStyle).to.equal('48px');
    });
    it('has 18px label', function () {
      var label = ToggleButtonWrapper.find('.MuiButton-label').at(0).getDOMNode();
      var heightStyle = getDOMNodeComputedStyle(label, 'font-size');
      expect(heightStyle).to.equal('18px');
    });
  });
  describe('button states', function () {
    it('has a background color of AAA_COLOR_TRANSPARENT', function () {
      var backgroundStyle = getDOMNodeComputedStyle(ToggleButtonWrapper.find(Button).at(0).getDOMNode(), 'background');
      expect(backgroundStyle).to.equal(AAA_COLOR_TRANSPARENT);
    });
    it('has a border color of AAA_COLOR_MAIN_BLUE', function () {
      var borderColorStyle = getDOMNodeComputedStyle(ToggleButtonWrapper.find(Button).at(0).getDOMNode(), 'border-top-color');
      expect(borderColorStyle).to.equal(AAA_COLOR_MAIN_BLUE);
    });
    it('has text color of AAA_COLOR_MAIN_WHITE', function () {
      var textColor = getDOMNodeComputedStyle(ToggleButtonWrapper.find(Button).at(0).getDOMNode(), 'color');
      expect(textColor).to.equal(AAA_COLOR_MAIN_WHITE);
    });
    it('should set button to active when has matched value in options', function () {
      props = getFakeProps({
        value: 1
      });
      ToggleButtonWrapper = createToggleButtonWithTheme(props);
      var leftButton = ToggleButtonWrapper.find(Button).at(0);
      var rightButton = ToggleButtonWrapper.find(Button).at(1);
      expect(leftButton.props().className).to.contains('active');
      expect(rightButton.props().className).to.not.contains('active');
    });
    it('should set toggle buttons color AAA_COLOR_MAIN_DISABLED when disabled', function () {
      props = getFakeProps({
        disabled: true
      });
      ToggleButtonWrapper = createToggleButtonWithTheme(props);
      var leftButton = ToggleButtonWrapper.find(Button).at(0);
      var rightButton = ToggleButtonWrapper.find(Button).at(1);
      var leftButtonBorderColorStyle = getDOMNodeComputedStyle(leftButton.getDOMNode(), 'border-top-color');
      var rightButtonBorderColorStyle = getDOMNodeComputedStyle(rightButton.getDOMNode(), 'border-top-color');
      expect(leftButtonBorderColorStyle).to.equal(AAA_COLOR_MAIN_DISABLED);
      expect(rightButtonBorderColorStyle).to.equal(AAA_COLOR_MAIN_DISABLED);
    });
  });
});
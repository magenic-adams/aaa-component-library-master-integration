import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/* global
  afterEach
  describe,
  beforeEach,
  it,
  jest,
*/

/* eslint-disable no-param-reassign */
import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';
import sinon from 'sinon'; // Constants

import { AAA_COLOR_DISABLED, AAA_COLOR_MAIN_BLUE, AAA_COLOR_MAIN_DARK_BLUE, AAA_COLOR_TRANSPARENT } from '../../constants/colors'; // Test Utilities

import { getDOMNodeComputedStyle } from "../../../../test/DOM"; // Components

import AAAPrimaryTheme from '../AAAPrimaryTheme/AAAPrimaryTheme';
import Button from './Button';

function getFakeProps(overrides) {
  return _objectSpread({
    onClick: jest.fn(function (v) {
      return v;
    })
  }, overrides);
}

function createButtonWithTheme(children) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getFakeProps;
  var ThemeButton = mount(React.createElement(AAAPrimaryTheme, null, React.createElement(Button, props, children)));
  return ThemeButton;
}

describe("Button", function () {
  var spy;
  var props;
  var ButtonWrapper;
  var ButtonNode;
  beforeEach(function () {
    spy = sinon.spy();
    props = getFakeProps({
      onClick: spy
    });
    ButtonWrapper = createButtonWithTheme('Here lies a button', props);
    ButtonNode = ButtonWrapper.getDOMNode();
  });
  afterEach(function () {
    ButtonWrapper.unmount();
  });
  describe("base styles", function () {
    it('has 48px height', function () {
      var heightStyle = getDOMNodeComputedStyle(ButtonNode, 'height');
      expect(heightStyle).to.equal('48px');
    });
    it('has 18px label', function () {
      var label = ButtonWrapper.find('.MuiButton-label').getDOMNode();
      var heightStyle = getDOMNodeComputedStyle(label, 'font-size');
      expect(heightStyle).to.equal('18px');
    });
    it('has padding of 0 16px', function () {
      var paddingLeftStyle = getDOMNodeComputedStyle(ButtonNode, 'padding-left');
      var paddingRightStyle = getDOMNodeComputedStyle(ButtonNode, 'padding-right');
      var paddingTopStyle = getDOMNodeComputedStyle(ButtonNode, 'padding-top');
      var paddingBottomStyle = getDOMNodeComputedStyle(ButtonNode, 'padding-bottom');
      expect(paddingLeftStyle).to.equal('16px');
      expect(paddingRightStyle).to.equal('16px');
      expect(paddingTopStyle).to.equal('0px');
      expect(paddingBottomStyle).to.equal('0px');
    });
  });
  describe("rendering", function () {
    it('has rendered button text', function () {
      expect(ButtonWrapper.text()).to.equal('Here lies a button');
    });
  });
  describe("event handlers", function () {
    it('will call it\'s click event handler, propogating a React event', function () {
      ButtonWrapper.simulate('click');
      expect(spy.calledOnce).to.equal(true);
    });
  });
});
describe("Button States", function () {
  describe("primary state", function () {
    var ref = React.createRef();
    var props = getFakeProps({
      color: 'primary',
      forwardedRef: ref
    });
    var PrimaryButtonWrapper = createButtonWithTheme('Here lies a primary button', props);
    it('has text color of white', function () {
      var backgroundStyle = getDOMNodeComputedStyle(PrimaryButtonWrapper.getDOMNode(), 'color');
      expect(backgroundStyle).to.equal('rgb(255, 255, 255)');
    });
    it('has a background color of AAA_COLOR_MAIN_BLUE', function () {
      var backgroundStyle = getDOMNodeComputedStyle(PrimaryButtonWrapper.getDOMNode(), 'background');
      expect(backgroundStyle).to.equal(AAA_COLOR_MAIN_BLUE);
    });
    it('has a background color of AAA_COLOR_DISABLED when disabled', function () {
      var PrimaryDisabledButtonWrapper = createButtonWithTheme('Here lies a disabled button', getFakeProps({
        disabled: true
      }));
      var backgroundStyle = getDOMNodeComputedStyle(PrimaryDisabledButtonWrapper.getDOMNode(), 'background');
      expect(backgroundStyle).to.equal(AAA_COLOR_DISABLED);
    });
  });
  describe("secondary state", function () {
    var props = getFakeProps({
      color: 'secondary'
    });
    var ButtonWrapper = createButtonWithTheme('Here lies a secondary button', props);
    it('has a background color of AAA_COLOR_TRANSPARENT', function () {
      var backgroundStyle = getDOMNodeComputedStyle(ButtonWrapper.getDOMNode(), 'background');
      expect(backgroundStyle).to.equal(AAA_COLOR_TRANSPARENT);
    });
    it('has text color of AAA_COLOR_MAIN_BLUE', function () {
      var colorStyle = getDOMNodeComputedStyle(ButtonWrapper.getDOMNode(), 'color');
      expect(colorStyle).to.equal(AAA_COLOR_MAIN_BLUE);
    });
    it('has a border color of AAA_COLOR_MAIN_BLUE', function () {
      var borderColorStyle = getDOMNodeComputedStyle(ButtonWrapper.getDOMNode(), 'border-top-color');
      expect(borderColorStyle).to.equal(AAA_COLOR_MAIN_BLUE);
    });
    it('has a border color of AAA_COLOR_DISABLED when disabled', function () {
      var SecondaryDisabledButtonWrapper = createButtonWithTheme('Here lies a disabled button', getFakeProps({
        color: 'secondary',
        disabled: true
      }));
      var borderColorStyle = getDOMNodeComputedStyle(SecondaryDisabledButtonWrapper.getDOMNode(), 'border-top-color');
      expect(borderColorStyle).to.equal(AAA_COLOR_DISABLED);
    });
  });
});
/* global
  afterAll
  describe,
  it
*/
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme'; // Constants

import { AAA_COLOR_MAIN_BLACK } from '../../constants/colors'; // Test Utilities

import { getDOMNodeComputedStyle } from '../../../../../test/DOM'; // Components

import AAAPrimaryTheme from '../AAAPrimaryTheme/AAAPrimaryTheme';
import Body from './Body';

function createBodyTextWithTheme(children) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ThemeBody = mount(React.createElement(AAAPrimaryTheme, null, React.createElement(Body, props, children)));
  return ThemeBody;
}

describe('Body', function () {
  var props = {
    id: 'unique-identifier',
    className: 'client-body-class'
  };
  var BodyWrapper = createBodyTextWithTheme('Here lies body text', props);
  var BodyNode = BodyWrapper.getDOMNode();
  afterAll(function () {
    BodyWrapper.unmount();
  });
  describe('base styles', function () {
    it('has a color of AAA_COLOR_MAIN_BLACK', function () {
      var colorStyle = getDOMNodeComputedStyle(BodyNode, 'color');
      expect(colorStyle).to.equal(AAA_COLOR_MAIN_BLACK);
    });
    it('has a font family of Roboto applied first', function () {
      var fontFamilyStyle = getDOMNodeComputedStyle(BodyNode, 'font-family');
      var robotoIndex = fontFamilyStyle.indexOf('Roboto');
      expect(fontFamilyStyle).to.include('Roboto');
      expect(robotoIndex).to.equal(0);
    });
    it('is using a <p> tag', function () {
      expect(BodyNode.tagName).to.equal('P');
    });
    it('has font-size of 16px', function () {
      var fontSizeStyle = getDOMNodeComputedStyle(BodyNode, 'font-size');
      expect(fontSizeStyle).to.equal('16px');
    });
    it('has a line-height of 1.5', function () {
      var lineHeightStyle = getDOMNodeComputedStyle(BodyNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.5');
    });
    it('has a font-weight of 400 (regular)', function () {
      var fontWeightStyle = getDOMNodeComputedStyle(BodyNode, 'font-weight');
      expect(fontWeightStyle).to.equal('400');
    });
  });
  describe('secondary styles', function () {
    var secondaryProps = {
      id: 'unique-identifier',
      secondary: true
    };
    var BodySecondaryWrapper = createBodyTextWithTheme('Here lies body text', secondaryProps);
    var BodySecondaryNode = BodySecondaryWrapper.getDOMNode();
    it('is using a <p> tag', function () {
      expect(BodySecondaryNode.tagName).to.equal('P');
    });
    it('has font-size of 14px', function () {
      var fontSizeStyle = getDOMNodeComputedStyle(BodySecondaryNode, 'font-size');
      expect(fontSizeStyle).to.equal('14px');
    });
    it('has a line-height of 1.45', function () {
      var lineHeightStyle = getDOMNodeComputedStyle(BodySecondaryNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.45');
    });
    it('has a font-weight of 400 (regular)', function () {
      var fontWeightStyle = getDOMNodeComputedStyle(BodySecondaryNode, 'font-weight');
      expect(fontWeightStyle).to.equal('400');
    });
  });
  describe('html rendering', function () {
    it('has rendered children as text', function () {
      expect(BodyWrapper.text()).to.equal('Here lies body text');
    });
    it('has a data attribute of data-quid passed to underlying html element', function () {
      expect(BodyNode.dataset.quid).to.equal("Body-".concat(props.id));
    });
    it('has a className of Body', function () {
      expect(BodyNode.className).to.include('Body');
    });
    it('has a className prop attached to the DOM Node', function () {
      expect(BodyNode.className).to.include(props.className);
    });
  });
});
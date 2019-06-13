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
import Subheadline from './Subheadline';

function createSubheadlineWithTheme(children) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ThemeSubheadline = mount(React.createElement(AAAPrimaryTheme, null, React.createElement(Subheadline, props, children)));
  return ThemeSubheadline;
}

describe('Subheadline', function () {
  var props = {
    id: 'unique-identifier',
    className: 'client-subheadline-class'
  };
  var SubheadlineWrapper = createSubheadlineWithTheme('Here lies a subheadline', props);
  var SubheadlineNode = SubheadlineWrapper.getDOMNode();
  afterAll(function () {
    SubheadlineWrapper.unmount();
  });
  describe('base styles', function () {
    it('has a color of AAA_COLOR_MAIN_BLACK', function () {
      var colorStyle = getDOMNodeComputedStyle(SubheadlineNode, 'color');
      expect(colorStyle).to.equal(AAA_COLOR_MAIN_BLACK);
    });
    it('has a font family of Roboto applied first', function () {
      var fontFamilyStyle = getDOMNodeComputedStyle(SubheadlineNode, 'font-family');
      var robotoIndex = fontFamilyStyle.indexOf('Roboto');
      expect(fontFamilyStyle).to.include('Roboto');
      expect(robotoIndex).to.equal(0);
    });
    it('is using a <h2> tag', function () {
      expect(SubheadlineNode.tagName).to.equal('H2');
    });
    it('has font-size of 18px', function () {
      var fontSizeStyle = getDOMNodeComputedStyle(SubheadlineNode, 'font-size');
      expect(fontSizeStyle).to.equal('18px');
    });
    it('has a line-height of 1.45', function () {
      var lineHeightStyle = getDOMNodeComputedStyle(SubheadlineNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.45');
    });
    it('has a font-weight of 400 (regular)', function () {
      var fontWeightStyle = getDOMNodeComputedStyle(SubheadlineNode, 'font-weight');
      expect(fontWeightStyle).to.equal('400');
    });
  });
  describe('html rendering', function () {
    it('has rendered children as text', function () {
      expect(SubheadlineWrapper.text()).to.equal('Here lies a subheadline');
    });
    it('has a data attribute of data-quid passed to underlying html element', function () {
      expect(SubheadlineNode.dataset.quid).to.equal("Subheadline-".concat(props.id));
    });
    it('has a className of Subheadline', function () {
      expect(SubheadlineNode.className).to.include('Subheadline');
    });
    it('has a className prop attached to the DOM Node', function () {
      expect(SubheadlineNode.className).to.include(props.className);
    });
  });
});
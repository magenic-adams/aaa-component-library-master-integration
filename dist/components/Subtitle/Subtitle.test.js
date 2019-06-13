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
import Subtitle from './Subtitle';

function createSubtitleWithTheme(children) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ThemeSubtitle = mount(React.createElement(AAAPrimaryTheme, null, React.createElement(Subtitle, props, children)));
  return ThemeSubtitle;
}

describe.only('Subtitle', function () {
  var props = {
    id: 'unique-identifier',
    className: 'client-subtitle-class'
  };
  var SubtitleWrapper = createSubtitleWithTheme('Here lies a subtitle', props);
  var SubtitleNode = SubtitleWrapper.getDOMNode();
  afterAll(function () {
    SubtitleWrapper.unmount();
  });
  describe('base styles', function () {
    it('has a color of AAA_COLOR_MAIN_BLACK', function () {
      var colorStyle = getDOMNodeComputedStyle(SubtitleNode, 'color');
      expect(colorStyle).to.equal(AAA_COLOR_MAIN_BLACK);
    });
    it('has a font family of Roboto applied first', function () {
      var fontFamilyStyle = getDOMNodeComputedStyle(SubtitleNode, 'font-family');
      var robotoIndex = fontFamilyStyle.indexOf('Roboto');
      expect(fontFamilyStyle).to.include('Roboto');
      expect(robotoIndex).to.equal(0);
    });
    it('has font-size of 16px', function () {
      var fontSizeStyle = getDOMNodeComputedStyle(SubtitleNode, 'font-size');
      expect(fontSizeStyle).to.equal('16px');
    });
    it('has a line-height of 1.5', function () {
      var lineHeightStyle = getDOMNodeComputedStyle(SubtitleNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.5');
    });
    it('has a font-weight of 500 (medium)', function () {
      var fontWeightStyle = getDOMNodeComputedStyle(SubtitleNode, 'font-weight');
      expect(fontWeightStyle).to.equal('500');
    });
  });
  describe('html rendering', function () {
    it('has rendered children as text', function () {
      expect(SubtitleWrapper.text()).to.equal('Here lies a subtitle');
    });
    it('has a data attribute of data-quid passed to underlying html element', function () {
      expect(SubtitleNode.dataset.quid).to.equal("Subtitle-".concat(props.id));
    });
    it('has a className of Subtitle', function () {
      expect(SubtitleNode.className).to.include('Subtitle');
    });
    it('has a className prop attached to the DOM Node', function () {
      expect(SubtitleNode.className).to.include(props.className);
    });
  });
});
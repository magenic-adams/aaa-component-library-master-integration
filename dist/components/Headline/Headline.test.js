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
import Headline from './Headline';

function createHeadlineWithTheme(children) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ThemeHeadline = mount(React.createElement(AAAPrimaryTheme, null, React.createElement(Headline, props, children)));
  return ThemeHeadline;
}

describe('Headline', function () {
  var props = {
    id: 'unique-identifier',
    className: 'client-headline-class'
  };
  var HeadlineWrapper = createHeadlineWithTheme('Here lies a headline', props);
  var HeadlineNode = HeadlineWrapper.getDOMNode();
  afterAll(function () {
    HeadlineWrapper.unmount();
  });
  describe('base styles', function () {
    it('has a color of AAA_COLOR_MAIN_BLACK', function () {
      var colorStyle = getDOMNodeComputedStyle(HeadlineNode, 'color');
      expect(colorStyle).to.equal(AAA_COLOR_MAIN_BLACK);
    });
    it('has a font family of Roboto applied first', function () {
      var fontFamilyStyle = getDOMNodeComputedStyle(HeadlineNode, 'font-family');
      var robotoIndex = fontFamilyStyle.indexOf('Roboto');
      expect(fontFamilyStyle).to.include('Roboto');
      expect(robotoIndex).to.equal(0);
    });
    it('is using a <h1> tag', function () {
      expect(HeadlineNode.tagName).to.equal('H1');
    });
    it('has font-size of 20px', function () {
      var fontSizeStyle = getDOMNodeComputedStyle(HeadlineNode, 'font-size');
      expect(fontSizeStyle).to.equal('20px');
    });
    it('has a line-height of 1.5', function () {
      var lineHeightStyle = getDOMNodeComputedStyle(HeadlineNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.5');
    });
    it('has a font-weight of 500 (medium)', function () {
      var fontWeightStyle = getDOMNodeComputedStyle(HeadlineNode, 'font-weight');
      expect(fontWeightStyle).to.equal('500');
    });
  });
  describe('html rendering', function () {
    it('has rendered children as text', function () {
      expect(HeadlineWrapper.text()).to.equal('Here lies a headline');
    });
    it('has a data attribute of data-quid passed to underlying html element', function () {
      expect(HeadlineNode.dataset.quid).to.equal("Headline-".concat(props.id));
    });
    it('has a className of Headline', function () {
      expect(HeadlineNode.className).to.include('Headline');
    });
    it('has a className prop attached to the DOM Node', function () {
      expect(HeadlineNode.className).to.include(props.className);
    });
  });
});
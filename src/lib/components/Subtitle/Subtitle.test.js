/* global
  afterAll
  describe,
  it
*/
import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';

// Constants
import { AAA_COLOR_MAIN_BLACK } from '../../constants/colors'

// Test Utilities
import {getDOMNodeComputedStyle} from "../../../../test/DOM";

// Components
import AAAPrimaryTheme from '../AAAPrimaryTheme/AAAPrimaryTheme';
import Subtitle from './Subtitle';


function createSubtitleWithTheme(children, props = {}) {
  const ThemeSubtitle = mount(
    <AAAPrimaryTheme>
      <Subtitle {...props}>{children}</Subtitle>
    </AAAPrimaryTheme>
  );
  
  return ThemeSubtitle;
}

describe.only("Subtitle", () => {
  const props = { id: 'unique-identifier', className: 'client-subtitle-class' };
  const SubtitleWrapper = createSubtitleWithTheme('Here lies a subtitle', props);
  const SubtitleNode = SubtitleWrapper.getDOMNode();
  
  afterAll(() => {
    SubtitleWrapper.unmount();
  });

  describe("base styles", () => {
    it ('has a color of AAA_COLOR_MAIN_BLACK', () => {
      const colorStyle = getDOMNodeComputedStyle(SubtitleNode, 'color');
      expect(colorStyle).to.equal(AAA_COLOR_MAIN_BLACK);
    });

    it ('has a font family of Roboto applied first', () => {
      const fontFamilyStyle = getDOMNodeComputedStyle(SubtitleNode, 'font-family');
      const robotoIndex = fontFamilyStyle.indexOf('Roboto');
      expect(fontFamilyStyle).to.include('Roboto');
      expect(robotoIndex).to.equal(0);
    });

    it ('has font-size of 16px', () => {
      const fontSizeStyle = getDOMNodeComputedStyle(SubtitleNode, 'font-size');
      expect(fontSizeStyle).to.equal('16px');
    });

    it ('has a line-height of 1.5', () => {
      const lineHeightStyle = getDOMNodeComputedStyle(SubtitleNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.5');
    });

    it ('has a font-weight of 500 (medium)', () => {
      const fontWeightStyle = getDOMNodeComputedStyle(SubtitleNode, 'font-weight');
      expect(fontWeightStyle).to.equal('500');
    });

  });
  
  describe("html rendering", () => {
    it('has rendered children as text', () => {
      expect(SubtitleWrapper.text()).to.equal('Here lies a subtitle');
    });

    it('has a data attribute of data-quid passed to underlying html element', () => {
      expect(SubtitleNode.dataset.quid).to.equal(props.id);
    });

    it('has a className of Subtitle', () => {
      expect(SubtitleNode.className).to.include('Subtitle');
    });

    it('has a className prop attached to the DOM Node', () => {
      expect(SubtitleNode.className).to.include(props.className);
    });
  });
});

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
import Body from './Body';


function createBodyTextWithTheme(children, props = {}) {
  const ThemeBody = mount(
    <AAAPrimaryTheme>
      <Body {...props}>{children}</Body>
    </AAAPrimaryTheme>
  );
  
  return ThemeBody;
}

describe("Body", () => {
  const props = { id: 'unique-identifier', className: 'client-body-class' };
  const BodyWrapper = createBodyTextWithTheme('Here lies body text', props);
  const BodyNode = BodyWrapper.getDOMNode();
  
  afterAll(() => {
    BodyWrapper.unmount();
  });

  describe("base styles", () => {
    it ('has a color of AAA_COLOR_MAIN_BLACK', () => {
      const colorStyle = getDOMNodeComputedStyle(BodyNode, 'color');
      expect(colorStyle).to.equal(AAA_COLOR_MAIN_BLACK);
    });

    it ('has a font family of Roboto applied first', () => {
      const fontFamilyStyle = getDOMNodeComputedStyle(BodyNode, 'font-family');
      const robotoIndex = fontFamilyStyle.indexOf('Roboto');
      expect(fontFamilyStyle).to.include('Roboto');
      expect(robotoIndex).to.equal(0);
    });

    it ('is using a <p> tag', () => {
      expect(BodyNode.tagName).to.equal('P');
    });

    it ('has font-size of 16px', () => {
      const fontSizeStyle = getDOMNodeComputedStyle(BodyNode, 'font-size');
      expect(fontSizeStyle).to.equal('16px');
    });

    it ('has a line-height of 1.5', () => {
      const lineHeightStyle = getDOMNodeComputedStyle(BodyNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.5');
    });

    it ('has a font-weight of 400 (regular)', () => {
      const fontWeightStyle = getDOMNodeComputedStyle(BodyNode, 'font-weight');
      expect(fontWeightStyle).to.equal('400');
    });
  });

  describe("secondary styles", () => {
    const secondaryProps = { id: 'unique-identifier', secondary: true };
    const BodySecondaryWrapper = createBodyTextWithTheme('Here lies body text', secondaryProps);
    const BodySecondaryNode = BodySecondaryWrapper.getDOMNode();
    it ('is using a <p> tag', () => {
      expect(BodySecondaryNode.tagName).to.equal('P');
    });

    it ('has font-size of 14px', () => {
      const fontSizeStyle = getDOMNodeComputedStyle(BodySecondaryNode, 'font-size');
      expect(fontSizeStyle).to.equal('14px');
    });

    it ('has a line-height of 1.45', () => {
      const lineHeightStyle = getDOMNodeComputedStyle(BodySecondaryNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.45');
    });

    it ('has a font-weight of 400 (regular)', () => {
      const fontWeightStyle = getDOMNodeComputedStyle(BodySecondaryNode, 'font-weight');
      expect(fontWeightStyle).to.equal('400');
    });
  });
  
  describe("html rendering", () => {
    it('has rendered children as text', () => {
      expect(BodyWrapper.text()).to.equal('Here lies body text');
    });

    it('has a data attribute of data-quid passed to underlying html element', () => {
      expect(BodyNode.dataset.quid).to.equal(`Body-${props.id}`);
    });

    it('has a className of Body', () => {
      expect(BodyNode.className).to.include('Body');
    });

    it('has a className prop attached to the DOM Node', () => {
      expect(BodyNode.className).to.include(props.className);
    });
  });
});

/* global
  afterAll
  describe,
  it
*/
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

// Constants
import { ACE_COLOR_MAIN_BLACK } from '../../constants/colors';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

// Components
import ACEPrimaryTheme from '../ACEPrimaryTheme/ACEPrimaryTheme';
import Headline from './Headline';

function createHeadlineWithTheme(children, props = {}) {
  const ThemeHeadline = mount(
    <ACEPrimaryTheme>
      <Headline {...props}>{children}</Headline>
    </ACEPrimaryTheme>
  );
  
  return ThemeHeadline;
}

describe('Headline', () => {
  const props = { id: 'unique-identifier', className: 'client-headline-class' };
  const HeadlineWrapper = createHeadlineWithTheme('Here lies a headline', props);
  const HeadlineNode = HeadlineWrapper.getDOMNode();
  
  afterAll(() => {
    HeadlineWrapper.unmount();
  });

  describe('base styles', () => {
    it ('has a color of ACE_COLOR_MAIN_BLACK', () => {
      const colorStyle = getDOMNodeComputedStyle(HeadlineNode, 'color');
      expect(colorStyle).to.equal(ACE_COLOR_MAIN_BLACK);
    });

    it ('has a font family of Roboto applied first', () => {
      const fontFamilyStyle = getDOMNodeComputedStyle(HeadlineNode, 'font-family');
      const robotoIndex = fontFamilyStyle.indexOf('Roboto');
      expect(fontFamilyStyle).to.include('Roboto');
      expect(robotoIndex).to.equal(0);
    });

    it ('is using a <h1> tag', () => {
      expect(HeadlineNode.tagName).to.equal('H1');
    });

    it ('has font-size of 20px', () => {
      const fontSizeStyle = getDOMNodeComputedStyle(HeadlineNode, 'font-size');
      expect(fontSizeStyle).to.equal('20px');
    });

    it ('has a line-height of 1.5', () => {
      const lineHeightStyle = getDOMNodeComputedStyle(HeadlineNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.5');
    });

    it ('has a font-weight of 500 (medium)', () => {
      const fontWeightStyle = getDOMNodeComputedStyle(HeadlineNode, 'font-weight');
      expect(fontWeightStyle).to.equal('500');
    });
  });
  
  describe('html rendering', () => {
    it('has rendered children as text', () => {
      expect(HeadlineWrapper.text()).to.equal('Here lies a headline');
    });

    it('has a data attribute of data-quid passed to underlying html element', () => {
      expect(HeadlineNode.dataset.quid).to.equal(`Headline-${props.id}`);
    });

    it('has a className of Headline', () => {
      expect(HeadlineNode.className).to.include('Headline');
    });

    it('has a className prop attached to the DOM Node', () => {
      expect(HeadlineNode.className).to.include(props.className);
    });
  });
});

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
import Subheadline from './Subheadline';


function createSubheadlineWithTheme(children, props = {}) {
  const ThemeSubheadline = mount(
    <ACEPrimaryTheme>
      <Subheadline {...props}>{children}</Subheadline>
    </ACEPrimaryTheme>
  );
  
  return ThemeSubheadline;
}

describe('Subheadline', () => {
  const props = { id: 'unique-identifier', className: 'client-subheadline-class' };
  const SubheadlineWrapper = createSubheadlineWithTheme('Here lies a subheadline', props);
  const SubheadlineNode = SubheadlineWrapper.getDOMNode();
  
  afterAll(() => {
    SubheadlineWrapper.unmount();
  });

  describe('base styles', () => {
    it ('has a color of ACE_COLOR_MAIN_BLACK', () => {
      const colorStyle = getDOMNodeComputedStyle(SubheadlineNode, 'color');
      expect(colorStyle).to.equal(ACE_COLOR_MAIN_BLACK);
    });

    it ('has a font family of Roboto applied first', () => {
      const fontFamilyStyle = getDOMNodeComputedStyle(SubheadlineNode, 'font-family');
      const robotoIndex = fontFamilyStyle.indexOf('Roboto');
      expect(fontFamilyStyle).to.include('Roboto');
      expect(robotoIndex).to.equal(0);
    });

    it ('is using a <h2> tag', () => {
      expect(SubheadlineNode.tagName).to.equal('H2');
    });

    it ('has font-size of 18px', () => {
      const fontSizeStyle = getDOMNodeComputedStyle(SubheadlineNode, 'font-size');
      expect(fontSizeStyle).to.equal('18px');
    });

    it ('has a line-height of 1.45', () => {
      const lineHeightStyle = getDOMNodeComputedStyle(SubheadlineNode, 'line-height');
      expect(lineHeightStyle).to.equal('1.45');
    });

    it ('has a font-weight of 400 (regular)', () => {
      const fontWeightStyle = getDOMNodeComputedStyle(SubheadlineNode, 'font-weight');
      expect(fontWeightStyle).to.equal('400');
    });

  });
  
  describe('html rendering', () => {
    it('has rendered children as text', () => {
      expect(SubheadlineWrapper.text()).to.equal('Here lies a subheadline');
    });

    it('has a data attribute of data-quid passed to underlying html element', () => {
      expect(SubheadlineNode.dataset.quid).to.equal(`Subheadline-${props.id}`);
    });

    it('has a className of Subheadline', () => {
      expect(SubheadlineNode.className).to.include('Subheadline');
    });

    it('has a className prop attached to the DOM Node', () => {
      expect(SubheadlineNode.className).to.include(props.className);
    });
  });
});

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Link as TextLink, AAAPrimaryTheme } from '..';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../../test/DOM';

describe('Link', () => {
  let isTriggered = false;
  let createLinkComponent;
  let componentLink;

  const SampleClick = () => {
    isTriggered= true;
  };

  const SampleBlur = () => {
    isTriggered= true;
  };

  function createLink(children, className) {
    return mount(<AAAPrimaryTheme><TextLink className={className} onClick={SampleClick} onBlur={SampleBlur}>{children}</TextLink></AAAPrimaryTheme>);
  }

  beforeEach(() => {
    isTriggered = false;
    createLinkComponent = createLink('Create a link', 'primary');
    componentLink = createLinkComponent.find('Link');
  });

  afterEach(() => {
    createLinkComponent.unmount();
  });

   
  describe('Rendering link', () => {
    it('has rendered link text', () => {

      expect(createLinkComponent.text()).to.equal('Create a link');
    });

    it('Simulate onClick event', () => {
      expect(componentLink.length).to.equal(1);
      componentLink.simulate('click');
      expect(isTriggered).to.equals(true); 
    });

    it('Simulate onBlur event', () => {

      expect(componentLink.length).to.equal(1);
      componentLink.simulate('blur');
      expect(isTriggered).to.equals(true); 
    });
  });

  describe('Styles testing', () => {

    it('primary styles', () => {
      const cursorStyle = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'cursor');
      const fontSize = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-size');
      // const padding = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'padding');
      const fontStyle = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-style');
      const fontWeight = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-weight');
      const lineHeight  = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'line-height');
      const letterSpacing = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'letter-spacing');
      const fontStretch = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-stretch');
      expect(cursorStyle).to.equal('pointer');
      expect(fontSize).to.equal('18px');
      // expect(padding).to.equal('12px 0px 12px 0px');
      expect(fontStyle).to.equal('normal');
      expect(fontWeight).to.equal('normal');
      expect(lineHeight).to.equal('2.67');
      expect(letterSpacing).to.equal('normal');
      expect(fontStretch).to.equal('normal');
    });

    it('secondary styles', () => {
      createLinkComponent = createLink('Create a link', 'secondary');
      componentLink = createLinkComponent.find('Link');

      const cursorStyle = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'cursor');
      const fontSize = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-size');
      // const padding = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'padding');
      const fontStyle = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-style');
      const fontWeight = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-weight');
      const lineHeight  = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'line-height');
      const letterSpacing = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'letter-spacing');
      const fontStretch = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-stretch');
      expect(cursorStyle).to.equal('pointer');
      expect(fontSize).to.equal('16px');
      // expect(padding).to.equal('13.5px 0px 13.5px 0px');
      expect(fontStyle).to.equal('normal');
      expect(fontWeight).to.equal('500');
      expect(lineHeight).to.equal('2.75');
      expect(letterSpacing).to.equal('normal');
      expect(fontStretch).to.equal('normal');
    });
  });
});

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Link as TextLink, ACEPrimaryTheme } from '..';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

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
    return mount(<ACEPrimaryTheme><TextLink className={className} onClick={SampleClick} onBlur={SampleBlur}>{children}</TextLink></ACEPrimaryTheme>);
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
        const fontWeight = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-weight');
        const lineHeight  = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'line-height');
        expect(cursorStyle).to.equal('pointer');
        expect(fontSize).to.equal('16px');
        expect(fontWeight).to.equal('400');
        expect(lineHeight).to.equal('1.45');
    });

    it('secondary styles', () => {
      createLinkComponent = createLink('Create a link', 'secondary');
      componentLink = createLinkComponent.find('Link');

      const cursorStyle = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'cursor');
      const fontSize = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-size');
      const fontWeight = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-weight');
      const lineHeight  = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'line-height');
      expect(cursorStyle).to.equal('pointer');
      expect(fontSize).to.equal('16px');
      expect(fontWeight).to.equal('400');
      expect(lineHeight).to.equal('1.45');
    });
  });
});

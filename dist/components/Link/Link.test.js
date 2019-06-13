import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Link as TextLink, AAAPrimaryTheme } from '..'; // Test Utilities

import { getDOMNodeComputedStyle } from '../../../../../test/DOM';
describe('Link', function () {
  var isTriggered = false;
  var createLinkComponent;
  var componentLink;

  var SampleClick = function SampleClick() {
    isTriggered = true;
  };

  var SampleBlur = function SampleBlur() {
    isTriggered = true;
  };

  function createLink(children, className) {
    return mount(React.createElement(AAAPrimaryTheme, null, React.createElement(TextLink, {
      className: className,
      onClick: SampleClick,
      onBlur: SampleBlur
    }, children)));
  }

  beforeEach(function () {
    isTriggered = false;
    createLinkComponent = createLink('Create a link', 'primary');
    componentLink = createLinkComponent.find('Link');
  });
  afterEach(function () {
    createLinkComponent.unmount();
  });
  describe('Rendering link', function () {
    it('has rendered link text', function () {
      expect(createLinkComponent.text()).to.equal('Create a link');
    });
    it('Simulate onClick event', function () {
      expect(componentLink.length).to.equal(1);
      componentLink.simulate('click');
      expect(isTriggered).to.equals(true);
    });
    it('Simulate onBlur event', function () {
      expect(componentLink.length).to.equal(1);
      componentLink.simulate('blur');
      expect(isTriggered).to.equals(true);
    });
  });
  describe('Styles testing', function () {
    it('primary styles', function () {
      var cursorStyle = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'cursor');
      var fontSize = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-size');
      var padding = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'padding');
      var fontStyle = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-style');
      var fontWeight = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-weight');
      var lineHeight = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'line-height');
      var letterSpacing = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'letter-spacing');
      var fontStretch = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-stretch');
      expect(cursorStyle).to.equal('pointer');
      expect(fontSize).to.equal('18px');
      expect(padding).to.equal('12px 0px 12px 0px');
      expect(fontStyle).to.equal('normal');
      expect(fontWeight).to.equal('normal');
      expect(lineHeight).to.equal('2.67');
      expect(letterSpacing).to.equal('normal');
      expect(fontStretch).to.equal('normal');
    });
    it('secondary styles', function () {
      createLinkComponent = createLink('Create a link', 'secondary');
      componentLink = createLinkComponent.find('Link');
      var cursorStyle = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'cursor');
      var fontSize = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-size');
      var padding = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'padding');
      var fontStyle = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-style');
      var fontWeight = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-weight');
      var lineHeight = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'line-height');
      var letterSpacing = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'letter-spacing');
      var fontStretch = getDOMNodeComputedStyle(componentLink.getDOMNode(), 'font-stretch');
      expect(cursorStyle).to.equal('pointer');
      expect(fontSize).to.equal('16px');
      expect(padding).to.equal('13.5px 0px 13.5px 0px');
      expect(fontStyle).to.equal('normal');
      expect(fontWeight).to.equal('500');
      expect(lineHeight).to.equal('2.75');
      expect(letterSpacing).to.equal('normal');
      expect(fontStretch).to.equal('normal');
    });
  });
});
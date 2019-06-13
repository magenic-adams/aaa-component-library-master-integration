/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme'; // Test Utilities

import { getDOMNodeComputedStyle } from '../../../../../test/DOM'; // Components

import AAAPrimaryTheme from '../AAAPrimaryTheme/AAAPrimaryTheme';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

function createButtonGroupWithTheme(props) {
  return mount(React.createElement(AAAPrimaryTheme, null, React.createElement(ButtonGroup, props)));
}

describe('ButtonGroup', function () {
  var props = {
    className: 'my-button-group-class',
    children: [React.createElement(Button, {
      key: "primary"
    }, "Primary"), React.createElement(Button, {
      key: "secondary",
      color: "secondary"
    }, "Secondary")]
  };
  var ButtonGroupComponent = createButtonGroupWithTheme(props);
  var ButtonGroupNode = ButtonGroupComponent.getDOMNode();
  describe('rendering HTML element', function () {
    it('includes a class name of "ButtonGroup" on the HTML element', function () {
      expect(ButtonGroupNode.className).to.include('ButtonGroup');
    });
    it('includes an HTML class property when passed a React className prop', function () {
      expect(ButtonGroupNode.className).to.include(props.className);
    });
    it('renders two buttons when two buttons passed as "children" prop', function () {
      expect(ButtonGroupComponent.find(Button).length).to.equal(2);
    });
  });
  describe('base styles', function () {
    it('has width of 100%', function () {
      var backgroundStyle = getDOMNodeComputedStyle(ButtonGroupComponent.getDOMNode(), 'width');
      expect(backgroundStyle).to.equal('100%');
    });
    it('has 24px margin-top and margin-bottom', function () {
      var marginTopStyle = getDOMNodeComputedStyle(ButtonGroupNode, 'margin-top');
      var marginBottomStyle = getDOMNodeComputedStyle(ButtonGroupNode, 'margin-bottom');
      expect(marginTopStyle).to.equal('24px');
      expect(marginBottomStyle).to.equal('24px');
    });
  });
});
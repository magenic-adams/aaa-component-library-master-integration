/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

// Components
import AAAPrimaryTheme from '../AAAPrimaryTheme/AAAPrimaryTheme';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

function createButtonGroupWithTheme(props) {
  return mount(
      <AAAPrimaryTheme>
        <ButtonGroup {...props} />
      </AAAPrimaryTheme>
  );
}

describe('ButtonGroup', () => {
  const props = {
    className: 'my-button-group-class',
    children: [
      (<Button key="primary">Primary</Button>),
      (<Button key="secondary" color="secondary">Secondary</Button>),
    ],
  };
  const ButtonGroupComponent = createButtonGroupWithTheme(props);
  const ButtonGroupNode = ButtonGroupComponent.getDOMNode();

  describe('rendering HTML element', () => {
    it('includes a class name of "ButtonGroup" on the HTML element', () => {
      expect(ButtonGroupNode.className).to.include('ButtonGroup');
    });

    it('includes an HTML class property when passed a React className prop', () => {
      expect(ButtonGroupNode.className).to.include(props.className);
    });

    it('renders two buttons when two buttons passed as "children" prop',  () => {
      expect(ButtonGroupComponent.find(Button).length).to.equal(2);
    });

  });

  describe('base styles', () => {
    it('has width of 100%', () => {
      const backgroundStyle = getDOMNodeComputedStyle(ButtonGroupComponent.getDOMNode(), 'width');
      expect(backgroundStyle).to.equal('100%');
    });

    it ('has 24px margin-top and margin-bottom', () => {
      const marginTopStyle = getDOMNodeComputedStyle(ButtonGroupNode, 'margin-top');
      const marginBottomStyle = getDOMNodeComputedStyle(ButtonGroupNode, 'margin-bottom');
      expect(marginTopStyle).to.equal('24px');
      expect(marginBottomStyle).to.equal('24px');
    });
  });
});

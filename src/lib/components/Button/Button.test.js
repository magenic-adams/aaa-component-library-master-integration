/* global
  afterEach
  describe,
  beforeEach,
  it,
  jest,
*/
/* eslint-disable no-param-reassign */
import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';
import sinon from 'sinon';

// Constants
import {
  AAA_COLOR_DISABLED,
  AAA_COLOR_MAIN_BLUE,
  // AAA_COLOR_MAIN_DARK_BLUE,
  // AAA_COLOR_TRANSPARENT,
} from '../../constants/colors'

// Test Utilities
import {getDOMNodeComputedStyle} from "../../../../test/DOM";

// Components
import AAAPrimaryTheme from '../AAAPrimaryTheme/AAAPrimaryTheme';
import Button from './Button';

function getFakeProps(overrides) {
  return {
    onClick: jest.fn(v => v),
    ...overrides
  };
}

function createButtonWithTheme(children, props = getFakeProps) {
  const ThemeButton = mount(
    <AAAPrimaryTheme>
      <Button {...props}>{children}</Button>
    </AAAPrimaryTheme>
  );
  
  return ThemeButton;
}

describe("Button", () => {
  let spy;
  let props;
  let ButtonWrapper;
  let ButtonNode;
  
  beforeEach(() => {
    spy = sinon.spy();
    props = getFakeProps({onClick: spy});
    ButtonWrapper = createButtonWithTheme('Here lies a button', props);
    ButtonNode = ButtonWrapper.getDOMNode();
  });
  
  afterEach(() => {
    ButtonWrapper.unmount();
  });

  describe("base styles", () => {
    it ('has 48px height', () => {
      const heightStyle = getDOMNodeComputedStyle(ButtonNode, 'height');
      expect(heightStyle).to.equal('48px');
    });

    it ('has 18px label', () => {
      const label = ButtonWrapper.find('.MuiButton-label').getDOMNode();
      const heightStyle = getDOMNodeComputedStyle(label, 'font-size');
      expect(heightStyle).to.equal('18px');
    });
  });
  
  describe("rendering", () => {
    it('has rendered button text', () => {
      expect(ButtonWrapper.text()).to.equal('Here lies a button');
    });
  });
  
  describe("event handlers", () => {
    it('will call it\'s click event handler, propogating a React event', () => {
      ButtonWrapper.simulate('click');
      expect(spy.calledOnce).to.equal(true);
    });
  });
});

describe("Button States", () => {
  describe("primary state", () => {
    const ref = React.createRef();
    const props = getFakeProps({color: 'primary', forwardedRef: ref});
    const PrimaryButtonWrapper = createButtonWithTheme('Here lies a primary button', props);

    it('has text color of white', () => {
      const backgroundStyle = getDOMNodeComputedStyle(PrimaryButtonWrapper.getDOMNode(), 'color');
      expect(backgroundStyle).to.equal('rgb(255, 255, 255)');
    });

    // it('has a background color of AAA_COLOR_MAIN_BLUE', () => {
    //   const backgroundStyle = getDOMNodeComputedStyle(PrimaryButtonWrapper.getDOMNode(), 'background-color');
    //   expect(backgroundStyle).to.equal(AAA_COLOR_MAIN_BLUE);
    // });

    // it('has a background color of AAA_COLOR_DISABLED when disabled', () => {
    //   const PrimaryDisabledButtonWrapper = createButtonWithTheme('Here lies a disabled button', getFakeProps({disabled: true}));
    //   const backgroundStyle = getDOMNodeComputedStyle(PrimaryDisabledButtonWrapper.getDOMNode(), 'background-color');
    //   expect(backgroundStyle).to.equal(AAA_COLOR_DISABLED);
    // });
    
  });

  describe("secondary state", () => {
    const props = getFakeProps({color: 'secondary'});
    const ButtonWrapper = createButtonWithTheme('Here lies a secondary button', props);

    // it('has a background color of AAA_COLOR_TRANSPARENT', () => {
    //   const backgroundStyle = getDOMNodeComputedStyle(ButtonWrapper.getDOMNode(), 'background-color');
    //   expect(backgroundStyle).to.equal(AAA_COLOR_TRANSPARENT);
    // });

    // it('has text color of AAA_COLOR_MAIN_BLUE', () => {
    //   const colorStyle = getDOMNodeComputedStyle(ButtonWrapper.getDOMNode(), 'color');
    //   expect(colorStyle).to.equal(AAA_COLOR_MAIN_BLUE);
    // });

    it('has a border color of AAA_COLOR_MAIN_BLUE', () => {
      const borderColorStyle = getDOMNodeComputedStyle(ButtonWrapper.getDOMNode(), 'border-top-color');
      expect(borderColorStyle).to.equal(AAA_COLOR_MAIN_BLUE);
    });

    it('has a border color of AAA_COLOR_DISABLED when disabled', () => {
      const SecondaryDisabledButtonWrapper = createButtonWithTheme('Here lies a disabled button', getFakeProps({color: 'secondary', disabled: true}));
      const borderColorStyle = getDOMNodeComputedStyle(SecondaryDisabledButtonWrapper.getDOMNode(), 'border-top-color');
      expect(borderColorStyle).to.equal(AAA_COLOR_DISABLED);
    });
  });
});
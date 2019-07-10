/* global
  afterEach
  describe,
  beforeEach,
  it,
  jest,
*/
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

// Constants
import {
  ACE_COLOR_MAIN_DISABLED,
  ACE_COLOR_MAIN_BLUE,
  ACE_COLOR_MAIN_WHITE,
  ACE_COLOR_TRANSPARENT,
} from '../../constants/colors';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

// Components
import ACEPrimaryTheme from '../ACEPrimaryTheme/ACEPrimaryTheme';
import Button from './Button';

function getFakeProps(overrides) {
  return {
    onClick: jest.fn(v => v),
    ...overrides,
  };
}

function createButtonWithTheme(children, props = getFakeProps) {
  const ThemeButton = mount(
    <ACEPrimaryTheme>
      <Button {...props}>{children}</Button>
    </ACEPrimaryTheme>
  );
  
  return ThemeButton;
}

describe('Button', () => {
  let spy;
  let props;
  let ButtonWrapper;
  let ButtonNode;
  
  beforeEach(() => {
    spy = sinon.spy();
    props = getFakeProps({
      className: 'user-defined-button-class',
      onClick: spy,
      forwardedRef: React.createRef(),
    });
    ButtonWrapper = createButtonWithTheme('Here lies a button', props);
    ButtonNode = ButtonWrapper.getDOMNode();
  });
  
  afterEach(() => {
    ButtonWrapper.unmount();
  });

  describe('base styles', () => {
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
  
  describe('rendering HTML element', () => {
    it('includes a class name of "Button" on the HTML element', () => {
      expect(ButtonNode.className).to.include('Button');
    });

    it('includes an HTML class property when passed a React className prop', () => {
      expect(ButtonNode.className).to.include(props.className);
    });

    it('has rendered button text', () => {
      expect(ButtonWrapper.text()).to.equal('Here lies a button');
    });

    it ('forwards a reference to the underlying button with forwardedRef prop', () => {
      const ReactButton = ButtonWrapper.find(Button);
      expect(ReactButton.props().forwardedRef.current).to.equal(ButtonWrapper.getDOMNode());
    });
  });
  
  describe('event handlers', () => {
    it('will call it\'s click event handler, propogating a React event', () => {
      ButtonWrapper.simulate('click');
      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.have.property('target');
    });
  });
});

describe('Button States', () => {
  describe('primary state', () => {
    const props = getFakeProps({ color: 'primary' });
    const PrimaryButtonWrapper = createButtonWithTheme('Here lies a primary button', props);

    it('has text color of ACE_COLOR_MAIN_WHITE', () => {
      const backgroundStyle = getDOMNodeComputedStyle(PrimaryButtonWrapper.getDOMNode(), 'color');
      expect(backgroundStyle).to.equal(ACE_COLOR_MAIN_WHITE);
    });

    it('has a background color of ACE_COLOR_MAIN_BLUE', () => {
      const backgroundStyle = getDOMNodeComputedStyle(PrimaryButtonWrapper.getDOMNode(), 'background');
      expect(backgroundStyle).to.equal(ACE_COLOR_MAIN_BLUE);
    });

    it('has a background color of ACE_COLOR_MAIN_DISABLED when disabled', () => {
      const PrimaryDisabledButtonWrapper = createButtonWithTheme('Here lies a disabled button', getFakeProps({ disabled: true }));
      const backgroundStyle = getDOMNodeComputedStyle(PrimaryDisabledButtonWrapper.getDOMNode(), 'background');
      expect(backgroundStyle).to.equal(ACE_COLOR_MAIN_DISABLED);
    });
    
  });

  describe('secondary state', () => {
    const props = getFakeProps({ color: 'secondary' });
    const ButtonWrapper = createButtonWithTheme('Here lies a secondary button', props);

    it('has a background color of ACE_COLOR_TRANSPARENT', () => {
      const backgroundStyle = getDOMNodeComputedStyle(ButtonWrapper.getDOMNode(), 'background');
      expect(backgroundStyle).to.equal(ACE_COLOR_TRANSPARENT);
    });

    it('has a border color of ACE_COLOR_MAIN_BLUE', () => {
      const borderColorStyle = getDOMNodeComputedStyle(ButtonWrapper.getDOMNode(), 'border-top-color');
      expect(borderColorStyle).to.equal(ACE_COLOR_MAIN_BLUE);
    });

    it('has a border color of ACE_COLOR_MAIN_DISABLED when disabled', () => {
      const SecondaryDisabledButtonWrapper = createButtonWithTheme('Here lies a disabled button', getFakeProps({ color: 'secondary', disabled: true }));
      const borderColorStyle = getDOMNodeComputedStyle(SecondaryDisabledButtonWrapper.getDOMNode(), 'border-top-color');
      expect(borderColorStyle).to.equal(ACE_COLOR_MAIN_DISABLED);
    });
  });
});

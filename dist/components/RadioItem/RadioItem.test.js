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
import { Form } from 'react-final-form';
import ACEThemeProvider from '../ACEPrimaryTheme/ACEPrimaryTheme';
import RadioItem from './RadioItem';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

// Constants
import {
  ACE_COLOR_MAIN_BLACK,
  ACE_COLOR_MAIN_WHITE,
  ACE_COLOR_MAIN_DARKER_BLUE,
  ACE_COLOR_SECONDARY_HOVER,
  ACE_COLOR_MAIN_DISABLED,
} from '../../constants/colors';

function getFakeProps(overrides) {
  return {
    name: 'radioGroup',
    item: { id: 1, value: 1, display: 'Hey' },
    onSelect: jest.fn(v => v),
    ...overrides,
  };
}

function createRadioItemWithTheme(props) {
  return mount(
    <ACEThemeProvider theme={props.theme}>
      <Form
        onSubmit={() => jest.fn(v => v)}
        render={() => <RadioItem {...props} />}
      />
    </ACEThemeProvider>
  );
}

describe('RadioItem', () => {
  let spy;
  let props;
  let radioItemWrapper;
  let radioItemNode;

  beforeEach(() => {
    spy = sinon.spy();
    props = getFakeProps({ onSelect: spy });
    radioItemWrapper = createRadioItemWithTheme(props);
    radioItemNode = radioItemWrapper.getDOMNode();
  });

  afterEach(() => {
    radioItemWrapper.unmount();
  });

  describe('html rendering', () => {
    it('rendered text should match passed item display', () => {
      props = getFakeProps({
        item: { id: 1, value: 1, display: 'I am Groot' },
      });
      radioItemWrapper = createRadioItemWithTheme(props);
      expect(radioItemWrapper.text()).to.equal(props.item.display);
    });
    it('attaches a value attribute to the radio element', () => {
      expect(
        radioItemWrapper
          .find('input[type="radio"]')
          .at(0)
          .getDOMNode().value
      ).to.equal(props.item.value.toString());
    });
    it('attaches a data-quid attribute to the form control label element', () => {
      expect(
        radioItemWrapper
          .find('label')
          .at(0)
          .getDOMNode().dataset.quid
      ).to.equal(`RadioItem-${props.item.id}`);
    });

    it('should throw error if required item has invalid value', () => {
      props = getFakeProps({
        item: null,
      });
      expect(() => {
        createRadioItemWithTheme(props);
      }).to.throw(
        'Invariant failed: You have not passed an item for rendering.'
      );

      props = getFakeProps({
        item: undefined,
      });
      expect(() => {
        createRadioItemWithTheme(props);
      }).to.throw(
        'Invariant failed: You have not passed an item for rendering.'
      );

      props = getFakeProps({
        item: {},
      });
      expect(() => {
        createRadioItemWithTheme(props);
      }).to.throw('Invariant failed: id and value are empty');

      props = getFakeProps({
        item: { id: null, value: undefined },
      });
      expect(() => {
        createRadioItemWithTheme(props);
      }).to.throw('Invariant failed: id and value are empty');
    });
  });

  describe('event handlers', () => {
    it('radioItemWrapper call it\'s change event handler', () => {
      radioItemWrapper
        .find('input[type="radio"]')
        .at(0)
        .simulate('change');
      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.deep.equal({
        id: 1,
        value: 1,
        display: 'Hey',
      });
    });

    it('does NOT call it\'s change event handler when it is disabled', () => {
      props = getFakeProps({ disabled: true });
      radioItemWrapper = createRadioItemWithTheme(props);

      radioItemWrapper
        .find('input[type="radio"]')
        .at(0)
        .simulate('change');

      expect(spy.calledOnce).to.equal(false);
    });
  });

  describe('base styles', () => {
    it('has width of 534px', () => {
      const widthStyle = getDOMNodeComputedStyle(radioItemNode, 'width');
      expect(widthStyle).to.equal('534px');
    });

    it('has height of 48px', () => {
      const widthStyle = getDOMNodeComputedStyle(radioItemNode, 'height');
      expect(widthStyle).to.equal('48px');
    });

    it('has border radius of 4px', () => {
      const borderRadius = getDOMNodeComputedStyle(
        radioItemNode,
        'border-radius'
      );
      expect(borderRadius).to.equal('4px');
    });

    it('should have 1px inset ACE_COLOR_MAIN_BLACK box-shadow', () => {
      radioItemWrapper = createRadioItemWithTheme(props);
      radioItemNode = radioItemWrapper.getDOMNode();
      const boxShadowStyle = getDOMNodeComputedStyle(
        radioItemNode,
        'box-shadow'
      );
      expect(boxShadowStyle).to.equal(
        `inset 0 0 0 1px ${ACE_COLOR_MAIN_BLACK}`
      );
    });

    it('has background of ACE_COLOR_MAIN_WHITE', () => {
      const background = getDOMNodeComputedStyle(radioItemNode, 'background');
      expect(background).to.equal(ACE_COLOR_MAIN_WHITE);
    });

    it('has 16px label', () => {
      const label = radioItemWrapper
        .find('.MuiFormControlLabel-label')
        .at(0)
        .getDOMNode();
      const fontStyle = getDOMNodeComputedStyle(label, 'font-size');
      expect(fontStyle).to.equal('16px');
    });

    describe('radio item states', () => {
      describe('selected', () => {
        it('should have 2px inset ACE_COLOR_MAIN_DARKER_BLUE box-shadow', () => {
          props = getFakeProps({ checked: true });
          radioItemWrapper = createRadioItemWithTheme(props);
          radioItemNode = radioItemWrapper.getDOMNode();
          const boxShadowStyle = getDOMNodeComputedStyle(
            radioItemNode,
            'box-shadow'
          );
          expect(boxShadowStyle).to.equal(
            `inset 0 0 0 2px ${ACE_COLOR_MAIN_DARKER_BLUE}`
          );
        });

        it('has background color of ACE_COLOR_SECONDARY_HOVER', () => {
          props = getFakeProps({ checked: true });
          radioItemWrapper = createRadioItemWithTheme(props);
          radioItemNode = radioItemWrapper.getDOMNode();

          const background = getDOMNodeComputedStyle(
            radioItemNode,
            'background'
          );
          expect(background).to.equal(ACE_COLOR_SECONDARY_HOVER);
        });

        it('has font size of 500px', () => {
          props = getFakeProps({ checked: true });
          radioItemWrapper = createRadioItemWithTheme(props);
          radioItemNode = radioItemWrapper.getDOMNode();

          const fontWeight = getDOMNodeComputedStyle(
            radioItemNode,
            'font-weight'
          );
          expect(fontWeight).to.equal('500');
        });
      });

      describe('disabled', () => {
        it('has box shadow of inset 0 0 0 1px ACE_COLOR_MAIN_DISABLED', () => {
          props = getFakeProps({ disabled: true });
          radioItemWrapper = createRadioItemWithTheme(props);
          radioItemNode = radioItemWrapper.getDOMNode();

          const boxShadow = getDOMNodeComputedStyle(
            radioItemNode,
            'box-shadow'
          );
          expect(boxShadow).to.equal(
            `inset 0 0 0 1px ${ACE_COLOR_MAIN_DISABLED}`
          );
        });

        it('has no background color', () => {
          props = getFakeProps({ disabled: true });
          radioItemWrapper = createRadioItemWithTheme(props);
          radioItemNode = radioItemWrapper.getDOMNode();

          const background = getDOMNodeComputedStyle(
            radioItemNode,
            'background'
          );
          expect(background).to.equal('none');
        });
      });
    });
  });
});

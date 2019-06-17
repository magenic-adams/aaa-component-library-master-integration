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
import AAAThemeProvider from '../AAAPrimaryTheme/AAAPrimaryTheme';
import RadioItem from './RadioItem';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

// Constants
import {
  AAA_COLOR_MAIN_BLACK,
  AAA_COLOR_MAIN_WHITE,
  AAA_COLOR_MAIN_DARKER_BLUE,
  AAA_COLOR_SECONDARY_HOVER,
  AAA_COLOR_MAIN_DISABLED,
} from '../../constants/colors';

function getFakeProps(overrides) {
  return {
    item: { id: 1, value: 1, text: 'Hey' },
    onSelect: jest.fn(v => v),
    ...overrides,
  };
}

function createRadioItemWithTheme(props) {
  return mount(
    <AAAThemeProvider theme={props.theme}>
      <RadioItem {...props} />
    </AAAThemeProvider>
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
    it('rendered text should match passed item text', () => {
      props = getFakeProps({
        item: { id: 1, value: 1, text: 'I am Groot' },
      });
      radioItemWrapper = createRadioItemWithTheme(props);
      expect(radioItemWrapper.text()).to.equal(props.item.text);
    });
    it('attaches a data-quid attribute to the radio element', () => {
      expect(
        radioItemWrapper
          .find('label')
          .at(0)
          .getDOMNode().dataset.quid
      ).to.equal(`RadioItem-${props.item.id}`);
    });
    it('should not render radio item if invalid item is passed', () => {
      props = getFakeProps({
        item: null,
      });
      radioItemWrapper = createRadioItemWithTheme(props);
      expect(radioItemWrapper.find('input[type="radio"]').get(0)).to.equal(
        undefined
      );

      props = getFakeProps({
        item: undefined,
      });
      radioItemWrapper = createRadioItemWithTheme(props);
      expect(radioItemWrapper.find('input[type="radio"]').get(0)).to.equal(
        undefined
      );
    });

    it('should throw error if required keys has no value', () => {
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
    it('radioItemWrapper call it\'s onchange event handler', () => {
      radioItemWrapper
        .find('input[type="radio"]')
        .at(0)
        .simulate('change');
      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.deep.equal({
        id: 1,
        value: 1,
        text: 'Hey',
      });
    });
  });

  describe('base styles', () => {
    it('has width of 534px', () => {
      const widthStyle = getDOMNodeComputedStyle(radioItemNode, 'width');
      expect(widthStyle).to.equal('534px');
    });

    it('has width of 534px', () => {
      const widthStyle = getDOMNodeComputedStyle(radioItemNode, 'width');
      expect(widthStyle).to.equal('534px');
    });

    it('has border of 1px', () => {
      const borderWidth = getDOMNodeComputedStyle(
        radioItemNode,
        'border-width'
      );
      expect(borderWidth).to.equal('1px');
    });

    it('has border color of 1px AAA_COLOR_MAIN_BLACK', () => {
      const borderColor = getDOMNodeComputedStyle(
        radioItemNode,
        'border-color'
      );
      expect(borderColor).to.equal(AAA_COLOR_MAIN_BLACK);
    });

    it('has border radius of 4px', () => {
      const borderRadius = getDOMNodeComputedStyle(
        radioItemNode,
        'border-radius'
      );
      expect(borderRadius).to.equal('4px');
    });

    it('has background of AAA_COLOR_MAIN_WHITE', () => {
      const background = getDOMNodeComputedStyle(radioItemNode, 'background');
      expect(background).to.equal(AAA_COLOR_MAIN_WHITE);
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
        it('has border color of AAA_COLOR_MAIN_DARKER_BLUE', () => {
          props = getFakeProps({ checked: true });
          radioItemWrapper = createRadioItemWithTheme(props);
          radioItemNode = radioItemWrapper.getDOMNode();

          const borderColor = getDOMNodeComputedStyle(
            radioItemNode,
            'border-color'
          );
          expect(borderColor).to.equal(AAA_COLOR_MAIN_DARKER_BLUE);
        });

        it('has border width of 2px', () => {
          props = getFakeProps({ checked: true });
          radioItemWrapper = createRadioItemWithTheme(props);
          radioItemNode = radioItemWrapper.getDOMNode();

          const borderWidth = getDOMNodeComputedStyle(
            radioItemNode,
            'border-width'
          );
          expect(borderWidth).to.equal('2px');
        });

        it('has background color of AAA_COLOR_SECONDARY_HOVER', () => {
          props = getFakeProps({ checked: true });
          radioItemWrapper = createRadioItemWithTheme(props);
          radioItemNode = radioItemWrapper.getDOMNode();

          const background = getDOMNodeComputedStyle(
            radioItemNode,
            'background'
          );
          expect(background).to.equal(AAA_COLOR_SECONDARY_HOVER);
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
        it('has border color of AAA_COLOR_MAIN_DISABLED', () => {
          props = getFakeProps({ disabled: true });
          radioItemWrapper = createRadioItemWithTheme(props);
          radioItemNode = radioItemWrapper.getDOMNode();

          const borderColor = getDOMNodeComputedStyle(
            radioItemNode,
            'border-color'
          );
          expect(borderColor).to.equal(AAA_COLOR_MAIN_DISABLED);
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

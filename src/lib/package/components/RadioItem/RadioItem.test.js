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
import { AAA_COLOR_TRANSPARENT } from '../../constants/colors';

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
          .find('input[type="radio"]')
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

    describe('event handlers', () => {
      it('radioItemWrapper call it\'s click event handler', () => {
        radioItemWrapper.find('input[type="radio"]').simulate('change');

        expect(spy.calledOnce).to.equal(true);
        expect(spy.getCall(0).args[0].target.value).to.equal('1');
      });
    });
  });
});

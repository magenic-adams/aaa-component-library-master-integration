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
import SelectListItem from './SelectListItem';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

// Constants
import { AAA_COLOR_TRANSPARENT } from '../../constants/colors';

function getFakeProps(overrides) {
  return {
    item: { id: 1, value: 1, display: 'Yes' },
    onSelect: jest.fn(v => v),
    ...overrides,
  };
}

function createSelectListItemWithTheme(props) {
  return mount(
    <AAAThemeProvider theme={props.theme}>
      <SelectListItem {...props} />
    </AAAThemeProvider>,
  );
}

describe('SelectListItem', () => {
  let spy;
  let props;
  let listItemTextWrapper;
  let listItemNode;

  beforeEach(() => {
    spy = sinon.spy();
    props = getFakeProps({ onSelect: spy });
    listItemTextWrapper = createSelectListItemWithTheme(props);
    listItemNode = listItemTextWrapper.getDOMNode();
  });

  afterEach(() => {
    listItemTextWrapper.unmount();
  });

  describe('html rendering', () => {
    it('rendered text should match passed options text', () => {
      props = getFakeProps({
        item: { id: 1, value: 1, display: 'I am Iron Man' },
      });

      listItemTextWrapper = createSelectListItemWithTheme(props);

      expect(listItemTextWrapper.text()).to.equal(props.item.display);
    });

    it('attaches a data-quid attribute to listItem element', () => {
      expect(
        listItemTextWrapper
          .find('li')
          .at(0)
          .getDOMNode().dataset.quid,
      ).to.equal(`SelectListItem-${props.item.id}`);
    });

    it('attaches a value attribute to the listItem element', () => {
      expect(
        listItemTextWrapper
          .find('li')
          .at(0)
          .getDOMNode().value,
      ).to.equal(props.item.value);
    });

    it('should throw error if required item has invalid value', () => {
      props = getFakeProps({
        item: null,
      });
      expect(() => {
        createSelectListItemWithTheme(props);
      }).to.throw(
        'Invariant failed: You have not passed an item for rendering.',
      );

      props = getFakeProps({
        item: undefined,
      });
      expect(() => {
        createSelectListItemWithTheme(props);
      }).to.throw(
        'Invariant failed: You have not passed an item for rendering.',
      );

      props = getFakeProps({
        item: '',
      });
      expect(() => {
        createSelectListItemWithTheme(props);
      }).to.throw(
        'Invariant failed: You have not passed an item for rendering.',
      );

      props = getFakeProps({
        item: {},
      });
      expect(() => {
        createSelectListItemWithTheme(props);
      }).to.throw('Invariant failed: id and display should have value.');
    });
  });

  describe('event handlers', () => {
    it('listItemTextWrapper call it\'s click event handler', () => {
      listItemTextWrapper.simulate('click');

      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.deep.equal({
        id: 1,
        value: 1,
        display: 'Yes',
      });
    });
  });

  describe('base styles', () => {
    it('has 48px height', () => {
      const heightStyle = getDOMNodeComputedStyle(listItemNode, 'height');
      expect(heightStyle).to.equal('48px');
    });

    it('has a transparent background', () => {
      const borderColorStyle = getDOMNodeComputedStyle(
        listItemTextWrapper.getDOMNode(),
        'background',
      );
      expect(borderColorStyle).to.equal(AAA_COLOR_TRANSPARENT);
    });
  });
});

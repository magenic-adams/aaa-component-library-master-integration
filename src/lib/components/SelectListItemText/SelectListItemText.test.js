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
import SelectListItemText from './SelectListItemText';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../test/DOM';

// Constants
import { AAA_COLOR_TRANSPARENT } from '../../constants/colors';

function getFakeProps(overrides) {
  return {
    item: { id: 1, value: 1, display: 'Yes' },
    onSelect: jest.fn(v => v),
    ...overrides,
  };
}

function createSelectListItemTextWithTheme(props) {
  return mount(
    <AAAThemeProvider theme={props.theme}>
      <SelectListItemText {...props} />
    </AAAThemeProvider>
  );
}

describe('SelectListItemText', () => {
  let spy;
  let props;
  let listItemTextWrapper;
  let listItemNode;

  beforeEach(() => {
    spy = sinon.spy();
    props = getFakeProps({ onSelect: spy });
    listItemTextWrapper = createSelectListItemTextWithTheme(props);
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

      listItemTextWrapper = createSelectListItemTextWithTheme(props);

      const listItem = listItemTextWrapper.find('span').at(0);

      expect(listItem.props().children).to.equal(props.item.display);
    });

    it('attaches a data-quid attribute to the input base element', () => {
      expect(
        listItemTextWrapper
          .find('li')
          .at(0)
          .getDOMNode().dataset.quid
      ).to.equal(`SelectListItem-${props.item.id}`);
    });

    it('should not render list item if invalid item is passed', () => {
      let listItem;
      props = getFakeProps({
        item: null,
      });

      listItemTextWrapper = createSelectListItemTextWithTheme(props);
      listItem = listItemTextWrapper.find('li').get(0);

      expect(listItem).to.equal(undefined);

      props = getFakeProps({
        item: undefined,
      });
      listItemTextWrapper = createSelectListItemTextWithTheme(props);
      listItem = listItemTextWrapper.find('li').get(0);

      expect(listItem).to.equal(undefined);

      props = getFakeProps({
        item: {},
      });
      listItemTextWrapper = createSelectListItemTextWithTheme(props);
      listItem = listItemTextWrapper.find('li').get(0);

      expect(listItem).to.equal(undefined);

      props = getFakeProps({
        item: '',
      });
      listItemTextWrapper = createSelectListItemTextWithTheme(props);
      listItem = listItemTextWrapper.find('li').get(0);

      expect(listItem).to.equal(undefined);
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
        'background'
      );
      expect(borderColorStyle).to.equal(AAA_COLOR_TRANSPARENT);
    });
  });

  describe('list item states', () => {
    it('has selected className if selected', () => {
      props = getFakeProps({
        item: { id: 1, value: 1, display: 'I am Iron Man', selected: true },
      });

      listItemTextWrapper = createSelectListItemTextWithTheme(props);
      const listItem = listItemTextWrapper.find('li').get(0);

      expect(listItem.props.className).to.contains('selected');
    });
  });
});

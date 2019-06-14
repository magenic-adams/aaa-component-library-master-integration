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
import { Radio } from '@material-ui/core';
import AAAThemeProvider from '../AAAPrimaryTheme/AAAPrimaryTheme';
import SelectList from './SelectList';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

// Constants
import { AAA_COLOR_MAIN_BLUE } from '../../constants/colors';

function getFakeProps(overrides) {
  return {
    items: [
      { id: 1, value: 1, text: 'Iron Man' },
      { id: 2, value: 2, text: 'Captain A' },
    ],
    onSelect: jest.fn(v => v),
    ...overrides,
  };
}

function createSelectListWithTheme(props) {
  return mount(
    <AAAThemeProvider theme={props.theme}>
      <SelectList {...props} />
    </AAAThemeProvider>
  );
}

describe('SelectList', () => {
  let spy;
  let props;
  let selectListWrapper;
  let listNode;

  beforeEach(() => {
    spy = sinon.spy();
    props = getFakeProps({ onSelect: spy });
    selectListWrapper = createSelectListWithTheme(props);
    listNode = selectListWrapper.getDOMNode();
  });

  afterEach(() => {
    selectListWrapper.unmount();
  });

  describe('base styles', () => {
    it('has width of 341px', () => {
      const widthStyle = getDOMNodeComputedStyle(listNode, 'width');
      expect(widthStyle).to.equal('341px');
    });

    it('has border of 2px', () => {
      const borderWidth = getDOMNodeComputedStyle(listNode, 'border-width');
      expect(borderWidth).to.equal('2px');
    });

    it('has border color of AAA_COLOR_MAIN_BLUE', () => {
      const borderStyle = getDOMNodeComputedStyle(listNode, 'border-color');
      expect(borderStyle).to.equal(AAA_COLOR_MAIN_BLUE);
    });

    it('has border radius of 4px', () => {
      const borderRadiusStyle = getDOMNodeComputedStyle(
        listNode,
        'border-radius'
      );
      expect(borderRadiusStyle).to.equal('4px');
    });

    it('has box shadow of 0 2px 8px 0 rgb(113, 113, 116)', () => {
      const boxShadowStyle = getDOMNodeComputedStyle(listNode, 'box-shadow');
      expect(boxShadowStyle).to.equal('0 2px 8px 0 rgb(113, 113, 116)');
    });
  });

  describe('html rendering', () => {
    describe('renders default listItem if item\'s display is not defined', () => {
      it('should match listItem text to item text', () => {
        selectListWrapper = createSelectListWithTheme(props);

        const listItems = selectListWrapper.find('li');

        listItems.forEach((listItem, i) => {
          expect(listItem.text()).to.equal(props.items[i].text);
        });
      });

      it('should match number or rendered items to passed items props', () => {
        selectListWrapper = createSelectListWithTheme(props);

        const listItems = selectListWrapper.find('li');

        expect(listItems.length).to.equal(props.items.length);
      });
    });

    describe('renders custom list item if display is defined', () => {
      beforeEach(() => {
        props = getFakeProps({
          items: [
            {
              id: 1,
              value: 1,
              display: <input type="checkbox" name="chk1" />,
              key: '1',
            },
            {
              id: 2,
              value: 2,
              display: <Radio id="checkbox" name="chk2" />,
              key: '2',
            },
          ],
        });
        selectListWrapper = createSelectListWithTheme(props);
      });

      it('should match number or rendered items to passed items props', () => {
        const items = selectListWrapper.find('input');

        expect(items.length).to.equal(props.items.length);
      });

      it('rendered element matched with item display', () => {
        const items = selectListWrapper.find('input[type="checkbox"]');

        items.forEach((item, i) => {
          expect(item.getDOMNode().type).to.equal(
            props.items[i].display.props.type
          );
          expect(item.getDOMNode().name).to.equal(
            props.items[i].display.props.name
          );
        });
      });
    });

    it('should not render items if items is empty', () => {
      let listItems;
      props = getFakeProps({ items: [] });
      selectListWrapper = createSelectListWithTheme(props);

      listItems = selectListWrapper.find('li');
      expect(listItems.length).to.equal(0);

      props = getFakeProps({ items: undefined });
      selectListWrapper = createSelectListWithTheme(props);

      listItems = selectListWrapper.find('li');
      expect(listItems.length).to.equal(0);
    });

    it('should throw error if invalid items is passed', () => {
      props = getFakeProps({
        items: [{}],
      });
      expect(() => {
        createSelectListWithTheme(props);
      }).to.throw('Invariant failed: id or value is empty');
    });
  });

  describe('event handlers', () => {
    it('selectListWrapper call it\'s click event handler', () => {
      selectListWrapper
        .find('li')
        .at(0)
        .simulate('click');

      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.deep.equal({
        id: 1,
        value: 1,
        text: 'Iron Man',
      });
    });
  });
});

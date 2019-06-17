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
import RadioGroup from './RadioGroup';

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

function createRadioGroupWithTheme(props) {
  return mount(
    <AAAThemeProvider theme={props.theme}>
      <RadioGroup {...props} />
    </AAAThemeProvider>
  );
}

describe('RadioGroup', () => {
  let spy;
  let props;
  let radioGroupWrapper;

  beforeEach(() => {
    spy = sinon.spy();
    props = getFakeProps({ onSelect: spy });
    radioGroupWrapper = createRadioGroupWithTheme(props);
  });

  afterEach(() => {
    radioGroupWrapper.unmount();
  });

  describe('html rendering', () => {
    it('should match number of rendered radio items to passed items props', () => {
      radioGroupWrapper = createRadioGroupWithTheme(props);

      const listItems = radioGroupWrapper.find('input[type="radio"]');

      expect(listItems.length).to.equal(props.items.length);
    });

    it('should match listItem text to item\'s text', () => {
      radioGroupWrapper = createRadioGroupWithTheme(props);

      const listItems = radioGroupWrapper.find('label');

      listItems.forEach((listItem, i) => {
        expect(listItem.text()).to.equal(props.items[i].text);
      });
    });

    it('has a default rendering of a RadioGroup without a label', () => {
      expect(
        radioGroupWrapper.find(`label[htmlFor="${props.id}"]`).exists()
      ).to.equal(false);

      expect(radioGroupWrapper.find('.RadioGroup').exists()).to.equal(true);
    });

    it('should render instruction label', () => {
      props = getFakeProps({
        instructionLabel: 'Choose One:',
        id: 'instruction',
      });
      radioGroupWrapper = createRadioGroupWithTheme(props);

      expect(
        radioGroupWrapper.find(`label[htmlFor="${props.id}"]`).exists()
      ).to.equal(true);
    });

    it('should not render radio items if no items is passed', () => {
      props = getFakeProps({ items: undefined });
      radioGroupWrapper = createRadioGroupWithTheme(props);

      let listItems = radioGroupWrapper.find('input[type="radio"]');

      expect(listItems.length).to.equal(0);

      props = getFakeProps({ items: null });
      radioGroupWrapper = createRadioGroupWithTheme(props);

      listItems = radioGroupWrapper.find('input[type="radio"]');

      expect(listItems.length).to.equal(0);
    });
  });

  describe('event handlers', () => {
    it('call it\'s click event handler when list item is clicked', () => {
      radioGroupWrapper
        .find('label')
        .at(1)
        .simulate('click');

      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.deep.equal({
        id: 2,
        value: 2,
        text: 'Captain A',
      });
    });
  });

  describe('selection', () => {
    describe('single-select', () => {
      it('sets radio item className to checked if selectedId matches with item id', () => {
        const selectedId = 1;
        props = getFakeProps({ selectedId });
        radioGroupWrapper = createRadioGroupWithTheme(props);
        const listItems = radioGroupWrapper.find('label');

        expect(
          listItems
            .find(`label[data-quid="RadioItem-${selectedId}"]`)
            .childAt(0)
            .getDOMNode().className
        ).to.contains('checked');
      });

      it('does NOT set radio item className to checked if selectedId don\'t match with item id', () => {
        let selectedId = [1, 2];
        props = getFakeProps({ selectedId });
        radioGroupWrapper = createRadioGroupWithTheme(props);
        let listItems = radioGroupWrapper.find('label');

        listItems.forEach(item => {
          expect(
            item
              .find('span')
              .at(0)
              .getDOMNode().className
          ).to.not.contains('checked');
        });

        selectedId = null;
        props = getFakeProps({ selectedId });
        radioGroupWrapper = createRadioGroupWithTheme(props);
        listItems = radioGroupWrapper.find('label');

        listItems.forEach(item => {
          expect(
            item
              .find('span')
              .at(0)
              .getDOMNode().className
          ).to.not.contains('checked');
        });
      });
    });

    describe('multi-select', () => {
      it('can set multiple radio item className to checked if selectedIds match with item id', () => {
        const selectedIds = [1, 2];
        props = getFakeProps({ type: 'multi-select', selectedIds });
        radioGroupWrapper = createRadioGroupWithTheme(props);
        const listItems = radioGroupWrapper.find('label');

        listItems.forEach(item => {
          expect(
            item
              .find('span')
              .at(0)
              .getDOMNode().className
          ).to.contains('checked');
        });
      });

      it('does NOT set radio item className to checked if selectedIds don\'t match with item id', () => {
        let selectedIds = 1;
        props = getFakeProps({ selectedIds });
        props = getFakeProps({ type: 'multi-select', selectedIds });
        let listItems = radioGroupWrapper.find('label');

        listItems.forEach(item => {
          expect(
            item
              .find('span')
              .at(0)
              .getDOMNode().className
          ).to.not.contains('checked');
        });

        selectedIds = null;
        props = getFakeProps({ selectedIds });
        props = getFakeProps({ type: 'multi-select', selectedIds });
        listItems = radioGroupWrapper.find('label');

        listItems.forEach(item => {
          expect(
            item
              .find('span')
              .at(0)
              .getDOMNode().className
          ).to.not.contains('checked');
        });
      });
    });
  });
});

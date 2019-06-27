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
import AAAThemeProvider from '../AAAPrimaryTheme/AAAPrimaryTheme';
import RadioGroup from './RadioGroup';

function getFakeProps(overrides) {
  return {
    id: 'avengers',
    items: [
      { id: 1, value: 1, display: 'Iron Man' },
      { id: 2, value: 2, display: 'Captain A' },
    ],
    onSelect: jest.fn(v => v),
    ...overrides,
  };
}

function createRadioGroupWithTheme(props) {
  return mount(
    <AAAThemeProvider theme={props.theme}>
      <Form
        onSubmit={() => jest.fn(v => v)}
        render={() => <RadioGroup {...props} />}
      />
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

    it('should match rendered listItem to item\'s display', () => {
      radioGroupWrapper = createRadioGroupWithTheme(props);

      const listItems = radioGroupWrapper.find('label');

      listItems.forEach((listItem, i) => {
        expect(listItem.text()).to.equal(props.items[i].display);
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
      expect(() => {
        createRadioGroupWithTheme(props);
      }).to.throw('Invariant failed: items is empty');

      props = getFakeProps({ items: null });
      expect(() => {
        createRadioGroupWithTheme(props);
      }).to.throw('Invariant failed: items is empty');
    });
  });

  describe('event handlers', () => {
    it('call it\'s change event handler when list item is clicked', () => {
      radioGroupWrapper
        .find('input[type="radio"]')
        .at(1)
        .simulate('change');

      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.deep.equal({
        id: 2,
        value: 2,
        display: 'Captain A',
      });
    });
  });

  describe('selection', () => {
    describe('single-select', () => {
      it('sets radio item className to checked if selectedId matches to item id', () => {
        const selectedId = 1;
        props = getFakeProps({ selectedId });
        radioGroupWrapper = createRadioGroupWithTheme(props);

        expect(
          radioGroupWrapper
            .find(`label[data-quid="RadioItem-${selectedId}"]`)
            .find('span')
            .at(0)
            .getDOMNode().className
        ).to.contains('checked');
      });

      it('does NOT set radio item className to checked if selectedId don\'t match to item id', () => {
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
      it('can set multiple radio item className to checked if selectedIds match to item id', () => {
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

      it('does NOT set radio item className to checked if selectedIds don\'t match to item id', () => {
        let selectedIds = 1;
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

  describe('disabled radioGroup', () => {
    it('can disable selected radio item', () => {
      const disabledIds = [1];
      props = getFakeProps({ disabledIds });
      radioGroupWrapper = createRadioGroupWithTheme(props);

      expect(
        radioGroupWrapper
          .find('label[data-quid="RadioItem-1"]')
          .find('span')
          .at(0)
          .getDOMNode().className
      ).to.contains('disabled');

      const radioElement = radioGroupWrapper.find('input[type="radio"]').at(0);

      radioElement.simulate('change');

      expect(radioElement.getDOMNode().disabled).to.equal(true);

      expect(spy.calledOnce).to.equal(false);
    });

    it('can disable all radio elements if disabledAll is true', () => {
      props = getFakeProps({ disableAll: true });
      radioGroupWrapper = createRadioGroupWithTheme(props);
      const listItems = radioGroupWrapper.find('input[type="radio"]');

      listItems.forEach(item => {
        expect(item.getDOMNode().disabled).to.equal(true);
      });
    });
  });
});

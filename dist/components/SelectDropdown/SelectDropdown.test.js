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
import ACEThemeProvider from '../ACEPrimaryTheme/ACEPrimaryTheme';

import SelectDropdown from './SelectDropdown';
import SelectListItem from '../SelectListItem/SelectListItem';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

// Constants
import {
  ACE_COLOR_MAIN_WHITE,
  ACE_COLOR_MAIN_DARKER_BLUE,
  ACE_COLOR_MAIN_GRAY,
} from '../../constants/colors';

function getFakeProps(overrides) {
  return {
    id: 'cars',
    value: '',
    items: [
      { id: 0, value: '1', display: 'Honda' },
      { id: 1, value: '2', display: 'Toyota' },
    ],
    onChange: jest.fn(v => v),
    ...overrides,
  };
}

function createSelectDropdownWithTheme(props) {
  return mount(
    <ACEThemeProvider theme={props.theme}>
      <SelectDropdown {...props} />
    </ACEThemeProvider>,
  );
}

describe('SelectListItem', () => {
  let spy;
  let props;
  let selectDropdownTextWrapper;
  let selectElementContainer;
  let selectDropdownNode;
  let listContainer;

  beforeEach(() => {
    spy = sinon.spy();
    props = getFakeProps({ onChange: spy });
    selectDropdownTextWrapper = createSelectDropdownWithTheme(props);
    selectElementContainer = selectDropdownTextWrapper
      .find(`[data-quid="SelectDropdown-${props.id}"]`)
      .at(0)
      .getDOMNode();
    selectDropdownNode = selectDropdownTextWrapper.find(`#select-${props.id}`);
  });

  afterEach(() => {
    selectDropdownTextWrapper.unmount();
  });

  describe('base styles', () => {
    it('has 48px height', () => {
      const heightStyle = getDOMNodeComputedStyle(
        selectElementContainer,
        'height',
      );
      expect(heightStyle).to.equal('48px');
    });
    it('has default width of 100%', () => {
      const widthStyle = getDOMNodeComputedStyle(
        selectElementContainer,
        'width',
      );
      expect(widthStyle).to.equal('100%');
    });

    it('has background of AAA_COLOR_MAIN_WHITE', () => {
      const background = getDOMNodeComputedStyle(
        selectElementContainer,
        'background',
      );
      expect(background).to.equal(ACE_COLOR_MAIN_WHITE);
    });

    it('has box shadow of inset 0 0 0 1px AAA_COLOR_MAIN_GRAY', () => {
      const boxShadow = getDOMNodeComputedStyle(
        selectElementContainer,
        'box-shadow',
      );
      expect(boxShadow).to.equal(`inset 0 0 0 1px ${ACE_COLOR_MAIN_GRAY}`);
    });

    it('has border radius of 4px', () => {
      const borderRadius = getDOMNodeComputedStyle(
        selectElementContainer,
        'border-radius',
      );
      expect(borderRadius).to.equal('4px');
    });

    describe('styles of list container', () => {
      beforeEach(() => {
        selectDropdownNode.simulate('click');

        listContainer = selectDropdownTextWrapper
          .find('div.MuiMenu-paper')
          .at(0)
          .getDOMNode();
      });

      it('has border of AAA_COLOR_MAIN_DARKER_BLUE', () => {
        const border = getDOMNodeComputedStyle(listContainer, 'border');
        expect(border).to.equal(`2px solid ${ACE_COLOR_MAIN_DARKER_BLUE}`);
      });

      it('has width of 100%', () => {
        const width = getDOMNodeComputedStyle(listContainer, 'width');
        expect(width).to.equal('100%');
      });
    });
  });

  describe('html rendering', () => {
    it('has a class property passed from className prop', () => {
      expect(selectDropdownNode.get(0).props.className).to.contains(
        'SelectDropdown',
      );
    });

    it('attaches a data-quid attribute', () => {
      expect(selectDropdownNode.exists()).to.equal(true);
    });

    it('renders without label', () => {
      expect(
        selectDropdownTextWrapper.find(`label[htmlFor="${props.id}"]`).exists(),
      ).to.equal(false);
      expect(selectDropdownNode.exists()).to.equal(true);
    });

    it('renders without helper text', () => {
      expect(selectDropdownNode.exists()).to.equal(true);
    });

    it('renders the prop "helperText" as helper text within the component', () => {
      props = getFakeProps({ helperText: 'This field is required' });
      selectDropdownTextWrapper = createSelectDropdownWithTheme(props);
      const formControlNode = selectDropdownTextWrapper.find(
        '.MuiFormControl-root',
      );

      expect(formControlNode.exists()).to.equal(true);
      expect(
        formControlNode
          .find(`[data-quid="FormFieldMetaHelperText-${props.id}"]`)
          .at(0)
          .exists(),
      ).to.equal(true);
      expect(
        formControlNode
          .find(`[data-quid="FormFieldMetaHelperText-${props.id}"]`)
          .at(0)
          .text(),
      ).to.equal('This field is required');
    });

    it('throws error without items passed to component', () => {
      props = getFakeProps({ items: null });

      expect(() => {
        createSelectDropdownWithTheme(props);
      }).to.throw('Invariant failed: items is empty');

      props = getFakeProps({ items: undefined });

      expect(() => {
        createSelectDropdownWithTheme(props);
      }).to.throw('Invariant failed: items is empty');

      props = getFakeProps({ items: '' });

      expect(() => {
        createSelectDropdownWithTheme(props);
      }).to.throw('Invariant failed: items is empty');
    });

    it('renders display text within select div when value is set', () => {
      props = getFakeProps({ value: '1' });
      selectDropdownTextWrapper = createSelectDropdownWithTheme(props);
      selectDropdownNode = selectDropdownTextWrapper.find(
        `#select-${props.id}`,
      );

      expect(selectDropdownNode.text()).to.equal('Honda');
    });

    it('renders placeHolder text within select div when placeHolder is set', () => {
      props = getFakeProps({ placeHolder: 'Select one', value: '' });
      selectDropdownTextWrapper = createSelectDropdownWithTheme(props);
      selectDropdownNode = selectDropdownTextWrapper.find(
        `#select-${props.id}`,
      );

      expect(selectDropdownNode.text()).to.equal('Select one');

      // Click dropdown element
      selectDropdownNode.simulate('click');
      const placeHolderItem = selectDropdownTextWrapper
        .find(SelectListItem)
        .at(0)
        .getDOMNode();

      expect(placeHolderItem.className).to.contains('displayNone');
    });
  });

  describe('events', () => {
    it('displays items when selectDropdown is clicked', () => {
      let listItems = selectDropdownTextWrapper.find('ul').children();

      expect(listItems.length).to.equal(0);

      // Click dropdown element
      selectDropdownNode.simulate('click');

      listItems = selectDropdownTextWrapper.find('ul').children();

      expect(listItems.length).to.equal(props.items.length);

      listItems.forEach((listItem, i) => {
        expect(listItem.text()).to.equal(props.items[i].display);
        expect(listItem.props()['data-value']).to.equal(props.items[i].value);
      });
    });

    it('triggers onChange event when item is clicked', () => {
      // Click dropdown element
      selectDropdownNode.simulate('click');

      expect(spy.calledOnce).to.equal(false);

      const listItems = selectDropdownTextWrapper.find('ul').children();

      expect(listItems.length).to.equal(props.items.length);

      // Click first listItem
      listItems.at(0).simulate('click');

      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.have.property('target');
      expect(spy.getCall(0).args[0].target.value).to.be.equal(
        props.items[0].value,
      );
      expect(spy.getCall(0).args[0].target.name).to.be.equal(props.id);
    });
  });

  describe('error', () => {
    describe('error element', () => {
      const errorProps = getFakeProps({
        error: 'Show this error message to the user',
      });
      selectDropdownTextWrapper = createSelectDropdownWithTheme(errorProps);
      const formControlNode = selectDropdownTextWrapper.find(
        '.MuiFormControl-root',
      );

      it('should show an error text message if it has an error', () => {
        expect(formControlNode.exists()).to.equal(true);

        const errorElement = formControlNode.find(
          `p[data-quid="FormFieldMetaErrorText-${errorProps.id}"]`,
        );

        expect(errorElement.exists()).to.equal(true);
        expect(errorElement.text()).to.equal(
          'Show this error message to the user',
        );
      });

      it('should not show an error text message if it has no error', () => {
        const noErrorProps = getFakeProps({ error: undefined });
        selectDropdownTextWrapper = createSelectDropdownWithTheme(noErrorProps);
        const errorElement = selectDropdownTextWrapper.find(
          `[data-quid="FormFieldMetaErrorText-${props.id}"]`,
        );
        expect(errorElement.exists()).to.equal(false);
      });

      it('should not show an error icon if it has no error', () => {
        const noErrorProps = getFakeProps({ error: undefined });
        selectDropdownTextWrapper = createSelectDropdownWithTheme(noErrorProps);

        expect(
          selectDropdownTextWrapper
            .find(`#${noErrorProps.id}-component-error-text`)
            .exists(),
        ).to.equal(false);
      });
    });
  });

  describe('disabled', () => {
    beforeEach(() => {
      props = getFakeProps({
        disabled: true,
      });
      selectDropdownTextWrapper = createSelectDropdownWithTheme(props);
      selectElementContainer = selectDropdownTextWrapper
        .find(`[data-quid="SelectDropdown-${props.id}"]`)
        .at(0)
        .getDOMNode();
      selectDropdownNode = selectDropdownTextWrapper.find(
        `#select-${props.id}`,
      );
    });

    it('should have disabled class', () => {
      expect(selectElementContainer.className).to.contains('disabled');
    });

    it('should not display list items', () => {
      // Click dropdown element
      selectDropdownNode.simulate('click');

      const listItems = selectDropdownTextWrapper.find('ul').children();

      expect(listItems.exists()).to.equal(false);
    });
  });
});

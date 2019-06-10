import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

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
import SelectListItemText from './SelectListItemText'; // Test Utilities

import { getDOMNodeComputedStyle } from '../../../../test/DOM'; // Constants

import { AAA_COLOR_TRANSPARENT } from '../../constants/colors';

function getFakeProps(overrides) {
  return _objectSpread({
    item: {
      id: 1,
      value: 1,
      display: 'Yes'
    },
    onSelect: jest.fn(function (v) {
      return v;
    })
  }, overrides);
}

function createSelectListItemTextWithTheme(props) {
  return mount(React.createElement(AAAThemeProvider, {
    theme: props.theme
  }, React.createElement(SelectListItemText, props)));
}

describe('SelectListItemText', function () {
  var spy;
  var props;
  var listItemTextWrapper;
  var listItemNode;
  beforeEach(function () {
    spy = sinon.spy();
    props = getFakeProps({
      onSelect: spy
    });
    listItemTextWrapper = createSelectListItemTextWithTheme(props);
    listItemNode = listItemTextWrapper.getDOMNode();
  });
  afterEach(function () {
    listItemTextWrapper.unmount();
  });
  describe('html rendering', function () {
    it('rendered text should match passed options text', function () {
      props = getFakeProps({
        item: {
          id: 1,
          value: 1,
          display: 'I am Iron Man'
        }
      });
      listItemTextWrapper = createSelectListItemTextWithTheme(props);
      var listItem = listItemTextWrapper.find('.MuiListItemText-primary').at(0);
      expect(listItem.props().children).to.equal(props.item.display);
    });
    it('attaches a data-quid attribute to the input base element', function () {
      expect(listItemTextWrapper.find('li').at(0).getDOMNode().dataset.quid).to.equal("SelectListItem-".concat(props.item.id));
    });
    it('should not render list item if invalid item is passed', function () {
      props = getFakeProps({
        item: null
      });
      expect(function () {
        createSelectListItemTextWithTheme(props);
      }).to.throw('Invariant failed: id and display should have value.');
      props = getFakeProps({
        item: undefined
      });
      expect(function () {
        createSelectListItemTextWithTheme(props);
      }).to.throw('Invariant failed: id and display should have value.');
      props = getFakeProps({
        item: {}
      });
      expect(function () {
        createSelectListItemTextWithTheme(props);
      }).to.throw('Invariant failed: id and display should have value.');
      props = getFakeProps({
        item: ''
      });
      expect(function () {
        createSelectListItemTextWithTheme(props);
      }).to.throw('Invariant failed: id and display should have value.');
    });
  });
  describe('event handlers', function () {
    it('listItemTextWrapper call it\'s click event handler', function () {
      listItemTextWrapper.simulate('click');
      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.deep.equal({
        id: 1,
        value: 1,
        display: 'Yes'
      });
    });
  });
  describe('base styles', function () {
    it('has 48px height', function () {
      var heightStyle = getDOMNodeComputedStyle(listItemNode, 'height');
      expect(heightStyle).to.equal('48px');
    });
    it('has a transparent background', function () {
      var borderColorStyle = getDOMNodeComputedStyle(listItemTextWrapper.getDOMNode(), 'background');
      expect(borderColorStyle).to.equal(AAA_COLOR_TRANSPARENT);
    });
  });
  describe('list item states', function () {
    it('has selected className if selected', function () {
      props = getFakeProps({
        item: {
          id: 1,
          value: 1,
          display: 'I am Iron Man',
          selected: true
        }
      });
      listItemTextWrapper = createSelectListItemTextWithTheme(props);
      var listItem = listItemTextWrapper.find('li').get(0);
      expect(listItem.props.className).to.contains('selected');
    });
  });
});
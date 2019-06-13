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
import SelectList from './SelectList'; // Test Utilities

import { getDOMNodeComputedStyle } from '../../../../../test/DOM'; // Constants

import { AAA_COLOR_MAIN_BLUE } from '../../constants/colors';

function getFakeProps(overrides) {
  return _objectSpread({
    items: [{
      id: 1,
      value: 1,
      display: 'Iron Man'
    }, {
      id: 2,
      value: 2,
      display: 'Captain A'
    }],
    onSelect: jest.fn(function (v) {
      return v;
    })
  }, overrides);
}

function createSelectListWithTheme(props) {
  return mount(React.createElement(AAAThemeProvider, {
    theme: props.theme
  }, React.createElement(SelectList, props)));
}

describe('SelectList', function () {
  var spy;
  var props;
  var selectListWrapper;
  var listNode;
  beforeEach(function () {
    spy = sinon.spy();
    props = getFakeProps({
      type: 'primary',
      onSelect: spy
    });
    selectListWrapper = createSelectListWithTheme(props);
    listNode = selectListWrapper.getDOMNode();
  });
  afterEach(function () {
    selectListWrapper.unmount();
  });
  describe('html rendering', function () {
    it('has one or more elements', function () {
      selectListWrapper = createSelectListWithTheme(props);
      var listItems = selectListWrapper.find('li');
      expect(listItems.length).to.be.above(0);
    });
    it('should match primary prop to item display', function () {
      selectListWrapper = createSelectListWithTheme(props);
      var listItems = selectListWrapper.find('li');
      listItems.forEach(function (listItem, i) {
        expect(listItem.text()).to.equal(props.items[i].display);
      });
    });
    it('should not render items is no primary type is passed', function () {
      props = getFakeProps({
        type: null
      });
      selectListWrapper = createSelectListWithTheme(props);
      var listItems = selectListWrapper.find('li');
      expect(listItems.length).to.equal(0);
    });
    it('should throw error if invalid items is passed', function () {
      props = getFakeProps({
        items: null
      });
      expect(function () {
        createSelectListWithTheme(props);
      }).to.throw('Invariant failed: items array is empty');
      props = getFakeProps({
        items: undefined
      });
      expect(function () {
        createSelectListWithTheme(props);
      }).to.throw('Invariant failed: items array is empty');
      props = getFakeProps({
        items: []
      });
      expect(function () {
        createSelectListWithTheme(props);
      }).to.throw('Invariant failed: items array is empty');
      props = getFakeProps({
        items: [{}]
      });
      expect(function () {
        createSelectListWithTheme(props);
      }).to.throw('Invariant failed: Invalid object keys are present. Keys should contain id, value and display');
      props = getFakeProps({
        items: [{
          idx: 1,
          value: 1,
          text: '1'
        }]
      });
      expect(function () {
        createSelectListWithTheme(props);
      }).to.throw('Invariant failed: Invalid object keys are present. Keys should contain id, value and display');
    });
    describe('event handlers', function () {
      it('selectListWrapper call it\'s click event handler', function () {
        selectListWrapper.find('li').at(0).simulate('click');
        expect(spy.calledOnce).to.equal(true);
        expect(spy.getCall(0).args[0]).to.deep.equal({
          id: 1,
          value: 1,
          display: 'Iron Man'
        });
      });
    });
    describe('base styles', function () {
      it('has width of 341px', function () {
        var widthStyle = getDOMNodeComputedStyle(listNode, 'width');
        expect(widthStyle).to.equal('341px');
      });
      it('has border of 2px', function () {
        var borderWidth = getDOMNodeComputedStyle(listNode, 'border-width');
        expect(borderWidth).to.equal('2px');
      });
      it('has border color of AAA_COLOR_MAIN_BLUE', function () {
        var borderStyle = getDOMNodeComputedStyle(listNode, 'border-color');
        expect(borderStyle).to.equal(AAA_COLOR_MAIN_BLUE);
      });
      it('has border radius of 4px', function () {
        var borderRadiusStyle = getDOMNodeComputedStyle(listNode, 'border-radius');
        expect(borderRadiusStyle).to.equal('4px');
      });
      it('has box shadow of 0 2px 8px 0 rgb(113, 113, 116)', function () {
        var boxShadowStyle = getDOMNodeComputedStyle(listNode, 'box-shadow');
        expect(boxShadowStyle).to.equal('0 2px 8px 0 rgb(113, 113, 116)');
      });
    });
  });
});
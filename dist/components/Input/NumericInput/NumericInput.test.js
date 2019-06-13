import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/*
  global jest
 */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme'; // Components

import NumericInput from './NumericInput'; // import BaseInput from '../BaseInput/BaseInput';

import AAAPrimaryTheme from '../../AAAPrimaryTheme/AAAPrimaryTheme';

function createInput(props) {
  return mount(React.createElement(AAAPrimaryTheme, null, React.createElement(NumericInput, props)));
}

function getFakeProps(override) {
  return _objectSpread({
    id: 'enabledId',
    name: 'enabledName',
    labelName: 'Enabled Label',
    type: 'text',
    value: '12301991',
    onChange: jest.fn(function (v) {
      return v;
    }),
    onClear: jest.fn(function (v) {
      return v;
    }),
    mask: [/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, /\d/, /\d/]
  }, override);
}

describe('NumericInput', function () {
  var props = getFakeProps();
  var NumericInputWrapper = createInput(props);
  it('formats the given numeric value based on mask (dd / dd / dddd', function () {
    expect(NumericInputWrapper.find('input').getDOMNode().value).to.equal('12 / 30 / 1991');
  });
  it('formats the given numeric value based on mask (dd - dd - dddd', function () {
    props = getFakeProps({
      mask: [/\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/]
    });
    NumericInputWrapper = createInput(props);
    expect(NumericInputWrapper.find('input').getDOMNode().value).to.equal('12 - 30 - 1991');
  });
  it('will not accept non numeric values', function () {
    props = getFakeProps({
      value: 't*/1'
    });
    NumericInputWrapper = createInput(props);
    expect(NumericInputWrapper.find('input').getDOMNode().value).to.equal('1');
  });
});
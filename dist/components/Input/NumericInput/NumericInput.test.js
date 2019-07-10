/*
  global jest
 */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

// Components
import NumericInput from './NumericInput';
// import BaseInput from '../BaseInput/BaseInput';
import ACEPrimaryTheme from '../../ACEPrimaryTheme/ACEPrimaryTheme';

function createInput(props) {
  return mount(<ACEPrimaryTheme><NumericInput {...props} /></ACEPrimaryTheme>);
}

function getFakeProps(override) {
  return {
    id: 'enabledId',
    name: 'enabledName',
    labelName: 'Enabled Label',
    type: 'text',
    value: '12301991',
    onChange: jest.fn(v => v),
    onClear: jest.fn(v => v),
    mask: [/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, /\d/, /\d/],
    ...override,
  };
}

describe('NumericInput', () => {
  let props = getFakeProps();
  let NumericInputWrapper = createInput(props);

  it('formats the given numeric value based on mask (dd / dd / dddd', () => {
    expect(NumericInputWrapper.find('input').getDOMNode().value).to.equal('12 / 30 / 1991');
  });

  it('formats the given numeric value based on mask (dd - dd - dddd', () => {
    props = getFakeProps({ mask: [/\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/] });
    NumericInputWrapper = createInput(props);

    expect(NumericInputWrapper.find('input').getDOMNode().value).to.equal('12 - 30 - 1991');
  });

  it('will not accept non numeric values', () => {
    props = getFakeProps({ value: 't*/1' });
    NumericInputWrapper = createInput(props);

    expect(NumericInputWrapper.find('input').getDOMNode().value).to.equal('1');
  });
});

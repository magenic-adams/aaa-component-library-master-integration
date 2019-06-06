/*
  global jest
 */
import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';

// Components
import NumericInput from './NumericInput';
// import BaseInput from '../BaseInput/BaseInput';
import AAAPrimaryTheme from '../../AAAPrimaryTheme/AAAPrimaryTheme';

function createInput(props) {
  return mount(<AAAPrimaryTheme><NumericInput {...props} /></AAAPrimaryTheme>);
}

function getProps(override) {
  return {
    id: "enabledId",
    name: "enabledName",
    labelName: "Enabled Label",
    type: "text",
    value: "12301991",
    onChange: jest.fn(v => v),
    onClear: jest.fn(v => v),
    mask: [/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, /\d/, /\d/],
    ...override
  };
}

describe("NumericInput", () => {
  it('formats the given numeric value based on mask (dd / dd / dddd', () => {
    const props = getProps();
    const wrapper = createInput(props);

    expect(wrapper.find("input").getDOMNode().value).to.equal("12 / 30 / 1991");
  });

  it('formats the given numeric value based on mask (dd - dd - dddd', () => {
    const props = getProps({ mask: [/\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/] });
    const wrapper = createInput(props);

    expect(wrapper.find("input").getDOMNode().value).to.equal("12 - 30 - 1991");
  });

  it('will not accept non numeric values', () => {
    const props = getProps({ value: "t*/1" });
    const wrapper = createInput(props);

    expect(wrapper.find("input").getDOMNode().value).to.equal("1");
  });
});

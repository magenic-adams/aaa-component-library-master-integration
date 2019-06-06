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
    value:"",
    onChange: jest.fn(v => v),
    onClear: jest.fn(v => v),
    mask: [/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, /\d/, /\d/],
    ...override
  };
}

describe("NumericInput", () => {
  it('has rendered a numeric input', () => {
    const wrapper = createInput(getProps());

    expect(wrapper.find("label").text()).to.equal("Enabled Label");
    expect(wrapper.find("Input").get(0).props.value).to.equal("");
  });
});

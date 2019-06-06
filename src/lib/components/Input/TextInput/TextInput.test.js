import React from 'react';
import TextInput from './TextInput';
import { expect } from "chai";
import { mount } from 'enzyme';
import { AAAPrimaryTheme } from '../..';

function createInput(props) {
  return mount(<AAAPrimaryTheme><TextInput {...props} /></AAAPrimaryTheme>)
}

function getProps(override) {
  return {
    id: "enabledId",
    name: "enabledName",
    labelName: "Enabled Label",
    type: "text",
    value: "Enabled",
    onChange: jest.fn(v => v),
    onClear: jest.fn(v => v),
    ...override
  };
}

describe("Input", function () {
  it('has rendered an input with value', function () {
    const wrapper = createInput(getProps());

    expect(wrapper.find("label").text()).to.equal("Enabled Label");
    expect(wrapper.find("input").get(0).props.value).to.equal("Enabled");
  });
});

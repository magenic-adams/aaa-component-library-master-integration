import React from 'react';
import Input from './Input';
import { expect } from "chai";
import { mount } from 'enzyme';
import { AAAPrimaryTheme } from '..';

function createInput(props) {
  return mount(<AAAPrimaryTheme><Input {...props} /></AAAPrimaryTheme>)
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

  describe("Clear Icon", function () {
    it('displays a clear icon if it has value and onClear event', function () {
      const wrapper = createInput(getProps());

      expect(wrapper.find("ClearIcon").exists()).to.equal(true);
    });
    it('will not display a clear icon if it has no value', function () {
      const wrapper = createInput(getProps({ value: "" }));

      expect(wrapper.find("ClearIcon").exists()).to.equal(false);
    });
    it('will not display a clear icon if it has no onClear event', function () {
      const wrapper = createInput(getProps({ onClear: null }));

      expect(wrapper.find("ClearIcon").exists()).to.equal(false);
    });
  });
});

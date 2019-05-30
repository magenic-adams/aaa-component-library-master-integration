import React from 'react';
import Input from './Input';
import { expect } from "chai";
import { mount, shallow } from 'enzyme';

function createInput(props) {
  return mount(<Input {...props} />)
}

describe("Input", function () {
  it('has rendered input with default value', function () {
    const wrapper = createInput({ labelName: "Name", inputValue: "Juan Dela Cruz" });

    expect(wrapper.find("label").text()).to.equal("Name");
    expect(wrapper.find("input").get(0).props.defaultValue).to.equal("Juan Dela Cruz");
  });

  it('has rendered input with value', function () {
    const wrapper = createInput({ labelName: "Name", value: "Juan Dela Cruz" });
    
    expect(wrapper.find("label").text()).to.equal("Name");
    expect(wrapper.find("input").get(0).props.value).to.equal("Juan Dela Cruz");
  });
});

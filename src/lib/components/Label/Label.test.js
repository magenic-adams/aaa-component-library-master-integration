import React from 'react';
import Label from './Label';
import { expect } from "chai";
import { mount } from 'enzyme';
import { AAAPrimaryTheme } from '..';

function createLabel(children) {
  return mount(<AAAPrimaryTheme><Label>{children}</Label></AAAPrimaryTheme>)
}

describe("Label", function () {
  it('has rendered label without crashing', function () {
    const wrapper = createLabel("TEST");

    expect(wrapper.find("label").text()).to.equal("TEST");
  });
});

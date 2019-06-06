import React from 'react';
import Label from './Label';
import { expect } from "chai";
import { mount } from 'enzyme';
import { AAAPrimaryTheme } from '..';

function createLabel(props, children) {
  return mount(<AAAPrimaryTheme><Label {...props}>{children}</Label></AAAPrimaryTheme>)
}

function getFakeProps(props) {
  return { id: "labelId", className: "labelClass", ...props }
}
describe("Label", function () {
  it('has rendered label without crashing', function () {
    const wrapper = createLabel(getFakeProps(), "TEST");

    expect(wrapper.find("label").text()).to.equal("TEST");
  });

  it('attaches a data-quid attribute to the label element', () => {
    const props = getFakeProps();
    const wrapper = createLabel(props, "TEST");
    
    expect(wrapper.find('label').getDOMNode().dataset.quid).to.equal(`Label-${props.id}`);
  });
});

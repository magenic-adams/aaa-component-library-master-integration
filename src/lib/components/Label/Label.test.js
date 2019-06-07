import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';
import { AAAPrimaryTheme } from '..';
import Label from './Label';

function createLabel(props, children) {
  return mount(<AAAPrimaryTheme><Label {...props}>{children}</Label></AAAPrimaryTheme>)
}

function getFakeProps(props) {
  return { id: "labelId", className: "labelClass", ...props }
}

describe("Label", () => {
  const props = getFakeProps();
  const LabelWrapper = createLabel(getFakeProps(), "TEST");

  it('has rendered label without crashing', () => {
    expect(LabelWrapper.find("label").text()).to.equal("TEST");
  });

  it('attaches a data-quid attribute to the label element', () => {
    expect(LabelWrapper.find('label').getDOMNode().dataset.quid).to.equal(`Label-${props.id}`);
  });
});

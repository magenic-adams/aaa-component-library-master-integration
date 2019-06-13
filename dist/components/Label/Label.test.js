import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';
import { AAAPrimaryTheme } from '..';
import Label from './Label';

function createLabel(props, children) {
  return mount(React.createElement(AAAPrimaryTheme, null, React.createElement(Label, props, children)));
}

function getFakeProps(props) {
  return _objectSpread({
    id: "labelId",
    className: "labelClass"
  }, props);
}

describe("Label", function () {
  var props = getFakeProps();
  var LabelWrapper = createLabel(getFakeProps(), "TEST");
  it('has rendered label without crashing', function () {
    expect(LabelWrapper.find("label").text()).to.equal("TEST");
  });
  it('attaches a data-quid attribute to the label element', function () {
    expect(LabelWrapper.find('label').getDOMNode().dataset.quid).to.equal("Label-".concat(props.id));
  });
});
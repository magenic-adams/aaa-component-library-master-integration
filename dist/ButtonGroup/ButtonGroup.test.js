import React from 'react';
import ReactDOM from 'react-dom';
import ButtonGroup from './ButtonGroup';
import { expect } from "chai";
import { mount } from 'enzyme';

function createButtonGroup(buttons) {
  var div = document.createElement('div');
  return mount(React.createElement(ButtonGroup, null, buttons));
}

describe("ButtonGroup", function () {
  var ButtonGroupComponent = createButtonGroup();
  it('has one or more elements', function () {
    expect(ButtonGroupComponent.children().length).to.be.above(0);
  });
});
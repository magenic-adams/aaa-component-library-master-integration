import React from 'react';
import Button from './Button';
import { expect } from "chai";
import { mount } from 'enzyme';

function createButton(children) {
  return mount(React.createElement(Button, null, children));
}

describe("Button", function () {
  var ButtonComponent = createButton('Here lies a button');
  it('has rendered button text', function () {
    expect(ButtonComponent.text()).to.equal('Here lies a button');
  });
});
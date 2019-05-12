import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { expect } from "chai";
import { mount } from 'enzyme';

function createButton(children) {
  var div = document.createElement('div');
  return mount(<Button>{children}</Button>)
}

describe("Button", function () {
  var ButtonComponent = createButton('Here lies a button');
  it('has rendered button text', function () {
    expect(ButtonComponent.text()).to.be('Here lies a button');
  });
});

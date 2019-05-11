import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
// import { assert } from "chai";

function createButton(children){
  const div = document.createElement('div');
  return ReactDOM.render(<Button>{children}</Button>, div);
}

describe("Button", () => {
  let ButtonComponent = createButton('Default Button');

  it('has rendered button text', () => {
    console.log('ButtonComponent', ButtonComponent);
  });
})

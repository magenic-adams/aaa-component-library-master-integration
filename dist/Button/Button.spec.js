import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'; // import { assert } from "chai";

function createButton(children) {
  var div = document.createElement('div');
  return ReactDOM.render(React.createElement(Button, null, children), div);
}

describe("Button", function () {
  var ButtonComponent = createButton('Default Button');
  it('has rendered button text', function () {
    console.log('ButtonComponent', ButtonComponent);
  });
});
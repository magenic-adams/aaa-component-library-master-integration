/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme'; // Components

import AAAPrimaryTheme from '../../AAAPrimaryTheme/AAAPrimaryTheme';
import FormGroup from './FormGroup';
import BaseInput from '../../Input/BaseInput/BaseInput';

function createFormGroupWithTheme(props) {
  return mount(React.createElement(AAAPrimaryTheme, null, React.createElement(FormGroup, props)));
}

describe('FormGroup', function () {
  var props = {
    className: 'my-form-group-class',
    children: React.createElement(BaseInput, {
      id: "primary-id",
      name: "primary-name"
    }, "Primary")
  };
  var FormGroupComponent = createFormGroupWithTheme(props);
  var FormGroupNode = FormGroupComponent.getDOMNode();
  describe('rendering HTML element', function () {
    it('includes a class name of "FormGroup" on the HTML element', function () {
      expect(FormGroupNode.className).to.include('FormGroup');
    });
    it('includes an HTML class property when passed a React className prop', function () {
      expect(FormGroupNode.className).to.include(props.className);
    });
  });
});
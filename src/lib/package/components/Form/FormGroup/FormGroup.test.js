/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

// Components
import ACEPrimaryTheme from '../../ACEPrimaryTheme/ACEPrimaryTheme';
import FormGroup from './FormGroup';
import BaseInput from '../../Input/BaseInput/BaseInput';

function createFormGroupWithTheme(props) {
  return mount(
      <ACEPrimaryTheme>
        <FormGroup {...props}/>
      </ACEPrimaryTheme>
  );
}

describe('FormGroup', () => {
  const props = {
    className: 'my-form-group-class',
    children: <BaseInput id="primary-id" name="primary-name">Primary</BaseInput>,
  };
  const FormGroupComponent = createFormGroupWithTheme(props);
  const FormGroupNode = FormGroupComponent.getDOMNode();
  
  describe('rendering HTML element', () => {
    it('includes a class name of "FormGroup" on the HTML element', () => {
      expect(FormGroupNode.className).to.include('FormGroup');
    });

    it('includes an HTML class property when passed a React className prop', () => {
      expect(FormGroupNode.className).to.include(props.className);
    });
  });
});

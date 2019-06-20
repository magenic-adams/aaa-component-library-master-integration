/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

// Components
import AAAPrimaryTheme from '../../AAAPrimaryTheme/AAAPrimaryTheme';
import Form from '../Form';
import FormInput from './FormInput';

function renderInputWithProps({ id }){
  return function renderInput({ handleSubmit }){
    return (
      <form onSubmit={handleSubmit}>
        <FormInput
           id={id}
        />
      </form>
    );
  };
}

function createFormAndFormInputWithTheme(props) {
  return mount(
      <AAAPrimaryTheme>
        <Form
          onSubmit={() => {}}
          validations={{}}
          render={renderInputWithProps(props)}
        />
      </AAAPrimaryTheme>
  );
}

describe('FormInput', () => {
  const props = {
    id: 'some-unique-identifier',
  };
  const FormComponent = createFormAndFormInputWithTheme(props);
  const FormInputComponent = FormComponent.find(FormInput);
  const FormInputNode = FormInputComponent.getDOMNode();
  
  describe('rendering HTML element', () => {
    it('includes a class name of "FormInput" on the HTML element', () => {
      expect(FormInputNode.className).to.include('FormInput');
    });

    it('includes an HTML class property when passed a React className prop', () => {
      expect(FormInputNode.className).to.include(props.className);
    });
  });
});

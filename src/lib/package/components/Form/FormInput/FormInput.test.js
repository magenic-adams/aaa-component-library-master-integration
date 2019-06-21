/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Field } from 'react-final-form';

// Components
import AAAPrimaryTheme from '../../AAAPrimaryTheme/AAAPrimaryTheme';
import BaseInput from '../../Input/BaseInput/BaseInput';
import Form from '../Form';
import FormInput from './FormInput';

function renderInputWithProps(props){
  return function renderInput({ handleSubmit }){
    return (
      <form onSubmit={handleSubmit}>
        <FormInput
           {...props}
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
  const FieldComponent = FormComponent.find(Field);
  const BaseInputComponent = FormComponent.find(BaseInput);
  
  describe('React element', () => {
    it('has required prop values for id', () => {
      expect(FormInputComponent.props().id).to.equal(props.id);
    });

    it('passes a required "name" prop to the underlying <Field> when passed an id', () => {
      expect(FieldComponent.props().name).to.equal(props.id);
    });

    it('forwards a ref to the underlying <BaseInput> when not specified as prop', () => {
      expect(BaseInputComponent.props().forwardedRef.current.id).to.equal(props.id);
    });
  });

  describe('Optional props', () => {
    it('forwards a ref to the underlying <BaseInput> when "forwardedRef" props is passed', () => {
      const optionalProps = {
        id: 'some-unique-identifier-for-optiona-prop-test-case',
        forwardedRef: React.createRef(),
      };
      createFormAndFormInputWithTheme(optionalProps);
      expect(optionalProps.forwardedRef.current.id).to.equal(optionalProps.id);
    });
  });

  describe('Initial value', () => {
    const initialProps = {
      id: 'initial-unique-identifier',
      initialValue: 'This is INITIALLY what I meant',
    };
    const InitialFormComponent = createFormAndFormInputWithTheme(initialProps);
    const InitialBaseInputComponent = InitialFormComponent.find(BaseInput);

    it('has an initial value received in its props', () => {
      expect(InitialBaseInputComponent.props().value).to.equal(initialProps.initialValue);
    });
  });
});

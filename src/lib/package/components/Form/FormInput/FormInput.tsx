import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Field, useForm } from 'react-final-form';

// Components
import BaseInput from '../../Input/BaseInput/BaseInput';

type propTypes = {
  id: string,
  name: string,
};

/**
 * Form field change interceptor calls a form effect "setFieldTouched"
 * @param  {Object} options.input - fieldProps.input
 * @param  {Object} formState - global form state
 * @return {Function} decoratored onChange
 */
function handleFormFieldChange({ input }, formState){
  return (val) => {
    const { name, onChange } = input;
    const { mutators: { setFieldTouched }} = formState;
    setFieldTouched(name, false);
    onChange(val);
  };
}


/**
 * Handles clearing of input value
 * @param  {Object} options.input - fieldProps.input
 * @param  {Object} formState - global form state
 * @param  {Object} inputRef - reference to the underlying input
 * @return {Function} onClear handler
 */
function handleFieldClear({ input }, formState, inputRef ){
  return () => {
    const { name, onChange } = input;
    const { mutators: { setFieldTouched }} = formState;
    setFieldTouched(name, false);
    onChange('');
    inputRef.current.focus();
  };
}

/**
 * FormInput is a functional <Field> Wrapper around <BaseInput />
 * FormInput's responsibility is to 
 * 1. map ReactFinalForm's exposed "fieldProps" to <BaseInput>'s props
 * 2. Have logic to determine when an error is shown
 * 
 * By exposing the form's state via hooks, we are able to tap into custom mutators and other form state
 * defined on our top-level <Form> component and plucked from context
 */
function FormInput(props:propTypes) {
  const { forwardedRef } = props;
  const inputRef = forwardedRef || useRef(null);
  const formState = useForm();
  const { name } = props;
  return (
    <Field
      name={name}
      component={(fieldProps) => {
        const { meta } = fieldProps;
        return (
          <BaseInput
            {...fieldProps.input}
            error={meta.touched && meta.error}
            onChange={handleFormFieldChange(fieldProps, formState)}
            onClear={handleFieldClear(fieldProps, formState, inputRef)}
            forwardedRef={inputRef}
            {...props} // Passed props take highest priority
          />
        );
      }}
    />
  );
}


export default FormInput;

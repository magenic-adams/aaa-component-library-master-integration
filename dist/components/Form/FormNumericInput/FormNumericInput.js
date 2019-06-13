import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Field, useForm } from 'react-final-form'; // Components

import NumericInput from '../../Input/NumericInput/NumericInput';

/**
 * Form field change interceptor calls a form effect "setFieldTouched"
 * @param  {Object} options.input - fieldProps.input
 * @param  {Object} formState - global form state
 * @return {Function} decoratored onChange
 */
function handleFormFieldChange(_ref, formState) {
  var input = _ref.input;
  return function (val) {
    var name = input.name,
        onChange = input.onChange;
    var setFieldTouched = formState.mutators.setFieldTouched;
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


function handleFieldClear(_ref2, formState, inputRef) {
  var input = _ref2.input;
  return function () {
    var name = input.name,
        onChange = input.onChange;
    var setFieldTouched = formState.mutators.setFieldTouched;
    setFieldTouched(name, false);
    onChange('');
    inputRef.current.focus();
  };
}
/**
 * FormNumericInput is a functional <Field> Wrapper around <NumericInput />
 * FormNumericInput's responsibility is to 
 * 1. map ReactFinalForm's exposed "fieldProps" to <NumericInput>'s props
 * 2. Have logic to determine when an error is shown
 * 
 * By exposing the form's state via hooks, we are able to tap into custom mutators and other form state
 * defined on our top-level <Form> component and plucked from context
 */


function FormNumericInput(props) {
  var forwardedRef = props.forwardedRef;
  var inputRef = forwardedRef || useRef(null);
  var formState = useForm();
  var name = props.name;
  return React.createElement(Field, {
    name: name,
    component: function component(fieldProps) {
      var meta = fieldProps.meta;
      return React.createElement(NumericInput, Object.assign({}, fieldProps.input, {
        error: meta.touched && meta.error,
        onChange: handleFormFieldChange(fieldProps, formState),
        onClear: handleFieldClear(fieldProps, formState, inputRef),
        forwardedRef: inputRef
      }, props));
    }
  });
}

export default FormNumericInput;
import React from 'react';
import { Field } from 'react-final-form';

// Components
import withFormState from '../withFormState';
import BaseInput from '../../Input/BaseInput/BaseInput';

interface RequiredProps {
  id: string,
  name: string,
};

interface OptionalProps {
  formState?: any, // Decorator
  forwardedRef?: React.RefObject<any>,
};


/**
 * FormInput is a  <Field> Wrapper around <BaseInput />
 * FormInput's responsibility is to 
 * 1. map ReactFinalForm's exposed "fieldProps" to <BaseInput>'s props
 * 2. Have logic to determine when an error is shown
 * 
 * By exposing the form's state via HOC, we are able to tap into custom mutators and other form state
 * defined on our top-level <Form> component and plucked from context
 */
class FormInput extends React.Component<RequiredProps & OptionalProps> {
  constructor(props:RequiredProps & OptionalProps){
    super(props);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.handleFieldClear = this.handleFieldClear.bind(this);
    this.renderFieldComponent = this.renderFieldComponent.bind(this);
  }

  /**
   * Form field change interceptor calls a form effect "setFieldTouched"
   * @param  {Object} options.input - fieldProps.input
   * @return {Function} decoratored onChange
   */
  handleFormFieldChange(
    { input }:{input: {name: string, onChange: (evt:React.SyntheticEvent) => void}},
   ):(evt:React.SyntheticEvent) => void {
    return (evt) => {
      const { formState } = this.props;
      const { name, onChange } = input;
      const { mutators: { setFieldTouched }} = formState;
      setFieldTouched(name, false);
      onChange(evt);
    };
  }


  /**
   * Handles clearing of input value
   * @param  {Object} options.input - fieldProps.input
   * @param  {Object} inputRef - reference to the underlying input
   * @return {Function} onClear handler
   */
  handleFieldClear(
    { input }:{input: {name: string, onChange: (val:string) => void}},
    inputRef?: {current: {focus: () => void}}
    ){
    return () => {
      const { formState } = this.props;
      const { name, onChange } = input;
      const { mutators: { setFieldTouched }} = formState;
      setFieldTouched(name, false);
      onChange('');
      if (inputRef && inputRef.current){
        inputRef.current.focus();
      }
    };
  }

  /**
   * Renders the base input field
   * NOTE: It is required to pass a named function to component
   * ... if you pass an anonymous function it will re-create the component
   * @param  {Object} fieldProps - react final form field props
   * @return {React.Component}
   */
  renderFieldComponent(fieldProps:any){
    const { forwardedRef } = this.props;
    const { meta } = fieldProps;
    return (
      <BaseInput
        {...fieldProps.input}
        error={meta.touched && meta.error}
        onChange={this.handleFormFieldChange(fieldProps)}
        onClear={this.handleFieldClear(fieldProps, forwardedRef)}
        forwardedRef={forwardedRef}
        {...this.props} // Passed props take highest priority
      />
    );
  }

  render(){
    const { name } = this.props;
    return (
      <Field
        name={name}
        component={this.renderFieldComponent}
      />
    );
  }
}


export default withFormState(FormInput);

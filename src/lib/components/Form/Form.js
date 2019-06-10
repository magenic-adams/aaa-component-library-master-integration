import React from 'react';
import { Form } from 'react-final-form';

// Mutators
// https://github.com/final-form/final-form-set-field-touched
import setFieldTouched from 'final-form-set-field-touched';

// Utilities
import Validate from '../../utilities/validate';

class FormDecorator extends React.Component {
  /**
   * A UX requirement to check there is at least some value in all fields
   * @param  {Function} options.formRenderProps.form.getRegisteredFields - the form field names
   * @param  {Object} options.values - current key/values of form state
   * @return {Boolean}
   */
  static allFieldsHaveValues({ formRenderProps }){
    const { form, values } = formRenderProps;
    const registeredFields = form.getRegisteredFields();
    return registeredFields.every(fieldKey => !!values[fieldKey]);
  }

  /**
   * A UX requirement to check that all required fields have been visited
   * @param  {Function} options.formRenderProps.form.getRegisteredFields - the form field names
   * @param  {Function} options.validations - the form field names
   * @param  {Object} options.values - current key/values of form state
   * @return {Boolean}
   */
  static allRequiredFieldsHaveBeenVisited({ formRenderProps, validations }){
    const { visited } = formRenderProps;
    const validationFields = Object.keys(validations);
    const requiredFields = validationFields.filter(fieldKey => {
      return Object.prototype.hasOwnProperty.call(validations[fieldKey], 'required');
    });
    return requiredFields.every(fieldKey => !!visited[fieldKey]);
  }

  /**
   * Decorates the form render props with computed properties
   * @param  {Object} options.formRenderProps - react-final-form state values
   * @param  {Object} options.validations - dynamic validation object
   * @return {Object} props + computedProps
   */
  static decorateFormRenderProps({ formRenderProps, validations }){
    return Object.assign({}, formRenderProps, {
      allFieldsHaveValues: this.allFieldsHaveValues({ formRenderProps }),
      allRequiredFieldsHaveBeenVisited: this.allRequiredFieldsHaveBeenVisited({ formRenderProps, validations }),
    });
  }

  static handleValidate({ validations }){
    return (values) => {
      return Validate.validateForm(values, validations);
    };
  }

  static decorateRender(renderFn, validations){
    return (formRenderProps) => {
      // Form Render Props are passed to the render method of the Form
      // Values include [handleSubmit, form, and ...formState]
      // For more information:
      // https://github.com/final-form/react-final-form#formrenderprops
      // **** 
      // We are augmenting these values by adding additional information valuable to our functionality
      return renderFn(this.decorateFormRenderProps({ formRenderProps, validations }));
    };
  }
  
  render(){
    // This component acts as mainly a pass through to react-final-form,
    // but we augment functionality and encapsulate required form behaviors
    const { render, validations } = this.props;
    console.log('validations', validations);
    return (
      <Form
        validate={FormDecorator.handleValidate({ validations })}
        mutators={{ setFieldTouched }}
        {...this.props}
        render={FormDecorator.decorateRender(render, validations)} // Render passed is always decorated
      />
    );
  }
}

export default FormDecorator;

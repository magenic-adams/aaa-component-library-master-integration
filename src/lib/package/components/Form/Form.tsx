import React from 'react';
import { Form } from 'react-final-form';

// Mutators
// https://github.com/final-form/final-form-set-field-touched
import setFieldTouched from 'final-form-set-field-touched';

// Types
import { FormRenderProps } from '../../types/form/FormRenderProps';

// Utilities
import Validate from '../../utilities/validate';

interface RequiredProps {
  render: () => any,
  validations: any,
  onSubmit: (values: any, form:any) => Promise<any>
}

class FormDecorator extends React.Component<RequiredProps> {
  /**
   * A UX requirement to check that all required fields have been visited or have values
   * @param  {Function} options.formRenderProps.form.getRegisteredFields - the form field names
   * @param  {Function} options.validations - the form field names
   * @param  {Object} options.values - current key/values of form state
   * @return {Boolean}
   */
  static allRequiredFieldsHaveBeenVisitedOrHaveValues(
    { formRenderProps, validations }
    : {formRenderProps:FormRenderProps, validations: any })
  {
    const { values, visited } = formRenderProps;
    const validationFields = Object.keys(validations);
    const requiredFields = validationFields.filter(fieldKey => {
      return Object.prototype.hasOwnProperty.call(validations[fieldKey], 'required');
    });

    return requiredFields.every(fieldKey => {
      return !!values[fieldKey] || !!visited[fieldKey];
    });
  }

  /**
   * Decorates the form render props with computed properties
   * @param  {Object} options.formRenderProps - react-final-form state values
   * @param  {Object} options.validations - dynamic validation object
   * @return {Object} props + computedProps
   */
  static decorateFormRenderProps(
    { formRenderProps, validations }
    : {formRenderProps:FormRenderProps, validations: any})
  {
    return Object.assign({}, formRenderProps, {
      allRequiredFieldsHaveBeenVisitedOrHaveValues: this.allRequiredFieldsHaveBeenVisitedOrHaveValues({ formRenderProps, validations }),
    });
  }

  static handleValidate({ validations }:{validations:any}){
    return (values:any) => {
      return Validate.validateForm(values, validations);
    };
  }

  static decorateRender(
    renderFn:(decorator:any) => {
      allRequiredFieldsHaveBeenVisitedOrHaveValues: boolean,
    },
    validations:any
   ):(formRenderProps:any) => {
      allRequiredFieldsHaveBeenVisitedOrHaveValues: boolean,
    }{
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
    const { render, validations, onSubmit } = this.props;
    return (
      <Form
        validate={FormDecorator.handleValidate({ validations })}
        mutators={{ setFieldTouched }}
        onSubmit={onSubmit}
        {...this.props}
        render={FormDecorator.decorateRender(render, validations)} // Render passed is always decorated
      />
    );
  }
}

export default FormDecorator;

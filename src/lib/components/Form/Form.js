import React from 'react';
import { Form } from 'react-final-form';

// Mutators
// https://github.com/final-form/final-form-set-field-touched
import setFieldTouched from 'final-form-set-field-touched';

class FormDecorator extends React.Component {
  /**
   * A UX requirement to check there is at least some value in all fields
   * @param  {Function} options.form.getRegisteredFields - the form field names within the form
   * @param  {Object} options.values - current key/values of form state
   * @return {Boolean}
   */
  static allFieldsHaveValues(formRenderProps){
    const { form, values } = formRenderProps;
    const registeredFields = form.getRegisteredFields();
    return registeredFields.every(fieldKey => !!values[fieldKey]);
  }

  /**
   * Decorates the form render props with computed properties
   * @param  {Object} formRenderProps - react-final-form state values
   * @return {Object} props + computedProps
   */
  static decorateFormRenderProps(formRenderProps){
    return Object.assign({}, formRenderProps, {
      allFieldsHaveValues: this.allFieldsHaveValues(formRenderProps),
    });
  }

  static decorateRender(renderFn){
    return (formRenderProps) => {
      // Form Render Props are passed to the render method of the Form
      // Values include [handleSubmit, form, and ...formState]
      // For more information:
      // https://github.com/final-form/react-final-form#formrenderprops
      // **** 
      // We are augmenting these values by adding additional information valuable to our functionality
      return renderFn(this.decorateFormRenderProps(formRenderProps));
    };
  }
  
  render(){
    // This component acts as mainly a pass through to react-final-form,
    // but we augment functionality and encapsulate certain form behaviors
    const { render } = this.props;
    return (
      <Form
        {...this.props}
        mutators={{ setFieldTouched }}
        render={FormDecorator.decorateRender(render)}
      />
    );
  }
}

export default FormDecorator;

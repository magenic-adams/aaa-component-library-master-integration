import React from 'react';
import { Field } from 'react-final-form';

// Components
import withFormState from '../withFormState';
import NumericalStepper from '../../Stepper/NumericalStepper';

interface Props {
  id: string;
}

/**
 * FormNumericalStepper is a  <Field> Wrapper around <BaseInput />
 * FormNumericalStepper's responsibility is to
 * 1. map ReactFinalForm's exposed "fieldProps" to <BaseInput>'s props
 * 2. Have logic to determine when an error is shown
 *
 * By exposing the form's state via HOC, we are able to tap into custom mutators and other form state
 * defined on our top-level <Form> component and plucked from context
 */
class FormNumericalStepper extends React.Component<any> {
  static handleDecrease(fieldRenderProps: any) {
    return () => {
      if (!(fieldRenderProps.input.value <= 0)) {
        const { value, onChange } = fieldRenderProps.input;
        onChange(value - 1);
      }
    };
  }

  static handleIncrease(fieldRenderProps: any) {
    return () => {
      const { value, onChange } = fieldRenderProps.input;
      onChange(value + 1);
    };
  }

  static handleBlur(fieldRenderProps: any) {
    return () => {
      const { value, onChange } = fieldRenderProps.input;
      onChange(value);
    };
  }

  constructor(props: Props) {
    super(props);
    this.renderFieldComponent = this.renderFieldComponent.bind(this);
  }

  handleFormFieldChange({
    input,
  }: {
    input: { name: string; onChange: (evt: React.SyntheticEvent) => void };
  }): (evt: React.SyntheticEvent) => void {
    return evt => {
      const { formState } = this.props;
      const { name, onChange } = input;
      const {
        mutators: { setFieldTouched },
      } = formState;
      setFieldTouched(name, false);
      onChange(evt);
    };
  }

  /**
   * Renders the base input field
   * NOTE: It is required to pass a named function to component
   * ... if you pass an anonymous function it will re-create the component
   * @param  {Object} fieldRenderProps - react final form field props
   * @return {React.Component}
   */
  renderFieldComponent = (fieldRenderProps: any) => {
    // const ref = this.getInputRef();
    const { id } = this.props;
    const { meta } = fieldRenderProps;

    return (
      <NumericalStepper
        id={id}
        name={id}
        error={meta.touched && meta.error}
        onBlur={FormNumericalStepper.handleBlur(fieldRenderProps)}
        onChange={this.handleFormFieldChange(fieldRenderProps)}
        onDecrease={FormNumericalStepper.handleDecrease(fieldRenderProps)}
        onIncrease={FormNumericalStepper.handleIncrease(fieldRenderProps)}
        value={fieldRenderProps.input.value}
        {...this.props} // Passed props take highest priority
      />
    );
  };

  render() {
    const { id } = this.props;

    return (
      <Field name={id} initialValue={0} component={this.renderFieldComponent} />
    );
  }
}

export default withFormState(FormNumericalStepper);

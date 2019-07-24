import React from 'react';

import SelectItem from '../../../types/SelectItem';
import { Field } from 'react-final-form';
import SelectDropdown from '../../SelectDropdown/SelectDropdown';
import withFormState from '../withFormState';

interface RequiredProps {
  id: string;
  items: SelectItem[];
}

interface OptionalProps {
  helperText?: string;
  initialValue?: string | number;
  label?: string;
  disabled?: boolean;
  disableWarning?: boolean;
  placeHolder?: string;
}

class FormSelectDropdown extends React.Component<
  RequiredProps & OptionalProps
> {
  static defaultProps: OptionalProps = {
    helperText: '',
    initialValue: '',
    label: '',
    disabled: false,
    disableWarning: false,
    placeHolder: '',
  };
  constructor(props: RequiredProps & OptionalProps) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.renderFieldComponent = this.renderFieldComponent.bind(this);
  }

  handleItemChange(fieldProps: any) {
    const {
      input: { onChange },
    } = fieldProps;
    return (
      evt: React.ChangeEvent<{
        name?: string | undefined;
        value: any;
      }>,
      child: React.ReactNode
    ) => {
      onChange(evt);
    };
  }

  renderFieldComponent(fieldProps: any) {
    const { id, items, meta } = fieldProps;

    return (
      <SelectDropdown
        {...fieldProps.input}
        id={id}
        items={items}
        error={meta.touched && meta.error}
        onChange={this.handleItemChange(fieldProps)}
        {...this.props}
      />
    );
  }

  render() {
    const { id, initialValue, ...rest } = this.props;
    return (
      <Field
        name={id}
        initialValue={initialValue}
        component={this.renderFieldComponent}
        {...rest}
      />
    );
  }
}

export default withFormState(FormSelectDropdown);

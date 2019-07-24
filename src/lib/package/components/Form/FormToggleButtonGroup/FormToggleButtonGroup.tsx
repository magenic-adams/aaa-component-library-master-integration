import React from 'react';
import { Field } from 'react-final-form';

import ToggleButtonGroup from '../../ToggleButtonGroup/ToggleButtonGroup';
import withFormState from '../withFormState';

interface option {
  id: string | number;
  value: string | number;
  text: string;
}

interface RequiredProps {
  id: string;
  options: option[];
}

interface OptionalProps {
  disabled?: boolean;
  initialValue?: string;
}

class FormToggleButtonGroup extends React.Component<
  RequiredProps & OptionalProps
> {
  static defaultProps: OptionalProps = {
    disabled: false,
    initialValue: '',
  };

  constructor(props: RequiredProps & OptionalProps) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.renderFieldComponent = this.renderFieldComponent.bind(this);
  }

  handleItemClick(fieldProps: any) {
    const {
      input: { onChange },
    } = fieldProps;
    return (option: option) => {
      onChange(option.value);
    };
  }

  renderFieldComponent(fieldProps: any) {
    const { id, options } = fieldProps;
    return (
      <ToggleButtonGroup
        {...fieldProps.input}
        id={id}
        options={options}
        onSelect={this.handleItemClick(fieldProps)}
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

export default withFormState(FormToggleButtonGroup);

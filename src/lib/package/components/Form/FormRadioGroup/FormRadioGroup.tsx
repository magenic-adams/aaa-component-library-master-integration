import React from 'react';
// Components
import RadioGroup from '../../RadioGroup/RadioGroup';

// Types
import SelectItem from '../../../types/SelectItem';
import { Field } from 'react-final-form';

interface RequiredProps {
  id: string;
  items: SelectItem[];
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  className?: string;
  initialValue?: any;
  instructionLabel?: string;
  disabledValues: number[];
  disableAll?: boolean;
}

class FormRadioGroup extends React.Component<RequiredProps & OptionalProps> {
  selectedValues: any[];

  static defaultProps: OptionalProps = {
    instructionLabel: '',
    disableAll: false,
    disabledValues: [],
    initialValue: '',
  };

  constructor(props: RequiredProps & OptionalProps) {
    const { initialValue } = props;
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.renderFieldComponent = this.renderFieldComponent.bind(this);
    this.selectedValues = [];

    if (!!initialValue) {
      this.selectedValues = [initialValue];
    }
  }

  handleItemChange(fieldProps: any) {
    return (item: SelectItem) => {
      const {
        input: { onChange },
      } = fieldProps;
      const { value } = item;

      this.selectedValues = [value];
      onChange(value);
    };
  }

  renderFieldComponent(fieldProps: any) {
    const {
      id,
      items,
      disabledValues,
      initialValue,
      instructionLabel,
      disableAll,
    } = fieldProps;

    return (
      <RadioGroup
        id={id}
        items={items}
        initialValue={initialValue}
        instructionLabel={instructionLabel}
        selectedValues={this.selectedValues}
        disabledValues={disabledValues}
        disableAll={disableAll}
        onChange={this.handleItemChange(fieldProps)}
      />
    );
  }

  render() {
    const {
      id,
      items,
      disabledValues,
      disableAll,
      initialValue,
      instructionLabel,
    } = this.props;
    return (
      <Field
        id={id}
        name={id}
        items={items}
        initialValue={initialValue}
        instructionLabel={instructionLabel}
        disabledValues={disabledValues}
        disableAll={disableAll}
        component={this.renderFieldComponent}
      />
    );
  }
}

export default FormRadioGroup;

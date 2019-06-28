import React from 'react';
import MaskedInput from 'react-text-mask';

// Components
import BaseInput from '../BaseInput/BaseInput';

interface RequiredProps {
  id: string;
  name: string;
}

interface OptionalProps {
  centerText?: boolean;
  disabled?: boolean;
  disableWarning?: boolean;
  error?: string;
  forwardedRef?: React.RefObject<any>;
  mask?: RegExp[];
  type?: string;
  value?: number;
  onChange?: (evt: any) => void;
  onBlur?: (evt: any) => void;
  onClear?: (evt: any) => void;
}

class NumericInput extends React.Component<RequiredProps & OptionalProps> {
  constructor(props: RequiredProps & OptionalProps) {
    super(props);
    this.determineInputComponent = this.determineInputComponent.bind(this);
    this.renderTextMaskCustomComponent = this.renderTextMaskCustomComponent.bind(this);
  }

  determineInputComponent(){
    const { mask } = this.props;
    if (!mask){
      return {};
    }

    return {
      inputComponent: this.renderTextMaskCustomComponent,
    };
  }

  renderTextMaskCustomComponent(otherProps: any) {
    const { forwardedRef, ...other } = otherProps;
    const { mask } = this.props;
    return (
      <MaskedInput
        ref={forwardedRef}
        mask={mask}
        guide={false}
        autoComplete="off"
        {...other}
      />
    );
  }

  render() {
    const { error, id, name, onChange, onClear, onBlur } = this.props;

    return (
      <BaseInput
        id={id}
        name={name}
        error={error}
        onChange={onChange}
        onClear={onClear}
        onBlur={onBlur}
        {...this.determineInputComponent()}
        {...this.props}
      />
    );
  }
}

export default NumericInput;

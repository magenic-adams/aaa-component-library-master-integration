import React from 'react';
import MaskedInput from 'react-text-mask';

// Components
import BaseInput from '../BaseInput/BaseInput';

interface RequiredProps {
  id: string;
  name: string;
  mask: RegExp[];
}

interface OptionalProps {
  centerText?: boolean;
  disabled?: boolean;
  disableWarning?: boolean;
  error?: string;
  forwardedRef?: React.RefObject<any>;
  type?: string;
  value?: number;
  onChange?: (evt: any) => void;
  onBlur?: (evt: any) => void;
  onClear?: (evt: any) => void;
}

const defaultProps: OptionalProps = {
  centerText: false,
  disabled: false,
  error: '',
  type: 'text'
};

function TextMaskCustom(mask: RegExp[]) {
  return (props: OptionalProps) => {
    const { forwardedRef, ...other } = props;
    return (
      <MaskedInput
        ref={forwardedRef}
        mask={mask}
        guide={false}
        autoComplete="off"
        {...other}
      />
    );
  };
}

const NumericInput: React.FunctionComponent<
  RequiredProps & OptionalProps
> = props => {
  const { error, id, name, mask, onChange, onClear, onBlur } = props;
  return (
    <BaseInput
      id={id}
      name={name}
      inputComponent={TextMaskCustom(mask)}
      error={error}
      onChange={onChange}
      onClear={onClear}
      onBlur={onBlur}
      {...props}
    />
  );
};

NumericInput.defaultProps = defaultProps;

export default NumericInput;

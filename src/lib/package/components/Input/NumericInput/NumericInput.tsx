import React from 'react';
import MaskedInput from 'react-text-mask';

// Components
import BaseInput from '../BaseInput/BaseInput';

interface RequiredProps {
  id: string,
  name: string,
}

interface OptionalProps {
  centerText?: boolean,
  disabled?: boolean,
  disableWarning?: boolean,
  error?: string,
  forwardedRef?: React.RefObject<any>,
  mask?: string[],
  type?: string,
  value?: number,
  onChange?: (evt:any) => void,
  onClear?: (evt:any) => void,
};

const defaultProps:OptionalProps = {
  centerText: false,
  disabled: false,
  error: '',
  type: 'text',
  mask: [],
};

function TextMaskCustom(mask?:string[]) {
  return (props:OptionalProps) => {
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

const NumericInput:React.FunctionComponent<RequiredProps & OptionalProps> = (props) => {
  const {
    error,
    id,
    name,
    mask,
    onChange,
    onClear,
  } = props;
  return (
    <BaseInput
      id={id}
      name={name}
      inputComponent={TextMaskCustom(mask)}
      error={error}
      onChange={onChange}
      onClear={onClear}
      {...props}
    />
  );
 };

NumericInput.defaultProps = defaultProps;

export default NumericInput;

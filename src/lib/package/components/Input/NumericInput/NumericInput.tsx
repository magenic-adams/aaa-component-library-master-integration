import React from 'react';
import MaskedInput from 'react-text-mask';

// Components
import BaseInput from '../BaseInput/BaseInput';

interface RequiredProps {
  onChange: (evt:any) => void,
  onClear: (evt:any) => void,
}

interface OptionalProps {
  error?: string,
  mask?: string[],
  forwardedRef?: React.RefObject<any>
};

const defaultProps:OptionalProps = {
  error: '',
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
    mask,
    error,
    onChange,
    onClear,
  } = props;
  return (
      <BaseInput
        inputComponent={TextMaskCustom(mask)}
        error={error}
        onChange={onChange}
        onClear={onClear}
        {...props}
      />
  );
 }

NumericInput.defaultProps = defaultProps;

export default NumericInput;

import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

// Components
import BaseInput from '../BaseInput/BaseInput';

function TextMaskCustom(mask) {
  return (props) => {
    const { inputRef, ...other } = props;
    return (
      <MaskedInput
        ref={ref => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={mask}
        guide={false}
        autoComplete="off"
        {...other}
      />
    );
  };
}

type propTypes = {
  mask?: PropTypes.array
};

function NumericInput(props): propTypes {
    const { mask } = props;
    return (
        <BaseInput
          inputComponent={TextMaskCustom(mask)}
          {...props}
        />
    );
  }

NumericInput.defaultProps = {
  mask: [],
};

export default NumericInput;

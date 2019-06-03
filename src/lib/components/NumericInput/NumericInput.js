import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput/BaseInput';
import MaskedInput from "react-text-mask";


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
  }
}

class NumericInput extends Component {
  render() {
    const { mask } = this.props;
    return (
      <Fragment>
        <BaseInput
          inputComponent={TextMaskCustom(mask)}
          {...this.props}
        />
      </Fragment>
    );
  }
}

NumericInput.propTypes = {
  // Passed Props
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onClear: PropTypes.func
};

export default NumericInput;

import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import MaskedInput from 'react-text-mask'; // Components

import BaseInput from '../BaseInput/BaseInput';
;
var defaultProps = {
  centerText: false,
  disabled: false,
  error: '',
  type: 'text',
  mask: []
};

function TextMaskCustom(mask) {
  return function (props) {
    var forwardedRef = props.forwardedRef,
        other = _objectWithoutProperties(props, ["forwardedRef"]);

    return React.createElement(MaskedInput, Object.assign({
      ref: forwardedRef,
      mask: mask,
      guide: false,
      autoComplete: "off"
    }, other));
  };
}

var NumericInput = function NumericInput(props) {
  var error = props.error,
      id = props.id,
      name = props.name,
      mask = props.mask,
      onChange = props.onChange,
      onClear = props.onClear;
  return React.createElement(BaseInput, Object.assign({
    id: id,
    name: name,
    inputComponent: TextMaskCustom(mask),
    error: error,
    onChange: onChange,
    onClear: onClear
  }, props));
};

NumericInput.defaultProps = defaultProps;
export default NumericInput;
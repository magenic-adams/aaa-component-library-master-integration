import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask'; // Components

import BaseInput from '../BaseInput/BaseInput';

function TextMaskCustom(mask) {
  return function (props) {
    var inputRef = props.inputRef,
        other = _objectWithoutProperties(props, ["inputRef"]);

    return React.createElement(MaskedInput, Object.assign({
      ref: function ref(_ref) {
        inputRef(_ref ? _ref.inputElement : null);
      },
      mask: mask,
      guide: false,
      autoComplete: "off"
    }, other));
  };
}

function NumericInput(props) {
  var mask = props.mask;
  return React.createElement(BaseInput, Object.assign({
    inputComponent: TextMaskCustom(mask)
  }, props));
}

NumericInput.defaultProps = {
  mask: []
};
export default NumericInput;
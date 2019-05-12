import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialButton from '@material-ui/core/Button'; // CSS

import './Button.css';

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          color = _this$props.color,
          href = _this$props.href,
          onClick = _this$props.onClick;
      return React.createElement(MaterialButton, {
        className: "Button",
        color: color,
        variant: "contained",
        href: href,
        onClick: onClick
      }, children);
    }
  }]);

  return Button;
}(Component);

Button.defaultProps = {
  color: 'primary'
};
export default Button;
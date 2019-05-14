import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import MUIButton from '@material-ui/core/Button';
var styleClasses = {
  root: {
    border: 0,
    boxShadow: 'none',
    color: 'white',
    height: 48,
    padding: '0 16px',
    textTransform: 'none',
    minWidth: '200px'
  },
  label: {
    fontSize: '18px'
  },
  containedPrimary: {
    background: '#4470bf',
    '&:active,&:hover': {
      background: "#395fa4"
    },
    '&:disabled': {
      background: '#cccbce',
      color: 'white'
    }
  },
  containedSecondary: {
    color: '#4470bf',
    border: '1px solid #4470bf',
    background: 'transparent',
    '&:active,&:hover': {
      background: "rgba(68, 112, 191, 0.1)"
    },
    '&:disabled': {
      background: 'transparent',
      borderColor: '#cccbce'
    }
  }
};

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
          className = _this$props.className,
          classes = _this$props.classes,
          disabled = _this$props.disabled,
          color = _this$props.color,
          href = _this$props.href,
          onClick = _this$props.onClick;
      return React.createElement(MUIButton, {
        className: className,
        classes: classes,
        disabled: disabled,
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
export default withStyles(styleClasses)(Button);
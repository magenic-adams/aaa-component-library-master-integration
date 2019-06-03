import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import MUIButton from '@material-ui/core/Button';
import cx from 'clsx';

var styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty({
      border: 0,
      height: '48px',
      boxShadow: 'none',
      color: theme.palette.common.white,
      paddingTop: '0',
      paddingRight: '16px',
      paddingBottom: '0',
      paddingLeft: '16px',
      textTransform: 'none',
      width: '100%'
    }, theme.breakpoints.up('md'), {
      width: '314px'
    }),
    label: _defineProperty({
      fontSize: '18px'
    }, theme.breakpoints.up('md'), {
      fontSize: '20px'
    }),
    containedPrimary: {
      backgroundColor: theme.palette.primary.main,
      '&:active,&:hover': {
        backgroundColor: theme.palette.primary.dark
      },
      '&:disabled': {
        backgroundColor: theme.palette.disabled.main,
        color: theme.palette.common.white
      }
    },
    containedSecondary: {
      height: '500px',
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.colorVariables.TRANSPARENT,
      '&:active,&:hover': {
        backgroundColor: theme.palette.colorVariables.SECONDARY_HOVER
      },
      '&:disabled': {
        backgroundColor: theme.palette.colorVariables.TRANSPARENT,
        borderColor: theme.palette.disabled.main
      }
    }
  };
};

function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      disabled = _ref.disabled,
      id = _ref.id,
      color = _ref.color,
      href = _ref.href,
      forwardedRef = _ref.forwardedRef,
      onClick = _ref.onClick;
  // eslint-disable-next-line
  console.log(arguments, 'arguments');
  return React.createElement(MUIButton, {
    className: cx('zButton', className),
    classes: classes,
    disabled: disabled,
    disableRipple: true,
    "data-quid": id,
    color: color,
    variant: "contained",
    href: href,
    ref: forwardedRef,
    onClick: onClick
  }, children);
}

Button.defaultProps = {
  color: 'primary',
  href: null,
  forwardedRef: React.createRef()
};
export default withStyles(styleClasses, {
  withTheme: true
})(Button);
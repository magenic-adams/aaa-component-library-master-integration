import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import MUIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx'; // Types

;
var defaultProps = {
  color: 'primary',
  className: '',
  disabled: false,
  fadeUp: false,
  isIconButton: false,
  href: '',
  type: 'button'
};

var styleClasses = function styleClasses(theme) {
  var _root;

  return {
    root: (_root = {
      display: 'block',
      border: 0,
      height: 48,
      lineHeight: '48px',
      boxShadow: 'none',
      padding: '0 16px',
      textTransform: 'none',
      marginTop: 0,
      transition: '300ms transform ease-in-out',
      transform: 'translateY(0)',
      width: '100%'
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      width: 314
    }), _defineProperty(_root, '&:disabled', {
      cursor: 'not-allowed'
    }), _root),
    label: {
      lineHeight: '48px',
      height: '100%',
      fontSize: 18
    },
    containedPrimary: _objectSpread({}, theme.typographyElements.buttonPrimary, {
      background: theme.palette.primary.main,
      '&:active,&:hover': {
        background: theme.palette.primary.dark
      },
      '&:disabled': {
        background: theme.secondaryPalette.disabled.main,
        color: theme.secondaryPalette.colorVariables.WHITE
      }
    }),
    containedSecondary: _objectSpread({}, theme.typographyElements.buttonSecondary, {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      background: theme.secondaryPalette.colorVariables.TRANSPARENT,
      '&:active,&:hover': {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
      },
      '&:disabled': {
        background: theme.secondaryPalette.colorVariables.TRANSPARENT,
        borderColor: theme.secondaryPalette.disabled.main
      },
      fontWeight: theme.typographyValues.fontWeight
    }),
    fadeUp: {
      transform: 'translateY(-8px)'
    },
    iconButton: {
      display: 'inline-block',
      verticalAlign: "bottom",
      width: 48,
      height: 48,
      border: "1px solid ".concat(theme.secondaryPalette.colorVariables.GRAY),
      borderRadius: 4,
      backgroundColor: "".concat(theme.secondaryPalette.colorVariables.WHITE),
      '&:active,&:hover': {
        borderWidth: 1,
        backgroundColor: "".concat(theme.secondaryPalette.colorVariables.SECONDARY_HOVER),
        borderColor: "".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE),
        '& svg': {
          color: "".concat(theme.palette.primary.main)
        }
      },
      '&:disabled': {
        background: "".concat(theme.secondaryPalette.disabled.main),
        border: "none",
        '&:hover': {
          backgroundColor: "".concat(theme.secondaryPalette.disabled.main)
        },
        '& svg': {
          color: "".concat(theme.secondaryPalette.colorVariables.GRAY)
        }
      },
      '&:nth-child(n+1)': {
        marginRight: 8
      },
      '&:nth-child(n+2)': {
        marginLeft: 8
      }
    }
  };
};

var Button = function Button(_ref) {
  var _cx;

  var children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      color = _ref.color,
      disabled = _ref.disabled,
      fadeUp = _ref.fadeUp,
      forwardedRef = _ref.forwardedRef,
      href = _ref.href,
      id = _ref.id,
      type = _ref.type,
      onClick = _ref.onClick,
      isIconButton = _ref.isIconButton;
  return React.createElement(MUIButton, {
    className: cx('Button', (_cx = {}, _defineProperty(_cx, classes.fadeUp, fadeUp), _defineProperty(_cx, classes.iconButton, isIconButton), _cx), className),
    classes: {
      root: classes.root,
      containedPrimary: classes.containedPrimary,
      containedSecondary: classes.containedSecondary,
      label: classes.label
    },
    disabled: disabled,
    disableRipple: true,
    "data-quid": id,
    color: color,
    variant: "contained",
    href: href,
    ref: forwardedRef,
    type: type,
    onClick: onClick
  }, children);
};

Button.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(Button);
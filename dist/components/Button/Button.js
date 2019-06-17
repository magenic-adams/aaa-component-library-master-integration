import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React from 'react';
import MUIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

const styleClasses = function styleClasses(theme) {
  let _root;

  return {
    root: (_root = {
      display: 'block',
      border: 0,
      height: 48,
      lineHeight: '48px',
      boxShadow: 'none',
      color: theme.palette.colorVariables.WHITE,
      padding: '0 16px',
      textTransform: 'none',
      marginTop: 0,
      transition: '300ms transform ease-in-out',
      transform: 'translateY(0)',
      width: '100%',
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      width: 314,
    }), _defineProperty(_root, '&:disabled', {
      cursor: 'not-allowed',
    }), _root),
    label: {
      lineHeight: '48px',
      height: '100%',
      fontSize: 18,
    },
    containedPrimary: _objectSpread({
      background: theme.palette.primary.main,
      '&:active,&:hover': {
        background: theme.palette.primary.dark,
      },
      '&:disabled': {
        background: theme.secondaryPalette.disabled.main,
        color: theme.palette.common.white,
      },
    }, theme.typography.buttonPrimary),
    containedSecondary: _objectSpread({
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      background: theme.palette.colorVariables.TRANSPARENT,
      '&:active,&:hover': {
        background: theme.palette.colorVariables.SECONDARY_HOVER,
      },
      '&:disabled': {
        background: theme.palette.colorVariables.TRANSPARENT,
        borderColor: theme.secondaryPalette.disabled.main,
      },
      fontWeight: theme.typography.fontWeight,
    }, theme.typography.buttonSecondary),
    fadeUp: {
      transform: 'translateY(-8px)',
    },
    iconButton: {
      display: 'inline-block',
      verticalAlign: 'bottom',
      width: 48,
      height: 48,
      border: '1px solid '.concat(theme.palette.colorVariables.GRAY),
      borderRadius: 4,
      backgroundColor: ''.concat(theme.palette.colorVariables.WHITE),
      '&:active,&:hover': {
        borderWidth: 1,
        backgroundColor: ''.concat(theme.palette.colorVariables.SECONDARY_HOVER),
        borderColor: ''.concat(theme.palette.colorVariables.DARKER_BLUE),
        '& svg': {
          color: ''.concat(theme.palette.primary.main),
        },
      },
      '&:disabled': {
        background: ''.concat(theme.secondaryPalette.disabled.main),
        border: 'none',
        '&:hover': {
          backgroundColor: ''.concat(theme.secondaryPalette.disabled.main),
        },
        '& svg': {
          color: ''.concat(theme.palette.colorVariables.GRAY),
        },
      },
      '&:nth-child(n+1)': {
        marginRight: 8,
      },
      '&:nth-child(n+2)': {
        marginLeft: 8,
      },
    },
  };
};

function Button(_ref) {
  let _cx;

  const { children } = _ref;
      const { className } = _ref;
      const { classes } = _ref;
      const { disabled } = _ref;
      const { fadeUp } = _ref;
      const { id } = _ref;
      const { color } = _ref;
      const { href } = _ref;
      const { forwardedRef } = _ref;
      const { onClick } = _ref;
      const { isIconButton } = _ref;
  return React.createElement(MUIButton, {
    className: cx('Button', (_cx = {}, _defineProperty(_cx, classes.fadeUp, fadeUp), _defineProperty(_cx, classes.iconButton, isIconButton), _cx), className),
    classes: {
      root: classes.root,
      containedPrimary: classes.containedPrimary,
      containedSecondary: classes.containedSecondary,
      label: classes.label,
    },
    disabled,
    disableRipple: true,
    'data-quid': id,
    color,
    variant: 'contained',
    href,
    ref: forwardedRef,
    onClick,
  }, children);
}

Button.defaultProps = {
  color: 'primary',
  className: '',
  fadeUp: false,
  forwardedRef: {},
  href: null,
};
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true,
})(Button);

import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import { withStyles } from '@material-ui/styles'; // listed as a dependency

import cx from 'clsx'; // Types

// MaterialUI components
import { Link as MuiLink } from '@material-ui/core'; // Utilities

import noop from '../../utilities/noop'; // used the Link instead of the button

;
;
var defaultProps = {
  className: '',
  href: '',
  onClick: noop,
  onBlur: noop
};

var styleClasses = function styleClasses(theme) {
  var _primary, _secondary;

  return {
    primary: (_primary = {
      color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
      cursor: 'pointer',
      fontSize: 18,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 2.67,
      letterSpacing: 'normal',
      padding: '12px 0 12px 0'
    }, _defineProperty(_primary, theme.breakpoints.down('md'), {
      fontSize: 16,
      lineHeight: 3,
      padding: '13.5px 0 13.5px 0'
    }), _defineProperty(_primary, '&:hover', {
      color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE
    }), _primary),
    secondary: (_secondary = {
      color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
      cursor: 'pointer',
      fontWeight: 500,
      fontSize: 16,
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 2.75,
      letterSpacing: 'normal',
      padding: '13.5px 0 13.5px 0'
    }, _defineProperty(_secondary, theme.breakpoints.down('md'), {
      fontSize: 14,
      lineHeight: 3.14,
      letterSpacing: 'normal',
      padding: '14.5px 0 14.5px 0'
    }), _defineProperty(_secondary, '&:hover', {
      color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE
    }), _secondary)
  };
};

var Link = function Link(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      href = _ref.href,
      forwardedRef = _ref.forwardedRef,
      onClick = _ref.onClick,
      onBlur = _ref.onBlur;
  return React.createElement(MuiLink, {
    id: id,
    className: cx('Link', [className === 'primary' ? classes.primary : classes.secondary]),
    href: href,
    ref: forwardedRef,
    onBlur: onBlur,
    onClick: onClick
  }, children);
};

Link.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  withTheme: true
})(Link);
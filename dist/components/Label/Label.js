import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIInputLabel from '@material-ui/core/InputLabel';
import cx from 'clsx';
;
var defaultProps = {
  className: '',
  disabled: false,
  error: '',
  focused: false
};

var styleClasses = function styleClasses(theme) {
  return {
    root: _objectSpread({
      color: theme.secondaryPalette.colorVariables.BLACK,
      display: 'block',
      marginBottom: -8,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight
    }, theme.typography.body1),
    formControl: {
      position: 'relative',
      transform: 'unset'
    }
  };
};

var Label = function Label(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className,
      disabled = _ref.disabled,
      error = _ref.error,
      focused = _ref.focused,
      id = _ref.id;
  return React.createElement(MUIInputLabel, {
    className: cx('InputLabel', className),
    classes: classes,
    disabled: disabled,
    disableAnimation: true,
    error: !!error,
    focused: focused,
    htmlFor: id,
    "data-quid": "Label-".concat(id),
    shrink: false
  }, children);
};

Label.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(Label);
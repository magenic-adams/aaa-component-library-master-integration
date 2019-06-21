import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx'; // Types

var defaultProps = {
  className: '',
  secondary: false
}; // Component styles manipulated entirely by theme

var styleClasses = function styleClasses(theme) {
  return {
    root: {
      color: theme.typographyValues.color,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight
    },
    primary: theme.typography.body1,
    secondary: theme.typography.body2
  };
};

var Body = function Body(_ref) {
  var _cx;

  var children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      id = _ref.id,
      secondary = _ref.secondary;
  return React.createElement("p", {
    className: cx('Body', classes.root, (_cx = {}, _defineProperty(_cx, classes.primary, !secondary), _defineProperty(_cx, classes.secondary, secondary), _cx), className),
    "data-quid": "Body-".concat(id)
  }, children);
};

Body.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(Body);
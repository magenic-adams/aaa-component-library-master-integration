import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

// Component styles manipulated entirely by theme
var styleClasses = function styleClasses(theme) {
  return {
    root: _objectSpread({
      color: theme.typography.color,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight
    }, theme.typography.body1),
    secondary: theme.typography.body2
  };
};

function Body(_ref) {
  var children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      id = _ref.id,
      secondary = _ref.secondary;
  return React.createElement("p", {
    className: cx('Body', classes.root, _defineProperty({}, classes.secondary, secondary), className),
    "data-quid": "Body-".concat(id)
  }, children);
}

export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(Body);
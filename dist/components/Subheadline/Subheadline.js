import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
;

// Component styles manipulated entirely by theme
var styleClasses = function styleClasses(theme) {
  return {
    root: _objectSpread({
      color: theme.typography.color,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight
    }, theme.typography.h2)
  };
};

var Subheadline = function Subheadline(_ref) {
  var children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      id = _ref.id;
  return React.createElement("h2", {
    className: cx('Subheadline', classes.root, className),
    "data-quid": "Subheadline-".concat(id)
  }, children);
};

Subheadline.defaultProps = {
  className: ''
};
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(Subheadline);
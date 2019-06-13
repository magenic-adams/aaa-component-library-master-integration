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
    }, theme.typography.h1)
  };
};

function Headline(_ref) {
  var children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      id = _ref.id;
  return React.createElement("h1", {
    className: cx('Headline', classes.root, className),
    "data-quid": "Headline-".concat(id)
  }, children);
}

export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(Headline);
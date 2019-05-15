import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/styles';
import cx from 'clsx';
var styleClasses = {
  root: {
    '& .Button': {
      marginTop: '8px',
      marginBottom: '8px'
    }
  }
};

function ButtonGroup(_ref) {
  var children = _ref.children,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      theme = _ref.theme;
  console.log('TODO:NEXT analyze usage of theme for breakpoints');
  return React.createElement("div", {
    className: cx('ButtonGroup', classes.root, className)
  }, children);
}

export default withStyles(styleClasses)(withTheme(ButtonGroup));
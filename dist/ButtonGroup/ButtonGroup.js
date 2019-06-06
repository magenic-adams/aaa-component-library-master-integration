import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

var styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty({
      width: '100%',
      '& .Button': {
        marginTop: '8px',
        marginBottom: '8px'
      }
    }, theme.breakpoints.up('md'), {
      width: 'inherit'
    })
  };
};

function ButtonGroup(_ref) {
  var children = _ref.children,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return React.createElement("div", {
    className: cx('ButtonGroup', classes.root, className)
  }, children);
}

ButtonGroup.defaultProps = {
  className: ''
};
export default withStyles(styleClasses, {
  withTheme: true
})(ButtonGroup);
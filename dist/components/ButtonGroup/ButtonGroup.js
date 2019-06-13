import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/* eslint-disable react/require-default-props */

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

var styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty({
      width: '100%',
      marginTop: 24,
      marginBottom: 24,
      '& .Button:nth-child(n+1)': {
        marginTop: 8
      }
    }, theme.breakpoints.up('md'), {
      width: 'inherit'
    })
  };
};

function ButtonGroup(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className;
  return React.createElement("div", {
    className: cx('ButtonGroup', classes.root, className)
  }, children);
}

ButtonGroup.defaultProps = {
  className: ''
};
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(ButtonGroup);
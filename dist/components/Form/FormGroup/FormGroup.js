import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles'; // Components

import MUIFormGroup from '@material-ui/core/FormGroup';

var styleClasses = function styleClasses() {
  return {
    root: {
      marginTop: 16,
      marginBottom: 16
    }
  };
};

function FormGroup(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className;
  return React.createElement(MUIFormGroup, {
    className: cx('FormGroup', className),
    classes: classes
  }, children);
}

FormGroup.defaultProps = {
  className: PropTypes.string
};
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(FormGroup);
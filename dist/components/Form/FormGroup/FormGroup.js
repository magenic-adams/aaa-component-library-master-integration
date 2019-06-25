import React from 'react';
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

;
;
var defaultProps = {
  className: ''
};

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className;
  return React.createElement(MUIFormGroup, {
    className: cx('FormGroup', className),
    classes: classes
  }, children);
};

FormGroup.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(FormGroup);
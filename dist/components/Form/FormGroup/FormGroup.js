import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';

// Components
import MUIFormGroup from '@material-ui/core/FormGroup';

const styleClasses = () => ({
  root: {
    marginTop: 16,
    marginBottom: 16,
  },
});

function FormGroup({ children, classes, className }) {
  return (
    <MUIFormGroup
      className={cx('FormGroup', className)}
      classes={classes}
    >
      {children}
    </MUIFormGroup>
  );
}

FormGroup.defaultProps = {
  className: string,
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(FormGroup);

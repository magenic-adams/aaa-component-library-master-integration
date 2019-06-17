import React from 'react';
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

type propTypes = {
  children: any,
  classes: any,
  className?: string,
};

function FormGroup({ children, classes, className }:propTypes) {
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
  className: '',
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(FormGroup);

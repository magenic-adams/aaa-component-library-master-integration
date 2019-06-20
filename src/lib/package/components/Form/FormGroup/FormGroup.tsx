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

interface RequiredProps {
  children: any,
};

interface OptionalProps {
  classes?: any, // MUI Decorator
  className?: string,
};

const defaultProps:OptionalProps = {
  className: '',
};

const FormGroup:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  children,
  classes,
  className,
}) => {
  return (
    <MUIFormGroup
      className={cx('FormGroup', className)}
      classes={classes}
    >
      {children}
    </MUIFormGroup>
  );
};

FormGroup.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(FormGroup);

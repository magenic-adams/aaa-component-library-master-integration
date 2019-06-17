import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

type propTypes = {
  // MUI Decorator
  classes: any,
  // Passed Props
  className?: string,
  children: any,
  id: string | number,
  secondary?: boolean,
};

// Component styles manipulated entirely by theme
const styleClasses = (theme:{
  typography: {
    color: string,
    fontFamily: string,
    fontWeight: string,
    body1: {
      color: string,
      fontFamily: string,
      fontWeight: string,
    },
    body2: {
      color: string,
      fontFamily: string,
      fontWeight: string,
    }
  }
}):{
  root: any,
  secondary: any
} => {
  return {
    root: {
      color: theme.typography.color,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      ...theme.typography.body1,
    },
    secondary: theme.typography.body2,
  };
};

function Body({
  children,
  className,
  classes,
  id,
  secondary,
}:propTypes){
  return (
    <p
      className={cx(
        'Body',
        classes.root,
        { [classes.secondary]: secondary },
        className,
      )}
      data-quid={`Body-${id}`}
    >
      {children}
    </p>
  );
}

Body.defaultProps = {
  className: '',
  secondary: false,
}

export default withStyles(styleClasses, { index: 0, withTheme: true })(Body);

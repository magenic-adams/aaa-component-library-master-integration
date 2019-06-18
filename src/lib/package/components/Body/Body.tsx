import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

interface RequiredProps {
  id: string | number,
  children: any,
}
interface OptionalProps {
  classes?: any, // MUI Decorator
  className?: string,
  secondary?: boolean,
}

const defaultProps:OptionalProps = {
  className: '',
  secondary: false,
}

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
  primary: any,
  secondary: any
} => {
  return {
    root: {
      color: theme.typography.color,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
    },
    primary: theme.typography.body1,
    secondary: theme.typography.body2,
  };
};

const Body:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  children,
  className,
  classes,
  id,
  secondary,
}) => {
  return (
    <p
      className={cx(
        'Body',
        classes.root,
        { 
          [classes.primary]: !secondary,
          [classes.secondary]: secondary
        },
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

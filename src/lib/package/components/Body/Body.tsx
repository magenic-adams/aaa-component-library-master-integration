import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

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
};

// Component styles manipulated entirely by theme
const styleClasses = (theme:Theme):{
  root: any,
  primary: any,
  secondary: any
} => {
  return {
    root: {
      color: theme.typographyValues.color,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight,
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
          [classes.secondary]: secondary,
        },
        className,
      )}
      data-quid={`Body-${id}`}
    >
      {children}
    </p>
  );
};

Body.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(Body);

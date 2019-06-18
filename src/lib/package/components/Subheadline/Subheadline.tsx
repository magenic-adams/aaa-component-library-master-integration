import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

interface RequiredProps {
  classes: any, // MUI Decorator
  id: string,
  children: any,
};

interface OptionalProps {
  classes?: any, // MUI Decorator
  className?: string,
}

// Component styles manipulated entirely by theme
const styleClasses = (theme:any) => {
  return {
    root: {
      color: theme.typography.color,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      ...theme.typography.h2,
    },
  };
};

const Subheadline:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  children,
  className,
  classes,
  id,
}) => {
  return (
    <h2
      className={cx('Subheadline', classes.root, className)}
      data-quid={`Subheadline-${id}`}
    >
      {children}
    </h2>
  );
}

Subheadline.defaultProps = {
  className: '',
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(Subheadline);

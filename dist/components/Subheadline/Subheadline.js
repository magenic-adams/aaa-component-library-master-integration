import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

type propTypes = {
  // MUI Decorator
  classes: any,
  // Passed Props
  className?: string,
  children: string,
};

// Component styles manipulated entirely by theme
const styleClasses = theme => {
  return {
    root: {
      color: theme.typography.color,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      ...theme.typography.h2,
    },
  };
};

function Subheadline({
  children,
  className,
  classes,
  id,
}:propTypes){
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

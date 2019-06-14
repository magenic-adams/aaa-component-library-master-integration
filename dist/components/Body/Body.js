import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

type propTypes = {
  // MUI Decorator
  classes: PropTypes.object,
  // Passed Props
  className: PropTypes.string,
  children: PropTypes.string,
  secondary: PropTypes.bool,
};

// Component styles manipulated entirely by theme
const styleClasses = theme => {
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

export default withStyles(styleClasses, { index: 0, withTheme: true })(Body);

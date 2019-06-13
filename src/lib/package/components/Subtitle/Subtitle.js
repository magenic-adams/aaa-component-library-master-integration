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
};

// Component styles manipulated entirely by theme
const styleClasses = theme => {
  return {
    root: {
      color: theme.typography.color,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      ...theme.typography.subtitle1,
    },
  };
};

function Subtitle({
  children,
  className,
  classes,
  id,
}:propTypes){
  return (
    <div
      className={cx('Subtitle', classes.root, className)}
      data-quid={`Subtitle-${id}`}
    >
      {children}
    </div>
  );
}

export default withStyles(styleClasses, { index: 0, withTheme: true })(Subtitle);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import cx from 'clsx';

const styleClasses = theme => ({
  formControl: {
    position: 'relative',
    transform: 'unset',
  },
  root: {
    display: 'block',
    marginBottom: -8,
    color: theme.palette.colorVariables.BLACK,
    fontFamily: theme.typography.fontFamily
  },
  focused: {
    color: `${theme.palette.colorVariables.BLACK} !important`,
  },
  error: {
    color: `${theme.palette.colorVariables.BLACK} !important`,
  },
  disabled: {
    color: `${theme.palette.colorVariables.BLACK} !important`,
  }
});

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  children: PropTypes.string,
  className?: PropTypes.string,
  htmlFor: PropTypes.string,
};

function Label({ classes, className, children, htmlFor }): propTypes {
  return (
    <InputLabel
      className={cx("InputLabel", className)}
      classes={classes}
      disableAnimation
      htmlFor={htmlFor}
      shrink={false}>
      {children}
    </InputLabel>
  );
}

Label.defaultProps = {
  className: ""
};

export default withStyles(styleClasses, { withTheme: true })(Label);

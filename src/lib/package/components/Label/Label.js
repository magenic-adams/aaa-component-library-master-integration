import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIInputLabel from '@material-ui/core/InputLabel';
import cx from 'clsx';

const styleClasses = theme => ({
  root: {
    color: theme.palette.colorVariables.BLACK,
    display: 'block',
    marginBottom: -8,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight,
    ...theme.typography.body1,
  },
  formControl: {
    position: 'relative',
    transform: 'unset',
  },
});

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  children: PropTypes.string,
  className?: PropTypes.string,
  disabled?: PropTypes.bool,
  error?: PropTypes.bool,
  focused?: PropTypes.bool,
  id: PropTypes.string,
};

function Label({
    children,
    classes,
    className,
    disabled,
    error,
    focused,
    id,
  }): propTypes {
  return (
    <MUIInputLabel
      className={cx('InputLabel', className)}
      classes={classes}
      disabled={disabled}
      disableAnimation
      error={error}
      focused={focused}
      htmlFor={id}
      data-quid={`Label-${id}`}
      shrink={false}
    >
      {children}
    </MUIInputLabel>
  );
}

Label.defaultProps = {
  className: '',
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(Label);
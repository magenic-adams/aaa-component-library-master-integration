import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import cx from 'clsx';

type propTypes = {
  // MUI Decorator
  classes: PropTypes.object,
  // Passed Props
  className: PropTypes.string,
  children?: PropTypes.string | PropTypes.node,
  htmlFor?: PropTypes.string,
};

const styleClasses = theme => ({
  formControl: {
    transform: 'unset',
    top: '-8px',
  },
  root: {
    color: theme.palette.colorVariables.BLACK,
    width: '343px',
    height: '19px',
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
})

class Label extends Component {
  render() {
    const {
      classes,
      className,
      children,
      htmlFor,
    } = this.props;

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
}

Label.defaultProps = {
  className: ""
}

Label.propTypes = {
  // MUI Decorator
  classes: PropTypes.object.isRequired,
  // Passed Props
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default withStyles(styleClasses, { withTheme: true })(Label);

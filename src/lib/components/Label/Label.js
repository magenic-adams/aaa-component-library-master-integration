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
    color: '#2a282c',
    width: '343px',
    height: '19px',
    fontFamily: theme.typography.fontFamily,
    '&.Mui-focused,&.Mui-error,&.Mui-disabled': {
      color: '#2a282c',
    }
  }
})

class Label extends Component<propTypes> {
  render() {
    const {
      htmlFor,
      classes,
      className,
      children
    } = this.props;

    return (
      <InputLabel htmlFor={htmlFor} className={cx("InputLabel", className)} classes={classes}
        shrink={false} disableAnimation={true}>
        {children}
      </InputLabel>
    );
  }
}

export default withStyles(styleClasses, {withTheme: true})(Label);

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
  color?: 'primary' | 'secondary',
  disabled: PropTypes.bool,
  href?: PropTypes.bool,
  onClick: () => {}
};

const styleClasses = {
  // root: {
  //   width: '343px',
  //   height: '19px',
  //   fontFamily: 'Roboto',
  //   fontSize: '16px',
  //   fontWeight: 'normal',
  //   fontStyle: 'normal',
  //   fontStretch: 'normal',
  //   lineHeight: '1.5',
  //   letterSpacing: 'normal',
  // }
  formControl: {
    transform: 'unset',
    'text-transform': 'capitalize',
    top: '-8px',
  },
  root: {
    color: '#2a282c',
    width: '343px',
    height: '19px',
    transform: 'unset',
    'text-transform': 'capitalize',
    top: '-8px',
    '&.Mui-focused,&.Mui-error,&.Mui-disabled': {
      color: '#2a282c',
    }
  }
}

class Label extends Component<propTypes> {
  render() {
    const {
      htmlFor,
      classes,
      disableAnimation,
      shrink,
      className,
      children
    } = this.props;

    return (
      <InputLabel htmlFor={htmlFor} className={cx("InputLabel", className)} classes={classes}
        shrink={shrink} disableAnimation={disableAnimation}>
        {children || 'Label'}
      </InputLabel>
    );
  }
}

export default withStyles(styleClasses)(Label);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import MUIButton from '@material-ui/core/Button';
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
  root: {
    border: 0,
    boxShadow: 'none',
    color: 'white',
    height: 48,
    padding: '0 16px',
    textTransform: 'none',
    minWidth: '200px',
  },
  label: {
    fontSize: '18px',
  },
  containedPrimary: {
    background: '#4470bf',
    '&:active,&:hover': {
      background: "#395fa4"
    },
    '&:disabled': {
      background: '#cccbce',
      color: 'white',
    }
  },
  containedSecondary: {
    color: '#4470bf',
    border: '1px solid #4470bf',
    background: 'transparent',
    '&:active,&:hover': {
      background: "rgba(68, 112, 191, 0.1)"
    },
    '&:disabled': {
      background: 'transparent',
      borderColor: '#cccbce'
    }
  },
}


class Button extends Component<propTypes> {
  static defaultProps = {
    color: 'primary'
  }

  render() {
    const {
      children,
      className,
      classes,
      disabled,
      color,
      href,
      onClick
    } = this.props;
    return (
      <MUIButton
        className={cx('Button', className)}
        classes={classes}
        disabled={disabled}
        color={color}
        variant="contained"
        href={href}
        onClick={onClick}
      >
        {children}
      </MUIButton>
    );
  }
}

export default withStyles(styleClasses)(Button);

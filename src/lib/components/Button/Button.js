import React from 'react';
import PropTypes from 'prop-types';
import MUIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

type propTypes = {
  // MUI Decorator
  classes: PropTypes.object,
  // Passed Props
  className: PropTypes.string,
  children: PropTypes.string | PropTypes.node,
  color?: 'primary' | 'secondary',
  disabled: PropTypes.bool,
  fadeUp?: PropTypes.bool,
  id: PropTypes.string,
  href?: PropTypes.bool,
  forwardedRef?: {current: {}},
  onClick: () => {},
};

const styleClasses = theme => {
  return {
    root: {
      display: 'block',
      border: 0,
      height: '48px',
      boxShadow: 'none',
      color: theme.palette.common.white,
      padding: '0 16px',
      textTransform: 'none',
      marginTop: 0,
      transition: '300ms transform ease-in-out',
      transform: 'translateY(0)',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '314px',
      },
    },
    label: {
      fontSize: '18px',
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
      },
    },
    containedPrimary: {
      background: theme.palette.primary.main,
      '&:active,&:hover': {
        background: theme.palette.primary.dark,
      },
      '&:disabled': {
        background: theme.palette.disabled.main,
        color: theme.palette.common.white,
      },
    },
    containedSecondary: {
      color: theme.palette.primary.main,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      background: theme.palette.colorVariables.TRANSPARENT,
      '&:active,&:hover': {
        background: theme.palette.colorVariables.SECONDARY_HOVER,
      },
      '&:disabled': {
        background: theme.palette.colorVariables.TRANSPARENT,
        borderColor: theme.palette.disabled.main,
      },
    },
    fadeUp: {
      transform: 'translateY(-8px)',
    },
  };
};


function Button({
  children,
  className,
  classes,
  disabled,
  fadeUp,
  id,
  color,
  href,
  forwardedRef,
  onClick,
}:propTypes){
  return (
    <MUIButton
      className={cx(
        'Button',
        classes.root,
        { [classes.fadeUp]: fadeUp },
        className,
      )}
      classes={{
        root: classes.root,
        label: classes.label,
        containedPrimary: classes.containedPrimary,
        containedSecondary: classes.containedSecondary,
      }}
      disabled={disabled}
      disableRipple
      data-quid={id}
      color={color}
      variant="contained"
      href={href}
      ref={forwardedRef}
      onClick={onClick}
    >
      {children}
    </MUIButton>
  );
}

Button.defaultProps = {
  color: 'primary',
  fadeUp: false,
  forwardedRef: {},
  href: null,
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(Button);

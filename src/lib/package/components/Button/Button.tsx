import React from 'react';
import PropTypes from 'prop-types';
import MUIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

type propTypes = {
  // MUI Decorator
  classes: object,
  // Passed Props
  className?: string,
  children: string | PropTypes.node,
  color?: 'primary' | 'secondary',
  disabled: boolean,
  fadeUp?: boolean,
  id: string,
  href?: boolean,
  forwardedRef?: { current: {} },
  onClick: () => {}
};

const styleClasses = theme => {
  return {
    root: {
      display: 'block',
      border: 0,
      height: 48,
      lineHeight: '48px',
      boxShadow: 'none',
      color: theme.palette.colorVariables.WHITE,
      padding: '0 16px',
      textTransform: 'none',
      marginTop: 0,
      transition: '300ms transform ease-in-out',
      transform: 'translateY(0)',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 314,
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
    label: {
      lineHeight: '48px',
      height: '100%',
      fontSize: 18,
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
      ...theme.typography.buttonPrimary,
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
      fontWeight: theme.typography.fontWeight,
      ...theme.typography.buttonSecondary,
    },
    fadeUp: {
      transform: 'translateY(-8px)',
    },
    iconButton: {
      display: 'inline-block',
      verticalAlign: `bottom`,
      width: 48,
      height: 48,
      border: `1px solid ${theme.palette.colorVariables.GRAY}`,
      borderRadius: 4,
      backgroundColor: `${theme.palette.colorVariables.WHITE}`,
      '&:active,&:hover': {
        borderWidth: 1,
        backgroundColor: `${theme.palette.colorVariables.SECONDARY_HOVER}`,
        borderColor: `${theme.palette.colorVariables.DARKER_BLUE}`,
        '& svg': {
          color: `${theme.palette.primary.main}`,
        },
      },
      '&:disabled': {
        background: `${theme.palette.disabled.main}`,
        border: `none`,
        '&:hover': {
          backgroundColor: `${theme.palette.disabled.main}`,
        },
        '& svg': {
          color: `${theme.palette.colorVariables.GRAY}`,
        },
      },
      '&:nth-child(n+1)': {
        marginRight: 8,
      },
      '&:nth-child(n+2)': {
        marginLeft: 8,
      },
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
  isIconButton,
}: propTypes) {
  return (
    <MUIButton
      className={cx(
        'Button',
        {
          [classes.fadeUp]: fadeUp,
          [classes.iconButton]: isIconButton,
        },
        className
      )}
      classes={{
        root: classes.root,
        containedPrimary: classes.containedPrimary,
        containedSecondary: classes.containedSecondary,
        label: classes.label,
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
  className: '',
  fadeUp: false,
  forwardedRef: {},
  href: null,
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(Button);

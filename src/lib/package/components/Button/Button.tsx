import React from 'react';
import MUIButton from '@material-ui/core/Button';
import { withTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { get } from 'lodash';
import cx from 'clsx';

import SvgIcon from '../SvgIcon/SvgIcon';

export interface ButtonStylesOverride {
  borderRightStyle?: string | undefined;
  activeColor?: string | undefined;
  background?: string | undefined;
}

interface RequiredProps {
  children: string | any;
  id: string;
  onClick: (evt: React.SyntheticEvent) => void;
}

interface OptionalProps {
  classes?: any, // MUI Decorator
  color?: 'primary' | 'secondary',
  className?: string,
  disabled?: boolean,
  fadeUp?: boolean,
  forwardedRef?: React.RefObject<any>,
  isIconButton?: boolean,
  href?: string,
  leftIcon?: any,
  type?: 'button' | 'submit',
  overrides?: ButtonStylesOverride;
}

const defaultProps: OptionalProps = {
  color: 'primary',
  className: '',
  disabled: false,
  fadeUp: false,
  isIconButton: false,
  href: '',
  type: 'button',
};

const buttonOverridesDefault: ButtonStylesOverride = {};

const styleClasses = makeStyles<Theme, ButtonStylesOverride>(theme => {
  return {
    root: {
      display: 'block',
      border: 0,
      height: 48,
      lineHeight: '48px',
      boxShadow: 'none',
      padding: '0 16px',
      textTransform: 'none',
      marginTop: 0,
      transition: '300ms transform ease-in-out',
      transform: 'translateY(0)',
      width: 314,
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
    label: {
      lineHeight: '48px',
      height: '100%',
      fontSize: 18,
      '-webkit-font-smoothing': 'antialiased',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        fontWeight: 700,
      },
    },
    containedPrimary: {
      ...theme.typographyElements.buttonPrimary,
      background: theme.palette.primary.main,
      '&:active,&:hover': {
        background: theme.palette.primary.dark,
        boxShadow: 'unset',
      },
      '&:disabled': {
        background: theme.secondaryPalette.disabled.main,
        color: theme.secondaryPalette.colorVariables.WHITE,
      },
    },
    containedSecondary: (props: ButtonStylesOverride) => ({
      ...theme.typographyElements.buttonSecondary,
      color: get(props, 'activeColor', theme.palette.primary.main),
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      background: get(
        props,
        'background',
        theme.secondaryPalette.colorVariables.TRANSPARENT,
      ),
      [theme.breakpoints.down('sm')]: {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
        color: theme.palette.primary.main,
      },
      '&:active,&:hover': {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
        boxShadow: 'unset',
      },
      '&:disabled': {
        background: theme.secondaryPalette.colorVariables.TRANSPARENT,
        borderColor: theme.secondaryPalette.disabled.main,
      },
      fontWeight: theme.typographyValues.fontWeight,
      borderRightStyle: get(props, 'borderRightStyle', 'solid'),
    }),
    fadeUp: {
      transform: 'translateY(-8px)',
    },
    iconButton: {
      display: 'inline-block',
      verticalAlign: `bottom`,
      width: 48,
      height: 48,
      border: `1px solid ${theme.secondaryPalette.colorVariables.GRAY}`,
      borderRadius: 4,
      backgroundColor: theme.secondaryPalette.colorVariables.WHITE,
      '&:active,&:hover': {
        borderWidth: 1,
        backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
        borderColor: theme.secondaryPalette.colorVariables.DARKER_BLUE,
        '& svg': {
          color: theme.palette.primary.main,
        },
      },
      '&:disabled': {
        background: theme.secondaryPalette.disabled.main,
        border: `none`,
        '&:hover': {
          backgroundColor: theme.secondaryPalette.disabled.main,
        },
        '& svg': {
          color: theme.secondaryPalette.colorVariables.GRAY,
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
});

const Button: React.FunctionComponent<
  RequiredProps & OptionalProps
> = props => {
  const {
    children,
    className,
    color,
    disabled,
    fadeUp,
    forwardedRef,
    href,
    id,
    type,
    onClick,
    isIconButton,
    leftIcon,
    overrides = buttonOverridesDefault,
  } = props;

  const classes = styleClasses(overrides);

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
      type={type}
      onClick={onClick}
    >
      {leftIcon && <SvgIcon className={cx('leftIcon')} id='button-icon' svgIcon={leftIcon}/>}
      {children}
    </MUIButton>
  );
};

Button.defaultProps = defaultProps;

export default withTheme(Button);

import React from 'react';
import MUIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface RequiredProps {
  children: string | any,
  id: string,
  onClick: (evt:React.SyntheticEvent) => void
};

interface OptionalProps {
  classes?: any, // MUI Decorator
  color?: 'primary' | 'secondary',
  className?: string,
  disabled?: boolean,
  fadeUp?: boolean,
  forwardedRef?: React.RefObject<any>,
  isIconButton?: boolean,
  href?: string,
  type?: 'button' | 'submit',
}

const defaultProps:OptionalProps = {
  color: 'primary',
  className: '',
  disabled: false,
  fadeUp: false,
  isIconButton: false,
  href: '',
  type: 'button',
};

const styleClasses = (theme:Theme):{
    root: any,
    label: any,
    containedPrimary: any,
    containedSecondary: any,
    fadeUp: any,
    iconButton: any,
  } => {
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
      ...theme.typographyElements.buttonPrimary,
      background: theme.palette.primary.main,
      '&:active,&:hover': {
        background: theme.palette.primary.dark,
      },
      '&:disabled': {
        background: theme.secondaryPalette.disabled.main,
        color: theme.secondaryPalette.colorVariables.WHITE,
      },
    },
    containedSecondary: {
      ...theme.typographyElements.buttonSecondary,
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      background: theme.secondaryPalette.colorVariables.TRANSPARENT,
      '&:active,&:hover': {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
      },
      '&:disabled': {
        background: theme.secondaryPalette.colorVariables.TRANSPARENT,
        borderColor: theme.secondaryPalette.disabled.main,
      },
      fontWeight: theme.typographyValues.fontWeight,
    },
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
      backgroundColor: `${theme.secondaryPalette.colorVariables.WHITE}`,
      '&:active,&:hover': {
        borderWidth: 1,
        backgroundColor: `${theme.secondaryPalette.colorVariables.SECONDARY_HOVER}`,
        borderColor: `${theme.secondaryPalette.colorVariables.DARKER_BLUE}`,
        '& svg': {
          color: `${theme.palette.primary.main}`,
        },
      },
      '&:disabled': {
        background: `${theme.secondaryPalette.disabled.main}`,
        border: `none`,
        '&:hover': {
          backgroundColor: `${theme.secondaryPalette.disabled.main}`,
        },
        '& svg': {
          color: `${theme.secondaryPalette.colorVariables.GRAY}`,
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

const Button:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  children,
  className,
  classes,
  color,
  disabled,
  fadeUp,
  forwardedRef,
  href,
  id,
  type,
  onClick,
  isIconButton,
}) => {
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
      {children}
    </MUIButton>
  );
};

Button.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(Button);

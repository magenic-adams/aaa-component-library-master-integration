import React from 'react';
import { withStyles } from '@material-ui/styles'; // listed as a dependency
import cx from 'clsx';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// MaterialUI components
import { Link as MuiLink } from '@material-ui/core';

// Utilities
import noop from '../../utilities/noop'; // used the Link instead of the button


interface RequiredProps {
  id: string,
  children: string | any,
};

interface OptionalProps {
  forwardedRef?: React.RefObject<any>,
  classes?: any, // MUI Decorator
  className?: string,
  href?: string,
  onClick?: (evt:React.SyntheticEvent) => void,
  onBlur?: (evt:React.FocusEvent) => void,
};

const defaultProps:OptionalProps = {
  className: '',
  href: '',
  onClick: noop,
  onBlur: noop,
};

const styleClasses = (theme:Theme):{
  // CSS Classes
  primary: any,
  secondary: any,
} => ({
  primary: {
    color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.67,
    letterSpacing: 'normal',
    padding: '12px 0 12px 0',
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: 3,
      padding: '13.5px 0 13.5px 0',
    },
    '&:hover': {
      color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE,
    },
  },
  secondary: {
    color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: 16,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.75,
    letterSpacing: 'normal',
    padding: '13.5px 0 13.5px 0',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: 3.14,
      letterSpacing: 'normal',
      padding: '14.5px 0 14.5px 0',
    },
    '&:hover': {
      color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE,
    },
  },
});

const Link:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  id,
  children,
  className,
  classes,
  href,
  forwardedRef,
  onClick,
  onBlur,
}) => (
   <MuiLink 
    id={id}
    className={cx('Link', [className ==='primary' ? classes.primary : classes.secondary] )}
    href={href}
    ref={forwardedRef}
    onBlur={onBlur}
    onClick={onClick}
  >
    {children}
  </MuiLink>
);

Link.defaultProps = defaultProps;

export default withStyles(styleClasses, { withTheme: true })(Link);

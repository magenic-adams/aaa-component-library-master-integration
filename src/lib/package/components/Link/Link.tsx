import React from 'react';
import { withStyles } from '@material-ui/styles'; // listed as a dependency

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
  color?: 'primary' | 'secondary',
  href?: string,
  onClick?: (evt:React.SyntheticEvent) => void,
  onBlur?: (evt:React.FocusEvent) => void,
  rel?: string,
  target? :string
};

const defaultProps:OptionalProps = {
  className: '',
  href: '',
  color: 'primary',
  onClick: noop,
  onBlur: noop,
  rel: 'noopener',
  target: '_blank',
};

const styleClasses = (theme:Theme):{
  // CSS Classes
  colorPrimary: any,
  colorSecondary: any,
} => ({
    colorPrimary: {
      color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
      cursor: 'pointer',
      fontSize: 18,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 2.67,
      letterSpacing: 'normal',
      padding: '13.5px 0 13.5px 0',
      [theme.breakpoints.down('md')]: {
          fontSize: 18,
          lineHeight: 3,
          padding: '12px 0 12px 0',
      },
      '&:hover': {
          color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE,
      },
  },
  colorSecondary: {
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
   children,
   className,
   classes,
   color,
   href,
   id, 
   onBlur, 
   onClick,
   rel,
   target,
}) => (
 
  <MuiLink 
  className={className}
  color={color}
  id={id}
  href={href}
  onBlur={onBlur}
  onClick={onClick}
  rel={rel}
  target={target}
  TypographyClasses={classes}
>
  {children}
</MuiLink>
);

Link.defaultProps = defaultProps;

export default withStyles(styleClasses, { withTheme: true })(Link);

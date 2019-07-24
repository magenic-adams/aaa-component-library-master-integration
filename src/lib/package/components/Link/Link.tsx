import React from 'react';
import { withStyles } from '@material-ui/styles'; 

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// MaterialUI components
import { Link as MuiLink } from '@material-ui/core';

// Utilities
import noop from '../../utilities/noop';


interface RequiredProps {
  id: string;
  children: string;
  component: 'a' | 'button';
};

interface OptionalProps {
  forwardedRef?: React.RefObject < any >;
  classes?: any; // MUI Decorator
  className?: string;
  color?: 'primary' | 'secondary';
  href?: string;
  onClick?: (evt: React.SyntheticEvent) => void;
  onBlur?: (evt: React.FocusEvent) => void;
  rel?: string;
  target?: string;
};

const defaultProps: OptionalProps = {
  className: '',
  href: '',
  color: 'primary',
  onClick: noop,
  onBlur: noop,
  rel: 'noopener',
  target: '_blank',
};

const styleClasses = (theme: Theme): {
  // CSS Classes
  root: any,
  colorPrimary: any,
  colorSecondary: any,
} => ({
  root: {
    cursor: 'pointer',
  },
  colorPrimary: {
    ...theme.typographyElements.linkPrimary,
    '&:hover': {
      color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE,
    },
  },
  colorSecondary: {
    color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
    ...theme.typographyElements.linkSecondary,
    padding: '13.5px 0 13.5px 0',
    '&:hover': {
      color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE,
    },
  },
});

const Link: React.FunctionComponent < RequiredProps & OptionalProps > = ({
  children,
  className,
  classes,
  color,
  component,
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
    component={component}
    id={id}
    href={href}
    onBlur={onBlur}
    onClick={onClick}
    rel={rel}
    target={target}
    underline="always"
    TypographyClasses={classes}
  >
    {children}
  </MuiLink>
);

Link.defaultProps = defaultProps;

export default withStyles(styleClasses, { withTheme: true })(Link);

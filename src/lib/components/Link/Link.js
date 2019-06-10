import React from 'react';
import { withStyles } from '@material-ui/styles'; // listed as a dependency
import cx from 'clsx';
import { Link as MuiLink } from '@material-ui/core'; // used the Link instead of the button

const styleClasses = theme => ({
  primary: {
    color: theme.palette.colorVariables.DARKER_BLUE,
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
      color: theme.palette.colorVariables.VERY_DARK_BLUE,
    },
  },
  secondary: {
    color: theme.palette.colorVariables.DARKER_BLUE,
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
      color: theme.palette.colorVariables.VERY_DARK_BLUE,
    },
  },
});

const Link = ({ id, className, onClick, classes, href, children, onBlur }) => (
  <MuiLink
    id={id}
    className={cx('Link', [
      className === 'primary' ? classes.primary : classes.secondary,
    ])}
    href={href}
    onBlur={onBlur}
    onClick={onClick}
  >
    {children}
  </MuiLink>
);

export default withStyles(styleClasses, { withTheme: true })(Link);

import { Theme } from '@material-ui/core/styles/createMuiTheme';

export const styleClasses = (
  theme: Theme,
): {
  root: any;
  formControlStyle: any;
  disabledIcon: any;
  icon: any;
  select: any;
  selectMenu: any;
  disabled: any;
  input: any;
  error: any;
  focused: any;
  dropdown: any;
  displayNone: any;
} => ({
  root: {
    borderRadius: 4,
  },
  formControlStyle: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 534,
    },
  },
  select: {
    '&:focus': {
      border: 0,
      background: 'none',
    },
  },
  selectMenu: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    ...theme.typography.body1,
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: 32,
    top: 'calc(50% - 15px)',
  },
  disabledIcon: {
    color: theme.secondaryPalette.colorVariables.GRAY,
    fontSize: 32,
    top: 'calc(50% - 15px)',
  },
  disabled: {
    background: theme.secondaryPalette.disabled.main,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  input: {
    height: 48,
    border: 0,
    borderRadius: 4,
    background: theme.secondaryPalette.colorVariables.WHITE,
    alignItems: 'initial',
    boxShadow: `inset 0 0 0 1px ${theme.secondaryPalette.colorVariables.GRAY}`,
    '&:hover': {
      boxShadow: `inset 0 0 0 1px ${
        theme.secondaryPalette.colorVariables.DARKER_BLUE
      }`,
    },
    '&.Mui-disabled': {
      boxShadow: 'none',
    },
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 534,
    },
  },
  error: {
    boxShadow: `inset 0 0 0 2px ${theme.palette.error.main}`,
    '&$focused': {
      boxShadow: `inset 0 0 0 2px ${theme.palette.error.main}`,
    },
  },
  focused: {
    border: 0,
    borderRadius: 4,
    background: theme.secondaryPalette.colorVariables.WHITE,
    boxShadow: `inset 0 0 0 2px ${
      theme.secondaryPalette.colorVariables.DARKER_BLUE
    }`,
  },
  dropdown: {
    marginTop: 4,
    left: 0,
    border: `2px solid ${theme.secondaryPalette.colorVariables.DARKER_BLUE}`,
    boxShadow: `0 2px 8px 0 ${theme.secondaryPalette.colorVariables.GRAY}`,
    '& ul': {
      padding: 0,
    },
    '& li:last-child': {
      borderBottom: 'none',
    },
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 534,
    },
  },
  displayNone: {
    display: 'none',
  },
});

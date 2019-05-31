/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// https://next.material-ui.com/customization/themes
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const AAA_COLOR_DISABLED = '#cccbce';
const AAA_COLOR_ERROR = '#da291c';
const AAA_COLOR_MAIN_BLUE = '#4470bf';
const AAA_COLOR_MAIN_BLACK = '#2a282c';
const AAA_COLOR_MAIN_DARK_BLUE = '#395fa4';
const AAA_COLOR_MAIN_DARKER_BLUE = '#09216a';
const AAA_COLOR_MAIN_VERY_DARK_BLUE = '#031343';
const AAA_COLOR_MAIN_GRAY = '#717174';
const AAA_COLOR_MAIN_WHITE = '#ffffff';
const AAA_COLOR_SECONDARY_HOVER = 'rgba(68, 112, 191, 0.1)';
const AAA_COLOR_MAIN_TRANSPARENT = 'transparent';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      // NOTE: when not specifying other values like "light", they will
      // be calculated from palette.primary.main,
      main: AAA_COLOR_MAIN_BLUE,
      dark: AAA_COLOR_MAIN_DARK_BLUE,
    },
    error: {
      main: AAA_COLOR_ERROR,
    },
    disabled: {
      main: AAA_COLOR_DISABLED,
    },
    colorVariables: {
      SECONDARY_HOVER: AAA_COLOR_SECONDARY_HOVER,
      BLACK: AAA_COLOR_MAIN_BLACK,
      DARKER_BLUE: AAA_COLOR_MAIN_DARKER_BLUE,
      VERY_DARK_BLUE: AAA_COLOR_MAIN_VERY_DARK_BLUE,
      GRAY: AAA_COLOR_MAIN_GRAY,
      WHITE: AAA_COLOR_MAIN_WHITE,
      TRANSPARENT: AAA_COLOR_MAIN_TRANSPARENT,
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

type propTypes = {
  children: PropTypes.node,
};

export default function AAAThemeProvider({children}:propTypes){
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

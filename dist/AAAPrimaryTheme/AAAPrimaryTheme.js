// https://next.material-ui.com/customization/themes
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'; // Colors

import { AAA_COLOR_DISABLED, AAA_COLOR_ERROR, AAA_COLOR_MAIN_BLUE, AAA_COLOR_MAIN_DARK_BLUE, AAA_COLOR_SECONDARY_HOVER, AAA_COLOR_TRANSPARENT } from '../../constants/colors';
var theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440
    }
  },
  palette: {
    primary: {
      // NOTE: when not specifying other values like "light", they will
      // be calculated from palette.primary.main,
      main: AAA_COLOR_MAIN_BLUE,
      dark: AAA_COLOR_MAIN_DARK_BLUE
    },
    error: {
      main: AAA_COLOR_ERROR
    },
    disabled: {
      main: AAA_COLOR_DISABLED
    },
    // These are use defined variables we can use
    colorVariables: {
      SECONDARY_HOVER: AAA_COLOR_SECONDARY_HOVER,
      TRANSPARENT: AAA_COLOR_TRANSPARENT
    }
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif'
  }
});
export default function AAAThemeProvider(_ref) {
  var children = _ref.children;
  return React.createElement(ThemeProvider, {
    theme: theme
  }, children);
}
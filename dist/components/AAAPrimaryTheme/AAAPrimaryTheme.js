import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/* eslint-disable no-undef */

/* eslint-disable import/no-extraneous-dependencies */
// https://next.material-ui.com/customization/themes
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'; // Colors

import { AAA_COLOR_MAIN_ERROR, AAA_COLOR_MAIN_BLACK, AAA_COLOR_MAIN_BLUE, AAA_COLOR_MAIN_DISABLED, AAA_COLOR_MAIN_DARK_BLUE, AAA_COLOR_MAIN_DARKER_BLUE, AAA_COLOR_MAIN_ERROR_HOVER, AAA_COLOR_MAIN_GRAY, AAA_COLOR_MAIN_WHITE, AAA_COLOR_SECONDARY_HOVER, AAA_COLOR_TRANSPARENT, AAA_COLOR_MAIN_VERY_DARK_BLUE } from '../../constants/colors';
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
      main: AAA_COLOR_MAIN_ERROR,
      ERROR_HOVER: AAA_COLOR_MAIN_ERROR_HOVER
    },
    disabled: {
      main: AAA_COLOR_MAIN_DISABLED
    },
    // These are use defined variables we can use
    colorVariables: {
      SECONDARY_HOVER: AAA_COLOR_SECONDARY_HOVER,
      TRANSPARENT: AAA_COLOR_TRANSPARENT,
      BLACK: AAA_COLOR_MAIN_BLACK,
      DARKER_BLUE: AAA_COLOR_MAIN_DARKER_BLUE,
      VERY_DARK_BLUE: AAA_COLOR_MAIN_VERY_DARK_BLUE,
      GRAY: AAA_COLOR_MAIN_GRAY,
      WHITE: AAA_COLOR_MAIN_WHITE
    }
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: 400,
    // Medium
    color: AAA_COLOR_MAIN_BLACK
  }
}); // ** Typography ** //

theme.typography.h1 = _defineProperty({
  // Headline
  fontSize: 20,
  lineHeight: 1.5,
  fontWeight: 500
}, theme.breakpoints.up('lg'), {
  fontSize: 28,
  lineHeight: 1.57
});
theme.typography.h2 = _defineProperty({
  // Subheadline
  fontSize: 18,
  lineHeight: 1.45
}, theme.breakpoints.up('lg'), {
  fontSize: 22
});
theme.typography.subtitle1 = _defineProperty({
  // Subtitle 1 / Table Header
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 500
}, theme.breakpoints.up('lg'), {
  fontSize: 18,
  lineHeight: 1.45
});
theme.typography.body1 = _defineProperty({
  // Body 1 / Primary Copy
  fontSize: 16,
  lineHeight: 1.5
}, theme.breakpoints.up('lg'), {
  fontSize: 18,
  lineHeight: 1.45
});
theme.typography.body2 = _defineProperty({
  // Body 2 / Primary Copy
  fontSize: 14,
  lineHeight: 1.45
}, theme.breakpoints.up('lg'), {
  fontSize: 16,
  lineHeight: 1.5
});
theme.typography.buttonPrimary = _defineProperty({
  lineHeight: 1.45,
  fontSize: 18,
  fontWeight: 500
}, theme.breakpoints.up('md'), {
  fontSize: 20
});
theme.typography.buttonSecondary = {
  fontSize: 18,
  lineHeight: 1.45
};
export default function AAAThemeProvider(_ref) {
  var children = _ref.children;
  return React.createElement(ThemeProvider, {
    theme: theme
  }, children);
}
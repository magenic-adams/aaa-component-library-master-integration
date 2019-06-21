import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
// https://next.material-ui.com/customization/themes
import React from 'react';
import { ThemeProvider } from '@material-ui/styles'; // Augmented themea definition

import createStyleTheme from '../../utilities/createStyleTheme'; // Colors

import { AAA_COLOR_MAIN_ERROR, AAA_COLOR_MAIN_BLACK, AAA_COLOR_MAIN_BLUE, AAA_COLOR_MAIN_DISABLED, AAA_COLOR_MAIN_DARK_BLUE, AAA_COLOR_MAIN_DARKER_BLUE, AAA_COLOR_MAIN_ERROR_HOVER, AAA_COLOR_MAIN_GRAY, AAA_COLOR_MAIN_WHITE, AAA_COLOR_SECONDARY_HOVER, AAA_COLOR_TRANSPARENT, AAA_COLOR_MAIN_VERY_DARK_BLUE } from '../../constants/colors';
var theme = createStyleTheme({
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
      main: AAA_COLOR_MAIN_ERROR
    }
  },
  secondaryPalette: {
    // ** Client Library Defined **
    disabled: {
      main: AAA_COLOR_MAIN_DISABLED
    },
    // These are use defined variables we can use
    colorVariables: {
      BLACK: AAA_COLOR_MAIN_BLACK,
      SECONDARY_HOVER: AAA_COLOR_SECONDARY_HOVER,
      ERROR_HOVER: AAA_COLOR_MAIN_ERROR_HOVER,
      TRANSPARENT: AAA_COLOR_TRANSPARENT,
      DARKER_BLUE: AAA_COLOR_MAIN_DARKER_BLUE,
      VERY_DARK_BLUE: AAA_COLOR_MAIN_VERY_DARK_BLUE,
      GRAY: AAA_COLOR_MAIN_GRAY,
      WHITE: AAA_COLOR_MAIN_WHITE
    }
  },
  typographyValues: {
    // ** Client Library Defined **
    color: AAA_COLOR_MAIN_BLACK,
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    fontStyle: 'regular',
    fontWeight: 400 // Medium

  },
  typographyElements: {}
}); // ** Typography ** //

theme.typography.h1 = _defineProperty({
  // Headline
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: 500,
  lineHeight: 1.5,
  fontSize: 20
}, theme.breakpoints.up('lg'), {
  fontSize: 28,
  lineHeight: 1.57
});
theme.typography.h2 = _defineProperty({
  // Subheadline
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  lineHeight: 1.45,
  fontSize: 18
}, theme.breakpoints.up('lg'), {
  fontSize: 22
});
theme.typography.subtitle1 = _defineProperty({
  // Subtitle 1 / Table Header
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 500
}, theme.breakpoints.up('lg'), {
  fontSize: 18,
  lineHeight: 1.45
});
theme.typography.body1 = _defineProperty({
  // Body 1 / Primary Copy
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 16,
  lineHeight: 1.5
}, theme.breakpoints.up('lg'), {
  fontSize: 18,
  lineHeight: 1.45
});
theme.typography.body2 = _defineProperty({
  // Body 2 / Primary Copy
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 14,
  lineHeight: 1.45
}, theme.breakpoints.up('lg'), {
  fontSize: 16,
  lineHeight: 1.5
}); // ** Client Library Defined **

theme.typographyElements.buttonPrimary = _defineProperty({
  color: theme.secondaryPalette.colorVariables.WHITE,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: 500,
  lineHeight: 1.45,
  fontSize: 18
}, theme.breakpoints.up('md'), {
  fontSize: 20
}); // ** Client Library Defined **

theme.typographyElements.buttonSecondary = {
  color: theme.palette.primary.main,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 18,
  lineHeight: 1.45
};
export default function AAAThemeProvider(_ref) {
  var children = _ref.children;
  return React.createElement(ThemeProvider, {
    theme: theme
  }, children);
}
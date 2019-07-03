"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AAAThemeProvider;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _createStyleTheme = _interopRequireDefault(require("../../utilities/createStyleTheme"));

var _colors = require("../../constants/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = (0, _createStyleTheme["default"])({
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
      main: _colors.AAA_COLOR_MAIN_BLUE,
      dark: _colors.AAA_COLOR_MAIN_DARK_BLUE
    },
    error: {
      main: _colors.AAA_COLOR_MAIN_ERROR
    }
  },
  secondaryPalette: {
    // ** Client Library Defined **
    disabled: {
      main: _colors.AAA_COLOR_MAIN_DISABLED
    },
    // These are use defined variables we can use
    colorVariables: {
      BLACK: _colors.AAA_COLOR_MAIN_BLACK,
      SECONDARY_HOVER: _colors.AAA_COLOR_SECONDARY_HOVER,
      ERROR_HOVER: _colors.AAA_COLOR_MAIN_ERROR_HOVER,
      TRANSPARENT: _colors.AAA_COLOR_TRANSPARENT,
      DARKER_BLUE: _colors.AAA_COLOR_MAIN_DARKER_BLUE,
      VERY_DARK_BLUE: _colors.AAA_COLOR_MAIN_VERY_DARK_BLUE,
      GRAY: _colors.AAA_COLOR_MAIN_GRAY,
      WHITE: _colors.AAA_COLOR_MAIN_WHITE
    }
  },
  typographyValues: {
    // ** Client Library Defined **
    color: _colors.AAA_COLOR_MAIN_BLACK,
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
}, theme.breakpoints.up('lg'), {
  fontSize: 20
}); // ** Client Library Defined **

theme.typographyElements.buttonSecondary = {
  color: theme.palette.primary.main,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 18,
  lineHeight: 1.45
}; // ** Client Library Defined **

theme.typographyElements.linkPrimary = _defineProperty({
  color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 16,
  lineHeight: 1.45
}, theme.breakpoints.up('lg'), {
  fontSize: 18
});
theme.typographyElements.linkSecondary = _defineProperty({
  color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 16,
  lineHeight: 1.45
}, theme.breakpoints.up('lg'), {
  fontSize: 18
});

function AAAThemeProvider(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_styles.ThemeProvider, {
    theme: theme
  }, children);
}
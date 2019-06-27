(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/defineProperty", "react", "@material-ui/styles", "../../utilities/createStyleTheme", "../../constants/colors"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/defineProperty"), require("react"), require("@material-ui/styles"), require("../../utilities/createStyleTheme"), require("../../constants/colors"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.react, global.styles, global.createStyleTheme, global.colors);
    global.undefined = mod.exports;
  }
})(this, function (exports, _defineProperty2, _react, _styles, _createStyleTheme, _colors) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = AAAThemeProvider;

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _react2 = _interopRequireDefault(_react);

  var _createStyleTheme2 = _interopRequireDefault(_createStyleTheme);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
  // https://next.material-ui.com/customization/themes
  // Augmented themea definition
  // Colors
  var theme = (0, _createStyleTheme2.default)({
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

  theme.typography.h1 = (0, _defineProperty3.default)({
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
  theme.typography.h2 = (0, _defineProperty3.default)({
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
  theme.typography.subtitle1 = (0, _defineProperty3.default)({
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
  theme.typography.body1 = (0, _defineProperty3.default)({
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
  theme.typography.body2 = (0, _defineProperty3.default)({
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

  theme.typographyElements.buttonPrimary = (0, _defineProperty3.default)({
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

  theme.typographyElements.linkPrimary = (0, _defineProperty3.default)({
    color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
    fontFamily: theme.typographyValues.fontFamily,
    fontStyle: theme.typographyValues.fontStyle,
    fontWeight: theme.typographyValues.fontWeight,
    fontSize: 16,
    lineHeight: 1.45
  }, theme.breakpoints.up('lg'), {
    fontSize: 18
  });
  theme.typographyElements.linkSecondary = (0, _defineProperty3.default)({
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
    return _react2.default.createElement(_styles.ThemeProvider, {
      theme: theme
    }, children);
  }
});
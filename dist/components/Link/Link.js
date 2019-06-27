(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/objectSpread", "react", "@material-ui/styles", "@material-ui/core", "../../utilities/noop"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/objectSpread"), require("react"), require("@material-ui/styles"), require("@material-ui/core"), require("../../utilities/noop"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.objectSpread, global.react, global.styles, global.core, global.noop);
    global.Link = mod.exports;
  }
})(this, function (_exports, _objectSpread2, _react, _styles, _core, _noop) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _react = _interopRequireDefault(_react);
  _noop = _interopRequireDefault(_noop);
  // MaterialUI components
  // Utilities
  ;
  ;
  var defaultProps = {
    className: '',
    href: '',
    color: 'primary',
    onClick: _noop.default,
    onBlur: _noop.default,
    rel: 'noopener',
    target: '_blank'
  };

  var styleClasses = function styleClasses(theme) {
    return {
      root: {
        cursor: 'pointer'
      },
      colorPrimary: (0, _objectSpread2.default)({}, theme.typographyElements.linkPrimary, {
        '&:hover': {
          color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE
        }
      }),
      colorSecondary: (0, _objectSpread2.default)({
        color: theme.secondaryPalette.colorVariables.DARKER_BLUE
      }, theme.typographyElements.linkSecondary, {
        padding: '13.5px 0 13.5px 0',
        '&:hover': {
          color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE
        }
      })
    };
  };

  var Link = function Link(_ref) {
    var children = _ref.children,
        className = _ref.className,
        classes = _ref.classes,
        color = _ref.color,
        href = _ref.href,
        id = _ref.id,
        onBlur = _ref.onBlur,
        onClick = _ref.onClick,
        rel = _ref.rel,
        target = _ref.target;
    return _react.default.createElement(_core.Link, {
      className: className,
      color: color,
      id: id,
      href: href,
      onBlur: onBlur,
      onClick: onClick,
      rel: rel,
      target: target,
      underline: "always",
      TypographyClasses: classes
    }, children);
  };

  Link.defaultProps = defaultProps;

  var _default = (0, _styles.withStyles)(styleClasses, {
    withTheme: true
  })(Link);

  _exports.default = _default;
});
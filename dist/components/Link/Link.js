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
    global.undefined = mod.exports;
  }
})(this, function (exports, _objectSpread2, _react, _styles, _core, _noop) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _objectSpread3 = _interopRequireDefault(_objectSpread2);

  var _react2 = _interopRequireDefault(_react);

  var _noop2 = _interopRequireDefault(_noop);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
  // MaterialUI components
  // Utilities
  ;
  ;
  var defaultProps = {
    className: '',
    href: '',
    color: 'primary',
    onClick: _noop2.default,
    onBlur: _noop2.default,
    rel: 'noopener',
    target: '_blank'
  };

  var styleClasses = function styleClasses(theme) {
    return {
      root: {
        cursor: 'pointer'
      },
      colorPrimary: (0, _objectSpread3.default)({}, theme.typographyElements.linkPrimary, {
        '&:hover': {
          color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE
        }
      }),
      colorSecondary: (0, _objectSpread3.default)({
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
    return _react2.default.createElement(_core.Link, {
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
  exports.default = (0, _styles.withStyles)(styleClasses, {
    withTheme: true
  })(Link);
});
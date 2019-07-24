"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Label = _interopRequireDefault(require("../Label/Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Component styles manipulated entirely by theme
var styleClasses = theme => {
  return {
    root: _objectSpread({}, theme.typography.body1, {
      '& label': {
        fontWeight: 500
      }
    }),
    list: {
      marginTop: 8,
      '& li': {
        fontWeight: theme.typographyValues.fontWeight,
        color: theme.typographyValues.color,
        fontSize: 16,
        lineHeight: 1
      },
      '& li:before': {
        color: theme.palette.primary.main,
        content: "'\\2022'",
        fontSize: '22px',
        fontWeight: 900,
        display: 'inline-flex',
        marginRight: 10,
        verticalAlign: 'middle'
      }
    }
  };
};

var BulletList = (_ref) => {
  var {
    className,
    classes,
    id,
    label,
    list
  } = _ref;
  return _react.default.createElement("div", {
    className: (0, _clsx.default)('BulletList', classes.root, className)
  }, label && _react.default.createElement(_Label.default, {
    id: id
  }, label), _react.default.createElement("ul", {
    id: id,
    "data-quid": "BulletList-".concat(id),
    className: (0, _clsx.default)(classes.list)
  }, list.map((text, index) => {
    return _react.default.createElement("li", {
      key: "item-".concat(index)
    }, text);
  })));
};

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(BulletList);

exports.default = _default;
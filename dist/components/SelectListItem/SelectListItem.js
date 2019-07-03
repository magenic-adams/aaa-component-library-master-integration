"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _styles = require("@material-ui/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styleClasses = function styleClasses(theme) {
  var _root;

  return {
    root: (_root = {
      height: 48,
      background: theme.secondaryPalette.colorVariables.TRANSPARENT,
      fontSize: 18,
      letterSpacing: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.5,
      fontFamily: theme.typography.fontFamily
    }, _defineProperty(_root, theme.breakpoints.between('xs', 'sm'), {
      fontSize: 16
    }), _defineProperty(_root, '&.Mui-selected, &.Mui-selected:hover', {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
    }), _defineProperty(_root, '&:hover', {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
    }), _root),
    gutters: {
      padding: '0 13px 0 13px'
    },
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.primary.main),
      '&:last-child': {
        borderBottom: 'none'
      }
    }
  };
};

function checkValidity(item) {
  if (!item) {
    (0, _tinyInvariant["default"])(false, 'You have not passed an item for rendering.');
  }

  if (!item.id && !item.display) {
    (0, _tinyInvariant["default"])(false, 'id and display should have value.');
  }
}

var SelectListItem = function SelectListItem(_ref) {
  var classes = _ref.classes,
      item = _ref.item,
      onSelect = _ref.onSelect;
  checkValidity(item);
  var display = item.display,
      id = item.id,
      value = item.value;
  var divider = classes.divider,
      gutters = classes.gutters,
      root = classes.root;
  return _react["default"].createElement(_ListItem["default"], {
    "data-quid": "SelectListItem-".concat(id),
    value: value,
    classes: {
      root: root,
      divider: divider,
      gutters: gutters
    },
    divider: true,
    onClick: function onClick() {
      return onSelect(item);
    }
  }, display);
};

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(SelectListItem);

exports["default"] = _default;
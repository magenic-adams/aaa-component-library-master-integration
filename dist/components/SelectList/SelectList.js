"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _SelectListItem = _interopRequireDefault(require("../SelectListItem/SelectListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  className: ''
};

var styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty({
      width: 341,
      background: theme.secondaryPalette.colorVariables.WHITE,
      border: "2px solid ".concat(theme.palette.primary.main),
      borderRadius: 4,
      padding: '0px',
      boxShadow: "0 2px 8px 0 ".concat(theme.secondaryPalette.colorVariables.GRAY),
      '& span': {
        fontFamily: theme.typographyValues.fontFamily
      }
    }, theme.breakpoints.down('sm'), {
      width: '100%',
      border: "1px solid ".concat(theme.palette.primary.main),
      boxShadow: 'none',
      borderRadius: 0,
      '& span': {
        fontSize: 16
      }
    })
  };
};

function areItemKeysPresent(items) {
  return items.every(function (item) {
    return item.id && item.value && item.display;
  });
}

function checkValidity(items) {
  if (!Array.isArray(items) || items.length === 0) {
    (0, _tinyInvariant["default"])(false, 'items is empty');
  }

  if (!areItemKeysPresent(items)) {
    (0, _tinyInvariant["default"])(false, 'Invalid object keys are present. Keys should contain id, value and display');
  }
}

var SelectList = function SelectList(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      items = _ref.items,
      _onSelect = _ref.onSelect;
  checkValidity(items);
  return _react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.root, className)
  }, items.map(function (item) {
    return item.display && _react["default"].createElement(_SelectListItem["default"], {
      key: item.id,
      item: item,
      onSelect: function onSelect() {
        return _onSelect(item);
      }
    });
  }));
};

SelectList.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  withTheme: true
})(SelectList);

exports["default"] = _default;
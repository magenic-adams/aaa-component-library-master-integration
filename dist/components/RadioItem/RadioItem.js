"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _styles = require("@material-ui/styles");

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  className: '',
  checked: false,
  disabled: false
};

var styleClasses = function styleClasses(theme) {
  var _root;

  return {
    root: (_root = {
      width: 534,
      height: 48,
      borderRadius: 4,
      border: 0,
      background: theme.secondaryPalette.colorVariables.WHITE,
      boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.colorVariables.BLACK),
      margin: '0px 0px 8px 0px',
      '&:hover': {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
      },
      '&.Mui-disabled, &.Mui-disabled:hover': {
        boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.disabled.main),
        background: 'none'
      }
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      width: 534
    }), _defineProperty(_root, theme.breakpoints.down('sm'), {
      width: '100%'
    }), _root),
    selected: {
      border: 0,
      boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE),
      fontWeight: 500,
      background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
      '&.Mui-disabled, &.Mui-disabled:hover': {
        boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.disabled.main),
        background: 'none'
      }
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 16,
      paddingRight: 16
    },
    disabled: {
      boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.disabled.main),
      background: 'none'
    }
  };
};

function checkValidity(item) {
  if (!item) {
    (0, _tinyInvariant["default"])(false, 'You have not passed an item for rendering.');
  }

  if (!item.id && !item.value) {
    (0, _tinyInvariant["default"])(false, 'id and value are empty.');
  }
}

var Radio = function Radio(props) {
  var _props = _objectSpread({}, props),
      itemId = _props.itemId,
      checked = _props.checked,
      disabled = _props.disabled,
      value = _props.value,
      onChange = _props.onChange;

  return _react["default"].createElement(_Radio["default"], {
    key: itemId,
    name: itemId,
    checked: checked,
    value: value,
    disabled: disabled,
    color: "primary",
    onChange: onChange
  });
};

var RadioItem = function RadioItem(_ref) {
  var _cx;

  var classes = _ref.classes,
      checked = _ref.checked,
      disabled = _ref.disabled,
      item = _ref.item,
      name = _ref.name,
      onSelect = _ref.onSelect;
  checkValidity(item);
  return !!item && _react["default"].createElement(_FormControlLabel["default"], {
    "data-quid": "RadioItem-".concat(item.id),
    className: (0, _clsx["default"])('Radio', classes.root, (_cx = {}, _defineProperty(_cx, classes.selected, checked), _defineProperty(_cx, classes.disabled, disabled), _cx)),
    classes: {
      label: classes.label
    },
    control: _react["default"].createElement(Radio, {
      itemId: item.id,
      name: name,
      type: "radio",
      checked: checked,
      disabled: disabled,
      color: "primary",
      value: item.value,
      onChange: function onChange() {
        return onSelect(item);
      }
    }),
    label: item.display
  });
};

RadioItem.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(RadioItem);

exports["default"] = _default;
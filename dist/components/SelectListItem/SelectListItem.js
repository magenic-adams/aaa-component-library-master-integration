"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _styles = require("@material-ui/styles");

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultProps = {
  className: '',
  disabled: false,
  tabIndex: 0,
  value: ''
};

var styleClasses = theme => ({
  root: {
    height: 48,
    background: theme.secondaryPalette.colorVariables.TRANSPARENT,
    fontSize: 18,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    fontFamily: theme.typography.fontFamily,
    borderBottom: "1px solid ".concat(theme.palette.primary.main),
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16
    },
    '& .MuiTouchRipple-root': {
      visibility: 'hidden'
    },
    '&.Mui-selected,&.Mui-selected:hover,&.Mui-focusVisible,&:focus,&:hover': {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
    }
  },
  gutters: {
    padding: '0 13px 0 13px'
  }
});

function checkValidity(item) {
  if (!item) {
    (0, _tinyInvariant.default)(false, 'You have not passed an item for rendering.');
  }

  if (!item.id && !item.display) {
    (0, _tinyInvariant.default)(false, 'id and display should have value.');
  }
}

var SelectListItem = (_ref) => {
  var {
    classes,
    className,
    disabled,
    item,
    onSelect
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["classes", "className", "disabled", "item", "onSelect"]);

  checkValidity(item);
  var {
    id,
    value,
    display
  } = item;
  var {
    gutters,
    root
  } = classes;
  return _react.default.createElement(_MenuItem.default, _extends({
    className: className,
    classes: {
      root,
      gutters
    },
    "data-quid": "SelectListItem-".concat(id),
    disabled: disabled,
    divider: true,
    onClick: () => onSelect(item)
  }, rest, {
    value: value
  }), display);
};

SelectListItem.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(SelectListItem);

exports.default = _default;
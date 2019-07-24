"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _styles = require("@material-ui/styles");

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Material UI
var defaultProps = {
  className: '',
  checked: false,
  disabled: false,
  onBlur: () => {},
  onFocus: () => {}
};

var styleClasses = theme => ({
  root: {
    width: 534,
    height: 48,
    borderRadius: 4,
    border: 0,
    background: theme.secondaryPalette.colorVariables.WHITE,
    boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.colorVariables.GRAY),
    marginLeft: 0,
    marginRight: 0,
    '&:hover': {
      background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
    },
    '&.Mui-disabled, &.Mui-disabled:hover': {
      boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.disabled.main),
      background: 'none'
    },
    '& svg': {
      margin: 2.5
    },
    [theme.breakpoints.up('md')]: {
      width: 534
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  selected: {
    border: 0,
    boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE),
    [theme.breakpoints.down('sm')]: {
      boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE)
    },
    fontWeight: 500,
    background: theme.secondaryPalette.colorVariables.TRANSPARENT,
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
});

function checkValidity(item) {
  if (!item) {
    (0, _tinyInvariant.default)(false, 'You have not passed an item for rendering.');
  }

  if (!item.id && !item.value) {
    (0, _tinyInvariant.default)(false, 'id and value are empty.');
  }
}

var RadioItem = (_ref) => {
  var {
    classes,
    checked,
    disabled,
    item,
    name,
    onChange: _onChange,
    onBlur,
    onFocus
  } = _ref;
  checkValidity(item);
  return !!item && _react.default.createElement(_FormControlLabel.default, {
    "data-quid": "RadioItem-".concat(item.id),
    className: (0, _clsx.default)('Radio', classes.root, {
      [classes.selected]: checked,
      [classes.disabled]: disabled
    }),
    classes: {
      label: classes.label
    },
    control: _react.default.createElement(_Radio.default, {
      key: item.id,
      name: name,
      checked: checked,
      disabled: disabled,
      color: "primary",
      value: item.value,
      onChange: () => _onChange(item),
      onBlur: onBlur,
      onFocus: onFocus
    }),
    label: item.display
  });
};

RadioItem.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(RadioItem);

exports.default = _default;
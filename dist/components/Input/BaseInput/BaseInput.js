"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Label = _interopRequireDefault(require("../../Label/Label"));

var _FormFieldMeta = _interopRequireDefault(require("../../Form/FormFieldMeta/FormFieldMeta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
var defaultProps = {
  autoFocus: false,
  className: '',
  formControlClass: '',
  centerText: false,
  disabled: false,
  disableWarning: false,
  helperText: '',
  inputComponent: undefined,
  labelName: '',
  placeholder: '',
  type: 'text',
  value: undefined,
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onClear: undefined,
  onFocus: function onFocus() {}
};

var styleClasses = function styleClasses(theme) {
  var _input, _formControlStyle;

  return {
    root: {
      padding: '0 12px',
      height: 48,
      width: '100%',
      border: 0,
      borderRadius: 4,
      background: theme.secondaryPalette.colorVariables.WHITE,
      boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.colorVariables.GRAY),
      '&:hover,&:active': {
        boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE)
      }
    },
    focused: {
      boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE),
      '&:hover': {
        boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE)
      }
    },
    disabled: {
      background: theme.secondaryPalette.disabled.main,
      boxShadow: 'initial',
      '&:hover': {
        boxShadow: 'none'
      }
    },
    input: (_input = {
      boxSizing: 'border-box',
      height: '100%',
      lineHeight: '100%',
      textAlign: function textAlign(props) {
        return props.centerText ? 'center' : 'left';
      }
    }, _defineProperty(_input, theme.breakpoints.up('sm'), {
      fontSize: 16
    }), _defineProperty(_input, theme.breakpoints.up('md'), {
      fontSize: 18
    }), _input),
    inputAdornment: {
      marginRight: -10
    },
    iconButton: {
      height: 48,
      width: 48,
      borderRadius: 0,
      padding: 10,
      transition: 'none'
    },
    iconStyle: {
      fontSize: 20,
      color: theme.palette.primary.main
    },
    formControlStyle: (_formControlStyle = {}, _defineProperty(_formControlStyle, theme.breakpoints.up('sm'), {
      width: '100%'
    }), _defineProperty(_formControlStyle, theme.breakpoints.up('md'), {
      maxWidth: 534
    }), _formControlStyle),
    error: {
      boxShadow: "inset 0 0 0 2px ".concat(theme.palette.error.main),
      '&$focused': {
        // TODO
        boxShadow: "inset 0 0 0 2px ".concat(theme.palette.error.main)
      },
      // Modifiers
      centerText: {
        textAlign: 'center'
      }
    }
  };
};

var BaseInput = function BaseInput(_ref) {
  var autoFocus = _ref.autoFocus,
      classes = _ref.classes,
      className = _ref.className,
      centerText = _ref.centerText,
      forwardedRef = _ref.forwardedRef,
      formControlClass = _ref.formControlClass,
      disabled = _ref.disabled,
      disableWarning = _ref.disableWarning,
      error = _ref.error,
      helperText = _ref.helperText,
      id = _ref.id,
      inputComponent = _ref.inputComponent,
      labelName = _ref.labelName,
      name = _ref.name,
      placeholder = _ref.placeholder,
      type = _ref.type,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onClear = _ref.onClear,
      onFocus = _ref.onFocus;
  return _react["default"].createElement(_FormControl["default"], {
    className: (0, _clsx["default"])(classes.formControlStyle, formControlClass),
    error: !!error,
    disabled: disabled
  }, labelName && _react["default"].createElement(_Label["default"], {
    id: id,
    disabled: false,
    error: error,
    focused: false
  }, labelName), _react["default"].createElement(_Input["default"], {
    autoFocus: autoFocus,
    autoComplete: "off",
    classes: {
      root: classes.root,
      disabled: classes.disabled,
      focused: classes.focused,
      error: classes.error,
      input: classes.input
    },
    className: (0, _clsx["default"])('BaseInput', className, _defineProperty({}, classes.centerText, centerText)),
    disableUnderline: true,
    endAdornment: onClear && value && _react["default"].createElement(_InputAdornment["default"], {
      className: classes.inputAdornment,
      position: "end"
    }, _react["default"].createElement(_IconButton["default"], {
      disableRipple: true,
      "aria-label": "Clear text",
      onClick: onClear,
      disabled: disabled,
      color: "inherit",
      className: classes.iconButton
    }, _react["default"].createElement(_Clear["default"], {
      className: classes.iconStyle
    }))),
    id: id,
    inputProps: {
      'data-quid': "BaseInput-".concat(id)
    },
    inputRef: forwardedRef,
    inputComponent: inputComponent,
    name: name,
    placeholder: labelName ? '' : placeholder,
    type: type,
    value: value,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus
  }), _react["default"].createElement(_FormFieldMeta["default"], {
    disableWarning: disableWarning,
    error: error,
    helperText: helperText,
    id: id
  }));
};

BaseInput.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(BaseInput);

exports["default"] = _default;
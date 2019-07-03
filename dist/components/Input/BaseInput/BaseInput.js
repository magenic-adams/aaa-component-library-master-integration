"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Material UI components
// Components
;
const defaultProps = {
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
  onBlur: () => {},
  onChange: () => {},
  onClear: undefined,
  onFocus: () => {}
};

const styleClasses = theme => {
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
    input: {
      boxSizing: 'border-box',
      height: '100%',
      lineHeight: '100%',
      textAlign: props => props.centerText ? 'center' : 'left',
      [theme.breakpoints.up('sm')]: {
        fontSize: 16
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 18
      }
    },
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
    formControlStyle: {
      [theme.breakpoints.up('sm')]: {
        width: '100%'
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 534
      }
    },
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

const BaseInput = (_ref) => {
  let {
    autoFocus,
    classes,
    className,
    centerText,
    forwardedRef,
    formControlClass,
    disabled,
    disableWarning,
    error,
    helperText,
    id,
    inputComponent,
    labelName,
    name,
    placeholder,
    type,
    value,
    onBlur,
    onChange,
    onClear,
    onFocus
  } = _ref;
  return _react.default.createElement(_FormControl.default, {
    className: (0, _clsx.default)(classes.formControlStyle, formControlClass),
    error: !!error,
    disabled: disabled
  }, labelName && _react.default.createElement(_Label.default, {
    id: id,
    disabled: false,
    error: error,
    focused: false
  }, labelName), _react.default.createElement(_Input.default, {
    autoFocus: autoFocus,
    autoComplete: "off",
    classes: {
      root: classes.root,
      disabled: classes.disabled,
      focused: classes.focused,
      error: classes.error,
      input: classes.input
    },
    className: (0, _clsx.default)('BaseInput', className, {
      [classes.centerText]: centerText
    }),
    disableUnderline: true,
    endAdornment: onClear && value && _react.default.createElement(_InputAdornment.default, {
      className: classes.inputAdornment,
      position: "end"
    }, _react.default.createElement(_IconButton.default, {
      disableRipple: true,
      "aria-label": "Clear text",
      onClick: onClear,
      disabled: disabled,
      color: "inherit",
      className: classes.iconButton
    }, _react.default.createElement(_Clear.default, {
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
  }), _react.default.createElement(_FormFieldMeta.default, {
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

exports.default = _default;
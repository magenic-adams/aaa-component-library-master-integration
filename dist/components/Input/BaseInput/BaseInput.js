(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/defineProperty", "react", "clsx", "@material-ui/core/styles", "@material-ui/core/Input", "@material-ui/core/FormControl", "@material-ui/icons/Clear", "@material-ui/core/InputAdornment", "@material-ui/core/IconButton", "../../Label/Label", "../../Form/FormFieldMeta/FormFieldMeta"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/defineProperty"), require("react"), require("clsx"), require("@material-ui/core/styles"), require("@material-ui/core/Input"), require("@material-ui/core/FormControl"), require("@material-ui/icons/Clear"), require("@material-ui/core/InputAdornment"), require("@material-ui/core/IconButton"), require("../../Label/Label"), require("../../Form/FormFieldMeta/FormFieldMeta"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.react, global.clsx, global.styles, global.Input, global.FormControl, global.Clear, global.InputAdornment, global.IconButton, global.Label, global.FormFieldMeta);
    global.BaseInput = mod.exports;
  }
})(this, function (_exports, _defineProperty2, _react, _clsx, _styles, _Input, _FormControl, _Clear, _InputAdornment, _IconButton, _Label, _FormFieldMeta) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _react = _interopRequireDefault(_react);
  _clsx = _interopRequireDefault(_clsx);
  _Input = _interopRequireDefault(_Input);
  _FormControl = _interopRequireDefault(_FormControl);
  _Clear = _interopRequireDefault(_Clear);
  _InputAdornment = _interopRequireDefault(_InputAdornment);
  _IconButton = _interopRequireDefault(_IconButton);
  _Label = _interopRequireDefault(_Label);
  _FormFieldMeta = _interopRequireDefault(_FormFieldMeta);
  // Material UI components
  // Components
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
      }, (0, _defineProperty2.default)(_input, theme.breakpoints.up('sm'), {
        fontSize: 16
      }), (0, _defineProperty2.default)(_input, theme.breakpoints.up('md'), {
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
      formControlStyle: (_formControlStyle = {}, (0, _defineProperty2.default)(_formControlStyle, theme.breakpoints.up('sm'), {
        width: '100%'
      }), (0, _defineProperty2.default)(_formControlStyle, theme.breakpoints.up('md'), {
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
      className: (0, _clsx.default)('BaseInput', className, (0, _defineProperty2.default)({}, classes.centerText, centerText)),
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

  _exports.default = _default;
});
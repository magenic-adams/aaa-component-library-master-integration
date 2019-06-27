(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@material-ui/styles", "@material-ui/core/FormControl", "@material-ui/icons/Add", "@material-ui/icons/Remove", "../Form/FormFieldMeta/FormFieldMeta", "../Label/Label", "../Button/Button", "../Input/NumericInput/NumericInput", "./NumericalStepperStyles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@material-ui/styles"), require("@material-ui/core/FormControl"), require("@material-ui/icons/Add"), require("@material-ui/icons/Remove"), require("../Form/FormFieldMeta/FormFieldMeta"), require("../Label/Label"), require("../Button/Button"), require("../Input/NumericInput/NumericInput"), require("./NumericalStepperStyles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styles, global.FormControl, global.Add, global.Remove, global.FormFieldMeta, global.Label, global.Button, global.NumericInput, global.NumericalStepperStyles);
    global.NumericalStepper = mod.exports;
  }
})(this, function (_exports, _react, _styles, _FormControl, _Add, _Remove, _FormFieldMeta, _Label, _Button, _NumericInput, _NumericalStepperStyles) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _FormControl = _interopRequireDefault(_FormControl);
  _Add = _interopRequireDefault(_Add);
  _Remove = _interopRequireDefault(_Remove);
  _FormFieldMeta = _interopRequireDefault(_FormFieldMeta);
  _Label = _interopRequireDefault(_Label);
  _Button = _interopRequireDefault(_Button);
  _NumericInput = _interopRequireDefault(_NumericInput);

  /* eslint-disable import/no-extraneous-dependencies */
  // Material UI Components
  // Components
  var defaultProps = {
    classes: {},
    disabled: false,
    labelText: '',
    helperText: '',
    error: '',
    value: 1
  };

  var NumericalStepper = function NumericalStepper(props) {
    var disabled = props.disabled,
        disableWarning = props.disableWarning,
        error = props.error,
        helperText = props.helperText,
        id = props.id,
        labelText = props.labelText,
        mask = props.mask,
        name = props.name,
        onIncrease = props.onIncrease,
        onDecrease = props.onDecrease,
        onBlur = props.onBlur,
        onChange = props.onChange,
        value = props.value;
    var classes = (0, _NumericalStepperStyles.styleClasses)(props);
    return _react.default.createElement(_FormControl.default, {
      id: id,
      disabled: disabled,
      classes: {
        root: classes.root
      }
    }, _react.default.createElement(_Label.default, {
      overrides: (0, _NumericalStepperStyles.overrideStepperLabel)(props),
      id: "NumericalStepperLabel-".concat(id),
      disabled: false,
      error: error,
      focused: false
    }, labelText), _react.default.createElement("div", {
      className: classes.actionWrapper
    }, _react.default.createElement(_Button.default, {
      id: "DecreaseStepper-".concat(id),
      disabled: disabled,
      onClick: onDecrease,
      isIconButton: true
    }, _react.default.createElement(_Remove.default, {
      "data-quid": "RemoveIcon-".concat(id),
      className: classes.stepperIcon
    })), _react.default.createElement("div", {
      className: classes.stepperInputWrapper
    }, _react.default.createElement(_NumericInput.default, {
      id: "NumericalStepperInput-".concat(id),
      name: name,
      centerText: true,
      type: "text",
      value: value,
      error: error,
      disabled: disabled,
      mask: mask,
      onBlur: onBlur,
      onChange: onChange,
      disableWarning: true
    })), _react.default.createElement(_Button.default, {
      id: "IncreaseStepper-".concat(id),
      disabled: disabled,
      onClick: onIncrease,
      isIconButton: true
    }, _react.default.createElement(_Add.default, {
      "data-quid": "AddIcon-".concat(id),
      className: classes.stepperIcon
    }))), _react.default.createElement(_FormFieldMeta.default, {
      id: "NumericalStepperMeta-".concat(id),
      disableWarning: disableWarning,
      error: error,
      helperText: helperText
    }));
  };

  NumericalStepper.defaultProps = defaultProps;

  var _default = (0, _styles.withTheme)(NumericalStepper);

  _exports.default = _default;
});
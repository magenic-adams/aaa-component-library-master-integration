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
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _styles, _FormControl, _Add, _Remove, _FormFieldMeta, _Label, _Button, _NumericInput, _NumericalStepperStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _FormControl2 = _interopRequireDefault(_FormControl);

  var _Add2 = _interopRequireDefault(_Add);

  var _Remove2 = _interopRequireDefault(_Remove);

  var _FormFieldMeta2 = _interopRequireDefault(_FormFieldMeta);

  var _Label2 = _interopRequireDefault(_Label);

  var _Button2 = _interopRequireDefault(_Button);

  var _NumericInput2 = _interopRequireDefault(_NumericInput);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

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
    return _react2.default.createElement(_FormControl2.default, {
      id: id,
      disabled: disabled,
      classes: {
        root: classes.root
      }
    }, _react2.default.createElement(_Label2.default, {
      overrides: (0, _NumericalStepperStyles.overrideStepperLabel)(props),
      id: "NumericalStepperLabel-".concat(id),
      disabled: false,
      error: error,
      focused: false
    }, labelText), _react2.default.createElement("div", {
      className: classes.actionWrapper
    }, _react2.default.createElement(_Button2.default, {
      id: "DecreaseStepper-".concat(id),
      disabled: disabled,
      onClick: onDecrease,
      isIconButton: true
    }, _react2.default.createElement(_Remove2.default, {
      "data-quid": "RemoveIcon-".concat(id),
      className: classes.stepperIcon
    })), _react2.default.createElement("div", {
      className: classes.stepperInputWrapper
    }, _react2.default.createElement(_NumericInput2.default, {
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
    })), _react2.default.createElement(_Button2.default, {
      id: "IncreaseStepper-".concat(id),
      disabled: disabled,
      onClick: onIncrease,
      isIconButton: true
    }, _react2.default.createElement(_Add2.default, {
      "data-quid": "AddIcon-".concat(id),
      className: classes.stepperIcon
    }))), _react2.default.createElement(_FormFieldMeta2.default, {
      id: "NumericalStepperMeta-".concat(id),
      disableWarning: disableWarning,
      error: error,
      helperText: helperText
    }));
  };

  NumericalStepper.defaultProps = defaultProps;
  exports.default = (0, _styles.withTheme)(NumericalStepper);
});
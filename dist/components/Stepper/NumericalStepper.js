"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Remove = _interopRequireDefault(require("@material-ui/icons/Remove"));

var _FormFieldMeta = _interopRequireDefault(require("../Form/FormFieldMeta/FormFieldMeta"));

var _Label = _interopRequireDefault(require("../Label/Label"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _NumericInput = _interopRequireDefault(require("../Input/NumericInput/NumericInput"));

var _NumericalStepperStyles = _interopRequireDefault(require("./NumericalStepperStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
// Material UI Components
// Components
var stepperOverridesDefault = {};
var defaultProps = {
  classes: {},
  disabled: false,
  labelText: '',
  helperText: '',
  error: '',
  value: 1
};

var NumericalStepper = props => {
  var {
    disabled,
    disableWarning,
    error,
    helperText,
    id,
    labelText,
    mask,
    name,
    onIncrease,
    onDecrease,
    onBlur,
    onChange,
    value,
    overrides = stepperOverridesDefault
  } = props;
  var classes = (0, _NumericalStepperStyles.default)(overrides);
  return _react.default.createElement(_FormControl.default, {
    id: id,
    disabled: disabled,
    classes: {
      root: classes.root
    }
  }, _react.default.createElement(_Label.default, {
    overrides: overrides,
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

exports.default = _default;
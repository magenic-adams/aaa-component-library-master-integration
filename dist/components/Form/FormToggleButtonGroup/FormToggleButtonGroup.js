"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _ToggleButtonGroup = _interopRequireDefault(require("../../ToggleButtonGroup/ToggleButtonGroup"));

var _withFormState = _interopRequireDefault(require("../withFormState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FormToggleButtonGroup extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.renderFieldComponent = this.renderFieldComponent.bind(this);
  }

  handleItemClick(fieldProps) {
    var {
      input: {
        onChange
      }
    } = fieldProps;
    return option => {
      onChange(option.value);
    };
  }

  renderFieldComponent(fieldProps) {
    var {
      id,
      options
    } = fieldProps;
    return _react.default.createElement(_ToggleButtonGroup.default, _extends({}, fieldProps.input, {
      id: id,
      options: options,
      onSelect: this.handleItemClick(fieldProps)
    }, this.props));
  }

  render() {
    var _this$props = this.props,
        {
      id,
      initialValue
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["id", "initialValue"]);

    return _react.default.createElement(_reactFinalForm.Field, _extends({
      name: id,
      initialValue: initialValue,
      component: this.renderFieldComponent
    }, rest));
  }

}

_defineProperty(FormToggleButtonGroup, "defaultProps", {
  disabled: false,
  initialValue: ''
});

var _default = (0, _withFormState.default)(FormToggleButtonGroup);

exports.default = _default;
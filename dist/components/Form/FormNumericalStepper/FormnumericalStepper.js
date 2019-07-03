"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _withFormState = _interopRequireDefault(require("../withFormState"));

var _NumericalStepper = _interopRequireDefault(require("../../Stepper/NumericalStepper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * FormNumericalStepper is a  <Field> Wrapper around <BaseInput />
 * FormNumericalStepper's responsibility is to
 * 1. map ReactFinalForm's exposed "fieldProps" to <BaseInput>'s props
 * 2. Have logic to determine when an error is shown
 *
 * By exposing the form's state via HOC, we are able to tap into custom mutators and other form state
 * defined on our top-level <Form> component and plucked from context
 */
class FormNumericalStepper extends _react.default.Component {
  static handleDecrease(fieldRenderProps) {
    return () => {
      if (!(fieldRenderProps.input.value <= 0)) {
        const {
          value,
          onChange
        } = fieldRenderProps.input;
        const newValue = Number.isNaN(parseInt(value, 10)) ? 1 : parseInt(value, 10) - 1;
        onChange(newValue);
      }
    };
  }

  static handleIncrease(fieldRenderProps) {
    return () => {
      const {
        value,
        onChange
      } = fieldRenderProps.input;
      const newValue = Number.isNaN(parseInt(value, 10)) ? 1 : parseInt(value, 10) + 1;
      onChange(newValue);
    };
  }

  static handleBlur(fieldRenderProps) {
    return () => {
      const {
        value,
        onChange
      } = fieldRenderProps.input;
      onChange(value);
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "renderFieldComponent", fieldRenderProps => {
      // const ref = this.getInputRef();
      const {
        meta
      } = fieldRenderProps;
      const {
        id
      } = this.props;
      return _react.default.createElement(_NumericalStepper.default, _extends({
        id: id,
        name: id,
        error: meta.touched && meta.error,
        onBlur: FormNumericalStepper.handleBlur(fieldRenderProps),
        onChange: this.handleFormFieldChange(fieldRenderProps),
        onDecrease: FormNumericalStepper.handleDecrease(fieldRenderProps),
        onIncrease: FormNumericalStepper.handleIncrease(fieldRenderProps),
        value: fieldRenderProps.input.value
      }, this.props));
    });

    this.renderFieldComponent = this.renderFieldComponent.bind(this);
  }

  handleFormFieldChange(_ref) {
    let {
      input
    } = _ref;
    return evt => {
      const {
        formState
      } = this.props;
      const {
        name,
        onChange
      } = input;
      const {
        mutators: {
          setFieldTouched
        }
      } = formState;
      setFieldTouched(name, false);
      onChange(evt);
    };
  }
  /**
   * Renders the base input field
   * NOTE: It is required to pass a named function to component
   * ... if you pass an anonymous function it will re-create the component
   * @param  {Object} fieldRenderProps - react final form field props
   * @return {React.Component}
   */


  render() {
    const {
      id
    } = this.props;
    return _react.default.createElement(_reactFinalForm.Field, {
      name: id,
      initialValue: 0,
      component: this.renderFieldComponent
    });
  }

}

var _default = (0, _withFormState.default)(FormNumericalStepper);

exports.default = _default;
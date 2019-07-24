"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _withFormState = _interopRequireDefault(require("../withFormState"));

var _NumericInput = _interopRequireDefault(require("../../Input/NumericInput/NumericInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * FormNumericInput is a <Field> Wrapper around <NumericInput />
 * FormNumericInput's responsibility is to
 * 1. map ReactFinalForm's exposed "fieldProps" to <NumericInput>'s props
 * 2. Have logic to determine when an error is shown
 *
 * By exposing the form's state via HOC, we are able to tap into custom mutators and other form state
 * defined on our top-level <Form> component and plucked from context
 */
class FormNumericInput extends _react.default.Component {
  constructor(props) {
    super(props);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.handleFieldClear = this.handleFieldClear.bind(this);
    this.renderFieldComponent = this.renderFieldComponent.bind(this);
  }
  /**
   * Form field change interceptor calls a form effect "setFieldTouched"
   * @param  {Object} options.input - fieldProps.input
   * @param  {Object} formState - global form state
   * @return {Function} decoratored onChange
   */


  handleFormFieldChange(_ref) {
    var {
      input
    } = _ref;
    return evt => {
      var {
        formState
      } = this.props;
      var {
        name,
        onChange
      } = input;
      var {
        mutators: {
          setFieldTouched
        }
      } = formState;
      setFieldTouched(name, false);
      onChange(evt);
    };
  }
  /**
   * Handles clearing of input value
   * @param  {Object} options.input - fieldProps.input
   * @param  {Object} formState - global form state
   * @param  {Object} inputRef - reference to the underlying input
   * @return {Function} onClear handler
   */


  handleFieldClear(_ref2, inputRef) {
    var {
      input
    } = _ref2;
    return () => {
      var {
        formState
      } = this.props;
      var {
        name,
        onChange
      } = input;
      var {
        mutators: {
          setFieldTouched
        }
      } = formState;
      setFieldTouched(name, false);
      onChange('');

      if (inputRef) {
        inputRef.current.focus();
      }
    };
  }
  /**
   * Renders the base input field
   * NOTE: It is required to pass a named function to component
   * ... if you pass an anonymous function it will re-create the component
   * @param  {Object} fieldProps - react final form field props
   * @return {React.Component}
   */


  renderFieldComponent(fieldProps) {
    var {
      forwardedRef
    } = this.props;
    var {
      meta
    } = fieldProps;
    return _react.default.createElement(_NumericInput.default, _extends({}, fieldProps.input, {
      error: meta.touched && meta.error,
      onChange: this.handleFormFieldChange(fieldProps),
      onClear: this.handleFieldClear(fieldProps, forwardedRef),
      forwardedRef: forwardedRef
    }, this.props));
  }

  render() {
    var {
      id
    } = this.props;
    return _react.default.createElement(_reactFinalForm.Field, {
      name: id,
      component: this.renderFieldComponent
    });
  }

}

var _default = (0, _withFormState.default)(FormNumericInput);

exports.default = _default;
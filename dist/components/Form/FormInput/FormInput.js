"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _withFormState = _interopRequireDefault(require("../withFormState"));

var _BaseInput = _interopRequireDefault(require("../../Input/BaseInput/BaseInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
;
/**
 * FormInput is a  <Field> Wrapper around <BaseInput />
 * FormInput's responsibility is to 
 * 1. map ReactFinalForm's exposed "fieldProps" to <BaseInput>'s props
 * 2. Have logic to determine when an error is shown
 * 
 * By exposing the form's state via HOC, we are able to tap into custom mutators and other form state
 * defined on our top-level <Form> component and plucked from context
 */

class FormInput extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "inputRef", _react.default.createRef());

    this.getInputRef = this.getInputRef.bind(this);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.handleFieldClear = this.handleFieldClear.bind(this);
    this.renderFieldComponent = this.renderFieldComponent.bind(this);
  }
  /**
   * Receives the ref for the underlying input
   * @return {React.RefObject<any>}
   */


  getInputRef() {
    const {
      forwardedRef
    } = this.props;
    return forwardedRef || this.inputRef;
  }
  /**
   * Form field change interceptor calls a form effect "setFieldTouched"
   * @param  {Object} options.input - fieldProps.input
   * @return {Function} decoratored onChange
   */


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
   * Handles clearing of input value
   * @param  {Object} options.input - fieldProps.input
   * @param  {Object} inputRef - reference to the underlying input
   * @return {Function} onClear handler
   */


  handleFieldClear(_ref2, ref) {
    let {
      input
    } = _ref2;
    return () => {
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
      onChange('');

      if (ref && ref.current) {
        ref.current.focus();
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
    const ref = this.getInputRef();
    const {
      meta
    } = fieldProps;
    return _react.default.createElement(_BaseInput.default, _extends({}, fieldProps.input, {
      error: meta.touched && meta.error,
      onChange: this.handleFormFieldChange(fieldProps),
      onClear: this.handleFieldClear(fieldProps, ref),
      forwardedRef: ref
    }, this.props));
  }

  render() {
    const {
      id,
      initialValue
    } = this.props;
    return _react.default.createElement(_reactFinalForm.Field, {
      name: id,
      initialValue: initialValue,
      component: this.renderFieldComponent
    });
  }

}

_defineProperty(FormInput, "defaultProps", {
  initialValue: ''
});

var _default = (0, _withFormState.default)(FormInput);

exports.default = _default;
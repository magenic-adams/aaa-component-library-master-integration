import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { Field } from 'react-final-form'; // Components

import withFormState from '../withFormState';
import NumericInput from '../../Input/NumericInput/NumericInput';
;
;
/**
 * FormNumericInput is a <Field> Wrapper around <NumericInput />
 * FormNumericInput's responsibility is to 
 * 1. map ReactFinalForm's exposed "fieldProps" to <NumericInput>'s props
 * 2. Have logic to determine when an error is shown
 * 
 * By exposing the form's state via HOC, we are able to tap into custom mutators and other form state
 * defined on our top-level <Form> component and plucked from context
 */

var FormNumericInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormNumericInput, _React$Component);

  function FormNumericInput(props) {
    var _this;

    _classCallCheck(this, FormNumericInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormNumericInput).call(this, props));
    _this.handleFormFieldChange = _this.handleFormFieldChange.bind(_assertThisInitialized(_this));
    _this.handleFieldClear = _this.handleFieldClear.bind(_assertThisInitialized(_this));
    _this.renderFieldComponent = _this.renderFieldComponent.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Form field change interceptor calls a form effect "setFieldTouched"
   * @param  {Object} options.input - fieldProps.input
   * @param  {Object} formState - global form state
   * @return {Function} decoratored onChange
   */


  _createClass(FormNumericInput, [{
    key: "handleFormFieldChange",
    value: function handleFormFieldChange(_ref) {
      var _this2 = this;

      var input = _ref.input;
      return function (evt) {
        var formState = _this2.props.formState;
        var name = input.name,
            onChange = input.onChange;
        var setFieldTouched = formState.mutators.setFieldTouched;
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

  }, {
    key: "handleFieldClear",
    value: function handleFieldClear(_ref2, inputRef) {
      var _this3 = this;

      var input = _ref2.input;
      return function () {
        var formState = _this3.props.formState;
        var name = input.name,
            onChange = input.onChange;
        var setFieldTouched = formState.mutators.setFieldTouched;
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

  }, {
    key: "renderFieldComponent",
    value: function renderFieldComponent(fieldProps) {
      var forwardedRef = this.props.forwardedRef;
      var meta = fieldProps.meta;
      return React.createElement(NumericInput, Object.assign({}, fieldProps.input, {
        error: meta.touched && meta.error,
        onChange: this.handleFormFieldChange(fieldProps),
        onClear: this.handleFieldClear(fieldProps, forwardedRef),
        forwardedRef: forwardedRef
      }, this.props));
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      return React.createElement(Field, {
        name: id,
        component: this.renderFieldComponent
      });
    }
  }]);

  return FormNumericInput;
}(React.Component);

export default withFormState(FormNumericInput);
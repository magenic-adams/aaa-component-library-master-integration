import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { Field } from 'react-final-form'; // Components

import withFormState from '../withFormState';
import BaseInput from '../../Input/BaseInput/BaseInput';
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

var FormInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormInput, _React$Component);

  function FormInput(props) {
    var _this;

    _classCallCheck(this, FormInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this, props));
    _this.inputRef = React.createRef();
    _this.getInputRef = _this.getInputRef.bind(_assertThisInitialized(_this));
    _this.handleFormFieldChange = _this.handleFormFieldChange.bind(_assertThisInitialized(_this));
    _this.handleFieldClear = _this.handleFieldClear.bind(_assertThisInitialized(_this));
    _this.renderFieldComponent = _this.renderFieldComponent.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Receives the ref for the underlying input
   * @return {React.RefObject<any>}
   */


  _createClass(FormInput, [{
    key: "getInputRef",
    value: function getInputRef() {
      var forwardedRef = this.props.forwardedRef;
      return forwardedRef || this.inputRef;
    }
    /**
     * Form field change interceptor calls a form effect "setFieldTouched"
     * @param  {Object} options.input - fieldProps.input
     * @return {Function} decoratored onChange
     */

  }, {
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
     * @param  {Object} inputRef - reference to the underlying input
     * @return {Function} onClear handler
     */

  }, {
    key: "handleFieldClear",
    value: function handleFieldClear(_ref2, ref) {
      var _this3 = this;

      var input = _ref2.input;
      return function () {
        var formState = _this3.props.formState;
        var name = input.name,
            onChange = input.onChange;
        var setFieldTouched = formState.mutators.setFieldTouched;
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

  }, {
    key: "renderFieldComponent",
    value: function renderFieldComponent(fieldProps) {
      var ref = this.getInputRef();
      var meta = fieldProps.meta;
      return React.createElement(BaseInput, Object.assign({}, fieldProps.input, {
        error: meta.touched && meta.error,
        onChange: this.handleFormFieldChange(fieldProps),
        onClear: this.handleFieldClear(fieldProps, ref),
        forwardedRef: ref
      }, this.props));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          initialValue = _this$props.initialValue;
      return React.createElement(Field, {
        name: id,
        initialValue: initialValue,
        component: this.renderFieldComponent
      });
    }
  }]);

  return FormInput;
}(React.Component);

FormInput.defaultProps = {
  initialValue: ''
};
export default withFormState(FormInput);
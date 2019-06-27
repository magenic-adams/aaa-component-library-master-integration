import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { Field } from 'react-final-form'; // Components

import withFormState from '../withFormState';
import NumericalStepper from '../../Stepper/NumericalStepper';

/**
 * FormNumericalStepper is a  <Field> Wrapper around <BaseInput />
 * FormNumericalStepper's responsibility is to
 * 1. map ReactFinalForm's exposed "fieldProps" to <BaseInput>'s props
 * 2. Have logic to determine when an error is shown
 *
 * By exposing the form's state via HOC, we are able to tap into custom mutators and other form state
 * defined on our top-level <Form> component and plucked from context
 */
var FormNumericalStepper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormNumericalStepper, _React$Component);

  function FormNumericalStepper(props) {
    var _this;

    _classCallCheck(this, FormNumericalStepper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormNumericalStepper).call(this, props));

    _this.renderFieldComponent = function (fieldRenderProps) {
      // const ref = this.getInputRef();
      var meta = fieldRenderProps.meta;
      return React.createElement(NumericalStepper, Object.assign({
        id: _this.props.id,
        name: _this.props.id,
        error: meta.touched && meta.error,
        onBlur: _this.handleBlur(fieldRenderProps),
        onChange: _this.handleFormFieldChange(fieldRenderProps),
        onDecrease: _this.handleDecrease(fieldRenderProps),
        onIncrease: _this.handleIncrease(fieldRenderProps),
        value: fieldRenderProps.input.value
      }, _this.props));
    };

    _this.renderFieldComponent = _this.renderFieldComponent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormNumericalStepper, [{
    key: "handleDecrease",
    value: function handleDecrease(fieldRenderProps) {
      return function () {
        if (!(fieldRenderProps.input.value <= 0)) {
          var _fieldRenderProps$inp = fieldRenderProps.input,
              value = _fieldRenderProps$inp.value,
              onChange = _fieldRenderProps$inp.onChange;
          onChange(value - 1);
        }
      };
    }
  }, {
    key: "handleIncrease",
    value: function handleIncrease(fieldRenderProps) {
      return function () {
        var _fieldRenderProps$inp2 = fieldRenderProps.input,
            value = _fieldRenderProps$inp2.value,
            onChange = _fieldRenderProps$inp2.onChange;
        onChange(value + 1);
      };
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(fieldRenderProps) {
      return function () {
        var _fieldRenderProps$inp3 = fieldRenderProps.input,
            value = _fieldRenderProps$inp3.value,
            onChange = _fieldRenderProps$inp3.onChange;
        onChange(value);
      };
    }
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
     * Renders the base input field
     * NOTE: It is required to pass a named function to component
     * ... if you pass an anonymous function it will re-create the component
     * @param  {Object} fieldRenderProps - react final form field props
     * @return {React.Component}
     */

  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      return React.createElement(Field, {
        name: id,
        initialValue: 0,
        component: this.renderFieldComponent
      });
    }
  }]);

  return FormNumericalStepper;
}(React.Component);

export default withFormState(FormNumericalStepper);
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { Form } from 'react-final-form'; // Mutators
// https://github.com/final-form/final-form-set-field-touched

import setFieldTouched from 'final-form-set-field-touched'; // Utilities

import Validate from '../../utilities/validate';

var FormDecorator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormDecorator, _React$Component);

  function FormDecorator() {
    _classCallCheck(this, FormDecorator);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormDecorator).apply(this, arguments));
  }

  _createClass(FormDecorator, [{
    key: "render",
    value: function render() {
      // This component acts as mainly a pass through to react-final-form,
      // but we augment functionality and encapsulate required form behaviors
      var _this$props = this.props,
          render = _this$props.render,
          validations = _this$props.validations;
      return React.createElement(Form, Object.assign({
        validate: FormDecorator.handleValidate({
          validations: validations
        }),
        mutators: {
          setFieldTouched: setFieldTouched
        }
      }, this.props, {
        render: FormDecorator.decorateRender(render, validations) // Render passed is always decorated

      }));
    }
  }], [{
    key: "allFieldsHaveValues",

    /**
     * A UX requirement to check there is at least some value in all fields
     * @param  {Function} options.formRenderProps.form.getRegisteredFields - the form field names
     * @param  {Object} options.values - current key/values of form state
     * @return {Boolean}
     */
    value: function allFieldsHaveValues(_ref) {
      var formRenderProps = _ref.formRenderProps;
      var form = formRenderProps.form,
          values = formRenderProps.values;
      var registeredFields = form.getRegisteredFields();
      return registeredFields.every(function (fieldKey) {
        return !!values[fieldKey];
      });
    }
    /**
     * A UX requirement to check that all required fields have been visited
     * @param  {Function} options.formRenderProps.form.getRegisteredFields - the form field names
     * @param  {Function} options.validations - the form field names
     * @param  {Object} options.values - current key/values of form state
     * @return {Boolean}
     */

  }, {
    key: "allRequiredFieldsHaveBeenVisited",
    value: function allRequiredFieldsHaveBeenVisited(_ref2) {
      var formRenderProps = _ref2.formRenderProps,
          validations = _ref2.validations;
      var visited = formRenderProps.visited;
      var validationFields = Object.keys(validations);
      var requiredFields = validationFields.filter(function (fieldKey) {
        return Object.prototype.hasOwnProperty.call(validations[fieldKey], 'required');
      });
      return requiredFields.every(function (fieldKey) {
        return !!visited[fieldKey];
      });
    }
    /**
     * Decorates the form render props with computed properties
     * @param  {Object} options.formRenderProps - react-final-form state values
     * @param  {Object} options.validations - dynamic validation object
     * @return {Object} props + computedProps
     */

  }, {
    key: "decorateFormRenderProps",
    value: function decorateFormRenderProps(_ref3) {
      var formRenderProps = _ref3.formRenderProps,
          validations = _ref3.validations;
      return Object.assign({}, formRenderProps, {
        allFieldsHaveValues: this.allFieldsHaveValues({
          formRenderProps: formRenderProps
        }),
        allRequiredFieldsHaveBeenVisited: this.allRequiredFieldsHaveBeenVisited({
          formRenderProps: formRenderProps,
          validations: validations
        })
      });
    }
  }, {
    key: "handleValidate",
    value: function handleValidate(_ref4) {
      var validations = _ref4.validations;
      return function (values) {
        return Validate.validateForm(values, validations);
      };
    }
  }, {
    key: "decorateRender",
    value: function decorateRender(renderFn, validations) {
      var _this = this;

      return function (formRenderProps) {
        // Form Render Props are passed to the render method of the Form
        // Values include [handleSubmit, form, and ...formState]
        // For more information:
        // https://github.com/final-form/react-final-form#formrenderprops
        // **** 
        // We are augmenting these values by adding additional information valuable to our functionality
        return renderFn(_this.decorateFormRenderProps({
          formRenderProps: formRenderProps,
          validations: validations
        }));
      };
    }
  }]);

  return FormDecorator;
}(React.Component);

export default FormDecorator;
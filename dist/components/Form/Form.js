"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _finalFormSetFieldTouched = _interopRequireDefault(require("final-form-set-field-touched"));

var _validate = _interopRequireDefault(require("../../utilities/validations/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class FormDecorator extends _react.default.Component {
  /**
   * A UX requirement to check that all required fields have been visited or have values
   * @param  {Function} options.formRenderProps.form.getRegisteredFields - the form field names
   * @param  {Function} options.validations - the form field names
   * @param  {Object} options.values - current key/values of form state
   * @return {Boolean}
   */
  static allRequiredFieldsHaveBeenVisitedOrHaveValues(_ref) {
    let {
      formRenderProps,
      validations
    } = _ref;
    const {
      values,
      visited
    } = formRenderProps;
    const validationFields = Object.keys(validations);
    const requiredFields = validationFields.filter(fieldKey => {
      return Object.prototype.hasOwnProperty.call(validations[fieldKey], 'required');
    });
    return requiredFields.every(fieldKey => {
      return !!values[fieldKey] || !!visited[fieldKey];
    });
  }
  /**
   * Decorates the form render props with computed properties
   * @param  {Object} options.formRenderProps - react-final-form state values
   * @param  {Object} options.validations - dynamic validation object
   * @return {Object} props + computedProps
   */


  static decorateFormRenderProps(_ref2) {
    let {
      formRenderProps,
      validations
    } = _ref2;
    return Object.assign({}, formRenderProps, {
      allRequiredFieldsHaveBeenVisitedOrHaveValues: this.allRequiredFieldsHaveBeenVisitedOrHaveValues({
        formRenderProps,
        validations
      })
    });
  }

  static handleValidate(_ref3) {
    let {
      validations
    } = _ref3;
    return values => {
      return _validate.default.validateForm(values, validations);
    };
  }

  static decorateRender(renderFn, validations) {
    return formRenderProps => {
      // Form Render Props are passed to the render method of the Form
      // Values include [handleSubmit, form, and ...formState]
      // For more information:
      // https://github.com/final-form/react-final-form#formrenderprops
      // **** 
      // We are augmenting these values by adding additional information valuable to our functionality
      return renderFn(this.decorateFormRenderProps({
        formRenderProps,
        validations
      }));
    };
  }

  render() {
    // This component acts as mainly a pass through to react-final-form,
    // but we augment functionality and encapsulate required form behaviors
    const {
      render,
      validations,
      onSubmit
    } = this.props;
    return _react.default.createElement(_reactFinalForm.Form, _extends({
      validate: FormDecorator.handleValidate({
        validations
      }),
      mutators: {
        setFieldTouched: _finalFormSetFieldTouched.default
      },
      onSubmit: onSubmit
    }, this.props, {
      render: FormDecorator.decorateRender(render, validations) // Render passed is always decorated

    }));
  }

}

var _default = FormDecorator;
exports.default = _default;
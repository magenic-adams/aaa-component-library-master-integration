(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "react", "react-final-form", "final-form-set-field-touched", "../../utilities/validations/validate"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/classCallCheck"), require("@babel/runtime/helpers/esm/createClass"), require("@babel/runtime/helpers/esm/possibleConstructorReturn"), require("@babel/runtime/helpers/esm/getPrototypeOf"), require("@babel/runtime/helpers/esm/inherits"), require("react"), require("react-final-form"), require("final-form-set-field-touched"), require("../../utilities/validations/validate"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.reactFinalForm, global.finalFormSetFieldTouched, global.validate);
    global.Form = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react, _reactFinalForm, _finalFormSetFieldTouched, _validate) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireDefault(_react);
  _finalFormSetFieldTouched = _interopRequireDefault(_finalFormSetFieldTouched);
  _validate = _interopRequireDefault(_validate);

  // Mutators
  // https://github.com/final-form/final-form-set-field-touched
  // Utilities
  var FormDecorator =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(FormDecorator, _React$Component);

    function FormDecorator() {
      (0, _classCallCheck2.default)(this, FormDecorator);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormDecorator).apply(this, arguments));
    }

    (0, _createClass2.default)(FormDecorator, [{
      key: "render",
      value: function render() {
        // This component acts as mainly a pass through to react-final-form,
        // but we augment functionality and encapsulate required form behaviors
        var _this$props = this.props,
            render = _this$props.render,
            validations = _this$props.validations,
            onSubmit = _this$props.onSubmit;
        return _react.default.createElement(_reactFinalForm.Form, Object.assign({
          validate: FormDecorator.handleValidate({
            validations: validations
          }),
          mutators: {
            setFieldTouched: _finalFormSetFieldTouched.default
          },
          onSubmit: onSubmit
        }, this.props, {
          render: FormDecorator.decorateRender(render, validations) // Render passed is always decorated

        }));
      }
    }], [{
      key: "allRequiredFieldsHaveBeenVisitedOrHaveValues",

      /**
       * A UX requirement to check that all required fields have been visited or have values
       * @param  {Function} options.formRenderProps.form.getRegisteredFields - the form field names
       * @param  {Function} options.validations - the form field names
       * @param  {Object} options.values - current key/values of form state
       * @return {Boolean}
       */
      value: function allRequiredFieldsHaveBeenVisitedOrHaveValues(_ref) {
        var formRenderProps = _ref.formRenderProps,
            validations = _ref.validations;
        var values = formRenderProps.values,
            visited = formRenderProps.visited;
        var validationFields = Object.keys(validations);
        var requiredFields = validationFields.filter(function (fieldKey) {
          return Object.prototype.hasOwnProperty.call(validations[fieldKey], 'required');
        });
        return requiredFields.every(function (fieldKey) {
          return !!values[fieldKey] || !!visited[fieldKey];
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
      value: function decorateFormRenderProps(_ref2) {
        var formRenderProps = _ref2.formRenderProps,
            validations = _ref2.validations;
        return Object.assign({}, formRenderProps, {
          allRequiredFieldsHaveBeenVisitedOrHaveValues: this.allRequiredFieldsHaveBeenVisitedOrHaveValues({
            formRenderProps: formRenderProps,
            validations: validations
          })
        });
      }
    }, {
      key: "handleValidate",
      value: function handleValidate(_ref3) {
        var validations = _ref3.validations;
        return function (values) {
          return _validate.default.validateForm(values, validations);
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
  }(_react.default.Component);

  var _default = FormDecorator;
  _exports.default = _default;
});
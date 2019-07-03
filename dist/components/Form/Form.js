"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _finalFormSetFieldTouched = _interopRequireDefault(require("final-form-set-field-touched"));

var _validate = _interopRequireDefault(require("../../utilities/validations/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
          validations = _this$props.validations,
          onSubmit = _this$props.onSubmit;
      return _react["default"].createElement(_reactFinalForm.Form, _extends({
        validate: FormDecorator.handleValidate({
          validations: validations
        }),
        mutators: {
          setFieldTouched: _finalFormSetFieldTouched["default"]
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
        return _validate["default"].validateForm(values, validations);
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
}(_react["default"].Component);

var _default = FormDecorator;
exports["default"] = _default;
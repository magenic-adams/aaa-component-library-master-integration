"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _withFormState = _interopRequireDefault(require("../withFormState"));

var _NumericalStepper = _interopRequireDefault(require("../../Stepper/NumericalStepper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
var FormNumericalStepper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormNumericalStepper, _React$Component);

  _createClass(FormNumericalStepper, null, [{
    key: "handleDecrease",
    value: function handleDecrease(fieldRenderProps) {
      return function () {
        if (!(fieldRenderProps.input.value <= 0)) {
          var _fieldRenderProps$inp = fieldRenderProps.input,
              value = _fieldRenderProps$inp.value,
              onChange = _fieldRenderProps$inp.onChange;
          var newValue = Number.isNaN(parseInt(value, 10)) ? 1 : parseInt(value, 10) - 1;
          onChange(newValue);
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
        var newValue = Number.isNaN(parseInt(value, 10)) ? 1 : parseInt(value, 10) + 1;
        onChange(newValue);
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
  }]);

  function FormNumericalStepper(props) {
    var _this;

    _classCallCheck(this, FormNumericalStepper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormNumericalStepper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderFieldComponent", function (fieldRenderProps) {
      // const ref = this.getInputRef();
      var meta = fieldRenderProps.meta;
      var id = _this.props.id;
      return _react["default"].createElement(_NumericalStepper["default"], _extends({
        id: id,
        name: id,
        error: meta.touched && meta.error,
        onBlur: FormNumericalStepper.handleBlur(fieldRenderProps),
        onChange: _this.handleFormFieldChange(fieldRenderProps),
        onDecrease: FormNumericalStepper.handleDecrease(fieldRenderProps),
        onIncrease: FormNumericalStepper.handleIncrease(fieldRenderProps),
        value: fieldRenderProps.input.value
      }, _this.props));
    });

    _this.renderFieldComponent = _this.renderFieldComponent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormNumericalStepper, [{
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
      return _react["default"].createElement(_reactFinalForm.Field, {
        name: id,
        initialValue: 0,
        component: this.renderFieldComponent
      });
    }
  }]);

  return FormNumericalStepper;
}(_react["default"].Component);

var _default = (0, _withFormState["default"])(FormNumericalStepper);

exports["default"] = _default;
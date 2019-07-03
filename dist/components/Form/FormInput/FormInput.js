"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFinalForm = require("react-final-form");

var _withFormState = _interopRequireDefault(require("../withFormState"));

var _BaseInput = _interopRequireDefault(require("../../Input/BaseInput/BaseInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var FormInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormInput, _React$Component);

  function FormInput(props) {
    var _this;

    _classCallCheck(this, FormInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "inputRef", _react["default"].createRef());

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
      return _react["default"].createElement(_BaseInput["default"], _extends({}, fieldProps.input, {
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
      return _react["default"].createElement(_reactFinalForm.Field, {
        name: id,
        initialValue: initialValue,
        component: this.renderFieldComponent
      });
    }
  }]);

  return FormInput;
}(_react["default"].Component);

_defineProperty(FormInput, "defaultProps", {
  initialValue: ''
});

var _default = (0, _withFormState["default"])(FormInput);

exports["default"] = _default;
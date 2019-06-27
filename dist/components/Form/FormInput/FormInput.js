(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/inherits", "react", "react-final-form", "../withFormState", "../../Input/BaseInput/BaseInput"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/classCallCheck"), require("@babel/runtime/helpers/esm/createClass"), require("@babel/runtime/helpers/esm/possibleConstructorReturn"), require("@babel/runtime/helpers/esm/getPrototypeOf"), require("@babel/runtime/helpers/esm/assertThisInitialized"), require("@babel/runtime/helpers/esm/inherits"), require("react"), require("react-final-form"), require("../withFormState"), require("../../Input/BaseInput/BaseInput"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.assertThisInitialized, global.inherits, global.react, global.reactFinalForm, global.withFormState, global.BaseInput);
    global.undefined = mod.exports;
  }
})(this, function (exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _assertThisInitialized2, _inherits2, _react, _reactFinalForm, _withFormState, _BaseInput) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf2);

  var _assertThisInitialized3 = _interopRequireDefault(_assertThisInitialized2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react2 = _interopRequireDefault(_react);

  var _withFormState2 = _interopRequireDefault(_withFormState);

  var _BaseInput2 = _interopRequireDefault(_BaseInput);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
  // Components
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

  var FormInput = function (_React$Component) {
    (0, _inherits3.default)(FormInput, _React$Component);

    function FormInput(props) {
      var _this;

      (0, _classCallCheck3.default)(this, FormInput);
      _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf3.default)(FormInput).call(this, props));
      _this.inputRef = _react2.default.createRef();
      _this.getInputRef = _this.getInputRef.bind((0, _assertThisInitialized3.default)(_this));
      _this.handleFormFieldChange = _this.handleFormFieldChange.bind((0, _assertThisInitialized3.default)(_this));
      _this.handleFieldClear = _this.handleFieldClear.bind((0, _assertThisInitialized3.default)(_this));
      _this.renderFieldComponent = _this.renderFieldComponent.bind((0, _assertThisInitialized3.default)(_this));
      return _this;
    }
    /**
     * Receives the ref for the underlying input
     * @return {React.RefObject<any>}
     */


    (0, _createClass3.default)(FormInput, [{
      key: "getInputRef",
      value: function getInputRef() {
        var forwardedRef = this.props.forwardedRef;
        return forwardedRef || this.inputRef;
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
    }, {
      key: "renderFieldComponent",
      value: function renderFieldComponent(fieldProps) {
        var ref = this.getInputRef();
        var meta = fieldProps.meta;
        return _react2.default.createElement(_BaseInput2.default, Object.assign({}, fieldProps.input, {
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
        return _react2.default.createElement(_reactFinalForm.Field, {
          name: id,
          initialValue: initialValue,
          component: this.renderFieldComponent
        });
      }
    }]);
    return FormInput;
  }(_react2.default.Component);

  FormInput.defaultProps = {
    initialValue: ''
  };
  exports.default = (0, _withFormState2.default)(FormInput);
});
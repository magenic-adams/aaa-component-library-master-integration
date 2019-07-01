(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/inherits", "react", "react-final-form", "../withFormState", "../../Stepper/NumericalStepper"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/classCallCheck"), require("@babel/runtime/helpers/esm/possibleConstructorReturn"), require("@babel/runtime/helpers/esm/getPrototypeOf"), require("@babel/runtime/helpers/esm/assertThisInitialized"), require("@babel/runtime/helpers/esm/createClass"), require("@babel/runtime/helpers/esm/inherits"), require("react"), require("react-final-form"), require("../withFormState"), require("../../Stepper/NumericalStepper"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.possibleConstructorReturn, global.getPrototypeOf, global.assertThisInitialized, global.createClass, global.inherits, global.react, global.reactFinalForm, global.withFormState, global.NumericalStepper);
    global.FormnumericalStepper = mod.exports;
  }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf2, _assertThisInitialized2, _createClass2, _inherits2, _react, _reactFinalForm, _withFormState, _NumericalStepper) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireDefault(_react);
  _withFormState = _interopRequireDefault(_withFormState);
  _NumericalStepper = _interopRequireDefault(_NumericalStepper);

  // Components

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
    (0, _inherits2.default)(FormNumericalStepper, _React$Component);
    (0, _createClass2.default)(FormNumericalStepper, null, [{
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

      (0, _classCallCheck2.default)(this, FormNumericalStepper);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FormNumericalStepper).call(this, props));

      _this.renderFieldComponent = function (fieldRenderProps) {
        // const ref = this.getInputRef();
        var meta = fieldRenderProps.meta;
        var id = _this.props.id;
        return _react.default.createElement(_NumericalStepper.default, Object.assign({
          id: id,
          name: id,
          error: meta.touched && meta.error,
          onBlur: FormNumericalStepper.handleBlur(fieldRenderProps),
          onChange: _this.handleFormFieldChange(fieldRenderProps),
          onDecrease: FormNumericalStepper.handleDecrease(fieldRenderProps),
          onIncrease: FormNumericalStepper.handleIncrease(fieldRenderProps),
          value: fieldRenderProps.input.value
        }, _this.props));
      };

      _this.renderFieldComponent = _this.renderFieldComponent.bind((0, _assertThisInitialized2.default)(_this));
      return _this;
    }

    (0, _createClass2.default)(FormNumericalStepper, [{
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
        return _react.default.createElement(_reactFinalForm.Field, {
          name: id,
          initialValue: 0,
          component: this.renderFieldComponent
        });
      }
    }]);
    return FormNumericalStepper;
  }(_react.default.Component);

  var _default = (0, _withFormState.default)(FormNumericalStepper);

  _exports.default = _default;
});
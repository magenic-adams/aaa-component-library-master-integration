(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/objectWithoutProperties", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/assertThisInitialized", "@babel/runtime/helpers/esm/inherits", "react", "react-text-mask", "../BaseInput/BaseInput"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/objectWithoutProperties"), require("@babel/runtime/helpers/esm/classCallCheck"), require("@babel/runtime/helpers/esm/createClass"), require("@babel/runtime/helpers/esm/possibleConstructorReturn"), require("@babel/runtime/helpers/esm/getPrototypeOf"), require("@babel/runtime/helpers/esm/assertThisInitialized"), require("@babel/runtime/helpers/esm/inherits"), require("react"), require("react-text-mask"), require("../BaseInput/BaseInput"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.objectWithoutProperties, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.assertThisInitialized, global.inherits, global.react, global.reactTextMask, global.BaseInput);
    global.NumericInput = mod.exports;
  }
})(this, function (_exports, _objectWithoutProperties2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _assertThisInitialized2, _inherits2, _react, _reactTextMask, _BaseInput) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _objectWithoutProperties2 = _interopRequireDefault(_objectWithoutProperties2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireDefault(_react);
  _reactTextMask = _interopRequireDefault(_reactTextMask);
  _BaseInput = _interopRequireDefault(_BaseInput);

  // Components
  var NumericInput =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(NumericInput, _React$Component);

    function NumericInput(props) {
      var _this;

      (0, _classCallCheck2.default)(this, NumericInput);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NumericInput).call(this, props));
      _this.determineInputComponent = _this.determineInputComponent.bind((0, _assertThisInitialized2.default)(_this));
      _this.renderTextMaskCustomComponent = _this.renderTextMaskCustomComponent.bind((0, _assertThisInitialized2.default)(_this));
      return _this;
    }

    (0, _createClass2.default)(NumericInput, [{
      key: "determineInputComponent",
      value: function determineInputComponent() {
        var mask = this.props.mask;

        if (!mask) {
          return {};
        }

        return {
          inputComponent: this.renderTextMaskCustomComponent
        };
      }
    }, {
      key: "renderTextMaskCustomComponent",
      value: function renderTextMaskCustomComponent(otherProps) {
        var forwardedRef = otherProps.forwardedRef,
            other = (0, _objectWithoutProperties2.default)(otherProps, ["forwardedRef"]);
        var mask = this.props.mask;
        if (!mask) (function () {
          return undefined;
        });
        return _react.default.createElement(_reactTextMask.default, Object.assign({
          ref: forwardedRef,
          mask: mask,
          guide: false,
          autoComplete: "off"
        }, other));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            error = _this$props.error,
            id = _this$props.id,
            name = _this$props.name,
            onChange = _this$props.onChange,
            onClear = _this$props.onClear,
            onBlur = _this$props.onBlur;
        return _react.default.createElement(_BaseInput.default, Object.assign({
          id: id,
          name: name,
          error: error,
          onChange: onChange,
          onClear: onClear,
          onBlur: onBlur
        }, this.determineInputComponent(), this.props));
      }
    }]);
    return NumericInput;
  }(_react.default.Component);

  var _default = NumericInput;
  _exports.default = _default;
});
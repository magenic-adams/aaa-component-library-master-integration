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
    global.undefined = mod.exports;
  }
})(this, function (exports, _objectWithoutProperties2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _assertThisInitialized2, _inherits2, _react, _reactTextMask, _BaseInput) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf2);

  var _assertThisInitialized3 = _interopRequireDefault(_assertThisInitialized2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react2 = _interopRequireDefault(_react);

  var _reactTextMask2 = _interopRequireDefault(_reactTextMask);

  var _BaseInput2 = _interopRequireDefault(_BaseInput);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

  var NumericInput = function (_React$Component) {
    (0, _inherits3.default)(NumericInput, _React$Component);

    function NumericInput(props) {
      var _this;

      (0, _classCallCheck3.default)(this, NumericInput);
      _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf3.default)(NumericInput).call(this, props));
      _this.determineInputComponent = _this.determineInputComponent.bind((0, _assertThisInitialized3.default)(_this));
      _this.renderTextMaskCustomComponent = _this.renderTextMaskCustomComponent.bind((0, _assertThisInitialized3.default)(_this));
      return _this;
    }

    (0, _createClass3.default)(NumericInput, [{
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
            other = (0, _objectWithoutProperties3.default)(otherProps, ["forwardedRef"]);
        var mask = this.props.mask;
        if (!mask) (function () {
          return undefined;
        });
        return _react2.default.createElement(_reactTextMask2.default, Object.assign({
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
        return _react2.default.createElement(_BaseInput2.default, Object.assign({
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
  }(_react2.default.Component);

  exports.default = NumericInput;
});
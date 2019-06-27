(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-final-form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-final-form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactFinalForm);
    global.withFormState = mod.exports;
  }
})(this, function (_exports, _react, _reactFinalForm) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);

  var withFormState = function withFormState(Component) {
    return function (props) {
      return _react.default.createElement(Component, Object.assign({
        formState: (0, _reactFinalForm.useForm)()
      }, props));
    };
  };

  var _default = withFormState;
  _exports.default = _default;
});
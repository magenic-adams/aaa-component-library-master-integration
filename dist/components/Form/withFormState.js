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
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactFinalForm) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

  var withFormState = function withFormState(Component) {
    return function (props) {
      return _react2.default.createElement(Component, Object.assign({
        formState: (0, _reactFinalForm.useForm)()
      }, props));
    };
  };

  exports.default = withFormState;
});
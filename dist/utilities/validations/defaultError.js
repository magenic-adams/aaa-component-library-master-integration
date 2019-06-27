(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/slicedToArray", "./regex"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/slicedToArray"), require("./regex"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.regex);
    global.undefined = mod.exports;
  }
})(this, function (exports, _slicedToArray2, _regex) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = generateDefaultErrorRule;

  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

  var _regex2 = _interopRequireDefault(_regex);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
  var dynamicErrors = {
    at_least: function at_least(param) {
      return "This amount must be at least ".concat(param);
    },
    at_most: function at_most(param) {
      return "This amount must be less than or equal to ".concat(param);
    }
  }; // TODO: create generic errors for non-param cases

  var staticErrors = {
    at_least: 'This field has minimum validation error',
    at_most: 'This field has maxiumum validation error'
  };
  /**
   * If no error, surface a default message
   * @param  {string} ruleKey
   * @return {string} errorMessage
   */

  function generateDefaultErrorRule(ruleKey) {
    var parts = _regex2.default.ruleRegex.exec(ruleKey);

    if (parts) {
      var _parts = (0, _slicedToArray3.default)(parts, 3),
          _rule = _parts[1],
          _param = _parts[2];

      if (dynamicErrors[_rule]) {
        return dynamicErrors[_rule](_param);
      }
    }

    if (staticErrors[ruleKey]) {
      return staticErrors[ruleKey];
    } // Generic field-level validation error message


    return 'There is an error with this field';
  }
});
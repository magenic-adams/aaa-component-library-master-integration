"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateDefaultErrorRule;

var _regex = _interopRequireDefault(require("./regex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dynamicErrors = {
  at_least: param => "This amount must be at least ".concat(param),
  at_most: param => "This amount must be less than or equal to ".concat(param)
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
  var parts = _regex.default.ruleRegex.exec(ruleKey);

  if (parts) {
    var [, _rule, _param] = parts;

    if (dynamicErrors[_rule]) {
      return dynamicErrors[_rule](_param);
    }
  }

  if (staticErrors[ruleKey]) {
    return staticErrors[ruleKey];
  } // Generic field-level validation error message


  return 'There is an error with this field';
}
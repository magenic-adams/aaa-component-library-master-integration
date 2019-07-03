"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateDefaultErrorRule;

var _regex = _interopRequireDefault(require("./regex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var parts = _regex["default"].ruleRegex.exec(ruleKey);

  if (parts) {
    var _parts = _slicedToArray(parts, 3),
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
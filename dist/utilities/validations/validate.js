(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/slicedToArray", "lodash/values", "lodash/assign", "./regex", "./defaultError"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/defineProperty"), require("@babel/runtime/helpers/esm/slicedToArray"), require("lodash/values"), require("lodash/assign"), require("./regex"), require("./defaultError"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.slicedToArray, global.values, global.assign, global.regex, global.defaultError);
    global.validate = mod.exports;
  }
})(this, function (_exports, _defineProperty2, _slicedToArray2, _values, _assign2, _regex, _defaultError) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _values = _interopRequireDefault(_values);
  _assign2 = _interopRequireDefault(_assign2);
  _regex = _interopRequireDefault(_regex);
  _defaultError = _interopRequireDefault(_defaultError);
  var Validations = {
    /**
     * "alpha" checks if a value matches the alpha regex
     * @param  {string} value - field value
     * @return {boolean} isValid?
     */
    alpha: function alpha(value) {
      return _regex.default.alphaRegex.test(value);
    },

    /**
     * "alpha_dash" checks if a value matches the alphaDash regex
     * @param  {string} value - field value
     * @return {boolean} isValid?
     */
    alpha_dash: function alpha_dash(value) {
      return _regex.default.alphaDashRegex.test(value);
    },

    /**
     * "alpha_dash_dot_space" checks if a value matches the alphaDashDotSpace regex
     * @param  {string} value - field value
     * @return {boolean} isValid?
     */
    alpha_dash_dot_space: function alpha_dash_dot_space(value) {
      return _regex.default.alphaDashDotSpaceRegex.test(value);
    },

    /**
     * "alpha_dash_space" checks if a value matches the alphaDashSpace regex
     * @param  {string} value - field value
     * @return {boolean} isValid?
     */
    alpha_dash_space: function alpha_dash_space(value) {
      return _regex.default.alphaDashSpaceRegex.test(value);
    },

    /**
     * "alpha_name" checks if a value matches the alphaName regex
     * @param  {string} value - field value
     * @return {boolean} isValid?
     */
    alpha_name: function alpha_name(value) {
      return _regex.default.alphaNameRegex.test(value);
    },

    /**
     * "alpha_numeric" checks if a value matches the alphaNumeric regex
     * @param  {string} value - field value
     * @return {boolean} isValid?
     */
    alpha_numeric: function alpha_numeric(value) {
      return _regex.default.alphaNumericRegex.test(value);
    },

    /**
     * "at_least[parameter]" checks if a value is greater than or equal to a parameter
     * NOTE: Empty values are not validated by at_least
     * @param  {string} value - field value
     * @param  {string} param
     * @return {boolean} isValid?
     */
    at_least: function at_least(value, param) {
      if (Validations.is_empty(value)) {
        return true;
      }

      if (!_regex.default.decimalRegex.test(value)) {
        return false;
      }

      return parseFloat(value) >= parseFloat(param);
    },

    /**
     * "at_most[param]" checks if a field value is less than or equal to it's parameter
     * NOTE: Empty values are not validated by at_most
     * @param  {string} value - field value
     * @param  {string} param
     * @return {boolean} isValid?
     */
    at_most: function at_most(value, param) {
      if (Validations.is_empty(value)) {
        return true;
      }

      if (!_regex.default.decimalRegex.test(value)) {
        return false;
      }

      return parseFloat(value) <= parseFloat(param);
    },

    /**
     * "decimal" checks if a value is decimal
     * @param  {string|number} value
     * @return {boolean} isValid?
     */
    decimal: function decimal(value) {
      return _regex.default.decimalRegex.test(value);
    },

    /**
     * "exact_length[parameter]" checks if a string is exactly "param" amount of characters
     * @param  {string} value
     * @param  {string} length
     * @return {boolean} isValid?
     */
    exact_length: function exact_length(value, length) {
      if (!_regex.default.integerRegex.test(length)) {
        return false;
      }

      return (value || '').length === parseInt(length, 10);
    },

    /**
     * "integer" checks if a value is integer
     * @param  {string} value
     * @return {boolean} isValid?
     */
    integer: function integer(value) {
      return _regex.default.integerRegex.test(value);
    },

    /**
     * "is_array" checks to see if a value is an array
     * @param  {array} value
     * @return {boolean} isValid?
     */
    is_array: function is_array(value) {
      return Array.isArray(value);
    },

    /**
     * "is_empty" checks to see if a value is empty
     * @param  {string|number|Array<any>|undefined} value?
     * @return {boolean}
     */
    is_empty: function is_empty(value) {
      if (Array.isArray(value)) {
        return value.length === 0;
      }

      if (typeof value === 'string') {
        return _regex.default.emptyStringRegex.test(value);
      }

      if (value === undefined || value === null) {
        return true;
      }

      return false;
    },

    /**
     * "is_exact_value" checks if value is an exact match for a parameter
     * @param  {string} value - field value
     * @param  {string} param
     * @return {boolean} isValid?
     */
    is_exact_value: function is_exact_value(value, param) {
      return value === param;
    },

    /**
     * "is_file_type[param1,param2,...,param^n]" checks to see if params match file type ending
     * @param  {string} value
     * @param  {string} type - comma separated string values
     * @return {boolean} isValid?
     */
    is_file_type: function is_file_type(value, type) {
      var ext = value.substr(value.lastIndexOf('.') + 1);
      var typeArray = type.split(',');
      var inArray = false;
      var i = 0;
      var len = typeArray.length;

      for (i; i < len; i += 1) {
        if (ext === typeArray[i]) inArray = true;
      }

      return inArray;
    },

    /**
     * "is_natural" checks if a number is natural (whole, non-negative numbers)
     * @param  {string} value - field value
     * @return {boolean} isValid?
     */
    is_natural: function is_natural(value) {
      return _regex.default.naturalRegex.test(value);
    },

    /**
     * "is_natural_no_zero" checks if a number is natural (whole, non-negative numbers excluding zero)
     * @param  {string} value - field value
     * @return {boolean} isValid?
     */
    is_natural_no_zero: function is_natural_no_zero(value) {
      return _regex.default.naturalNoZeroRegex.test(value);
    },

    /**
     * "matches" checks to see if a field is an exact match for another field's value
     * @param  {string|array} value - field value
     * @param  {string} key
     * @param  {object} formVals - form value state
     * @return {boolean} isValid?
     */
    matches: function matches(value, key, formVals) {
      var matchValue = formVals[key];
      return value === matchValue;
    },

    /**
     * "matches_regex[param]" checks to see if string passes url validation regex
     * @param  {string} value
     * @param  {string} regexParam
     * @return {boolean} isValid?
     */
    matches_regex: function matches_regex(value, regexParam) {
      return RegExp(regexParam).test(value);
    },

    /**
     * "max_date[parameter]" checks to see if a value has not exceeded a maximum threshold
     * @param  {string|Date} value - field value
     * @param  {string} dateParam
     * @return {boolean} isValid?
     */
    max_date: function max_date(value, dateParam) {
      var formValueDate = new Date(value);
      var validationDate = new Date(dateParam);

      if (Number.isNaN(formValueDate.getTime()) || Number.isNaN(validationDate.getTime())) {
        // one of the dates is not valid, => not valid
        return false;
      }

      return formValueDate.getTime() <= validationDate.getTime();
    },

    /**
     * "max_length[parameter]" checks if a string is under a maximum threshold
     * @param  {string} value
     * @param  {string} length - string length
     * @return {boolean} isValid?
     */
    max_length: function max_length(value, length) {
      if (!_regex.default.integerRegex.test(length)) {
        return false;
      }

      return (value ? "".concat(value) : '').length <= parseInt(length, 10);
    },

    /**
     * "min_date[parameter]" checks to see if a value has not exceeded a minimum threshold
     * @param  {string|Date} value - field value
     * @param  {string} dateParam
     * @return {boolean} isValid?
     */
    min_date: function min_date(value, dateParam) {
      var formValueDate = new Date(value);
      var validationDate = new Date(dateParam);

      if (Number.isNaN(formValueDate.getTime()) || Number.isNaN(validationDate.getTime())) {
        // one of the dates is not valid, => not valid
        return false;
      }

      return formValueDate.getTime() >= validationDate.getTime();
    },

    /**
     * "min_length[parameter]" checks to see if a value has reached a minimum threshold
     * @param  {string} value - field value
     * @param  {string} length
     * @return {boolean} isValid?
     */
    min_length: function min_length(value, length) {
      if (!_regex.default.integerRegex.test(length)) {
        return false;
      }

      return (value || '').length >= parseInt(length, 10);
    },

    /**
     * "numeric" checks if a value is numeric
     * @param  {string} value
     * @return {boolean} isValid?
     */
    numeric: function numeric(value) {
      return _regex.default.numericRegex.test(value || '');
    },

    /**
     * "required" checks to see if the field has the presence of a value
     * @param  {string|number|array} val
     * @return {boolean} isValid?
     */
    required: function required(val) {
      return !Validations.is_empty(val);
    },

    /**
     * "valid_credit_card" checks to see if a string passes credit card regex validation
     * @param  {string} value
     * @return {boolean} isValid?
     */
    valid_credit_card: function valid_credit_card(value) {
      // Luhn Check Code from https://gist.github.com/4075533
      // accept only digits, dashes or spaces
      if (!_regex.default.numericDashRegex.test(value)) return false; // The Luhn Algorithm.

      var nCheck = 0;
      var nDigit = 0;
      var bEven = false;
      var strippedField = value.replace(/\D/g, '');

      for (var n = strippedField.length - 1; n >= 0; n -= 1) {
        var cDigit = strippedField.charAt(n);
        nDigit = parseInt(cDigit, 10);

        if (bEven) {
          // eslint-disable-next-line
          if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
      }

      return nCheck % 10 === 0;
    },

    /**
     * "valid_date" checks to see if a value is a valid date time value
     * @param  {string|DateTime} value
     * @return {boolean} isValid?
     */
    valid_date: function valid_date(value) {
      var time = new Date(value).getTime();
      return !Number.isNaN(time);
    },

    /**
     * "valid_email" checks if an email string passes email validation regex
     * @param  {string} value - field value
     * @return {boolean} isValid?
     */
    valid_email: function valid_email(value) {
      return _regex.default.emailRegex.test(value);
    },

    /**
     * "valid_url" checks to see if string passes url validation regex
     * @param  {string} value
     * @return {boolean} isValid?
     */
    valid_url: function valid_url(value) {
      return _regex.default.urlRegex.test(value);
    },

    /**
     * "is_unique" checks all other form field values to determine if this value is unique
     * @param  {string}  value
     * @param  {string|number|array} param - field value
     * @param  {object} formVals - form value state
     * @return {boolean}
     */
    is_unique: function is_unique() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var param = arguments.length > 1 ? arguments[1] : undefined;
      var formVals = arguments.length > 2 ? arguments[2] : undefined;
      var checkVal = value.toLowerCase();
      var allVals = (0, _values.default)(formVals); // There should not be more than 1.

      var matches = allVals.filter(function (v) {
        return v.toLowerCase() === checkVal;
      });
      return matches.length === 1;
    },

    /**
     * Generate an error message for this failed validation
     * @param {object} fieldValidationErrorMessages [description]
     * @param {string} ruleKey         [description]
     */
    generateErrorMessage: function generateErrorMessage(fieldValidationErrorMessages, ruleKey) {
      if (fieldValidationErrorMessages[ruleKey]) {
        // An error message has been passed by client, surface it
        return fieldValidationErrorMessages[ruleKey];
      } // Let's check our registry for a default error


      return (0, _defaultError.default)(ruleKey);
    },

    /**
     * Validates an individual field value
     * @param  {string|number|array|object} val
     * @param  {string} ruleKey
     * @param  {object} formVals
     * @return {object}
     */
    validateFieldValue: function validateFieldValue(value, ruleKey, formVals) {
      if (!ruleKey) {
        return true;
      }

      var isValid = true; // Assume validity

      var rule = ruleKey;
      var param = null;

      var parts = _regex.default.ruleRegex.exec(rule);

      if (parts) {
        // If the rule has a parameter, i.e. matches[param], split it out
        var _parts = (0, _slicedToArray2.default)(parts, 3);

        rule = _parts[1];
        param = _parts[2];
      } // We have a known method that matches the rule key


      if (typeof Validations[rule] === 'function') {
        isValid = Validations[rule](value, param, formVals);
      }

      return isValid;
    },

    /**
     * Validate form takes all form values and the validation object and validates each field
     * @param  {FormValues} formVals
     * @param  {object} validations
     * @return {object{[key:string]: message:string}}
     */
    validateForm: function validateForm(formVals, validations) {
      var fieldValidations = Object.keys(validations);
      var validationObj = fieldValidations.map(function (field) {
        var validity; // Our object to return

        var validationsToTest = Object.keys(validations[field]); // Loop over each validation tied to a specific field

        validationsToTest.forEach(function (rule) {
          // key is the rule
          var hasPassedUniqueValidation = Validations.validateFieldValue(formVals[field], rule, formVals); // If we haven't passed, construct the validation object with this validation

          if (!hasPassedUniqueValidation) {
            if (validity !== undefined) {
              validity[rule] = validations[field][rule];
            } else {
              validity = (0, _defineProperty2.default)({}, rule, validations[field][rule]);
            }
          }
        });
        return (0, _defineProperty2.default)({}, field, validity);
      }) // Turn the array back into the highest priority message for each field
      .reduce(function (accum, fieldValidation) {
        var fieldName = Object.keys(fieldValidation)[0];
        var firstErrorMessage; // Some sort of error is present, let's surface an error for the first

        if (fieldValidation[fieldName]) {
          var firstErrorRuleKey = Object.keys(fieldValidation[fieldName])[0];
          firstErrorMessage = Validations.generateErrorMessage(fieldValidation[fieldName], firstErrorRuleKey);
        }

        return (0, _assign2.default)({}, accum, (0, _defineProperty2.default)({}, fieldName, firstErrorMessage));
      }, {});
      return validationObj;
    }
  };
  var _default = Validations;
  _exports.default = _default;
});
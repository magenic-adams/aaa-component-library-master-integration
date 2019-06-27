(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports", "@babel/runtime/helpers/esm/defineProperty", "lodash/values", "lodash/assign", "./regex", "./defaultError"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("@babel/runtime/helpers/esm/defineProperty"), require("lodash/values"), require("lodash/assign"), require("./regex"), require("./defaultError"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.defineProperty, global.values, global.assign, global.regex, global.defaultError);
    global.undefined = mod.exports;
  }
})(this, function (module, exports, _defineProperty2, _values, _assign2, _regex, _defaultError) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.alpha = alpha;
  exports.alpha_dash = alpha_dash;
  exports.alpha_dash_dot_space = alpha_dash_dot_space;
  exports.alpha_dash_space = alpha_dash_space;
  exports.alpha_name = alpha_name;
  exports.alpha_numeric = alpha_numeric;
  exports.at_least = at_least;
  exports.at_most = at_most;
  exports.decimal = decimal;
  exports.exact_length = exact_length;
  exports.integer = integer;
  exports.is_array = is_array;
  exports.is_empty = is_empty;
  exports.is_exact_value = is_exact_value;
  exports.is_file_type = is_file_type;
  exports.is_natural = is_natural;
  exports.is_natural_no_zero = is_natural_no_zero;
  exports.matches = matches;
  exports.matches_regex = matches_regex;
  exports.max_date = max_date;
  exports.max_length = max_length;
  exports.min_date = min_date;
  exports.min_length = min_length;
  exports.numeric = numeric;
  exports.required = required;
  exports.valid_credit_card = valid_credit_card;
  exports.valid_date = valid_date;
  exports.valid_email = valid_email;
  exports.valid_url = valid_url;
  exports.is_unique = is_unique;
  exports.generateErrorMessage = generateErrorMessage;
  exports.validateFieldValue = validateFieldValue;
  exports.validateForm = validateForm;

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _values2 = _interopRequireDefault(_values);

  var _assign3 = _interopRequireDefault(_assign2);

  var _regex2 = _interopRequireDefault(_regex);

  var _defaultError2 = _interopRequireDefault(_defaultError);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

  /**
   * "alpha" checks if a value matches the alpha regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  function alpha(value) {
    return _regex2.default.alphaRegex.test(value);
  }
  /**
   * "alpha_dash" checks if a value matches the alphaDash regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */


  function alpha_dash(value) {
    return _regex2.default.alphaDashRegex.test(value);
  }
  /**
   * "alpha_dash_dot_space" checks if a value matches the alphaDashDotSpace regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */


  function alpha_dash_dot_space(value) {
    return _regex2.default.alphaDashDotSpaceRegex.test(value);
  }
  /**
   * "alpha_dash_space" checks if a value matches the alphaDashSpace regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */


  function alpha_dash_space(value) {
    return _regex2.default.alphaDashSpaceRegex.test(value);
  }
  /**
   * "alpha_name" checks if a value matches the alphaName regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */


  function alpha_name(value) {
    return _regex2.default.alphaNameRegex.test(value);
  }
  /**
   * "alpha_numeric" checks if a value matches the alphaNumeric regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */


  function alpha_numeric(value) {
    return _regex2.default.alphaNumericRegex.test(value);
  }
  /**
   * "at_least[parameter]" checks if a value is greater than or equal to a parameter
   * NOTE: Empty values are not validated by at_least
   * @param  {string} value - field value
   * @param  {string} param
   * @return {boolean} isValid?
   */


  function at_least(value, param) {
    if (is_empty(value)) {
      return true;
    }

    if (!_regex2.default.decimalRegex.test(value)) {
      return false;
    }

    return parseFloat(value) >= parseFloat(param);
  }
  /**
   * "at_most[param]" checks if a field value is less than or equal to it's parameter
   * NOTE: Empty values are not validated by at_most
   * @param  {string} value - field value
   * @param  {string} param
   * @return {boolean} isValid?
   */


  function at_most(value, param) {
    if (is_empty(value)) {
      return true;
    }

    if (!_regex2.default.decimalRegex.test(value)) {
      return false;
    }

    return parseFloat(value) <= parseFloat(param);
  }
  /**
   * "decimal" checks if a value is decimal
   * @param  {string|number} value
   * @return {boolean} isValid?
   */


  function decimal(value) {
    return _regex2.default.decimalRegex.test(value);
  }
  /**
   * "exact_length[parameter]" checks if a string is exactly "param" amount of characters
   * @param  {string} value
   * @param  {string} length
   * @return {boolean} isValid?
   */


  function exact_length(value, length) {
    if (!_regex2.default.integerRegex.test(length)) {
      return false;
    }

    return (value || '').length === parseInt(length, 10);
  }
  /**
   * "integer" checks if a value is integer
   * @param  {string} value
   * @return {boolean} isValid?
   */


  function integer(value) {
    return _regex2.default.integerRegex.test(value);
  }
  /**
   * "is_array" checks to see if a value is an array
   * @param  {array} value
   * @return {boolean} isValid?
   */


  function is_array(value) {
    return Array.isArray(value);
  }
  /**
   * "is_empty" checks to see if a value is empty
   * @param  {string|number|Array<any>|undefined} value?
   * @return {boolean}
   */


  function is_empty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }

    if (typeof value === 'string') {
      return _regex2.default.emptyStringRegex.test(value);
    }

    if (value === undefined || value === null) {
      return true;
    }

    return false;
  }
  /**
   * "is_exact_value" checks if value is an exact match for a parameter
   * @param  {string} value - field value
   * @param  {string} param
   * @return {boolean} isValid?
   */


  function is_exact_value(value, param) {
    return value === param;
  }
  /**
   * "is_file_type[param1,param2,...,param^n]" checks to see if params match file type ending
   * @param  {string} value
   * @param  {string} type - comma separated string values
   * @return {boolean} isValid?
   */


  function is_file_type(value, type) {
    var ext = value.substr(value.lastIndexOf('.') + 1);
    var typeArray = type.split(',');
    var inArray = false;
    var i = 0;
    var len = typeArray.length;

    for (i; i < len; i += 1) {
      if (ext === typeArray[i]) inArray = true;
    }

    return inArray;
  }
  /**
   * "is_natural" checks if a number is natural (whole, non-negative numbers)
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */


  function is_natural(value) {
    return _regex2.default.naturalRegex.test(value);
  }
  /**
   * "is_natural_no_zero" checks if a number is natural (whole, non-negative numbers excluding zero)
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */


  function is_natural_no_zero(value) {
    return _regex2.default.naturalNoZeroRegex.test(value);
  }
  /**
   * "matches" checks to see if a field is an exact match for another field's value
   * @param  {string|array} value - field value
   * @param  {string} key
   * @param  {object} formVals - form value state
   * @return {boolean} isValid?
   */


  function matches(value, key, formVals) {
    var matchValue = formVals[key];
    return value === matchValue;
  }
  /**
   * "matches_regex[param]" checks to see if string passes url validation regex
   * @param  {string} value
   * @param  {string} regexParam
   * @return {boolean} isValid?
   */


  function matches_regex(value, regexParam) {
    return RegExp(regexParam).test(value);
  }
  /**
   * "max_date[parameter]" checks to see if a value has not exceeded a maximum threshold
   * @param  {string|Date} value - field value
   * @param  {string} dateParam
   * @return {boolean} isValid?
   */


  function max_date(value, dateParam) {
    var formValueDate = new Date(value);
    var validationDate = new Date(dateParam);

    if (isNaN(formValueDate.getTime()) || isNaN(validationDate.getTime())) {
      // one of the dates is not valid, => not valid
      return false;
    }

    return formValueDate.getTime() <= validationDate.getTime();
  }
  /**
   * "max_length[parameter]" checks if a string is under a maximum threshold
   * @param  {string} value
   * @param  {string} length - string length
   * @return {boolean} isValid?
   */


  function max_length(value, length) {
    if (!_regex2.default.integerRegex.test(length)) {
      return false;
    }

    return (value ? "".concat(value) : '').length <= parseInt(length, 10);
  }
  /**
   * "min_date[parameter]" checks to see if a value has not exceeded a minimum threshold
   * @param  {string|Date} value - field value
   * @param  {string} dateParam
   * @return {boolean} isValid?
   */


  function min_date(value, dateParam) {
    var formValueDate = new Date(value);
    var validationDate = new Date(dateParam);

    if (isNaN(formValueDate.getTime()) || isNaN(validationDate.getTime())) {
      // one of the dates is not valid, => not valid
      return false;
    }

    return formValueDate.getTime() >= validationDate.getTime();
  }
  /**
   * "min_length[parameter]" checks to see if a value has reached a minimum threshold
   * @param  {string} value - field value
   * @param  {string} length
   * @return {boolean} isValid?
   */


  function min_length(value, length) {
    if (!_regex2.default.integerRegex.test(length)) {
      return false;
    }

    return (value || '').length >= parseInt(length, 10);
  }
  /**
   * "numeric" checks if a value is numeric
   * @param  {string} value
   * @return {boolean} isValid?
   */


  function numeric(value) {
    return _regex2.default.numericRegex.test(value || '');
  }
  /**
   * "required" checks to see if the field has the presence of a value
   * @param  {string|number|array} val
   * @return {boolean} isValid?
   */


  function required(val) {
    return !is_empty(val);
  }
  /**
   * "valid_credit_card" checks to see if a string passes credit card regex validation
   * @param  {string} value
   * @return {boolean} isValid?
   */


  function valid_credit_card(value) {
    // Luhn Check Code from https://gist.github.com/4075533
    // accept only digits, dashes or spaces
    if (!_regex2.default.numericDashRegex.test(value)) return false; // The Luhn Algorithm.

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
  }
  /**
   * "valid_date" checks to see if a value is a valid date time value
   * @param  {string|DateTime} value
   * @return {boolean} isValid?
   */


  function valid_date(value) {
    var time = new Date(value).getTime();
    return !Number.isNaN(time);
  }
  /**
   * "valid_email" checks if an email string passes email validation regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */


  function valid_email(value) {
    return _regex2.default.emailRegex.test(value);
  }
  /**
   * "valid_url" checks to see if string passes url validation regex
   * @param  {string} value
   * @return {boolean} isValid?
   */


  function valid_url(value) {
    return _regex2.default.urlRegex.test(value);
  }
  /**
   * "is_unique" checks all other form field values to determine if this value is unique
   * @param  {string}  value
   * @param  {string|number|array} param - field value
   * @param  {object} formVals - form value state
   * @return {boolean}
   */


  function is_unique() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var param = arguments.length > 1 ? arguments[1] : undefined;
    var formVals = arguments.length > 2 ? arguments[2] : undefined;
    var checkVal = value.toLowerCase();
    var allVals = (0, _values2.default)(formVals); // There should not be more than 1.

    var matches = allVals.filter(function (v) {
      return v.toLowerCase() === checkVal;
    });
    return matches.length === 1;
  }
  /**
   * Generate an error message for this failed validation
   * @param {object} fieldValidationErrorMessages [description]
   * @param {string} ruleKey         [description]
   */


  function generateErrorMessage(fieldValidationErrorMessages, ruleKey) {
    if (fieldValidationErrorMessages[ruleKey]) {
      // An error message has been passed by client, surface it
      return fieldValidationErrorMessages[ruleKey];
    } // Let's check our registry for a default error


    return (0, _defaultError2.default)(ruleKey);
  }
  /**
   * Validates an individual field value
   * @param  {string|number|array|object} val
   * @param  {string} ruleKey
   * @param  {object} formVals
   * @return {object}
   */


  function validateFieldValue(value, ruleKey, formVals) {
    if (!ruleKey) {
      return true;
    }

    var isValid = true; // Assume validity

    var rule = ruleKey;
    var param = null;

    var parts = _regex2.default.ruleRegex.exec(rule);

    if (parts) {
      // If the rule has a parameter, i.e. matches[param], split it out
      rule = parts[1];
      param = parts[2];
    } // We have a known method that matches the rule key


    if (typeof module.exports[rule] === 'function') {
      isValid = module.exports[rule](value, param, formVals);
    }

    return isValid;
  }
  /**
   * Validate form takes all form values and the validation object and validates each field
   * @param  {FormValues} formVals
   * @param  {object} validations
   * @return {object{[key:string]: message:string}}
   */


  function validateForm(formVals, validations) {
    var fieldValidations = Object.keys(validations);
    var validationObj = fieldValidations.map(function (field) {
      var validity; // Our object to return

      var validationsToTest = Object.keys(validations[field]); // Loop over each validation tied to a specific field

      validationsToTest.forEach(function (rule) {
        // key is the rule
        var hasPassedUniqueValidation = validateFieldValue(formVals[field], rule, formVals); // If we haven't passed, construct the validation object with this validation

        if (!hasPassedUniqueValidation) {
          if (validity !== undefined) {
            validity[rule] = validations[field][rule];
          } else {
            validity = (0, _defineProperty3.default)({}, rule, validations[field][rule]);
          }
        }
      });
      return (0, _defineProperty3.default)({}, field, validity);
    }) // Turn the array back into the highest priority message for each field
    .reduce(function (accum, fieldValidation) {
      var fieldName = Object.keys(fieldValidation)[0];
      var firstErrorMessage; // Some sort of error is present, let's surface an error for the first

      if (fieldValidation[fieldName]) {
        var firstErrorRuleKey = Object.keys(fieldValidation[fieldName])[0];
        firstErrorMessage = generateErrorMessage(fieldValidation[fieldName], firstErrorRuleKey);
      }

      return (0, _assign3.default)({}, accum, (0, _defineProperty3.default)({}, fieldName, firstErrorMessage));
    }, {});
    return validationObj;
  }

  ;
});
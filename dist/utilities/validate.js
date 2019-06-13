import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/* eslint-disable no-useless-escape */
// NOTE FOR REVIEW:
// ************
// PLEASE IGNORE THIS FILE, WE WILL HAVE ANOTHER TICKET TO UNIT TEST
// THIS VALIDATION LIBRARY
// 
// /* eslint-disable no-useless-escape */
// This is a modified, lean version of the library validate.js
// Check documentation for validate.js to see validation values
import objValues from 'lodash/values';
var Validate = {
  validateForm: function validateForm(formVals, validations) {
    var fieldValidations = Object.keys(validations);
    var validationObj = fieldValidations.map(function (field) {
      var validity = null; // Our object to return

      var validationsToTest = Object.keys(validations[field]); // Loop over each validation tied to a specific field

      validationsToTest.forEach(function (rule) {
        // key is the rule
        var hasPassedUniqueValidation = Validate.validateFieldValue(formVals[field], rule, formVals); // If we haven't passed, construct the validation object with this validation

        if (!hasPassedUniqueValidation) {
          if (validity !== null) {
            validity[rule] = validations[field][rule];
          } else {
            validity = _defineProperty({}, rule, validations[field][rule]);
          }
        }
      });
      return _defineProperty({}, field, validity || true);
    }) // Turn the array back into the highest priority message for each field
    .reduce(function (accum, fieldValidation) {
      var fieldName = Object.keys(fieldValidation)[0];
      var firstErrorMessage = null; // Some sort of error is present, let's take the top priority

      if (fieldValidation[fieldName]) {
        var firstErrorRuleKey = Object.keys(fieldValidation[fieldName])[0];
        firstErrorMessage = fieldValidation[fieldName][firstErrorRuleKey];
      } // eslint-disable-next-line


      accum[fieldName] = firstErrorMessage;
      return accum;
    }, {});
    return validationObj;
  },
  validateFieldValue: function validateFieldValue(val, r, formVals) {
    if (!r) {
      return true;
    }

    var isValid = true; // Assume validity

    var rule = r;
    var param = null;
    var parts = Validate.regex.ruleRegex.exec(rule);

    if (parts) {
      // If the rule has a parameter, i.e. matches[param], split it out

      /* eslint-disable prefer-destructuring */
      rule = parts[1];
      param = parts[2];
    }

    if (typeof Validate[rule] === 'function') {
      // we have a method that matches Validate rule
      // If we don't pass validations, flip the validation
      if (!Validate[rule].call(this, val, param, formVals)) {
        isValid = false;
      }
    }

    return isValid;
  },
  routingChecksum: function routingChecksum(a) {
    // Taken from Stripe Validation Utilities
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;

    for (d = 0, b = "".concat(a).split(''), g = [0, 3, 6], e = 0, f = g.length; f > e; e += 1) {
      // eslint-disable-next-line
      c = g[e], d += 3 * parseInt(b[c]), d += 7 * parseInt(b[c + 1]), d += parseInt(b[c + 2]);
    }

    return d !== 0 && d % 10 === 0;
  },

  /**
   * Defines the regular expressions that will be used
   */
  regex: {
    ruleRegex: /^(.+?)\[(.+)\]$/,
    numericRegex: /^[0-9]+([.,][0-9]+)?$/,
    integerRegex: /^-?[0-9]+$/,
    decimalRegex: /^\-?[0-9]*\.?[0-9]+$/,
    emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    // `<-- to fix syntax highlighting
    alphaRegex: /^[a-z]+$/i,
    alphaNumericRegex: /^[a-z0-9]+$/i,
    alphaDashRegex: /^[a-z0-9_]+$/i,
    alphaDashSpaceRegex: /^[a-z\s\-]+$/i,
    alphaDashDotSpaceRegex: /^[a-z\.\s\-]+$/i,
    alphaNameRegex: /^[a-zA-Z\-\']+$/i,
    naturalRegex: /^[0-9]+$/i,
    naturalNoZeroRegex: /^[1-9][0-9]*$/i,
    ipRegex: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
    base64Regex: /[^a-zA-Z0-9\/\+=]/i,
    numericDashRegex: /^[\d\-\s]+$/,
    urlRegex: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
  },

  /**
     * Methods to validate regex
     */
  required: function required(val) {
    if (Array.isArray(val)) {
      return val.length > 0;
    }

    return val !== undefined && val !== null && val !== '';
  },
  matches: function matches(value, key, formVals) {
    var matchValue = formVals[key];
    return value === matchValue;
  },
  is_exact_value: function is_exact_value(value, key) {
    return value === key;
  },
  valid_email: function valid_email(value) {
    return Validate.regex.emailRegex.test(value);
  },
  valid_emails: function valid_emails(value) {
    var result = value.split(',');

    for (var i = 0, resultLength = result.length; i < resultLength; i += 1) {
      if (!Validate.regex.emailRegex.test(result[i])) {
        return false;
      }
    }

    return true;
  },
  min_length: function min_length(value, length) {
    if (!Validate.regex.integerRegex.test(length)) {
      return false;
    }

    return (value || '').length >= parseInt(length, 10);
  },
  max_length: function max_length(value, length) {
    if (!Validate.regex.integerRegex.test(length)) {
      return false;
    }

    return (value ? "".concat(value) : '').length <= parseInt(length, 10);
  },
  exact_length: function exact_length(value, length) {
    if (!Validate.regex.integerRegex.test(length)) {
      return false;
    }

    return (value || '').length === parseInt(length, 10);
  },
  greater_than: function greater_than(value, param) {
    console.log('value', value);
    console.log('param', param);

    if (!Validate.regex.decimalRegex.test(value)) {
      return false;
    }

    return parseFloat(value) > parseFloat(param);
  },
  less_than: function less_than(val, param) {
    var value = val || 0;

    if (!Validate.regex.decimalRegex.test(value)) {
      return false;
    }

    return parseFloat(value) < parseFloat(param);
  },
  alpha: function alpha(value) {
    return Validate.regex.alphaRegex.test(value);
  },
  alpha_numeric: function alpha_numeric(value) {
    return Validate.regex.alphaNumericRegex.test(value);
  },
  alpha_dash: function alpha_dash(value) {
    return Validate.regex.alphaDashRegex.test(value);
  },
  alpha_dash_space: function alpha_dash_space(value) {
    return Validate.regex.alphaDashSpaceRegex.test(value);
  },
  alpha_dash_dot_space: function alpha_dash_dot_space(value) {
    return Validate.regex.alphaDashDotSpaceRegex.test(value);
  },
  alpha_name: function alpha_name(value) {
    return Validate.regex.alphaNameRegex.test(value);
  },
  numeric: function numeric(value) {
    return Validate.regex.numericRegex.test(value || '');
  },
  integer: function integer(value) {
    return Validate.regex.integerRegex.test(value);
  },
  decimal: function decimal(value) {
    return Validate.regex.decimalRegex.test(value);
  },
  is_natural: function is_natural(value) {
    return Validate.regex.naturalRegex.test(value);
  },
  is_natural_no_zero: function is_natural_no_zero(value) {
    return Validate.regex.naturalNoZeroRegex.test(value);
  },
  valid_ip: function valid_ip(value) {
    return Validate.regex.ipRegex.test(value);
  },
  valid_base64: function valid_base64(value) {
    return Validate.regex.base64Regex.test(value);
  },
  valid_url: function valid_url(value) {
    return Validate.regex.urlRegex.test(value);
  },
  valid_date: function valid_date(value) {
    var time = new Date(value).getTime();
    return !Number.isNaN(time);
  },
  video_site: function video_site(value) {
    if (!value) return false;

    if (value.indexOf('youtu.be') > -1 || value.indexOf('youtube.com') > -1 || value.indexOf('vimeo.com') > -1) {
      return true;
    }

    return false;
  },
  valid_credit_card: function valid_credit_card(value) {
    // Luhn Check Code from https://gist.github.com/4075533
    // accept only digits, dashes or spaces
    if (!Validate.regex.numericDashRegex.test(value)) return false; // The Luhn Algorithm.

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
  is_array: function is_array(value) {
    return Array.isArray(value);
  },
  valid_routing_number: function valid_routing_number(number) {
    return /^\d+$/.test(number) && number.length === 9 && Validate.routingChecksum(number);
  },
  valid_account_number: function valid_account_number(number) {
    return /^\d+$/.test(number) && number.length >= 1 && number.length <= 17;
  },
  is_unique: function is_unique() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var param = arguments.length > 1 ? arguments[1] : undefined;
    var formVals = arguments.length > 2 ? arguments[2] : undefined;
    var checkVal = val.toLowerCase();
    var allVals = objValues(formVals); // There should not be more than 1.

    var matches = allVals.filter(function (v) {
      return v.toLowerCase() === checkVal;
    });
    return matches.length === 1;
  }
};
export default Validate;
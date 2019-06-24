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
import regex from './regex';

const Validate = {
  validateForm(formVals, validations) {
    const fieldValidations = Object.keys(validations);
    const validationObj = fieldValidations
      .map((field) => {
        let validity = null; // Our object to return
        const validationsToTest = Object.keys(validations[field]);

        // Loop over each validation tied to a specific field
        validationsToTest.forEach((rule) => { // key is the rule
          const hasPassedUniqueValidation = Validate.validateFieldValue(
            formVals[field],
            rule,
            formVals,
          );

          // If we haven't passed, construct the validation object with this validation
          if (!hasPassedUniqueValidation) {
            if (validity !== null) {
              validity[rule] = validations[field][rule];
            } else {
              validity = { [rule]: validations[field][rule] };
            }
          }
        });

        return { [field]: validity || true };
      })
      // Turn the array back into the highest priority message for each field
      .reduce((accum, fieldValidation) => {
        const fieldName = Object.keys(fieldValidation)[0];
        let firstErrorMessage = null;
        // Some sort of error is present, let's take the top priority
        if (fieldValidation[fieldName]) {
          const firstErrorRuleKey = Object.keys(fieldValidation[fieldName])[0];
          firstErrorMessage = fieldValidation[fieldName][firstErrorRuleKey];
        }

        // eslint-disable-next-line
        accum[fieldName] = firstErrorMessage;
        return accum;
      }, {});

    return validationObj;
  },

  validateFieldValue(val, r, formVals) {
    if (!r) { return true; }
    let isValid = true; // Assume validity
    let rule = r;
    let param = null;
    const parts = regex.ruleRegex.exec(rule);

    if (parts) { // If the rule has a parameter, i.e. matches[param], split it out
      rule = parts[1];
      param = parts[2];
    }

    if (typeof Validate[rule] === 'function') { // we have a method that matches Validate rule
      // If we don't pass validations, flip the validation
      if (!Validate[rule].call(this, val, param, formVals)) {
        isValid = false;
      }
    }

    return isValid;
  },

  routingChecksum(a) { // Taken from Stripe Validation Utilities
    let b; let c; let d; let e; let f; let g;
    for (d = 0, b = (`${a}`).split(''), g = [0, 3, 6], e = 0, f = g.length; f > e; e += 1) {
      // eslint-disable-next-line
      c = g[e], d += 3 * parseInt(b[c]), d += 7 * parseInt(b[c + 1]), d += parseInt(b[c + 2]);
    }
    return d !== 0 && d % 10 === 0;
  },

  /**
     * Methods to validate regex
     */
  required(val) {
    if (Array.isArray(val)) { return (val.length > 0); }
    return (val !== undefined && val !== null && val !== '');
  },

  matches(value, key, formVals) {
    const matchValue = formVals[key];
    return value === matchValue;
  },

  is_exact_value(value, key) {
    return value === key;
  },

  valid_email(value) {
    return regex.emailRegex.test(value);
  },

  valid_emails(value) {
    const result = value.split(',');

    for (let i = 0, resultLength = result.length; i < resultLength; i += 1) {
      if (!regex.emailRegex.test(result[i])) {
        return false;
      }
    }

    return true;
  },

  min_length(value, length) {
    if (!regex.integerRegex.test(length)) {
      return false;
    }

    return ((value || '').length >= parseInt(length, 10));
  },

  max_length(value, length) {
    if (!regex.integerRegex.test(length)) {
      return false;
    }

    return (value ? (`${value}`) : '').length <= parseInt(length, 10);
  },

  exact_length(value, length) {
    if (!regex.integerRegex.test(length)) {
      return false;
    }

    return ((value || '').length === parseInt(length, 10));
  },

  greater_than(value, param) {
    if (!regex.decimalRegex.test(value)) {
      return false;
    }

    return (parseFloat(value) > parseFloat(param));
  },

  less_than(val, param) {
    const value = val || 0;
    if (!regex.decimalRegex.test(value)) {
      return false;
    }

    return (parseFloat(value) < parseFloat(param));
  },

  alpha(value) {
    return (regex.alphaRegex.test(value));
  },

  alpha_numeric(value) {
    return (regex.alphaNumericRegex.test(value));
  },

  alpha_dash(value) {
    return (regex.alphaDashRegex.test(value));
  },

  alpha_dash_space(value) {
    return (regex.alphaDashSpaceRegex.test(value));
  },

  alpha_dash_dot_space(value) {
    return (regex.alphaDashDotSpaceRegex.test(value));
  },

  alpha_name(value) {
    return (regex.alphaNameRegex.test(value));
  },

  numeric(value) {
    return (regex.numericRegex.test(value || ''));
  },

  integer(value) {
    return (regex.integerRegex.test(value));
  },

  decimal(value) {
    return (regex.decimalRegex.test(value));
  },

  is_natural(value) {
    return (regex.naturalRegex.test(value));
  },

  is_natural_no_zero(value) {
    return (regex.naturalNoZeroRegex.test(value));
  },

  valid_ip(value) {
    return (regex.ipRegex.test(value));
  },

  valid_base64(value) {
    return (regex.base64Regex.test(value));
  },

  valid_url(value) {
    return (regex.urlRegex.test(value));
  },

  valid_date(value) {
    const time = new Date(value).getTime();
    return !Number.isNaN(time);
  },

  video_site(value) {
    if (!value) return false;
    if (value.indexOf('youtu.be') > -1 || value.indexOf('youtube.com') > -1 || value.indexOf('vimeo.com') > -1) {
      return true;
    }
    return false;
  },

  valid_credit_card(value) {
    // Luhn Check Code from https://gist.github.com/4075533
    // accept only digits, dashes or spaces
    if (!regex.numericDashRegex.test(value)) return false;

    // The Luhn Algorithm.
    let nCheck = 0;
    let nDigit = 0;
    let bEven = false;
    const strippedField = value.replace(/\D/g, '');

    for (let n = strippedField.length - 1; n >= 0; n -= 1) {
      const cDigit = strippedField.charAt(n);
      nDigit = parseInt(cDigit, 10);
      if (bEven) {
        // eslint-disable-next-line
        if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) === 0;
  },

  is_file_type(value, type) {
    const ext = value.substr((value.lastIndexOf('.') + 1));
    const typeArray = type.split(',');
    let inArray = false;
    let i = 0;
    const len = typeArray.length;

    for (i; i < len; i += 1) {
      if (ext === typeArray[i]) inArray = true;
    }

    return inArray;
  },

  is_array(value) {
    return Array.isArray(value);
  },

  valid_routing_number(number) {
    return /^\d+$/.test(number) && number.length === 9 && Validate.routingChecksum(number);
  },

  valid_account_number(number) {
    return /^\d+$/.test(number) && number.length >= 1 && number.length <= 17;
  },

  is_unique(val = '', param, formVals) {
    const checkVal = val.toLowerCase();
    const allVals = objValues(formVals);
    // There should not be more than 1.
    const matches = allVals.filter(v => v.toLowerCase() === checkVal);
    return matches.length === 1;
  },
};

export default Validate;

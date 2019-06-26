import objValues from 'lodash/values';
import assign from 'lodash/assign';
import regex from './regex';

interface FormValues {
  [id:string]: string
}

interface Validation {
  [validation:string]: string
}

interface FieldValidations {
  [fieldKey:string]: Validation
}

interface Error {
  [fieldKey:string]: string
}

/**
 * "alpha" checks if a value matches the alpha regex
 * @param  {string} value - field value
 * @return {boolean} isValid?
 */
export function alpha(value:string):boolean {
  return (regex.alphaRegex.test(value));
}

/**
 * "alpha_dash" checks if a value matches the alphaDash regex
 * @param  {string} value - field value
 * @return {boolean} isValid?
 */
export function alpha_dash(value:string):boolean {
  return (regex.alphaDashRegex.test(value));
}

/**
 * "alpha_dash_dot_space" checks if a value matches the alphaDashDotSpace regex
 * @param  {string} value - field value
 * @return {boolean} isValid?
 */
export function alpha_dash_dot_space(value:string):boolean {
  return (regex.alphaDashDotSpaceRegex.test(value));
}

/**
 * "alpha_dash_space" checks if a value matches the alphaDashSpace regex
 * @param  {string} value - field value
 * @return {boolean} isValid?
 */
export function alpha_dash_space(value:string):boolean {
  return (regex.alphaDashSpaceRegex.test(value));
}


/**
 * "alpha_name" checks if a value matches the alphaName regex
 * @param  {string} value - field value
 * @return {boolean} isValid?
 */
export function alpha_name(value:string):boolean {
  return (regex.alphaNameRegex.test(value));
}

/**
 * "alpha_numeric" checks if a value matches the alphaNumeric regex
 * @param  {string} value - field value
 * @return {boolean} isValid?
 */
export function alpha_numeric(value:string):boolean {
  return (regex.alphaNumericRegex.test(value));
}

/**
 * "decimal" checks if a value is decimal
 * @param  {string|number} value
 * @return {boolean} isValid?
 */
export function decimal(value:string):boolean {
  return (regex.decimalRegex.test(value));
}

/**
 * "exact_length[parameter]" checks if a string is exactly "param" amount of characters
 * @param  {string} value
 * @param  {string} length
 * @return {boolean} isValid?
 */
export function exact_length(value:string, length:string):boolean {
  if (!regex.integerRegex.test(length)) {
    return false;
  }

  return ((value || '').length === parseInt(length, 10));
}

/**
 * "greater_than[parameter]" checks if a value is greater than a parameter
 * @param  {string} value - field value
 * @param  {string} param
 * @return {boolean} isValid?
 */
export function greater_than(value:string, param:string):boolean {
  if (!regex.decimalRegex.test(value)) {
    return false;
  }

  return (parseFloat(value) > parseFloat(param));
}

/**
 * "integer" checks if a value is integer
 * @param  {string} value
 * @return {boolean} isValid?
 */
export function integer(value:string):boolean {
  return (regex.integerRegex.test(value));
}

/**
 * "is_array" checks to see if a value is an array
 * @param  {array} value
 * @return {boolean} isValid?
 */
export function is_array(value?:Array<any>):boolean {
  return Array.isArray(value);
}

/**
 * "is_exact_value" checks if value is an exact match for a parameter
 * @param  {string} value - field value
 * @param  {string} param
 * @return {boolean} isValid?
 */
export function is_exact_value(value:string, param:string):boolean {
  return value === param;
}

/**
 * "is_file_type[param1,param2,...,param^n]" checks to see if params match file type ending
 * @param  {string} value
 * @param  {string} type - comma separated string values
 * @return {boolean} isValid?
 */
export function is_file_type(value:string, type:string):boolean {
  const ext = value.substr((value.lastIndexOf('.') + 1));
  const typeArray = type.split(',');
  let inArray = false;
  let i = 0;
  const len = typeArray.length;

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
export function is_natural(value:string):boolean {
  return (regex.naturalRegex.test(value));
}


/**
 * "is_natural_no_zero" checks if a number is natural (whole, non-negative numbers excluding zero)
 * @param  {string} value - field value
 * @return {boolean} isValid?
 */
export function is_natural_no_zero(value:string):boolean {
  return (regex.naturalNoZeroRegex.test(value));
}

/**
 * "less_then[param]" checks if a field value is less than it's parameter
 * @param  {string} value - field value
 * @param  {string} param
 * @return {boolean} isValid?
 */
export function less_than(value:string = '0', param:string):boolean {
  if (!regex.decimalRegex.test(value)) {
    return false;
  }

  return (parseFloat(value) < parseFloat(param));
}

/**
 * "matches" checks to see if a field is an exact match for another field's value
 * @param  {string|array} value - field value
 * @param  {string} key
 * @param  {object} formVals - form value state
 * @return {boolean} isValid?
 */
export function matches(value:string|Array<any>, key:string, formVals:FormValues):boolean {
  const matchValue = formVals[key];
  return value === matchValue;
}

/**
 * "max_date[parameter]" checks to see if a value has not exceeded a maximum threshold
 * @param  {string|Date} value - field value
 * @param  {string} dateParam
 * @return {boolean} isValid?
 */
export function max_date(value:string|Date, dateParam:string):boolean {
  const formValueDate = new Date(value);
  const validationDate = new Date(dateParam);
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
export function max_length(value:string, length:string):boolean {
  if (!regex.integerRegex.test(length)) {
    return false;
  }

  return (value ? (`${value}`) : '').length <= parseInt(length, 10);
}

/**
 * "min_date[parameter]" checks to see if a value has not exceeded a minimum threshold
 * @param  {string|Date} value - field value
 * @param  {string} dateParam
 * @return {boolean} isValid?
 */
export function min_date(value:string|Date, dateParam:string):boolean {
  const formValueDate = new Date(value);
  const validationDate = new Date(dateParam);
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
export function min_length(value:string, length:string):boolean {
  if (!regex.integerRegex.test(length)) {
    return false;
  }

  return ((value || '').length >= parseInt(length, 10));
}

/**
 * "numeric" checks if a value is numeric
 * @param  {string} value
 * @return {boolean} isValid?
 */
export function numeric(value:string):boolean {
  return (regex.numericRegex.test(value || ''));
}

/**
 * "required" checks to see if the field has the presence of a value
 * @param  {string|number|array} val
 * @return {boolean} isValid?
 */
export function required(val:string|number|Array<any>):boolean {
  if (Array.isArray(val)) { return (val.length > 0); }
  return (val !== undefined && val !== null && val !== '');
}

/**
 * "valid_credit_card" checks to see if a string passes credit card regex validation
 * @param  {string} value
 * @return {boolean} isValid?
 */
export function valid_credit_card(value:string):boolean {
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
}

/**
 * "valid_date" checks to see if a value is a valid date time value
 * @param  {string|DateTime} value
 * @return {boolean} isValid?
 */
export function valid_date(value:string|Date):boolean {
  const time = new Date(value).getTime();
  return !Number.isNaN(time);
}

/**
 * "valid_email" checks if an email string passes email validation regex
 * @param  {string} value - field value
 * @return {boolean} isValid?
 */
export function valid_email(value:string):boolean {
  return regex.emailRegex.test(value);
}

/**
 * "matches_regex[param]" checks to see if string passes url validation regex
 * @param  {string} value
 * @param  {string} regexParam
 * @return {boolean} isValid?
 */
export function matches_regex(value:string, regexParam:string):boolean {
  return RegExp(regexParam).test(value);
}

/**
 * "valid_url" checks to see if string passes url validation regex
 * @param  {string} value
 * @return {boolean} isValid?
 */
export function valid_url(value:string):boolean {
  return (regex.urlRegex.test(value));
}


/**
 * "is_unique" checks all other form field values to determine if this value is unique
 * @param  {string}  value
 * @param  {string|number|array} param - field value
 * @param  {object} formVals - form value state
 * @return {boolean}
 */
export function is_unique(
  value:string = '',
  param:string|number|Array<any>,
  formVals:FormValues
) {
  const checkVal = value.toLowerCase();
  const allVals = objValues(formVals);
  // There should not be more than 1.
  const matches = allVals.filter(v => v.toLowerCase() === checkVal);
  return matches.length === 1;
}

/**
 * Validates an individual field value
 * @param  {string|number|array|object} val
 * @param  {string} ruleKey
 * @param  {object} formVals
 * @return {object}
 */
export function validateFieldValue(val, ruleKey, formVals) {
  if (!ruleKey) { return true; }
  let isValid = true; // Assume validity
  let rule = ruleKey;
  let param = null;
  const parts = regex.ruleRegex.exec(rule);

  if (parts) {
    // If the rule has a parameter, i.e. matches[param], split it out
    rule = parts[1];
    param = parts[2];
  }

  if (typeof module.exports[rule] === 'function') { // we have a known method that matches the rule key
    isValid = module.exports[rule](val, param, formVals);
  }

  return isValid;
}

/**
 * Validate form takes all form values and the validation object and validates each field
 * @param  {FormValues} formVals
 * @param  {object} validations
 * @return {object{[key:string]: message:string}}
 */
export function validateForm(formVals:FormValues, validations:FieldValidations):Error {
  const fieldValidations = Object.keys(validations);
  const validationObj = fieldValidations
    .map((field) => {
      let validity:null|Error = null; // Our object to return
      const validationsToTest = Object.keys(validations[field]);

      // Loop over each validation tied to a specific field
      validationsToTest.forEach((rule) => { // key is the rule
        const hasPassedUniqueValidation = validateFieldValue(
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
    .reduce((
      accum:Error,
      fieldValidation:{[fieldName:string]: any}
    ):Error => {
      const fieldName = Object.keys(fieldValidation)[0];
      let firstErrorMessage = null;
      // Some sort of error is present, let's take the top priority
      if (fieldValidation[fieldName]) {
        const firstErrorRuleKey = Object.keys(fieldValidation[fieldName])[0];
        firstErrorMessage = fieldValidation[fieldName][firstErrorRuleKey];
      }

      return assign({}, accum, {
        [fieldName]: firstErrorMessage,
      });
    }, {});

  return validationObj;
};

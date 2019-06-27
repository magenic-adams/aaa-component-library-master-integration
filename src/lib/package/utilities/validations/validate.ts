import objValues from 'lodash/values';
import assign from 'lodash/assign';
import regex from './regex';
import generateDefaultErrorRule from './defaultError';

interface FormValues {
  [id:string]: string
}

interface Validation {
  [ruleKey:string]: string
}

interface FieldValidations {
  [fieldKey:string]: Validation
}

interface Error {
  [fieldKey:string]: string
}

const Validations:any = {
  /**
   * "alpha" checks if a value matches the alpha regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  alpha(value:string):boolean {
    return (regex.alphaRegex.test(value));
  },

  /**
   * "alpha_dash" checks if a value matches the alphaDash regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  alpha_dash(value:string):boolean {
    return (regex.alphaDashRegex.test(value));
  },

  /**
   * "alpha_dash_dot_space" checks if a value matches the alphaDashDotSpace regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  alpha_dash_dot_space(value:string):boolean {
    return (regex.alphaDashDotSpaceRegex.test(value));
  },

  /**
   * "alpha_dash_space" checks if a value matches the alphaDashSpace regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  alpha_dash_space(value:string):boolean {
    return (regex.alphaDashSpaceRegex.test(value));
  },


  /**
   * "alpha_name" checks if a value matches the alphaName regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  alpha_name(value:string):boolean {
    return (regex.alphaNameRegex.test(value));
  },

  /**
   * "alpha_numeric" checks if a value matches the alphaNumeric regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  alpha_numeric(value:string):boolean {
    return (regex.alphaNumericRegex.test(value));
  },

  /**
   * "at_least[parameter]" checks if a value is greater than or equal to a parameter
   * NOTE: Empty values are not validated by at_least
   * @param  {string} value - field value
   * @param  {string} param
   * @return {boolean} isValid?
   */
  at_least(value:string, param:string):boolean {
    if (Validations.is_empty(value)){ return true; }
    if (!regex.decimalRegex.test(value)) {
      return false;
    }

    return (parseFloat(value) >= parseFloat(param));
  },

  /**
   * "at_most[param]" checks if a field value is less than or equal to it's parameter
   * NOTE: Empty values are not validated by at_most
   * @param  {string} value - field value
   * @param  {string} param
   * @return {boolean} isValid?
   */
  at_most(value:string, param:string):boolean {
    if (Validations.is_empty(value)){ return true; }
    if (!regex.decimalRegex.test(value)) {
      return false;
    }

    return (parseFloat(value) <= parseFloat(param));
  },

  /**
   * "decimal" checks if a value is decimal
   * @param  {string|number} value
   * @return {boolean} isValid?
   */
  decimal(value:string):boolean {
    return (regex.decimalRegex.test(value));
  },

  /**
   * "exact_length[parameter]" checks if a string is exactly "param" amount of characters
   * @param  {string} value
   * @param  {string} length
   * @return {boolean} isValid?
   */
  exact_length(value:string, length:string):boolean {
    if (!regex.integerRegex.test(length)) {
      return false;
    }

    return ((value || '').length === parseInt(length, 10));
  },

  /**
   * "integer" checks if a value is integer
   * @param  {string} value
   * @return {boolean} isValid?
   */
  integer(value:string):boolean {
    return (regex.integerRegex.test(value));
  },

  /**
   * "is_array" checks to see if a value is an array
   * @param  {array} value
   * @return {boolean} isValid?
   */
  is_array(value?:Array<any>):boolean {
    return Array.isArray(value);
  },

  /**
   * "is_empty" checks to see if a value is empty
   * @param  {string|number|Array<any>|undefined} value?
   * @return {boolean}
   */
  is_empty(value?:string|number|Array<any>):boolean{
    if (Array.isArray(value)) {
      return value.length === 0;
    }

    if (typeof value === 'string'){
      return regex.emptyStringRegex.test(value);
    }

    if (value === undefined || value === null){
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
  is_exact_value(value:string, param:string):boolean {
    return value === param;
  },

  /**
   * "is_file_type[param1,param2,...,param^n]" checks to see if params match file type ending
   * @param  {string} value
   * @param  {string} type - comma separated string values
   * @return {boolean} isValid?
   */
  is_file_type(value:string, type:string):boolean {
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

  /**
   * "is_natural" checks if a number is natural (whole, non-negative numbers)
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  is_natural(value:string):boolean {
    return (regex.naturalRegex.test(value));
  },


  /**
   * "is_natural_no_zero" checks if a number is natural (whole, non-negative numbers excluding zero)
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  is_natural_no_zero(value:string):boolean {
    return (regex.naturalNoZeroRegex.test(value));
  },

  /**
   * "matches" checks to see if a field is an exact match for another field's value
   * @param  {string|array} value - field value
   * @param  {string} key
   * @param  {object} formVals - form value state
   * @return {boolean} isValid?
   */
  matches(value:string|Array<any>, key:string, formVals:FormValues):boolean {
    const matchValue = formVals[key];
    return value === matchValue;
  },

  /**
   * "matches_regex[param]" checks to see if string passes url validation regex
   * @param  {string} value
   * @param  {string} regexParam
   * @return {boolean} isValid?
   */
  matches_regex(value:string, regexParam:string):boolean {
    return RegExp(regexParam).test(value);
  },

  /**
   * "max_date[parameter]" checks to see if a value has not exceeded a maximum threshold
   * @param  {string|Date} value - field value
   * @param  {string} dateParam
   * @return {boolean} isValid?
   */
  max_date(value:string|Date, dateParam:string):boolean {
    const formValueDate = new Date(value);
    const validationDate = new Date(dateParam);
    if (isNaN(formValueDate.getTime()) || isNaN(validationDate.getTime())) {
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
  max_length(value:string, length:string):boolean {
    if (!regex.integerRegex.test(length)) {
      return false;
    }

    return (value ? (`${value}`) : '').length <= parseInt(length, 10);
  },

  /**
   * "min_date[parameter]" checks to see if a value has not exceeded a minimum threshold
   * @param  {string|Date} value - field value
   * @param  {string} dateParam
   * @return {boolean} isValid?
   */
  min_date(value:string|Date, dateParam:string):boolean {
    const formValueDate = new Date(value);
    const validationDate = new Date(dateParam);
    if (isNaN(formValueDate.getTime()) || isNaN(validationDate.getTime())) {
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
  min_length(value:string, length:string):boolean {
    if (!regex.integerRegex.test(length)) {
      return false;
    }

    return ((value || '').length >= parseInt(length, 10));
  },

  /**
   * "numeric" checks if a value is numeric
   * @param  {string} value
   * @return {boolean} isValid?
   */
  numeric(value:string):boolean {
    return (regex.numericRegex.test(value || ''));
  },

  /**
   * "required" checks to see if the field has the presence of a value
   * @param  {string|number|array} val
   * @return {boolean} isValid?
   */
  required(val:string|number|Array<any>):boolean {
    return !Validations.is_empty(val);
  },

  /**
   * "valid_credit_card" checks to see if a string passes credit card regex validation
   * @param  {string} value
   * @return {boolean} isValid?
   */
  valid_credit_card(value:string):boolean {
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

  /**
   * "valid_date" checks to see if a value is a valid date time value
   * @param  {string|DateTime} value
   * @return {boolean} isValid?
   */
  valid_date(value:string|Date):boolean {
    const time = new Date(value).getTime();
    return !Number.isNaN(time);
  },

  /**
   * "valid_email" checks if an email string passes email validation regex
   * @param  {string} value - field value
   * @return {boolean} isValid?
   */
  valid_email(value:string):boolean {
    return regex.emailRegex.test(value);
  },

  /**
   * "valid_url" checks to see if string passes url validation regex
   * @param  {string} value
   * @return {boolean} isValid?
   */
  valid_url(value:string):boolean {
    return (regex.urlRegex.test(value));
  },


  /**
   * "is_unique" checks all other form field values to determine if this value is unique
   * @param  {string}  value
   * @param  {string|number|array} param - field value
   * @param  {object} formVals - form value state
   * @return {boolean}
   */
  is_unique(
    value:string = '',
    param:string|number|Array<any>,
    formVals:FormValues
  ) {
    const checkVal = value.toLowerCase();
    const allVals = objValues(formVals);
    // There should not be more than 1.
    const matches = allVals.filter(v => v.toLowerCase() === checkVal);
    return matches.length === 1;
  },

  /**
   * Generate an error message for this failed validation
   * @param {object} fieldValidationErrorMessages [description]
   * @param {string} ruleKey         [description]
   */
  generateErrorMessage(
    fieldValidationErrorMessages: {[ruleKey:string]: string},
    ruleKey:string
  ):string {
    if (fieldValidationErrorMessages[ruleKey]){
      // An error message has been passed by client, surface it
      return fieldValidationErrorMessages[ruleKey];
    }

    // Let's check our registry for a default error
    return generateDefaultErrorRule(ruleKey);
  },

  /**
   * Validates an individual field value
   * @param  {string|number|array|object} val
   * @param  {string} ruleKey
   * @param  {object} formVals
   * @return {object}
   */
  validateFieldValue(
    value:string|number|Array<any>|object,
    ruleKey:string,
    formVals:FormValues
  ) {
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

    // We have a known method that matches the rule key
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
  validateForm(formVals:FormValues, validations:FieldValidations):Error {
    const fieldValidations = Object.keys(validations);
    const validationObj = fieldValidations
      .map((field) => {
        let validity:undefined|Error; // Our object to return
        const validationsToTest = Object.keys(validations[field]);

        // Loop over each validation tied to a specific field
        validationsToTest.forEach((rule) => { // key is the rule
          const hasPassedUniqueValidation = Validations.validateFieldValue(
            formVals[field],
            rule,
            formVals,
          );

          // If we haven't passed, construct the validation object with this validation
          if (!hasPassedUniqueValidation) {
            if (validity !== undefined) {
              validity[rule] = validations[field][rule];
            } else {
              validity = { [rule]: validations[field][rule] };
            }
          }
        });

        return { [field]: validity };
      })
      // Turn the array back into the highest priority message for each field
      .reduce((
        accum:Error,
        fieldValidation:{[fieldName:string]: any}
      ):Error => {
        const fieldName = Object.keys(fieldValidation)[0];
        let firstErrorMessage;

        // Some sort of error is present, let's surface an error for the first
        if (fieldValidation[fieldName]) {
          const firstErrorRuleKey = Object.keys(fieldValidation[fieldName])[0];
          firstErrorMessage = Validations.generateErrorMessage(fieldValidation[fieldName], firstErrorRuleKey);
        }

        return assign({}, accum, {
          [fieldName]: firstErrorMessage,
        });
      }, {});

    return validationObj;
  },

};

export default Validations;

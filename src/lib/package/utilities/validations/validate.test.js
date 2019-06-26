/* eslint-disable quotes */
/* global describe, it */
// import React from 'react';
import { expect } from 'chai';

import * as validate from './validate';

// *** matches_regex *** //
// NOTE: This is the most important case as it will take a majority of backend passed error validations
// 
// in validation object: {
//   matches_regex[regex]: message (string)
// }
describe('Regex: 🐡 "matches_regex": validation', () => {
  describe('Base validations', () => {
    it('validates and accepts a regex string pattern', () => {
      const VALID_FIRST_NAME = 'Jack';
      const isValid = validate.matches_regex(
        VALID_FIRST_NAME,
        "^(?=.*[A-Za-z])(?!.{16,})([A-Za-z'-]*[\\s]?[A-Za-z'-]*)$",
      );

      expect(isValid).to.equal(true);
    });


    it('invalidates and accepts a regex string pattern', () => {
      const INVALID_FIRST_NAME = '00BadJack.';
      const isValid = validate.matches_regex(
        INVALID_FIRST_NAME,
        "^(?=.*[A-Za-z])(?!.{16,})([A-Za-z'-]*[\\s]?[A-Za-z'-]*)$",
      );

      expect(isValid).to.equal(false);
    });
  });

  describe('Multiple dynamic regex validation rules', () => {
    const BIRTHDATE_REQUIRED_REGEX = "[^\\s]";
    const BIRTHDATE_REQUIRED_ERROR_MESSAGE = 'You were born, I assume?';

    const BIRTHDATE_INVALID_REGEX = "^(((0?[1-9]|1[012])/(0?[1-9]|1\\d|2[0-8])|(0?[13456789]|1[012])/(29|30)|(0?[13578]|1[02])/31)/(19|[2-9]\\d)\\d{2}|0?2/29/((19|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$";
    const BIRTHDATE_INVALID_ERROR_MESSAGE = 'This looks like it is an invalid date';

    it('will display the error of the "invalid" rule failed', () => {
      const error = validate.validateForm(
        { birthdateFieldId: '00/99/99999' },
        { 
          birthdateFieldId: {
            [`matches_regex[${BIRTHDATE_REQUIRED_REGEX}]`]: BIRTHDATE_REQUIRED_ERROR_MESSAGE,
            [`matches_regex[${BIRTHDATE_INVALID_REGEX}]`]: BIRTHDATE_INVALID_ERROR_MESSAGE,
          },
        }
      );

      expect(error.birthdateFieldId).to.equal(BIRTHDATE_INVALID_ERROR_MESSAGE);
    });

    it('will display the error of the "required" rule failed', () => {
      const error = validate.validateForm(
        { birthdateFieldId: '' },
        { 
          birthdateFieldId: {
            [`matches_regex[${BIRTHDATE_REQUIRED_REGEX}]`]: BIRTHDATE_REQUIRED_ERROR_MESSAGE,
            [`matches_regex[${BIRTHDATE_INVALID_REGEX}]`]: BIRTHDATE_INVALID_ERROR_MESSAGE,
          },
        }
      );

      expect(error.birthdateFieldId).to.equal(BIRTHDATE_REQUIRED_ERROR_MESSAGE);
    });
  });

  describe('Dynamic validations: Phone 📞', () => {
    // Phone initializations
    const PHONE_REGEX = "(?:(?!000-000-)(?!000-)(?!.*[0-9]-000-))(?=.*[0-9]{3})([0-9]{3}-?[0-9]{3}-?[0-9]{4})$";
    const ERROR_MESSAGE = 'This is an invalid phone number';
    const VALIDATION_KEY = `matches_regex[${PHONE_REGEX}]`;
    const PHONE_VALIDATION = { [VALIDATION_KEY]: ERROR_MESSAGE };

    describe('INVALID cases', () => {
      
      it('invalidates too many digits', () => {
        const INVALID_PHONE_NUMBER_TOO_MANY_DIGITS = '948-491-21191';

        const isValid = validate.matches_regex(
          INVALID_PHONE_NUMBER_TOO_MANY_DIGITS,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phoneFieldId: INVALID_PHONE_NUMBER_TOO_MANY_DIGITS },
          { phoneFieldId: PHONE_VALIDATION }
        ); 

        expect(isValid).to.equal(false);
        expect(error.phoneFieldId).to.equal(ERROR_MESSAGE);
      });

      it('invalidates too few digits', () => {
        const INVALID_PHONE_NUMBER_TOO_FEW_DIGITS = '948-491-211';
        const isValid = validate.matches_regex(
          INVALID_PHONE_NUMBER_TOO_FEW_DIGITS,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phoneFieldId: INVALID_PHONE_NUMBER_TOO_FEW_DIGITS },
          { phoneFieldId: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(false);
        expect(error.phoneFieldId).to.equal(ERROR_MESSAGE);
      });

      it('invalidates when beginning number is 1', () => {
        const INVALID_PHONE_NUMBER_ONE_START = '148-491-211';
        const isValid = validate.matches_regex(
          INVALID_PHONE_NUMBER_ONE_START,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phoneFieldId: INVALID_PHONE_NUMBER_ONE_START },
          { phoneFieldId: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(false);
        expect(error.phoneFieldId).to.equal(ERROR_MESSAGE);
      });

      it('invalidates when beginning number is 0', () => {
        const INVALID_PHONE_NUMBER_ZERO_START = '048-491-211';
        const isValid = validate.matches_regex(
          INVALID_PHONE_NUMBER_ZERO_START,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phoneFieldId: INVALID_PHONE_NUMBER_ZERO_START },
          { phoneFieldId: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(false);
        expect(error.phoneFieldId).to.equal(ERROR_MESSAGE);
      });

      it('invalidates number with parentheses', () => {
        const INVALID_PHONE_NUMBER_PARENTHESES = '(948)491-2119';
        const isValid = validate.matches_regex(
          INVALID_PHONE_NUMBER_PARENTHESES,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phoneFieldId: INVALID_PHONE_NUMBER_PARENTHESES },
          { phoneFieldId: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(false);
        expect(error.phoneFieldId).to.equal(ERROR_MESSAGE);
      });
    }); // end phoneFieldId:INVALID cases

    describe('VALID cases', () => {
      it('validates passed 1 for area code', () => {
        const VALID_PHONE_NUMBER_AREA_CODE = '1-294-388-9700';
        const isValid = validate.matches_regex(
          VALID_PHONE_NUMBER_AREA_CODE,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phoneFieldId: VALID_PHONE_NUMBER_AREA_CODE },
          { phoneFieldId: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(true);
        expect(error.phoneFieldId).to.equal(undefined);
      });

      it('validates number without dashes', () => {
        const VALID_PHONE_NUMBER_NO_DASHES = '9484912119';
        const isValid = validate.matches_regex(
          VALID_PHONE_NUMBER_NO_DASHES,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phoneFieldId: VALID_PHONE_NUMBER_NO_DASHES },
          { phoneFieldId: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(true);
        expect(error.phoneFieldId).to.equal(undefined);
      });
    }); // end PHONE:VALID cases
  }); // end PHONE

  describe('Dynamic validations: Birthdate 🍰', () => {
    // Birthdate initializations
    const BIRTHDATE_REGEX = "^(((0?[1-9]|1[012])/(0?[1-9]|1\\d|2[0-8])|(0?[13456789]|1[012])/(29|30)|(0?[13578]|1[02])/31)/(19|[2-9]\\d)\\d{2}|0?2/29/((19|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$";
    const ERROR_MESSAGE = 'Birthdate is not valid';
    const VALIDATION_KEY = `matches_regex[${BIRTHDATE_REGEX}]`;
    const BIRTHDATE_VALIDATION = { [VALIDATION_KEY]: ERROR_MESSAGE };

    describe('INVALID cases', () => {
    
      it('invalidates too many digits', () => {
        const INVALID_BIRTHDATE_TOO_MANY_DIGITS = '04/22/20001';

        const isValid = validate.matches_regex(
          INVALID_BIRTHDATE_TOO_MANY_DIGITS,
          BIRTHDATE_REGEX,
        );

        const error = validate.validateForm(
          { birthdateFieldId: INVALID_BIRTHDATE_TOO_MANY_DIGITS },
          { birthdateFieldId: BIRTHDATE_VALIDATION }
        ); 

        expect(isValid).to.equal(false);
        expect(error.birthdateFieldId).to.equal(ERROR_MESSAGE);
      });

      it('invalidates zero month for the date', () => {
        const INVALID_BIRTHDATE_ZERO_MONTH = '00/15/1981';

        const isValid = validate.matches_regex(
          INVALID_BIRTHDATE_ZERO_MONTH,
          BIRTHDATE_REGEX,
        );

        const error = validate.validateForm(
          { birthdateFieldId: INVALID_BIRTHDATE_ZERO_MONTH },
          { birthdateFieldId: BIRTHDATE_VALIDATION }
        ); 

        expect(isValid).to.equal(false);
        expect(error.birthdateFieldId).to.equal(ERROR_MESSAGE);
      });

      it('invalidates a medieval date', () => {
        const INVALID_BIRTHDATE_MEDIEVAL = '01/15/476';

        const isValid = validate.matches_regex(
          INVALID_BIRTHDATE_MEDIEVAL,
          BIRTHDATE_REGEX,
        );

        const error = validate.validateForm(
          { birthdateFieldId: INVALID_BIRTHDATE_MEDIEVAL },
          { birthdateFieldId: BIRTHDATE_VALIDATION }
        ); 

        expect(isValid).to.equal(false);
        expect(error.birthdateFieldId).to.equal(ERROR_MESSAGE);
      });

      it('invalidates a February date', () => {
        const INVALID_FEBRUARY_BIRTHDATE = '02/29/1989';
        const isValid = validate.matches_regex(
          INVALID_FEBRUARY_BIRTHDATE,
          BIRTHDATE_REGEX,
        );

        const error = validate.validateForm(
          { birthdateFieldId: INVALID_FEBRUARY_BIRTHDATE },
          { birthdateFieldId: BIRTHDATE_VALIDATION }
        );

        expect(isValid).to.equal(false);
        expect(error.birthdateFieldId).to.equal(ERROR_MESSAGE);
      });
    }); // end BIRTHDATEFieldId:INVALID cases

    describe('VALID cases', () => {
      it('validates a 0m/dd/yyyy date', () => {
        const VALID_0M_BIRTHDATE = '08/04/1989';
        const isValid = validate.matches_regex(
          VALID_0M_BIRTHDATE,
          BIRTHDATE_REGEX,
        );

        const error = validate.validateForm(
          { birthdateFieldId: VALID_0M_BIRTHDATE },
          { birthdateFieldId: BIRTHDATE_VALIDATION }
        );

        expect(isValid).to.equal(true);
        expect(error.birthdateFieldId).to.equal(undefined);
      });

      it('validates a 1m/dd/yyyy date', () => {
        const VALID_1M_BIRTHDATE = '12/04/1989';
        const isValid = validate.matches_regex(
          VALID_1M_BIRTHDATE,
          BIRTHDATE_REGEX,
        );

        const error = validate.validateForm(
          { birthdateFieldId: VALID_1M_BIRTHDATE },
          { birthdateFieldId: BIRTHDATE_VALIDATION }
        );

        expect(isValid).to.equal(true);
        expect(error.birthdateFieldId).to.equal(undefined);
      });
    });// end BIRTHDATE:VALID cases
  }); // end BIRTHDATE

  describe('Dynamic validations: Email 💌', () => {
    // Email initializations
    const EMAIL_REGEX = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
    const ERROR_MESSAGE = 'Email is not valid';
    const VALIDATION_KEY = `matches_regex[${EMAIL_REGEX}]`;
    const EMAIL_VALIDATION = { [VALIDATION_KEY]: ERROR_MESSAGE };

    describe('INVALID cases', () => {
      it('invalidates no @ email', () => {
        const INVALID_EMAIL_NO_AT = 'mymymy.gmail.com';

        const isValid = validate.matches_regex(
          INVALID_EMAIL_NO_AT,
          EMAIL_REGEX,
        );

        const error = validate.validateForm(
          { emailFieldId: INVALID_EMAIL_NO_AT },
          { emailFieldId: EMAIL_VALIDATION }
        ); 

        expect(isValid).to.equal(false);
        expect(error.emailFieldId).to.equal(ERROR_MESSAGE);
      });

      it('invalidates email with non-valid characters', () => {
        const INVALID_EMAIL_NON_VALID_CHARS = 'mymymy#3@gmail.com';

        const isValid = validate.matches_regex(
          INVALID_EMAIL_NON_VALID_CHARS,
          EMAIL_REGEX,
        );

        const error = validate.validateForm(
          { emailFieldId: INVALID_EMAIL_NON_VALID_CHARS },
          { emailFieldId: EMAIL_VALIDATION }
        ); 

        expect(isValid).to.equal(false);
        expect(error.emailFieldId).to.equal(ERROR_MESSAGE);
      });

      it('invalidates email with non-valid domain extension', () => {
        const INVALID_EMAIL_NON_VALID_DOMAIN = 'mymymy@gmail.x';

        const isValid = validate.matches_regex(
          INVALID_EMAIL_NON_VALID_DOMAIN,
          EMAIL_REGEX,
        );

        const error = validate.validateForm(
          { emailFieldId: INVALID_EMAIL_NON_VALID_DOMAIN },
          { emailFieldId: EMAIL_VALIDATION }
        ); 

        expect(isValid).to.equal(false);
        expect(error.emailFieldId).to.equal(ERROR_MESSAGE);
      });
    }); // end EMAIL:INVALID cases

    describe('VALID cases', () => {
      it('validates a standard email', () => {
        const VALID_EMAIL = 'me@mydomain.com';
        const isValid = validate.matches_regex(
          VALID_EMAIL,
          EMAIL_REGEX,
        );

        const error = validate.validateForm(
          { emailFieldId: VALID_EMAIL },
          { emailFieldId: EMAIL_VALIDATION }
        );

        expect(isValid).to.equal(true);
        expect(error.emailFieldId).to.equal(undefined);
      });

      it('validates a non-standard email', () => {
        const VALID_NON_STANDARD_EMAIL = '____@example.co.jp';
        const isValid = validate.matches_regex(
          VALID_NON_STANDARD_EMAIL,
          EMAIL_REGEX,
        );

        const error = validate.validateForm(
          { emailFieldId: VALID_NON_STANDARD_EMAIL },
          { emailFieldId: EMAIL_VALIDATION }
        );

        expect(isValid).to.equal(true);
        expect(error.emailFieldId).to.equal(undefined);
      });
    }); // end EMAIL:VALID cases
  }); // end EMAIL

});


// *** min_date & max_date *** //
// 
// in validation object: {
//   max_date[dateParam]: message (string),
//   min_date[dateParam]: message (string)
// }
describe('Date: 📅 "min_date" and "max_date"', () => {
  describe('Standard validations: Date ', () => {
    // Date validations can be passed as a dynamic regex
    // OR, we can pass a standard recognized key that checks for min_date and max_date
    const MIN_DATE_ERROR_MESSAGE = 'This date is too far in the past';
    const MAX_DATE_ERROR_MESSAGE = 'This date is too futuristic, bro';
    function generateMinMaxDateValidation(minDate, maxDate){
      return {
        [`min_date[${minDate}]`]: MIN_DATE_ERROR_MESSAGE,
        [`max_date[${maxDate}]`]: MAX_DATE_ERROR_MESSAGE,
      };
    }
    
    describe('INVALID cases', () => {
      it('invalidates a date that exceeds the minimum date', () => {
        const maxValue = "2020-01-01T14:51:30.180-07:00";
        const minValue = "1910-01-01T14:51:30.180-08:00";
        const INVALID_TOO_MINIMUM_DATE = new Date('02/24/1840');

        const isValid = validate.min_date(
          INVALID_TOO_MINIMUM_DATE,
          minValue,
        );

        const error = validate.validateForm(
          { dateFieldId: INVALID_TOO_MINIMUM_DATE },
          { dateFieldId: generateMinMaxDateValidation(minValue, maxValue) },
        );

        expect(isValid).to.equal(false);
        expect(error.dateFieldId).to.equal(MIN_DATE_ERROR_MESSAGE);
      });

      it('invalidates a date that exceeds the maximum date', () => {
        const maxValue = "2020-01-01T14:51:30.180-07:00";
        const minValue = "1910-01-01T14:51:30.180-08:00";
        const INVALID_TOO_MAXIMUM_DATE = new Date('02/24/2025');

        const isValid = validate.max_date(
          INVALID_TOO_MAXIMUM_DATE,
          maxValue,
        );

        const error = validate.validateForm(
          { dateFieldId: INVALID_TOO_MAXIMUM_DATE },
          { dateFieldId: generateMinMaxDateValidation(minValue, maxValue) },
        );

        expect(isValid).to.equal(false);
        expect(error.dateFieldId).to.equal(MAX_DATE_ERROR_MESSAGE);
      });
    }); // End DATE:INVALID cases

    describe('VALID cases', () => {
      it('validates a date is within range of the min and max', () => {
        const maxValue = "2020-01-01T14:51:30.180-07:00";
        const minValue = "1910-01-01T14:51:30.180-08:00";
        const INVALID_TOO_MINIMUM_DATE = new Date('02/24/1916');

        const isValid = validate.min_date(
          INVALID_TOO_MINIMUM_DATE,
          minValue,
        );

        const error = validate.validateForm(
          { dateFieldId: INVALID_TOO_MINIMUM_DATE },
          { dateFieldId: generateMinMaxDateValidation(minValue, maxValue) },
        );

        expect(isValid).to.equal(true);
        expect(error.dateFieldId).to.equal(undefined);
      });
    }); // End DATE:VALID cases
  });
});


// *** greater_than & less_than *** //
// 
// NOTE: This is used in questions like "Age first licensed"
// minValue: 16,
// maxValue: 100,
// 
// in validation object: {
//   greater_than[parameter(minValue)]: message? (string),
//   les_than[parameter(maxValue)]: message? (string)
// }
describe('Min / Max: ≦ "greater_than" and "less_than"', () => {
  describe('Generic error messages', () => {
    // Generic error messages for min and max are surfaced when undefined is passed for a message
    function generateMinMaxValidationWithoutMessages(min, max){
      return {
        [`greater_than[${min}]`]: undefined,
        [`less_than[${max}]`]: undefined,
      };
    }

    it('surfaces a "greater_than" validation error with a dynamic generic message', () => {
      const INVALID_UNDER_MINIMUM_AMOUNT = 15;
      const MIN_VALUE_PARAM = 16;
      const MAX_VALUE_PARAM = 100;
      const MIN_MAX_VALIDATION = generateMinMaxValidationWithoutMessages(MIN_VALUE_PARAM, MAX_VALUE_PARAM);

      const isValid = validate.greater_than(
        INVALID_UNDER_MINIMUM_AMOUNT,
        MAX_VALUE_PARAM,
      );

      const error = validate.validateForm(
        { amountFieldId: INVALID_UNDER_MINIMUM_AMOUNT },
        { amountFieldId: MIN_MAX_VALIDATION },
      );

      expect(isValid).to.equal(false);
      expect(error.amountFieldId).to.equal(`This amount must be greater than ${MIN_VALUE_PARAM}`);
    });

    it('surfaces a "less_than" validation error with a dynamic generic message', () => {

    });

  }); // end Min/Max:Generic

  describe('VALID cases', () => {
  }); // end Min/Max:VALID cases
});

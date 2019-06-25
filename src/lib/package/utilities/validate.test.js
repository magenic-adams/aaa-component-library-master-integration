/* eslint-disable quotes */
/* global describe, it */
// import React from 'react';
import { expect } from 'chai';

import * as validate from './validate';



// *** valid_regex *** //
// NOTE: This is the most important case as it will take a majority of backend passed error validations
// 
// in validation object: {
//   valid_regex[regex]: message (string)
// }
describe('"valid_regex": function', () => {
  describe('Base validations', () => {
    it('validates based on regex string pattern', () => {
      const VALID_FIRST_NAME = 'Jack';
      const isValid = validate.valid_regex(
        VALID_FIRST_NAME,
        "^(?=.*[A-Za-z])(?!.{16,})([A-Za-z'-]*[\\s]?[A-Za-z'-]*)$",
      );

      expect(isValid).to.equal(true);
    });


    it('invalidates based on regex string pattern', () => {
      const INVALID_FIRST_NAME = '00BadJack.';
      const isValid = validate.valid_regex(
        INVALID_FIRST_NAME,
        "^(?=.*[A-Za-z])(?!.{16,})([A-Za-z'-]*[\\s]?[A-Za-z'-]*)$",
      );

      expect(isValid).to.equal(false);
    });
  });

  describe('Dynamic validations: Phone 📞', () => {
    // Phone initializations
    const PHONE_REGEX = "(?:(?!000-000-)(?!000-)(?!.*[0-9]-000-))(?=.*[0-9]{3})([0-9]{3}-?[0-9]{3}-?[0-9]{4})$";
    const ERROR_MESSAGE = 'This is an invalid phone number';
    const VALIDATION_KEY = `valid_regex[${PHONE_REGEX}]`;
    const PHONE_VALIDATION = { [VALIDATION_KEY]: ERROR_MESSAGE };

    describe('INVALID cases', () => {
      
      it('invalidates too many digits', () => {
        const INVALID_PHONE_NUMBER_TOO_MANY_DIGITS = '948-491-21191';

        const isValid = validate.valid_regex(
          INVALID_PHONE_NUMBER_TOO_MANY_DIGITS,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phone: INVALID_PHONE_NUMBER_TOO_MANY_DIGITS },
          { phone: PHONE_VALIDATION }
        ); 

        expect(isValid).to.equal(false);
        expect(error.phone).to.equal(ERROR_MESSAGE);
      });

      it('invalidates too few digits', () => {
        const INVALID_PHONE_NUMBER_TOO_FEW_DIGITS = '948-491-211';
        const isValid = validate.valid_regex(
          INVALID_PHONE_NUMBER_TOO_FEW_DIGITS,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phone: INVALID_PHONE_NUMBER_TOO_FEW_DIGITS },
          { phone: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(false);
        expect(error.phone).to.equal(ERROR_MESSAGE);
      });

      it('invalidates when beginning number is 1', () => {
        const INVALID_PHONE_NUMBER_ONE_START = '148-491-211';
        const isValid = validate.valid_regex(
          INVALID_PHONE_NUMBER_ONE_START,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phone: INVALID_PHONE_NUMBER_ONE_START },
          { phone: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(false);
        expect(error.phone).to.equal(ERROR_MESSAGE);
      });

      it('invalidates when beginning number is 0', () => {
        const INVALID_PHONE_NUMBER_ZERO_START = '048-491-211';
        const isValid = validate.valid_regex(
          INVALID_PHONE_NUMBER_ZERO_START,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phone: INVALID_PHONE_NUMBER_ZERO_START },
          { phone: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(false);
        expect(error.phone).to.equal(ERROR_MESSAGE);
      });

      it('invalidates number with parentheses', () => {
        const INVALID_PHONE_NUMBER_PARENTHESES = '(948)491-2119';
        const isValid = validate.valid_regex(
          INVALID_PHONE_NUMBER_PARENTHESES,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phone: INVALID_PHONE_NUMBER_PARENTHESES },
          { phone: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(false);
        expect(error.phone).to.equal(ERROR_MESSAGE);
      });
    }); // end Phone:INVALID cases

    describe('VALID cases', () => {
      it('validates passed 1 for area code', () => {
        const VALID_PHONE_NUMBER_AREA_CODE = '1-294-388-9700';
        const isValid = validate.valid_regex(
          VALID_PHONE_NUMBER_AREA_CODE,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phone: VALID_PHONE_NUMBER_AREA_CODE },
          { phone: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(true);
        expect(error.phone).to.equal(undefined);
      });

      it('validates number without dashes', () => {
        const VALID_PHONE_NUMBER_NO_DASHES = '9484912119';
        const isValid = validate.valid_regex(
          VALID_PHONE_NUMBER_NO_DASHES,
          PHONE_REGEX,
        );

        const error = validate.validateForm(
          { phone: VALID_PHONE_NUMBER_NO_DASHES },
          { phone: PHONE_VALIDATION }
        );

        expect(isValid).to.equal(true);
        expect(error.phone).to.equal(undefined);
      });
    }); // end PHONE:VALID cases

    // describe('Dynamic validations: Birthdate 🍰', () => {
    //   // Birthdate initializations
    //   const BIRTHDATE_REGEX = "^(((0?[1-9]|1[012])/(0?[1-9]|1\\d|2[0-8])|(0?[13456789]|1[012])/(29|30)|(0?[13578]|1[02])/31)/(19|[2-9]\\d)\\d{2}|0?2/29/((19|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$";
    //   const ERROR_MESSAGE = 'Birthdate is not valid';
    //   const VALIDATION_KEY = `valid_regex[${BIRTHDATE_REGEX}]`;
    //   const BIRTHDATE_VALIDATION = { [VALIDATION_KEY]: ERROR_MESSAGE };
    // });
  });
});


describe('"valid_regex": validation object rule', () => {

});

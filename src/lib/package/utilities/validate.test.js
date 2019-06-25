/* global describe, it */
import React from 'react';
import { expect } from 'chai';

import * as validate from './validate';

describe('validations', () => {
  it('expects true to equal true', () => {
    expect(5).to.equal(5);
  });
});

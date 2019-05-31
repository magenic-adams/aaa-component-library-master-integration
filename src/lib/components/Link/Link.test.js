/* eslint-disable import/order */
/* eslint-disable import/imports-first */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import React from 'react';
import { Link as TextLink } from './Link';
import { expect } from "chai";
import { mount } from 'enzyme';

describe.only("TextLink", function () {
  
    function createLink(children) {
        return mount(<TextLink>{children}</TextLink>)
      }

  it('has rendered link text', function () {
    const createLinkComponent = createLink('Create a link');

    expect(createLinkComponent.text()).to.equal('Create a link');
  });

});

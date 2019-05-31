/* eslint-disable import/order */
/* eslint-disable import/imports-first */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import React from 'react';
import TextLink from './TextLink';
import { expect } from "chai";
import { mount } from 'enzyme';

describe.only("TextLink", function () {


    function createLink(children) {
        return mount(<TextLink>{children}</TextLink>)
      }

  it('has rendered link text', function () {
    const createLinkComponent = createLink('Create a link');

    expect(createLinkComponent.find("textLink").exists().equal.to(true));
  });

});

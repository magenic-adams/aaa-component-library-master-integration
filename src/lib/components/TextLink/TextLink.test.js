/* eslint-disable import/order */
/* eslint-disable import/imports-first */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import React from 'react';
import TextLink from './TextLink';
import { expect } from "chai";
import { mount } from 'enzyme';



function createLink(children) {
  return mount(<TextLink>{children}</TextLink>)
}

describe("TextLink", function () {
  const createLinkComponent = createLink('Here lies a link');
  it('has rendered link text', function () {
    expect(createLinkComponent.text()).to.equal('Here lies a link');
  });

//   it('hould invoke onClick event', function () {
//     createLinkComponent.simulate('click',)
//   });
});

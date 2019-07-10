import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import SvgIcon from './SvgIcon';
import phoneImage from '../../../../Images/phone.svg';


describe('SVG', () => {
  let createSVComponent;

function renderSVG() {
    return mount(<SvgIcon id='button-icon' svgIcon={phoneImage}/>);
  }

  beforeEach(() => {
    createSVComponent = renderSVG('Create a link', 'primary');
  });

  afterEach(() => {
    createSVComponent.unmount();
  });

  it ('Render a SVG file', () => {
      expect(createSVComponent.length).to.equal(1);
    });
});

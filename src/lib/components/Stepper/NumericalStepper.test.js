/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { AAAPrimaryTheme } from '..';
import NumericalStepper from './NumericalStepper';

const createNumericalStepper = props => {
  return mount(
    <AAAPrimaryTheme>
      <NumericalStepper {...props} />
    </AAAPrimaryTheme>
  );
};

const getProps = override => {
  return {
    labelText: 'This is a numerical stepper',
    helpText: 'This is a helper message',
    inputText: '10',
    onIncrease: jest.fn(v => v),
    onDecrease: jest.fn(v => v),
    ...override
  };
};

describe('Numerical Stepper', () => {
  it('has rendered the icon buttons for increase and decrease', () => {
    const wrapper = createNumericalStepper(getProps());

    expect(wrapper.find('span[data-quid="stepLabel"]')).to.have.lengthOf(1);

    expect(
      wrapper.find('button[data-quid="decreaseStepper"]')
    ).to.have.lengthOf(1);

    expect(
      wrapper.find('button[data-quid="increaseStepper"]')
    ).to.have.lengthOf(1);

    expect(wrapper.find('svg[data-quid="removeIcon"]')).to.have.lengthOf(1);
    expect(wrapper.find('svg[data-quid="addIcon"]')).to.have.lengthOf(1);
  });
});

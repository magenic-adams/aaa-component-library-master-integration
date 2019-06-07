/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { AAAPrimaryTheme } from '..';
import NumericalStepper from './NumericalStepper';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../test/DOM';

const createNumericalStepper = props => {
  return mount(
    <AAAPrimaryTheme>
      <NumericalStepper {...props} />
    </AAAPrimaryTheme>
  );
};

const getProps = override => {
  return {
    id: '1',
    labelText: 'This is a numerical stepper',
    helpText: 'This is a helper message',
    errorText: 'This is an error text',
    inputText: '10',
    error: true,
    onIncrease: jest.fn(v => v),
    onDecrease: jest.fn(v => v),
    ...override
  };
};

describe('Numerical Stepper', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = createNumericalStepper(getProps());
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('has rendered the icon buttons for increase and decrease', () => {
    expect(wrapper.find('span[data-quid="StepLabel-1"]')).to.have.lengthOf(1);
    expect(
      wrapper.find('button[data-quid="DecreaseStepper-1"]')
    ).to.have.lengthOf(1);
    expect(wrapper.find('svg[data-quid="RemoveIcon-1"]')).to.have.lengthOf(1);
    expect(
      wrapper.find('input[data-quid="BaseInput-NumericInput-1"]')
    ).to.have.lengthOf(1);
    expect(
      wrapper.find('button[data-quid="IncreaseStepper-1"]')
    ).to.have.lengthOf(1);
    expect(wrapper.find('svg[data-quid="AddIcon-1"]')).to.have.lengthOf(1);
    expect(
      wrapper.find('span[data-quid="Component-helper-text-1"]')
    ).to.have.lengthOf(1);
    expect(
      wrapper.find('span[data-quid="Component-error-text-1"]')
    ).to.have.lengthOf(1);
    expect(wrapper.find('svg[data-quid="ReportProblem-1"]')).to.have.lengthOf(
      1
    );
  });
});

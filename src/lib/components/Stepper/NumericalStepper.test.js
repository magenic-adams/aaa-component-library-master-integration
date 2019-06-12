import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import MUIStepLabel from '@material-ui/core/StepLabel';
import MUIStep from '@material-ui/core/Step';
import { AAAPrimaryTheme } from '..';
import NumericalStepper from './NumericalStepper';
import NumericInput from '../Input/NumericInput/NumericInput';
// import StepperButton from '../Button/StepperIconButton';

const createNumericalStepper = props => {
  return mount(
    <AAAPrimaryTheme>
      <NumericalStepper {...props} />
    </AAAPrimaryTheme>
  );
};
const onDecreaseSpy = sinon.spy();
const onIncreaseSpy = sinon.spy();
const getProps = override => {
  return {
    id: '1',
    labelText: 'This is a numerical stepper',
    helperText: 'This is a helper message',
    error: 'This is an error text',
    value: 10,
    onIncrease: onIncreaseSpy,
    onDecrease: onDecreaseSpy,
    ...override,
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
  describe('event handlers', () => {
    it('will call it\'s click event handler, propagating a React event', () => {
      wrapper
        .find('.MuiStep-root')
        .find('button')
        .at(0)
        .simulate('click');
      expect(onDecreaseSpy.calledOnce).to.equal(true);

      wrapper
        .find('.MuiStep-root')
        .find('button')
        .at(1)
        .simulate('click');
      expect(onIncreaseSpy.calledOnce).to.equal(true);
    });
  });

  describe('Composite elements', () => {
    it('has rendered the icon buttons for increase and decrease', () => {
      expect(wrapper.find(MUIStep)).to.have.lengthOf(1);
      expect(wrapper.find(MUIStepLabel)).to.have.lengthOf(3);
      expect(wrapper.find(NumericInput)).to.have.lengthOf(1);
      // expect(wrapper.find(StepperButton)).to.have.lengthOf(2);
      expect(wrapper.find('svg')).to.have.lengthOf(3);

      expect(wrapper.find('span[data-quid="StepLabel-1"]')).to.have.lengthOf(1);
      expect(
        wrapper.find('button[data-quid="DecreaseStepper-1"]')
      ).to.have.lengthOf(1);
      expect(wrapper.find('svg[data-quid="RemoveIcon-1"]')).to.have.lengthOf(1);
      expect(
        wrapper.find('input[data-quid="BaseInput-NumericalStepperInput-1"]')
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
      expect(
        wrapper.find('span[data-quid="Component-error-text-1"]').text()
      ).to.equal('This is an error text');
      expect(
        wrapper.find('span[data-quid="Component-helper-text-1"]').text()
      ).to.equal('This is a helper message');
      expect(wrapper.find('span[data-quid="StepLabel-1"]').text()).to.equal(
        'This is a numerical stepper'
      );
    });
  });
});

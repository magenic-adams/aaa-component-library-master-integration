import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import MUIFormControl from '@material-ui/core/FormControl'; // Material UI Components

import AAAPrimaryTheme from '../AAAPrimaryTheme/AAAPrimaryTheme';
import NumericalStepper from './NumericalStepper';
import NumericInput from '../Input/NumericInput/NumericInput'; // Components

import Button from '../Button/Button';
import Label from '../Label/Label';
import FormFieldMeta from '../Form/FormFieldMeta/FormFieldMeta';

var createNumericalStepper = function createNumericalStepper(props) {
  return mount(React.createElement(AAAPrimaryTheme, null, React.createElement(NumericalStepper, props)));
};

var onDecreaseSpy = sinon.spy();
var onIncreaseSpy = sinon.spy();

var getProps = function getProps(override) {
  return _objectSpread({
    id: '1',
    labelText: 'This is a numerical stepper',
    helperText: 'This is a helper message',
    error: 'This is an error text',
    value: 10,
    onIncrease: onIncreaseSpy,
    onDecrease: onDecreaseSpy
  }, override);
};

describe('Numerical Stepper', function () {
  var wrapper;
  beforeEach(function () {
    wrapper = createNumericalStepper(getProps());
  });
  afterEach(function () {
    wrapper.unmount();
  });
  describe('event handlers', function () {
    it('will call it\'s click event handler, propagating a React event', function () {
      wrapper.find(Button).at(0).simulate('click');
      expect(onDecreaseSpy.calledOnce).to.equal(true);
      wrapper.find(Button).at(1).simulate('click');
      expect(onIncreaseSpy.calledOnce).to.equal(true);
    });
  });
  describe('HTML rendering', function () {
    it('renders three icons', function () {
      expect(wrapper.find('svg')).to.have.lengthOf(3);
    });
    it('renders an increase and decrease button', function () {
      expect(wrapper.find(Button)).to.have.lengthOf(2);
      expect(wrapper.find('button[data-quid="DecreaseStepper-1"]')).to.have.lengthOf(1);
      expect(wrapper.find('button[data-quid="IncreaseStepper-1"]')).to.have.lengthOf(1);
      expect(wrapper.find('svg[data-quid="AddIcon-1"]')).to.have.lengthOf(1);
    });
    it('renders a FormControl component', function () {
      expect(wrapper.find(MUIFormControl)).to.have.lengthOf(2);
    });
    it('renders a label', function () {
      expect(wrapper.find(Label)).to.have.lengthOf(1);
    });
    it('renders FormFieldMeta', function () {
      expect(wrapper.find(FormFieldMeta)).to.have.lengthOf(2);
    });
    it('renders a remove icon', function () {
      expect(wrapper.find('svg[data-quid="RemoveIcon-1"]')).to.have.lengthOf(1);
    });
    it('renders a numeric input with a unique data-quid', function () {
      expect(wrapper.find(NumericInput)).to.have.lengthOf(1);
      expect(wrapper.find('input[data-quid="BaseInput-NumericalStepperInput-1"]')).to.have.lengthOf(1);
    });
    it('renders an error message', function () {
      expect(wrapper.find('svg[data-quid="FormFieldMetaReportProblem-NumericalStepperMeta-1"]')).to.have.lengthOf(1);
      expect(wrapper.find('p[data-quid="FormFieldMetaErrorText-NumericalStepperMeta-1"]')).to.have.lengthOf(1);
      expect(wrapper.find('p[data-quid="FormFieldMetaErrorText-NumericalStepperMeta-1"]').text()).to.equal('This is an error text');
    });
    it('renders a helper message', function () {
      expect(wrapper.find('p[data-quid="FormFieldMetaHelperText-NumericalStepperMeta-1"]')).to.have.lengthOf(1);
      expect(wrapper.find('p[data-quid="FormFieldMetaHelperText-NumericalStepperMeta-1"]').text()).to.equal('This is a helper message');
    });
    it('renders label text', function () {
      expect(wrapper.find('label[data-quid="Label-NumericalStepperLabel-1"]')).to.have.lengthOf(1);
      expect(wrapper.find('label[data-quid="Label-NumericalStepperLabel-1"]').text()).to.equal('This is a numerical stepper');
    });
  });
});
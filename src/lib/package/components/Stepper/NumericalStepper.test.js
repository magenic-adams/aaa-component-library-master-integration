import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import MUIFormControl from '@material-ui/core/FormControl';

// Material UI Components
import ACEPrimaryTheme from '../ACEPrimaryTheme/ACEPrimaryTheme';
import NumericalStepper from './NumericalStepper';
import NumericInput from '../Input/NumericInput/NumericInput';

// Components
import Button from '../Button/Button';
import Label from '../Label/Label';
import FormFieldMeta from '../Form/FormFieldMeta/FormFieldMeta';

const createNumericalStepper = props => {
  return mount(
    <ACEPrimaryTheme>
      <NumericalStepper {...props} />
    </ACEPrimaryTheme>
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
        .find(Button)
        .at(0)
        .simulate('click');
      expect(onDecreaseSpy.calledOnce).to.equal(true);

      wrapper
        .find(Button)
        .at(1)
        .simulate('click');
      expect(onIncreaseSpy.calledOnce).to.equal(true);
    });
  });

  describe('HTML rendering', () => {
    it('renders three icons', () => {
      expect(wrapper.find('svg')).to.have.lengthOf(3);
    });

    it('renders an increase and decrease button', () => {
      expect(wrapper.find(Button)).to.have.lengthOf(2);
      expect(
        wrapper.find('button[data-quid="DecreaseStepper-1"]')
      ).to.have.lengthOf(1);
      expect(
        wrapper.find('button[data-quid="IncreaseStepper-1"]')
      ).to.have.lengthOf(1);
      expect(wrapper.find('svg[data-quid="AddIcon-1"]')).to.have.lengthOf(1);
    });

    it('renders a FormControl component', () => {
      expect(wrapper.find(MUIFormControl)).to.have.lengthOf(2);
    });

    it('renders a label', () => {
      expect(wrapper.find(Label)).to.have.lengthOf(1);
    });

    it('renders FormFieldMeta', () => {
      expect(wrapper.find(FormFieldMeta)).to.have.lengthOf(2);
    });

    it('renders a remove icon', () => {
      expect(wrapper.find('svg[data-quid="RemoveIcon-1"]')).to.have.lengthOf(1);
    });

    it('renders a numeric input with a unique data-quid', () => {
      expect(wrapper.find(NumericInput)).to.have.lengthOf(1);
      expect(
        wrapper.find('input[data-quid="BaseInput-NumericalStepperInput-1"]')
      ).to.have.lengthOf(1);
    });

    it('renders an error message', () => {
      expect(
        wrapper.find(
          'svg[data-quid="FormFieldMetaReportProblem-NumericalStepperMeta-1"]'
        )
      ).to.have.lengthOf(1);
      expect(
        wrapper.find(
          'p[data-quid="FormFieldMetaErrorText-NumericalStepperMeta-1"]'
        )
      ).to.have.lengthOf(1);
      expect(
        wrapper
          .find('p[data-quid="FormFieldMetaErrorText-NumericalStepperMeta-1"]')
          .text()
      ).to.equal('This is an error text');
    });

    it('renders a helper message', () => {
      expect(
        wrapper.find(
          'p[data-quid="FormFieldMetaHelperText-NumericalStepperMeta-1"]'
        )
      ).to.have.lengthOf(1);
      expect(
        wrapper
          .find('p[data-quid="FormFieldMetaHelperText-NumericalStepperMeta-1"]')
          .text()
      ).to.equal('This is a helper message');
    });

    it('renders label text', () => {
      expect(
        wrapper.find('label[data-quid="Label-NumericalStepperLabel-1"]')
      ).to.have.lengthOf(1);
      expect(
        wrapper.find('label[data-quid="Label-NumericalStepperLabel-1"]').text()
      ).to.equal('This is a numerical stepper');
    });
  });
});

describe('Style Overrides', () => {
  let customizedWrapper;
  beforeEach(() => {
    const overrideDefaultStepperLabelStyles = {
      stepperInputWidth: '78',
      labelColor: 'green',
      marginTop: 8,
    };
    const customizedWrapperProps = () => {
      return {
        id: '1',
        labelText: 'This is a numerical stepper',
        helperText: 'This is a helper message',
        error: 'This is an error text',
        value: 10,
        onIncrease: onIncreaseSpy,
        onDecrease: onDecreaseSpy,
      };
    };
    customizedWrapper = mount(
      <ACEPrimaryTheme>
        <NumericalStepper
          overrides={overrideDefaultStepperLabelStyles}
          {...customizedWrapperProps()}
        />
      </ACEPrimaryTheme>
    );
  });
  afterEach(() => {
    customizedWrapper.unmount();
  });

  it('renders correct overrides for stepper label', () => {
    const labelNode = customizedWrapper
      .find(Label)
      .find('#NumericalStepperLabel-1')
      .first();

    const styles = labelNode.props().overrides;

    expect(styles.labelColor).to.equal('green');
    expect(styles.marginTop).to.equal(8);
    expect(styles.stepperInputWidth).to.equal('78');
  });

  it('renders correct overrides for stepper decrease button', () => {
    const decreaseStepperIcon = customizedWrapper
      .find(Button)
      .find('svg[data-quid="RemoveIcon-1"]')
      .first()
      .props();

    expect(decreaseStepperIcon.className).to.contain('makeStyles-stepperIcon');
  });

  it('renders correct overrides for stepper increase button', () => {
    const increaseStepperIcon = customizedWrapper
      .find(Button)
      .find('svg[data-quid="AddIcon-1"]')
      .first()
      .props();

    expect(increaseStepperIcon.className).to.contain('makeStyles-stepperIcon');
  });
});

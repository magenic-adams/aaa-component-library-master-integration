/* global
  afterAll,
  describe,
  document,
  beforeEach,
  it
*/

import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';
import sinon from 'sinon';

// MUIComponents
import MUIInput from '@material-ui/core/Input';
import MUIIconButton from '@material-ui/core/IconButton';

// Components
import BaseInput from './BaseInput';
import AAAPrimaryTheme from '../../AAAPrimaryTheme/AAAPrimaryTheme';

function createInput(props) {
  return mount(<AAAPrimaryTheme><BaseInput {...props} /></AAAPrimaryTheme>);
}

function getFakeProps(override) {
  return {
    id: "input-unique-identifier", // used for unique identifier and data tracking
    name: "input-unique-name", // used for form value
    // labelName: "Enabled Label",
    // type: "text",
    // value: "Enabled",
    // placeholder: "Placeholder",
    // onChange: jest.fn(v => v),
    // onClear: jest.fn(v => v),
    ...override
  };
}
// Styling tests

describe('Input', () => {
  let props = getFakeProps();
  let InputWrapper = createInput(props);
  const BaseInputNode = InputWrapper.find(MUIInput).getDOMNode();

  afterAll(() => {
    InputWrapper.unmount();
  });

  describe('rendering of HTML elements', () => {
    it('has a class property passed from className prop', () => {
      expect(BaseInputNode.className).to.include('BaseInput');
    });

    it('attaches a data-quid attribute to the input base element', () => {
      expect(InputWrapper.find('input').getDOMNode().dataset.quid).to.equal(`BaseInput-${props.id}`);
    });

    it('has a default rendering of an input without a label', () => {
      expect(InputWrapper.find(`label[htmlFor="${props.id}"]`).exists()).to.equal(false);
      expect(InputWrapper.find(`input#${props.id}`).exists()).to.equal(true);
    });

    it('has a default rendering of an input without helper text', () => {
      expect(InputWrapper.find(`input#${props.id}`).exists()).to.equal(true);
      expect(InputWrapper.find(`p[id="${props.id}-component-helper-text"]`).exists()).to.equal(false);
    });

    it('has a default rendering of an input without helper text', () => {
      expect(InputWrapper.find(`input#${props.id}`).exists()).to.equal(true);
      expect(InputWrapper.find(`p[id="${props.id}-component-helper-text"]`).exists()).to.equal(false);
    });

    it('renders the prop "value" within the input', () => {
      props = getFakeProps({ value: 'Jerry Seinfeld' });
      InputWrapper = createInput(props);

      expect(InputWrapper.find(`input#${props.id}`).get(0).props.value).to.equal("Jerry Seinfeld");
    });

    it('renders the prop "helperText" as helper text within the component', () => {
      props = getFakeProps({ helperText: 'This field is required' });
      InputWrapper = createInput(props);

      expect(InputWrapper.find(`input#${props.id}`).exists()).to.equal(true);
      expect(InputWrapper.find(`p[id="${props.id}-component-helper-text"]`).exists()).to.equal(true);
      expect(InputWrapper.find(`p[id="${props.id}-component-helper-text"]`).text()).to.equal('This field is required');
    });

    it('renders the prop "labelName" as a label', () => {
      props = getFakeProps({labelName: 'Favorite comedian name?'});
      InputWrapper = createInput(props);

      expect(InputWrapper.find(`label[htmlFor="${props.id}"]`).exists()).to.equal(true);
      expect(InputWrapper.find(`label[htmlFor="${props.id}"]`).text()).to.equal("Favorite comedian name?");
      expect(InputWrapper.find(`input#${props.id}`).exists()).to.equal(true);
    });

    it('renders the prop "placeholder" as a placeholder', () => {
      props = getFakeProps({placeholder: 'First name?'});
      InputWrapper = createInput(props);

      expect(InputWrapper.find('input').getDOMNode().placeholder).to.equal('First name?');
    });
  });

  describe("events", () => {
    let spy;
    beforeEach(() => {spy = sinon.spy();});

    it('triggers prop "onFocus" event on focus', () => {
      props = getFakeProps({ onFocus: spy });
      InputWrapper = createInput(props);
      InputWrapper.find(`input#${props.id}`).simulate("focus");

      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.have.property('target');
    });

    it('triggers prop "onChange" event on change', () => {
      props = getFakeProps({ onChange: spy });
      InputWrapper = createInput(props);
      InputWrapper.find(`input#${props.id}`).simulate("change");

      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.have.property('target');
    });

    it('triggers prop "onBlur" event on blur', () => {
      props = getFakeProps({ onBlur: spy });
      InputWrapper = createInput(props);
      InputWrapper.find(`input#${props.id}`).simulate("blur");

      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.have.property('target');
    });
  });

  describe("prop functionality", () => {
    it ('forwards a reference to the underlying button with forwardedRef prop', () => {
      const forwardedRef = React.createRef();
      props = getFakeProps({ forwardedRef });
      InputWrapper = createInput(props);
      const InputWrapperComponent = InputWrapper.find(BaseInput);
      const InputNode = InputWrapper.find('input').getDOMNode();

      expect(InputWrapperComponent.props().forwardedRef.current).to.equal(InputNode);
    });

    it('focuses the input on mount when prop "autoFocus" is set to true', () => {
      props = getFakeProps({ autoFocus: true });
      InputWrapper = createInput(props);
      const InputElementNode = InputWrapper.find('input');

      expect(InputElementNode.getDOMNode()).to.equal(document.activeElement);
    });
  });

  describe("clearing input", () => {

    it('displays a clear icon if it has prop "value" and "onClear"', () => {
      props = getFakeProps({value: 'A value on input', onClear: () => {} });
      InputWrapper = createInput(props);

      expect(InputWrapper.find(MUIIconButton).exists()).to.equal(true);
    });

    it('will not display a clear icon if it has an empty value', () => {
      props = getFakeProps({ value: "" });
      InputWrapper = createInput(props);

      expect(InputWrapper.find(MUIIconButton).exists()).to.equal(false);
    });

    it('will not display a clear icon if it has prop "value" but not "onClear"', () => {
      props = getFakeProps({ value: 'I have a value' });
      InputWrapper = createInput(props);

      expect(InputWrapper.find(MUIIconButton).exists()).to.equal(false);
    });

    it('triggers prop "onClear" event on clear click', () => {
      const onClearSpy = sinon.spy();
      props = getFakeProps({ value: 'Clear me please!', onClear: onClearSpy });
      InputWrapper = createInput(props);
      InputWrapper.find(MUIIconButton).simulate("click");

      expect(onClearSpy.calledOnce).to.equal(true);
      expect(onClearSpy.getCall(0).args[0]).to.have.property('target');
    });
  });

  describe("states", () => {
    describe("disabled", () => {
      it('should disable the input if disabled', () => {
        props = getFakeProps({ disabled: true });
        InputWrapper = createInput(props);

        expect(InputWrapper.find(`input#${props.id}`).get(0).props.disabled).to.equal(true);
      });

      // it('will not trigger an "onFocus" event when disabled', () => {
      //   const onClickSpy = sinon.spy();
      //   props = getFakeProps({ onClear: onClickSpy });
      //   InputWrapper = createInput(props);
      //   InputWrapper.find("ForwardRef(SvgIcon)").simulate("click");

      //   expect(spy.calledOnce).to.equal(true);
      //   expect(spy.getCall(0).args[0]).to.have.property('target');
      // });
    });

    describe("error", () => {
      it('should show an error text message if it has an error', () => {
        props = getFakeProps({ error: "Show this error message to user" });
        InputWrapper = createInput(props);

        expect(InputWrapper.find(`#${props.id}-component-error-text p`).exists()).to.equal(true);
        expect(InputWrapper.find(`#${props.id}-component-error-text p`).text()).to.equal("Show this error message to user");
      });

      it('should show an error icon if it has an error', () => {
        props = getFakeProps({ error: "Show this error message to user" });
        InputWrapper = createInput(props);

        expect(InputWrapper.find(`#${props.id}-component-error-text`).exists()).to.equal(true);
      });

      it('should not show an error text message if it has no error', () => {
        props = getFakeProps({ error: undefined });
        InputWrapper = createInput(props);

        expect(InputWrapper.find(`#${props.id}-component-error-text`).exists()).to.equal(false);
      });

      it('should not show an error icon if it has no error', () => {
        props = getFakeProps({ error: undefined });
        InputWrapper = createInput(props);

        expect(InputWrapper.find(`#${props.id}-component-error-text`).exists()).to.equal(false);
      });
    });
  });
});

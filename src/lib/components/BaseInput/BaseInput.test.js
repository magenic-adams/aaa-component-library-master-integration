/* global
  afterEach
  describe,
  beforeEach,
  it,
  jest,
*/

import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';
import sinon from 'sinon';
import BaseInput from './BaseInput';
import { AAAPrimaryTheme } from '..';

function createInput(props) {
  return mount(<AAAPrimaryTheme><BaseInput {...props} /></AAAPrimaryTheme>)
}

function getFakeProps(override) {
  return {
    id: "enabledId",
    name: "enabledName",
    labelName: "Enabled Label",
    type: "text",
    value: "Enabled",
    placeholder: "Placeholder",
    onChange: jest.fn(v => v),
    onClear: jest.fn(v => v),
    ...override
  };
}

describe("Input", () => {
  let spy;
  let props;
  let InputWrapper;

  beforeEach(() => {
    spy = sinon.spy();

  });

  afterEach(() => {
    InputWrapper.unmount();
  });

  describe("BaseInput", () => {
    it('has rendered an input and label', () => {
      props = getFakeProps();
      InputWrapper = createInput(props);

      expect(InputWrapper.find(`label[htmlFor="${props.id}"]`).exists()).to.equal(true);
      expect(InputWrapper.find(`label[htmlFor="${props.id}"]`).text()).to.equal("Enabled Label");
      expect(InputWrapper.find(`input[id="${props.id}"]`).exists()).to.equal(true);
      expect(InputWrapper.find(`input[id="${props.id}"]`).get(0).props.value).to.equal("Enabled");
    });

    it('has rendered an input and without label', () => {
      props = getFakeProps({ labelName: "" });
      InputWrapper = createInput(props);

      expect(InputWrapper.find(`label[htmlFor="${props.id}"]`).exists()).to.equal(false);
      expect(InputWrapper.find(`input[id="${props.id}"]`).exists()).to.equal(true);
      expect(InputWrapper.find(`input[id="${props.id}"]`).get(0).props.value).to.equal("Enabled");
    });

    describe("helperText", () => {
      it('has rendered an input with helper text', () => {
        props = getFakeProps({ helperText: "Helper Text" });
        InputWrapper = createInput(props);

        expect(InputWrapper.find(`input[id="${props.id}"]`).exists()).to.equal(true);
        expect(InputWrapper.find(`input[id="${props.id}"]`).get(0).props.value).to.equal("Enabled");
        expect(InputWrapper.find(`p[id="${props.id}-component-helper-text"]`).exists()).to.equal(true);
        expect(InputWrapper.find(`p[id="${props.id}-component-helper-text"]`).text()).to.equal("Helper Text");
      })
      it('has rendered an input without helper text', () => {
        props = getFakeProps({ helperText: "" });
        InputWrapper = createInput(props);

        expect(InputWrapper.find(`input[id="${props.id}"]`).exists()).to.equal(true);
        expect(InputWrapper.find(`input[id="${props.id}"]`).get(0).props.value).to.equal("Enabled");
        expect(InputWrapper.find(`p[id="${props.id}-component-helper-text"]`).exists()).to.equal(false);
      })
    })

    describe("events", () => {
      it('triggers onChange event on change', () => {
        props = getFakeProps({ onChange: spy });
        InputWrapper = createInput(props);
        InputWrapper.find(`input[id="${props.id}"]`).simulate("change");

        expect(spy.calledOnce).to.equal(true);
        expect(spy.getCall(0).args[0]).to.have.property('target');
      })
      it('triggers onBlur event on blur', () => {
        props = getFakeProps({ onBlur: spy });
        InputWrapper = createInput(props);
        InputWrapper.find(`input[id="${props.id}"]`).simulate("blur");

        expect(spy.calledOnce).to.equal(true);
        expect(spy.getCall(0).args[0]).to.have.property('target');
      })
    })

    describe("Clear Icon", () => {
      it('displays a clear icon if it has value and onClear event', () => {
        props = getFakeProps({ error: true, errorText: "error" });
        InputWrapper = createInput(props);

        expect(InputWrapper.find("ForwardRef(SvgIcon)").exists()).to.equal(true);
      });
      it('will not display a clear icon if it has no value', () => {
        props = getFakeProps({ value: "" });
        InputWrapper = createInput(props);

        expect(InputWrapper.find("ForwardRef(SvgIcon)").exists()).to.equal(false);
      });
      it('will not display a clear icon if it has no onClear event', () => {
        props = getFakeProps({ onClear: null });
        InputWrapper = createInput(props);

        expect(InputWrapper.find("ForwardRef(SvgIcon)").exists()).to.equal(false);
      });
      it('triggers onClear event on clear', () => {
        props = getFakeProps({ onClear: spy });
        InputWrapper = createInput(props);
        InputWrapper.find("ForwardRef(SvgIcon)").simulate("click");

        expect(spy.calledOnce).to.equal(true);
        expect(spy.getCall(0).args[0]).to.have.property('target');
      })
    });

    describe("states", () => {
      describe("disabled", () => {
        it('should disable the input if disabled', () => {
          props = getFakeProps({ disabled: true });
          InputWrapper = createInput(props);

          expect(InputWrapper.find(`input[id="${props.id}"]`).get(0).props.disabled).to.equal(true);
        });
      });
      describe("error", () => {
        it('should show an error text message if it has an error', () => {
          props = getFakeProps({ error: true, errorText: "Error Text" });
          InputWrapper = createInput(props);

          expect(InputWrapper.find(`p[id="${props.id}-component-error-text"]`).exists()).to.equal(true);
          expect(InputWrapper.find(`p[id="${props.id}-component-error-text"]`).text()).to.equal("Error Text");
        });
        it('should show an error icon if it has an error', () => {
          props = getFakeProps({ error: true, errorText: "Error Text" });
          InputWrapper = createInput(props);

          expect(InputWrapper.find("ForwardRef(SvgIcon)[color='error']").exists()).to.equal(true);
        });
        it('should not show an error text message if it has no error', () => {
          props = getFakeProps({ error: false, errorText: "Error Text" });
          InputWrapper = createInput(props);

          expect(InputWrapper.find(`p[id="${props.id}-component-error-text"]`).exists()).to.equal(false);
        });
        it('should not show an error icon if it has no error', () => {
          props = getFakeProps({ error: false, errorText: "Error Text" });
          InputWrapper = createInput(props);

          expect(InputWrapper.find("ForwardRef(SvgIcon)[color='error']").exists()).to.equal(false);
        });
        it('should not show an error icon if it has an error but has no error text', () => {
          props = getFakeProps({ error: true });
          InputWrapper = createInput(props);

          expect(InputWrapper.find("ForwardRef(SvgIcon)[color='error']").exists()).to.equal(false);
        });
        it('should not show an error text message if it has an error but no error text', () => {
          props = getFakeProps({ error: true });
          InputWrapper = createInput(props);

          expect(InputWrapper.find(`p[id="${props.id}-component-error-text"]`).exists()).to.equal(false);
        });
      });
    })
  });
});

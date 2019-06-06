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

// Test Utilities
import {getDOMNodeComputedStyle} from "../../../../../test/DOM";

// Constants
import {
  AAA_COLOR_MAIN_DISABLED,
  AAA_COLOR_MAIN_ERROR,
  AAA_COLOR_MAIN_GRAY,
  AAA_COLOR_MAIN_WHITE,
  // AAA_COLOR_TRANSPARENT,
} from '../../../constants/colors';

function createInput(props) {
  return mount(<AAAPrimaryTheme><BaseInput {...props} /></AAAPrimaryTheme>);
}

function getFakeProps(override) {
  return { // Required
    id: "input-unique-identifier", // used for unique identifier and data tracking
    name: "input-unique-name", // used for form value
    ...override
  };
}
// Styling tests

describe('Input', () => {
  let props = getFakeProps();
  let InputWrapper = createInput(props);
  const MUIInputNode = InputWrapper.find(MUIInput).getDOMNode();

  afterAll(() => {
    InputWrapper.unmount();
  });

  describe('rendering of HTML elements', () => {
    it('has a class property passed from className prop', () => {
      expect(MUIInputNode.className).to.include('BaseInput');
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
    it ('forwards a reference to the underlying button with "forwardedRef" prop', () => {
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
    // TODO: Can't seem to get focused state css working
    // describe('focused', () => {
    //   const focusProps = getFakeProps({ autoFocus: true });
    //   const FocusedInputWrapper = createInput(focusProps);
    //   const FocusedBaseInputWrapper = FocusedInputWrapper.find(MUIInput);

    //   it ('should have 2px AAA_COLOR_MAIN_DARKER_BLUE inset box-shadow', () => {
    //     const boxShadowStyle = getDOMNodeComputedStyle(FocusedBaseInputWrapper.getDOMNode(), 'box-shadow');
    //     expect(boxShadowStyle).to.equal(`inset 0 0 0 2px ${AAA_COLOR_MAIN_DARKER_BLUE}`);
    //   });
    // });

    describe('disabled', () => {
      let disabledProps = getFakeProps({ disabled: true });
      let DisabledInputWrapper = createInput(disabledProps);
      const DisabledMUIInputNode = DisabledInputWrapper.find(MUIInput).getDOMNode();

      it('should disable the input HTML element if disabled', () => {
        expect(DisabledInputWrapper.find(`input#${props.id}`).get(0).props.disabled).to.equal(true);
      });

      it ('should have AAA_COLOR_MAIN_DISABLED background-color', () => {
        const backgroundColorStyle = getDOMNodeComputedStyle(DisabledMUIInputNode, 'background-color');
        expect(backgroundColorStyle).to.equal(AAA_COLOR_MAIN_DISABLED);
      });

      it ('should have initial box-shadow property', () => {
        const boxShadowStyle = getDOMNodeComputedStyle(DisabledMUIInputNode, 'box-shadow');
        expect(boxShadowStyle).to.equal('initial');
      });

      it('should not allow "onFocus" prop event to be triggered when disabled', () => {
        const onFocusSpy = sinon.spy();
        disabledProps = getFakeProps({ disabled: true, onFocus: onFocusSpy });
        DisabledInputWrapper = createInput(props);
        DisabledInputWrapper.find('input').simulate("focus");

        expect(onFocusSpy.calledOnce).to.equal(false);
      });
    });

    describe('error', () => {
      const errorProps = getFakeProps({error: 'Show this error message to the user'});
      const ErrorInputWrapper = createInput(errorProps);
      const ErrorMUIInputNode = ErrorInputWrapper.find(MUIInput).getDOMNode();

      describe('error elements', () => {
        it('should show an error text message if it has an error', () => {
          expect(ErrorInputWrapper.find(`#${props.id}-component-error-text p`).exists()).to.equal(true);
          expect(ErrorInputWrapper.find(`#${props.id}-component-error-text p`).text()).to.equal('Show this error message to the user');
        });

        it('should show an error icon if it has an error', () => {
          expect(ErrorInputWrapper.find(`#${props.id}-component-error-text`).exists()).to.equal(true);
        });

        it('should not show an error text message if it has no error', () => {
          const noErrorProps = getFakeProps({ error: undefined });
          InputWrapper = createInput(noErrorProps);

          expect(InputWrapper.find(`#${noErrorProps.id}-component-error-text`).exists()).to.equal(false);
        });

        it('should not show an error icon if it has no error', () => {
          const noErrorProps = getFakeProps({ error: undefined });
          InputWrapper = createInput(noErrorProps);

          expect(InputWrapper.find(`#${noErrorProps.id}-component-error-text`).exists()).to.equal(false);
        });
      });

      describe('error styles', () => {
        it ('should have an 1px inset AAA_COLOR_MAIN_ERROR box-shadow property', () => {
          const boxShadowStyle = getDOMNodeComputedStyle(ErrorMUIInputNode, 'box-shadow');
          expect(boxShadowStyle).to.equal(`inset 0 0 0 2px ${AAA_COLOR_MAIN_ERROR}`);
        });
      });
    });

    describe("base styles", () => {
      it ('should have 48px height', () => {
        const heightStyle = getDOMNodeComputedStyle(MUIInputNode, 'height');
        expect(heightStyle).to.equal('48px');
      });

      it ('should have 100% width', () => {
        const widthStyle = getDOMNodeComputedStyle(MUIInputNode, 'width');
        expect(widthStyle).to.equal('100%');
      });

      it ('should have 0 border', () => {
        const borderStyle = getDOMNodeComputedStyle(MUIInputNode, 'border');
        expect(borderStyle).to.equal('0px');
      });

      it ('should have 4px border-radius', () => {
        const borderRadiusStyle = getDOMNodeComputedStyle(MUIInputNode, 'border-radius');
        expect(borderRadiusStyle).to.equal('4px');
      });

      it ('should have AAA_COLOR_MAIN_WHITE background color', () => {
        const backgroundColorStyle = getDOMNodeComputedStyle(MUIInputNode, 'background-color');
        expect(backgroundColorStyle).to.equal(AAA_COLOR_MAIN_WHITE);
      });

      it ('should have 1px inset AAA_COLOR_MAIN_GRAY box-shadow', () => {
        const boxShadowStyle = getDOMNodeComputedStyle(MUIInputNode, 'box-shadow');
        expect(boxShadowStyle).to.equal(`inset 0 0 0 1px ${AAA_COLOR_MAIN_GRAY}`);
      });
    });
  });
});

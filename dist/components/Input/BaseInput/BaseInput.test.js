import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

/* global
  afterAll,
  describe,
  document,
  beforeEach,
  it
*/
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon'; // MUIComponents

import MUIInput from '@material-ui/core/Input';
import MUIIconButton from '@material-ui/core/IconButton'; // Components

import BaseInput from './BaseInput';
import AAAPrimaryTheme from '../../AAAPrimaryTheme/AAAPrimaryTheme'; // Test Utilities

import { getDOMNodeComputedStyle } from '../../../../../../test/DOM'; // Constants

import { AAA_COLOR_MAIN_DISABLED, AAA_COLOR_MAIN_ERROR, AAA_COLOR_MAIN_GRAY, AAA_COLOR_MAIN_WHITE } from // AAA_COLOR_TRANSPARENT,
'../../../constants/colors';

function createInput(props) {
  return mount(React.createElement(AAAPrimaryTheme, null, React.createElement(BaseInput, props)));
}

function getFakeProps(override) {
  return _objectSpread({
    // Required
    id: 'input-unique-identifier',
    // used for unique identifier and data tracking
    name: 'input-unique-name'
  }, override);
} // Styling tests


describe('Input', function () {
  var props = getFakeProps();
  var InputWrapper = createInput(props);
  var MUIInputNode = InputWrapper.find(MUIInput).getDOMNode();
  afterAll(function () {
    InputWrapper.unmount();
  });
  describe('rendering of HTML elements', function () {
    it('has a class property passed from className prop', function () {
      expect(MUIInputNode.className).to.include('BaseInput');
    });
    it('attaches a data-quid attribute to the input base element', function () {
      expect(InputWrapper.find('input').getDOMNode().dataset.quid).to.equal("BaseInput-".concat(props.id));
    });
    it('has a default rendering of an input without a label', function () {
      expect(InputWrapper.find("label[htmlFor=\"".concat(props.id, "\"]")).exists()).to.equal(false);
      expect(InputWrapper.find("input#".concat(props.id)).exists()).to.equal(true);
    });
    it('has a default rendering of an input without helper text', function () {
      expect(InputWrapper.find("input#".concat(props.id)).exists()).to.equal(true);
      expect(InputWrapper.find("p[data-quid=\"FormFieldMetaHelperText-".concat(props.id, "\"]")).exists()).to.equal(false);
    });
    it('renders the prop "value" within the input', function () {
      props = getFakeProps({
        value: 'Jerry Seinfeld'
      });
      InputWrapper = createInput(props);
      expect(InputWrapper.find("input#".concat(props.id)).get(0).props.value).to.equal('Jerry Seinfeld');
    });
    it('renders the prop "helperText" as helper text within the component', function () {
      props = getFakeProps({
        helperText: 'This field is required'
      });
      InputWrapper = createInput(props);
      expect(InputWrapper.find("input#".concat(props.id)).exists()).to.equal(true);
      expect(InputWrapper.find("p[data-quid=\"FormFieldMetaHelperText-".concat(props.id, "\"]")).exists()).to.equal(true);
      expect(InputWrapper.find("p[data-quid=\"FormFieldMetaHelperText-".concat(props.id, "\"]")).text()).to.equal('This field is required');
    });
    it('renders the prop "labelName" as a label', function () {
      props = getFakeProps({
        labelName: 'Favorite comedian name?'
      });
      InputWrapper = createInput(props);
      expect(InputWrapper.find("label[htmlFor=\"".concat(props.id, "\"]")).exists()).to.equal(true);
      expect(InputWrapper.find("label[htmlFor=\"".concat(props.id, "\"]")).text()).to.equal('Favorite comedian name?');
      expect(InputWrapper.find("input#".concat(props.id)).exists()).to.equal(true);
    });
    it('renders the prop "placeholder" as a placeholder', function () {
      props = getFakeProps({
        placeholder: 'First name?'
      });
      InputWrapper = createInput(props);
      expect(InputWrapper.find('input').getDOMNode().placeholder).to.equal('First name?');
    });
  });
  describe('events', function () {
    var spy;
    beforeEach(function () {
      spy = sinon.spy();
    });
    it('triggers prop "onFocus" event on focus', function () {
      props = getFakeProps({
        onFocus: spy
      });
      InputWrapper = createInput(props);
      InputWrapper.find("input#".concat(props.id)).simulate('focus');
      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.have.property('target');
    });
    it('triggers prop "onChange" event on change', function () {
      props = getFakeProps({
        onChange: spy
      });
      InputWrapper = createInput(props);
      InputWrapper.find("input#".concat(props.id)).simulate('change');
      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.have.property('target');
    });
    it('triggers prop "onBlur" event on blur', function () {
      props = getFakeProps({
        onBlur: spy
      });
      InputWrapper = createInput(props);
      InputWrapper.find("input#".concat(props.id)).simulate('blur');
      expect(spy.calledOnce).to.equal(true);
      expect(spy.getCall(0).args[0]).to.have.property('target');
    });
  });
  describe('prop functionality', function () {
    it('forwards a reference to the underlying button with "forwardedRef" prop', function () {
      var forwardedRef = React.createRef();
      props = getFakeProps({
        forwardedRef: forwardedRef
      });
      InputWrapper = createInput(props);
      var InputWrapperComponent = InputWrapper.find(BaseInput);
      var InputNode = InputWrapper.find('input').getDOMNode();
      expect(InputWrapperComponent.props().forwardedRef.current).to.equal(InputNode);
    });
    it('focuses the input on mount when prop "autoFocus" is set to true', function () {
      props = getFakeProps({
        autoFocus: true
      });
      InputWrapper = createInput(props);
      var InputElementNode = InputWrapper.find('input');
      expect(InputElementNode.getDOMNode()).to.equal(document.activeElement);
    });
  });
  describe('clearing input', function () {
    it('displays a clear icon if it has prop "value" and "onClear"', function () {
      props = getFakeProps({
        value: 'A value on input',
        onClear: function onClear() {}
      });
      InputWrapper = createInput(props);
      expect(InputWrapper.find(MUIIconButton).exists()).to.equal(true);
    });
    it('will not display a clear icon if it has an empty value', function () {
      props = getFakeProps({
        value: ''
      });
      InputWrapper = createInput(props);
      expect(InputWrapper.find(MUIIconButton).exists()).to.equal(false);
    });
    it('will not display a clear icon if it has prop "value" but not "onClear"', function () {
      props = getFakeProps({
        value: 'I have a value'
      });
      InputWrapper = createInput(props);
      expect(InputWrapper.find(MUIIconButton).exists()).to.equal(false);
    });
    it('triggers prop "onClear" event on clear click', function () {
      var onClearSpy = sinon.spy();
      props = getFakeProps({
        value: 'Clear me please!',
        onClear: onClearSpy
      });
      InputWrapper = createInput(props);
      InputWrapper.find(MUIIconButton).simulate('click');
      expect(onClearSpy.calledOnce).to.equal(true);
      expect(onClearSpy.getCall(0).args[0]).to.have.property('target');
    });
  });
  describe('states', function () {
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
    describe('disabled', function () {
      var disabledProps = getFakeProps({
        disabled: true
      });
      var DisabledInputWrapper = createInput(disabledProps);
      var DisabledMUIInputNode = DisabledInputWrapper.find(MUIInput).getDOMNode();
      it('should disable the input HTML element if disabled', function () {
        expect(DisabledInputWrapper.find("input#".concat(props.id)).get(0).props.disabled).to.equal(true);
      });
      it('should have AAA_COLOR_MAIN_DISABLED background-color', function () {
        var backgroundColorStyle = getDOMNodeComputedStyle(DisabledMUIInputNode, 'background-color');
        expect(backgroundColorStyle).to.equal(AAA_COLOR_MAIN_DISABLED);
      });
      it('should have initial box-shadow property', function () {
        var boxShadowStyle = getDOMNodeComputedStyle(DisabledMUIInputNode, 'box-shadow');
        expect(boxShadowStyle).to.equal('initial');
      });
      it('should not allow "onFocus" prop event to be triggered when disabled', function () {
        var onFocusSpy = sinon.spy();
        disabledProps = getFakeProps({
          disabled: true,
          onFocus: onFocusSpy
        });
        DisabledInputWrapper = createInput(props);
        DisabledInputWrapper.find('input').simulate('focus');
        expect(onFocusSpy.calledOnce).to.equal(false);
      });
    });
    describe('error', function () {
      var errorProps = getFakeProps({
        error: 'Show this error message to the user'
      });
      var ErrorInputWrapper = createInput(errorProps);
      var ErrorMUIInputNode = ErrorInputWrapper.find(MUIInput).getDOMNode();
      describe('error elements', function () {
        it('should show an error text message if it has an error', function () {
          var errorElement = ErrorInputWrapper.find("p[data-quid=\"FormFieldMetaErrorText-".concat(props.id, "\"]"));
          expect(errorElement.exists()).to.equal(true);
          expect(errorElement.text()).to.equal('Show this error message to the user');
        });
        it('should not show an error text message if it has no error', function () {
          var noErrorProps = getFakeProps({
            error: undefined
          });
          InputWrapper = createInput(noErrorProps);
          var errorElement = InputWrapper.find("p[data-quid=\"FormFieldMetaErrorText-".concat(props.id, "\"]"));
          expect(errorElement.exists()).to.equal(false);
        });
        it('should not show an error icon if it has no error', function () {
          var noErrorProps = getFakeProps({
            error: undefined
          });
          InputWrapper = createInput(noErrorProps);
          expect(InputWrapper.find("#".concat(noErrorProps.id, "-component-error-text")).exists()).to.equal(false);
        });
      });
      describe('error styles', function () {
        it('should have an 1px inset AAA_COLOR_MAIN_ERROR box-shadow property', function () {
          var boxShadowStyle = getDOMNodeComputedStyle(ErrorMUIInputNode, 'box-shadow');
          expect(boxShadowStyle).to.equal("inset 0 0 0 2px ".concat(AAA_COLOR_MAIN_ERROR));
        });
      });
    });
    describe('base styles', function () {
      it('should have 48px height', function () {
        var heightStyle = getDOMNodeComputedStyle(MUIInputNode, 'height');
        expect(heightStyle).to.equal('48px');
      });
      it('should have 100% width', function () {
        var widthStyle = getDOMNodeComputedStyle(MUIInputNode, 'width');
        expect(widthStyle).to.equal('100%');
      });
      it('should have 0 border', function () {
        var borderStyle = getDOMNodeComputedStyle(MUIInputNode, 'border');
        expect(borderStyle).to.equal('0px');
      });
      it('should have 4px border-radius', function () {
        var borderRadiusStyle = getDOMNodeComputedStyle(MUIInputNode, 'border-radius');
        expect(borderRadiusStyle).to.equal('4px');
      });
      it('should have AAA_COLOR_MAIN_WHITE background color', function () {
        var backgroundColorStyle = getDOMNodeComputedStyle(MUIInputNode, 'background-color');
        expect(backgroundColorStyle).to.equal(AAA_COLOR_MAIN_WHITE);
      });
      it('should have 1px inset AAA_COLOR_MAIN_GRAY box-shadow', function () {
        var boxShadowStyle = getDOMNodeComputedStyle(MUIInputNode, 'box-shadow');
        expect(boxShadowStyle).to.equal("inset 0 0 0 1px ".concat(AAA_COLOR_MAIN_GRAY));
      });
    });
  });
});
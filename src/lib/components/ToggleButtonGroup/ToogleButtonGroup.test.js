import React from 'react';
import { expect } from "chai";
import { mount, shallow } from 'enzyme';
import ToggleButtonGroup from './ToggleButtonGroup';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import AAAThemeProvider from '../AAAPrimaryTheme/AAAPrimaryTheme';
import Button from '../Button/Button';

function getFakeProps(overrides) {
    return {
        options: [{id: 1, text: "Yes"}, {id: 2, text: "No"}], 
        onSelect: jest.fn(v => v),
        ...overrides
    }
}

function createToggleButtonWithTheme(props) {
    return mount(
            <AAAThemeProvider theme={props.theme}>
              <ToggleButtonGroup {...props}></ToggleButtonGroup>
            </AAAThemeProvider>
          )
  }

describe("ToggleButtonGroup", function () {
    let props;
    let wrappedComponent;
    let buttonGroup;

    beforeEach(() => {
      props = getFakeProps();
      wrappedComponent = createToggleButtonWithTheme(props);
      buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
    });

    afterEach(() => {
      wrappedComponent.unmount();
    });

    it('contains button elements when it has valid options', function () {
        expect(buttonGroup.props.children.length).to.be.above(0);
    });

    it('do NOT render button elements when it has NO options', function () {
        const props = getFakeProps({ options: [] });
        const wrappedComponent = createToggleButtonWithTheme(props)
        const buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
        
        expect(buttonGroup).to.be.undefined;
    });

    it('do NOT render button elements when has Invalid options', function () {
      let props, wrappedComponent, buttonGroup;

      props = getFakeProps({ options: [{ idx: 1, display: "Invalid"}] });
      wrappedComponent = createToggleButtonWithTheme(props)
      buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
      
      expect(buttonGroup).to.be.undefined;

      props = getFakeProps({ options: null });
      wrappedComponent = createToggleButtonWithTheme(props)
      buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
      
      expect(buttonGroup).to.be.undefined;

      props = getFakeProps({ options: undefined });
      wrappedComponent = createToggleButtonWithTheme(props)
      buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
      
      expect(buttonGroup).to.be.undefined;
  });

    it('renders text', function () {
        const button1Text = buttonGroup.props.children[0].props.children;
        const button2Text = buttonGroup.props.children[1].props.children;

        expect(button1Text).to.equal('Yes');
        expect(button2Text).to.equal('No');
    });

    it('should set button to active when has value', function () {
      const props = getFakeProps({ value: { id: 1, text: "Yes"} });
      const wrappedComponent = createToggleButtonWithTheme(props)
      const buttonGroup = wrappedComponent.find(ButtonGroup).get(0);

      const button1 = buttonGroup.props.children[0];
      const button2 = buttonGroup.props.children[1];
   
      expect(button1.props.className).to.contains("active");
      expect(button2.props.className).to.not.contains("active");     
    });

    it('should set all elements to disabled', function () {
      const props = getFakeProps({ disabled: true });
      const wrappedComponent = createToggleButtonWithTheme(props)
      const buttonGroup = wrappedComponent.find(ButtonGroup).get(0);

      const button1 = buttonGroup.props.children[0];
      const button2 = buttonGroup.props.children[1];
      
      expect(button1.props.disabled).to.be.equal(true);
      expect(button2.props.disabled).to.be.equal(true);     
    });
});

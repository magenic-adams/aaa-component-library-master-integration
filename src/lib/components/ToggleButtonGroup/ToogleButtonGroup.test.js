import React from 'react';
import { expect } from "chai";
import { mount, shallow } from 'enzyme';
import ToggleButtonGroup from './ToggleButtonGroup';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import AAAThemeProvider from '../AAAPrimaryTheme/AAAPrimaryTheme';
import Button from '../Button/Button';

function getFakeProps(overrides) {
    return {
        options: [{value: 0, text: "Yes"}, {value: 1, text: "No"}], 
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
      buttonGroup = wrappedComponent.find(ButtonGroup);
    });

    afterEach(() => {
      wrappedComponent.unmount();
    });

    it('contains button elements when it has options', function () {
        expect(buttonGroup.get(0).props.children.length).to.be.above(0);
    });

    it('do NOT render button elements when it has NO options', function () {
        const props = getFakeProps({ options: [] });
        const wrappedComponent = createToggleButtonWithTheme(props)
        const buttonGroup = wrappedComponent.find(ButtonGroup).get(0);
        
        expect(buttonGroup).to.be.undefined;
    });

    it('renders text', function () {
        const button1Text = buttonGroup.get(0).props.children[0].props.children;
        const button2Text = buttonGroup.get(0).props.children[1].props.children;

        expect(button1Text).to.equal('Yes');
        expect(button2Text).to.equal('No');
    });

    it('should set only one button to active', function () {
      const button1 = wrappedComponent.find(ButtonGroup).find(Button).at(0);
      const button2 = wrappedComponent.find(ButtonGroup).find(Button).at(1);
      
      button1.simulate("click");

      const clickedButton = wrappedComponent.find(ButtonGroup).find(Button).at(0);
    
      expect(clickedButton.props().className).to.contains("active");
      expect(button2.props().className).to.not.contains("active");     
    });

    it('should set all elements to disabled', function () {
      const props = getFakeProps({ disabled: true });
      const wrappedComponent = createToggleButtonWithTheme(props)

      const button1 = wrappedComponent.find(ButtonGroup).find(Button).at(0);
      const button2 = wrappedComponent.find(ButtonGroup).find(Button).at(1);
      
      expect(button1.props().disabled).to.be.equal(true);
      expect(button2.props().disabled).to.be.equal(true);     
    });
});

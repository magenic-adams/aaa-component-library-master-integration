import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from "chai";
import { mount, shallow } from 'enzyme';
import ToggleButtonGroup from './ToggleButtonGroup';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

function createTheme() {
    const AAA_COLOR_DISABLED = '#cccbce';
    const AAA_COLOR_ERROR = '#da291c';
    const AAA_COLOR_MAIN_BLUE = '#4470bf';
    const AAA_COLOR_MAIN_DARK_BLUE = '#395fa4';
    const AAA_COLOR_SECONDARY_HOVER = '#395fa4';

    const theme = createMuiTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 320,
            md: 768,
            lg: 1024,
            xl: 1440,
          },
          up: jest.fn(v => v)
        },
        palette: {
          primary: {
            // NOTE: when not specifying other values like "light", they will
            // be calculated from palette.primary.main,
            main: AAA_COLOR_MAIN_BLUE,
            dark: AAA_COLOR_MAIN_DARK_BLUE,
          },
          error: {
            main: AAA_COLOR_ERROR,
          },
          disabled: {
            main: AAA_COLOR_DISABLED,
          },
          colorVariables: {
            SECONDARY_HOVER: AAA_COLOR_SECONDARY_HOVER,
          },
        },
        typography: {
          fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
        },
    });

    return theme;
}

function getFakeProps(overrides) {
    return {
        options: [{value: 0, text: "Yes"}, {value: 1, text: "No"}], 
        theme: createTheme(),
        ...overrides
    }
}

function createToggleButton(props) {
    return mount(
            <ThemeProvider theme={props.theme}>
              <ToggleButtonGroup {...props}></ToggleButtonGroup>
            </ThemeProvider>
          )
  }

describe("ToggleButtonGroup", function () {
    it('contains button elements when it has options', function () {
        const props = getFakeProps();
        const ToggleButtonGroupComponent = createToggleButton(props);
        console.log("ToggleButtonGroupComponent.children()", ToggleButtonGroupComponent.find('div').get(0).props.children);
        expect(ToggleButtonGroupComponent.children().length).to.be.above(0);
    });

    it('renders text', function () {
    
    });

    it('sets element to active on click', function () {
    
    });

    it('changes element color on hover', function () {
    
    });

    
});

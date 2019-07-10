/* global
  jest,
*/
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { Link as TextLink, ACEPrimaryTheme, Tooltip } from '..';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

const getTooltipFakeProps = () => {
  return {
    description: <p>How did we calculate your mileage?</p>,
    title: <p>
              We based the average annual on the one-way and number of days commuting per week you provided. Then we
              added X% for other daily and weekend driving.<br /> Lastly, we added x miles to the account for longer trips
              and rounded to the nearest thousand.
          </p>,
    placement:'top',
    open: true,
  };
};

const getLinkFakeProps = () => {
  return {
    color:'primary',
    component:'button',
    onClick: jest.fn(v => v),
    target:'none',
  };
};

describe('Tooltip', () => {
    let createTooltipComponent;
 
    function createTooltip(tooltipProps, linkProps) {
        return mount(
            <ACEPrimaryTheme theme={tooltipProps.theme}>
                <Tooltip {...tooltipProps}>
                        <TextLink {...linkProps} >
                            sample for link
                        </TextLink>
                    </Tooltip>
            </ACEPrimaryTheme>
        );
    }

    beforeEach(() => {
        createTooltipComponent = createTooltip(getTooltipFakeProps(),getLinkFakeProps());
      });
  
    afterEach(() => {
        createTooltipComponent.unmount();
      });
  

    describe('Rendering link with tooltip', () => {
        it('has rendered link text with tooltip', () => {
          expect(createTooltipComponent.find('Tooltip').length).to.equal(2);
        });

        it('pooper is existing/open in the tooltip', () => {
          expect(createTooltipComponent.find('div.MuiTooltip-popper').length).to.equal(1); 
        });

        it('close icon is existing in the popper', () => {
          expect(createTooltipComponent.find('svg').length).to.equal(1); 
        });

        it('div for title is existing in the popper', () => {
          expect(createTooltipComponent.find('div#popperTitle').length).to.equal(1); 
        });

        it('div for description is existing in the popper', () => {
          expect(createTooltipComponent.find('div#popperDescription').length).to.equal(1); 
        });

        it('span for arrow is existing in the popper', () => {
          expect(createTooltipComponent.find('span#popperArrow').length).to.equal(1); 
        });
    });

    describe('Styles', () =>{
        it('Styles on the second tooltip', () => {
          const tooltip = createTooltipComponent.find('.MuiTooltip-tooltipPlacementTop');

          const boxShadow = getDOMNodeComputedStyle(tooltip.getDOMNode(), 'box-shadow');
          const pointerEvents = getDOMNodeComputedStyle(tooltip.getDOMNode(), 'pointer-events');

          expect(boxShadow).to.equal('0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)');
          expect(pointerEvents).to.equal('all');

        });

        it('Styles for the title div', () => {
          const popperTitle = createTooltipComponent.find('div#popperTitle');

          const fontSize = getDOMNodeComputedStyle(popperTitle.getDOMNode(), 'font-size');
          const paddingBottom = getDOMNodeComputedStyle(popperTitle.getDOMNode(), 'padding-bottom');

          expect(fontSize).to.equal('16px');
          expect(paddingBottom).to.equal('8px');

        });

        it('Styles for the description div', () => {
          const popperDescription = createTooltipComponent.find('div#popperDescription');

          const fontSize = getDOMNodeComputedStyle(popperDescription.getDOMNode(), 'font-size');
          const paddingBottom = getDOMNodeComputedStyle(popperDescription.getDOMNode(), 'padding-bottom');
          const fontWeight = getDOMNodeComputedStyle(popperDescription.getDOMNode(), 'font-weight');

          expect(fontSize).to.equal('16px');
          expect(paddingBottom).to.equal('16px');
          expect(fontWeight).to.equal('normal');

        });

        it('Styles for the icon on the popper', () => {
          const svg = createTooltipComponent.find('svg');

          const float = getDOMNodeComputedStyle(svg.getDOMNode(), 'float');
          const cursor = getDOMNodeComputedStyle(svg.getDOMNode(), 'cursor');
          const paddingTop = getDOMNodeComputedStyle(svg.getDOMNode(), 'padding-top');
          const paddingLeft = getDOMNodeComputedStyle(svg.getDOMNode(), 'padding-left');
          const paddingRight = getDOMNodeComputedStyle(svg.getDOMNode(), 'padding-right');

          expect(float).to.equal('right');
          expect(cursor).to.equal('pointer');
          expect(paddingTop).to.equal('4px');
          expect(paddingLeft).to.equal('8px');
          expect(paddingRight).to.equal('8px');

        });
    });
});

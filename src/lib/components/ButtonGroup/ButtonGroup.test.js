/* global describe, it */
import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';

// Test Utilities
import {getDOMNodeComputedStyle} from "../../../../test/DOM";

// Components
import AAAPrimaryTheme from '../AAAPrimaryTheme/AAAPrimaryTheme';
import ButtonGroup from './ButtonGroup';

function createButtonGroupWithTheme(buttons:Array) {
  return mount(
      <AAAPrimaryTheme>
        <ButtonGroup>{buttons}</ButtonGroup>
      </AAAPrimaryTheme>
  );
}

describe("ButtonGroup", () => {
  const ButtonGroupComponent = createButtonGroupWithTheme();
  it('has one or more elements',  () => {
    expect(ButtonGroupComponent.children().length).to.be.above(0);
  });

  it('has base width of 100%', () => {
    const backgroundStyle = getDOMNodeComputedStyle(ButtonGroupComponent.getDOMNode(), 'width');
    expect(backgroundStyle).to.equal('100%');
  });
});

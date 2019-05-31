/* global describe, it */
import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme';

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
});

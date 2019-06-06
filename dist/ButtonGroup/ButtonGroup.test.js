/* global describe, it */
import React from 'react';
import { expect } from "chai";
import { mount } from 'enzyme'; // Components

import AAAPrimaryTheme from '../AAAPrimaryTheme/AAAPrimaryTheme';
import ButtonGroup from './ButtonGroup';

function createButtonGroupWithTheme(buttons) {
  return mount(React.createElement(AAAPrimaryTheme, null, React.createElement(ButtonGroup, null, buttons)));
}

describe("ButtonGroup", function () {
  var ButtonGroupComponent = createButtonGroupWithTheme();
  it('has one or more elements', function () {
    expect(ButtonGroupComponent.children().length).to.be.above(0);
  });
});
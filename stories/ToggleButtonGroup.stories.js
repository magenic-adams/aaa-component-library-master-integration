/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

// Components
import { ACEPrimaryTheme, Subheadline, Subtitle } from '../src/lib/package/components';

// Internal
import ToggleButtonGroupContainer from '../src/lib/internal/ToggleButtonGroupContainer/ToggleButtonGroupContainer';
import ElementContainer from '../src/lib/internal/ElementContainer/ElementContainer';
import StoryIntroduction from '../src/lib/internal/StoryIntroduction/StoryIntroduction';

const stories = storiesOf('Molecules|ToggleButtonGroup', module);
const options = [{ id: 1, text: 'Yes' }, { id: 2, text: 'No' }];

stories.add('Usage and States', () => {
  return (
    <ACEPrimaryTheme>
      <div>
        <div className="u-padding--50">
          <StoryIntroduction elementName="ToggleButtonGroup"/>
        </div>
        <div className="u-padding--50">
          <Subtitle>Usage</Subtitle>
          <Subheadline>When to use toggle button group</Subheadline>
          <ul>
            <li>If a single option of the set may be selected.</li>
            <li>If group of options are related to Yes/No response.</li>
          </ul>
        </div>
        <div className="u-padding--50">
          <Subheadline>Don’t use toggle button group</Subheadline>
          <ul>
            <li>When more than two options of the set by itself.</li>
            <li>
              The toggle button group should paired with a primary button for
              submiting the choice. for selecting multiple options on the button
              group. Use multi-select in this case.
            </li>
          </ul>
        </div>
        <br />
        <div className="u-padding--50">
          <Subtitle>States</Subtitle>
          <Subheadline>Enabled State, No default selection</Subheadline>
        </div>
        <ElementContainer>
          <ToggleButtonGroupContainer
            options={options}
            onSelect={action('clicked')}
          />
        </ElementContainer>
        <div className="u-padding--50">
          <Subheadline>Disabled State</Subheadline>
        </div>
        <ElementContainer>
          <ToggleButtonGroupContainer options={options} disabled />
        </ElementContainer>

        <div className="u-padding--50">
          <Subheadline>Selected State</Subheadline>
        </div>
        <ElementContainer>
          <ToggleButtonGroupContainer
            options={options}
            value={options[0]}
            onSelect={action('clicked')}
          />
        </ElementContainer>
      </div>
    </ACEPrimaryTheme>
  );
});

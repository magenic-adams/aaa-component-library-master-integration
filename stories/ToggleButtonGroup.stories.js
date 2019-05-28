import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

// Components
import {AAAPrimaryTheme, Button, ButtonGroup, ToggleButtonGroup} from '../src/lib/components';
import {ElementContainer} from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Molecules|ToggleButtonGroup', module);
const selectedOptions = [{value: 1, text: "Yes"}, {value: 0, text: "No"}];

stories
  .add('Usage and States', () => {
    return (
      <AAAPrimaryTheme>
        <div>
          <h2>Usage</h2>
          <h3>When to use toggle button group</h3>
          <ul>
            <li>If a single option of the set may be selected.</li>
            <li>If group of options are related to Yes/No response.</li>
          </ul>
          <h3>Don’t use toggle button group</h3>
          <ul>
            <li>When more than two options of the set by itself.</li>
            <li>The toggle button group should paired with a primary button for submiting the choice.
              for selecting multiple options on the button group. Use multi-select in this case.
            </li>
          </ul>
          <br/>
          <h2>States</h2>
          <h3>Enabled state</h3>
          <ElementContainer>
            <ToggleButtonGroup options={selectedOptions} onSelect={action('clicked')}>
            </ToggleButtonGroup>
          </ElementContainer>
          <h3>Disabled state</h3>
          <ElementContainer>
            <ToggleButtonGroup options={selectedOptions} disabled>
            </ToggleButtonGroup>
          </ElementContainer>
          <h3>Selected state</h3>
          <ElementContainer>
            <ToggleButtonGroup options={selectedOptions} defaultItem={selectedOptions[0]} onSelect={action('clicked')}>
            </ToggleButtonGroup>
          </ElementContainer>
        </div>
      </AAAPrimaryTheme>
    )
  })

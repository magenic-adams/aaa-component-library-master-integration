/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

// Components
import { AAAPrimaryTheme, SelectList } from '../src/lib/components';

// Internal
import { ElementContainer } from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Atomic|SelectList', module);
const items = [
  { id: 1, value: 1, display: 'First Item' },
  { id: 2, value: 2, display: 'Second Item' },
  { id: 3, value: 3, display: 'Third Item ' },
  { id: 4, value: 4, display: '4th Item' },
  { id: 5, value: 5, display: '5th Item' },
  { id: 6, value: 6, display: '6th item' },
  { id: 7, value: 7, display: '7th Item' },
];

stories.add('Usage and States', () => {
  return (
    <AAAPrimaryTheme>
      <div>
        <h3>Base component for Dropdown or RadioGroup</h3>
        <h2>Usage</h2>
        <h3>When to use</h3>
        <ul>
          <li>To pick one option from a a set of choices.</li>
          <li>
            When options are dynamically generated (meaning the choices can vary
            in numbers from 4 or more)
          </li>
        </ul>
        <h3>Don’t use</h3>
        <ul>
          <li>If the choices are not presetted.</li>
          <li>If multiple options can be chosen from the set of choices.</li>
        </ul>
        <br />
        <ElementContainer>
          <SelectList
            type="primary"
            items={items}
            onSelect={action('You selected:')}
          />
        </ElementContainer>
      </div>
    </AAAPrimaryTheme>
  );
});

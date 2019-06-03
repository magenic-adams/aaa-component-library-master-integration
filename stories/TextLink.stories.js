import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import {AAAPrimaryTheme, TextLink } from '../src/lib/components';

// Internal
import {ElementContainer} from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Atomic|Link', module);

stories
  .addDecorator(withKnobs)
  
  .add('text link', () => (
    <AAAPrimaryTheme>
    <div>
      <h2>Primary</h2>
      <div>
        <h4>Use primary link</h4>
        <ul>
          <li>when a primary submit action is needed on the form</li>
          <li>for an action to take to begin a new task</li>
          <li>for an action to specificy a new or next step in the process</li>
        </ul>
        <h4>DO NOT use a primary link</h4>
        <ul>
          <li>for a secondary action on the form</li>
          <li>for a guidance or little descriptive link</li>
        </ul>
      </div>
      <ElementContainer>
        <div>
          <TextLink className="primary" onClick={action('clicked')}>Primary</TextLink>
          <TextLink className="primary" disabled onClick={action('clicked')}>Primary disabled</TextLink>
        </div>
      </ElementContainer>
    </div>

    <h2>Secondary</h2>
    <div>
      <h4>Use secondary link</h4>
      <ul>
        <li>when the action is important but not the primary action on the page</li>
        <li>for a skip function paired with a primary link</li>
      </ul>
      <h4>DO NOT use a secondary link</h4>
      <ul>
        <li>as the primary action</li>
        <li>by itself. Always need to pair with primary link</li>
      </ul>
    </div>
    <ElementContainer>
      <div>
        <TextLink className="secondary" onClick={action('clicked')}>Secondary</TextLink>
        <TextLink className="secondary" disabled onClick={action('clicked')}>Secondary disabled</TextLink>
      </div>
    </ElementContainer>

  </AAAPrimaryTheme>
  )
)

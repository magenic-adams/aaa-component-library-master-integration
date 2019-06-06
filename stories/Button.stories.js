import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import {AAAPrimaryTheme, Button, ButtonGroup} from '../src/lib/components';

// Internal
import {ElementContainer} from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Atomic|Button', module);

stories
  .addDecorator(withKnobs)
  .add('dynamic button', () => {
    return (
      <AAAPrimaryTheme>
      <div>
        <h3>Tweak button settings below</h3>
        <ElementContainer>
          <Button onClick={action('clicked')}>{text('Button text', 'Change the text')}</Button>
        </ElementContainer>
      </div>
      </AAAPrimaryTheme>
    );
  })
  .add('all buttons', () => (
    <AAAPrimaryTheme>
      
      <div>
        <h2>Primary</h2>
        <div>
          <h4>Use primary button</h4>
          <ul>
            <li>when a primary submit action is needed on the form</li>
            <li>for an action to take to begin a new task</li>
            <li>for an action to specificy a new or next step in the process</li>
          </ul>
          <h4>DO NOT use a primary button</h4>
          <ul>
            <li>for a secondary action on the form</li>
            <li>for a guidance or little descriptive link</li>
          </ul>
        </div>
        <ElementContainer>
          <div className="u-flex--center">
            <ButtonGroup>
              <Button color="primary" onClick={action('clicked')}>Primary</Button>
              <Button color="primary" disabled onClick={action('clicked')}>Primary disabled</Button>
            </ButtonGroup>
          </div>
        </ElementContainer>
      </div>

      <h2>Secondary</h2>
      <div>
        <h4>Use secondary button</h4>
        <ul>
          <li>when the action is important but not the primary action on the page</li>
          <li>for a skip function paired with a primary button</li>
        </ul>
        <h4>DO NOT use a secondary button</h4>
        <ul>
          <li>as the primary action</li>
          <li>by itself. Always need to pair with primary button</li>
        </ul>
      </div>
      <ElementContainer>
        <div className="u-flex--center">
          <ButtonGroup>
            <Button color="secondary" onClick={action('clicked')}>Secondary</Button>
            <Button color="secondary" disabled onClick={action('clicked')}>Secondary disabled</Button>
          </ButtonGroup>
        </div>
      </ElementContainer>

    </AAAPrimaryTheme>
    )
  );

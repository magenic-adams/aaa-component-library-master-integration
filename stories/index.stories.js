import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

// Internal
import {Welcome} from '../src/lib/internal/Welcome';

// Components
import {Button} from '../src/lib/components';

storiesOf('Welcome|Storybook', module).add('Welcome description', () => <Welcome />);

const stories = storiesOf('Atomic|Button', module);

stories
  .addDecorator(withKnobs)
  .add('dynamic button', () => {
    return (
      <div>
        <h3>Tweak button settings below</h3>
        <Button onClick={action('clicked')}>{text('Button text', 'Change the text')}</Button>
      </div>
    )
  })
  .add('all buttons', () => (
    <div>
      <h3>Primary</h3>
      <Button onClick={action('clicked')}>Primary button</Button>
      <h3>Secondary</h3>
      <Button color="secondary" onClick={action('clicked')}>Secondary button</Button>
    </div>
    )
  )

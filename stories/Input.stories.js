import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import { AAAPrimaryTheme, Button, Input } from '../src/lib/components';

const stories = storiesOf('Atomic|Input', module);

stories
  .addDecorator(withKnobs)
  .add('input', () => {
    return (
      <div>
        <Input
          onChange={action('change')}
          labelName={text('Input label', 'Change the label')}
        />
      </div>
    )
  })
  .add('states', () => (
    <AAAPrimaryTheme>
      <div>
        <h2>ACTIVE STATE</h2>
        <Input id="enabledId" name="enabledName" labelName="Enabled Label" />
        <h2>DISABLED STATE</h2>
        <Input disabled id="disabledId" name="disabledName" helperText="Disabled" labelName="Disabled Label" />
        <h2>ERROR STATE</h2>
        <Input id="errorId" name="errorName" error helperText="Error" labelName="Error Label" errorText="Error text" />
      </div>
    </AAAPrimaryTheme>
  )
  )

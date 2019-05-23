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
        <Input id="enabledId" name="enabledName" labelName={text('Input label', 'Change the label')} type="text" onChange={action('change')} value="Enabled"  onClear={()=> {}}/>
      </div>
    )
  })
  .add('states', () => (
    <AAAPrimaryTheme>
      <div>
        <h2>ACTIVE STATE</h2>
        <Input id="enabledId" name="enabledName" labelName="Enabled Label" type="text" onChange={() => { }} value="Enabled"  onClear={()=> {}}/>
        <h2>DISABLED STATE</h2>
        <Input disabled id="disabledId" name="disabledName" type="text" onChange={() => { }} helperText="Disabled" labelName="Disabled Label" />
        <h2>ERROR STATE</h2>
        <Input error id="errorId" name="errorName" type="text" onChange={() => { }} helperText="Error" labelName="Error Label" errorText="Error text" value="Error" />
      </div>
    </AAAPrimaryTheme>
  )
  )

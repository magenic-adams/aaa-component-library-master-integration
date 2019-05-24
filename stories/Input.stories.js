import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import { AAAPrimaryTheme, Button, Input } from '../src/lib/components';

import { ElementContainer } from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Atomic|Input', module);

stories
  .addDecorator(withKnobs)
  .add('input', () => {
    return (
      <AAAPrimaryTheme>
        <ElementContainer>
          <div>
            <Input
              onChange={action('change')}
              labelName={text('Input label', 'Change the label')}
            />
            <Input id="enabledId" name="enabledName" labelName={text('Input label', 'Change the label')} type="text" onChange={action('change')} value="Enabled" onClear={() => { }} />
          </div>
        </ElementContainer>
      </AAAPrimaryTheme>
    )
  })
  .add('states', () => (
    <AAAPrimaryTheme>
      <h2 style={{ "text-align": "center" }}>ACTIVE STATE</h2>

      <ElementContainer>
        <div>
          <Input id="enabledId" name="enabledName" labelName="Enabled Label" type="text" onChange={() => { }} value="Enabled" onClear={() => { }} />
        </div>
      </ElementContainer>

      <h2 style={{ "text-align": "center" }}>DISABLED STATE</h2>

      <ElementContainer>
        <div>
        <Input disabled id="disabledId" name="disabledName" type="text" onChange={() => { }} helperText="Disabled" labelName="Disabled Label" value="Disabled" onClear={()=> {}} />
        </div>

      </ElementContainer>

      <h2 style={{ "text-align": "center" }}>ERROR STATE</h2>

      <ElementContainer>
        <div>
          <Input error id="errorId" name="errorName" type="text" onChange={() => { }} helperText="Error" labelName="Error Label" errorText="Error text" value="Error" onClear={() => { }} />
        </div>

      </ElementContainer>
    </AAAPrimaryTheme>
  )
  )

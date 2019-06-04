import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import '../src/css/helpers.css';

// Components
import { AAAPrimaryTheme, TextInput, NumericInput } from '../src/lib/components';

import { ElementContainer } from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Atomic|Input', module);

stories
  .addDecorator(withKnobs)
  .add('input', () => {
    return (
      <AAAPrimaryTheme>
        <ElementContainer>
          <TextInput 
          id="enabledId" 
          name="enabledName" 
          helperText="Helper Text" 
          labelName={text('Input label', 'Change the label')} 
          value="Enabled" 
          onBlur={action('blur')} 
          onChange={action('change')} 
          onClear={action('clear')} />
        </ElementContainer>

        <ElementContainer>
          <NumericInput 
          id="numericId" 
          name="numericName" 
          helperText="Numeric Helper Text" 
          labelName={text('Input label', 'Change the label')} 
          mask={[/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, /\d/, /\d/]}
          onBlur={action('blur')} 
          onChange={action('change')} 
          onClear={action('clear')}  
          />
        </ElementContainer>
      </AAAPrimaryTheme>
    )
  })
  .add('states', () => (
    <AAAPrimaryTheme>
      <h2 className='text-align-center'>ACTIVE STATE</h2>

      <ElementContainer>
        <TextInput 
        id="enabledId" 
        name="enabledName" 
        helperText="Enabled Helper Text" 
        labelName="Enabled Label" 
        value={"Enabled"} 
        onBlur={action('blur')} 
        onClear={action('clear')} 
        onChange={action('change')} />
      </ElementContainer>

      <h2 className='text-align-center'>DISABLED STATE</h2>

      <ElementContainer>
        <TextInput 
        disabled 
        id="disabledId" 
        helperText="Disabled Helper Text" 
        labelName="Disabled Label" 
        name="disabledName" 
        value={"Disabled"} 
        onChange={action('change')} 
        onClear={action('clear')} 
        onBlur={action('blur')} />
      </ElementContainer>

      <h2 className='text-align-center'>ERROR STATE</h2>

      <ElementContainer>
        <TextInput 
        error 
        errorText="Error text" 
        id="errorId" 
        helperText="Error Helper Text" 
        labelName="Error Label" 
        name="errorName" 
        value={"Error"} 
        onBlur={action('blur')} 
        onChange={action('change')} 
        onClear={action('clear')} />
      </ElementContainer>
    </AAAPrimaryTheme>
  )
  )

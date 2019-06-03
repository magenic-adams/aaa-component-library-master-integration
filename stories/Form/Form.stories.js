import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import {
  AAAPrimaryTheme,
  Button,
  Form,
  FormInput
} from '../../src/lib/components';

const stories = storiesOf('Molecules|Form', module);

function handleValidate(){
  console.log('calling to validate');
}

function handleSubmit(vals){
  console.log('calling to submit', vals);
}

stories
  .add('basic form', () => {
    return (
      <AAAPrimaryTheme>
        <div>
          <Form
            validate={handleValidate}
            onSubmit={handleSubmit}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
              <form>
                <FormInput 
                  name="firstName"
                  type="text"
                />
                <Button onClick={action('clicked')}>Submit</Button>
              </form>
            )}
          />
        </div>
      </AAAPrimaryTheme>
    )
  })

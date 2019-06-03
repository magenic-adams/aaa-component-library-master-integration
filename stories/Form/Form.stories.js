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

function handleValidate(values){
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  return errors;
}

function handleSubmit(vals){
  console.log('vals', vals);
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
              <form onSubmit={handleSubmit}>
                <FormInput 
                  name="firstName"
                  type="text"
                />
                <Button>Submit</Button>
              </form>
            )}
          />
        </div>
      </AAAPrimaryTheme>
    )
  })

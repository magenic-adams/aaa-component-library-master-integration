/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import {
  AAAPrimaryTheme,
  Button,
  Form,
  FormInput
} from '../../src/lib/components';

// Utilities
import Validate from '../../src/lib/utilities/validate';

const VALIDATIONS = {
  firstName: {
    required: 'First name is required',
    'max_length[24]': 'Too long. Do you have a nickname?',
    alpha_dash_dot_space: 'Name can only contain letters, dashes, periods, and spaces',
  },
};

function handleValidate(values){
  return Validate.validateForm(values, VALIDATIONS);
}

function onSubmit(vals){
  console.log('vals', vals);
  action(vals);
}

const stories = storiesOf('Molecules|Form', module);
stories
  .add('basic form', () => {
    return (
      <AAAPrimaryTheme>
        <div>
          <Form
            validate={handleValidate}
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <FormInput 
                  name="firstName"
                  type="text"
                />
                <Button onClick={handleSubmit}>Submit</Button>
              </form>
            )}
          />
        </div>
      </AAAPrimaryTheme>
    )
  })

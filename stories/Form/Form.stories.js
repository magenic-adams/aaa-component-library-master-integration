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

const stories = storiesOf('Molecules|Form', module);

function handleValidate(values){
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  return errors;
}

function onSubmit(vals){
  console.log('vals', vals);
  action(vals);
}

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

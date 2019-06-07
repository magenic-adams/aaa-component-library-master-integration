/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// MUI Components
import Paper from '@material-ui/core/Paper';

// Components
import {
  AAAPrimaryTheme,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
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
  password: {
    required: 'Password is required',
    'min_length[6]': 'Password must be at least 6 characters',
    'max_length[24]': 'Password should be under 24 characters.',
  },
  passwordConfirm: {
    required: 'Password confirmation is required',
    'matches[password]': 'This does not match',
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
        <div className="u-background--gray">
          <Paper className="u-padding--50">
              <Form
                validate={handleValidate}
                onSubmit={onSubmit}
                render={({ allFieldsHaveValues, handleSubmit, valid }) => {
                  console.log('allFieldsHaveValues', allFieldsHaveValues);
                  
                  return (
                    <form onSubmit={handleSubmit}>
                      <FormGroup>
                        <FormInput 
                          autoFocus
                          labelName="First name"
                          name="firstName"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormInput 
                          labelName="Password"
                          name="password"
                          type="password"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormInput 
                          labelName="Password Confirm"
                          name="passwordConfirm"
                          type="password"
                        />
                      </FormGroup>
                      <ButtonGroup>
                        <Button
                          disabled={!allFieldsHaveValues}
                          fadeUp={allFieldsHaveValues}
                          onClick={handleSubmit}
                        >Submit</Button>
                      </ButtonGroup>
                    </form>
                  );
                }
              }
              />
          </Paper>
        </div>
      </AAAPrimaryTheme>
    );
  });

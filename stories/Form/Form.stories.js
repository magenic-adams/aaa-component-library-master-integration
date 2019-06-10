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
  FormInput,
} from '../../src/lib/components';

const VALIDATIONS = {
  firstName: {
    required: 'First name is required',
    'max_length[24]': 'Too long. Do you have a nickname?',
    alpha_dash_dot_space: 'Name can only contain letters, dashes, periods, and spaces',
  },
  lastName: {
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

function handleFormValueSubmission(vals){
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
                validations={VALIDATIONS}
                onSubmit={handleFormValueSubmission}
                render={({ allFieldsHaveValues, handleSubmit }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <FormGroup>
                        <FormInput 
                          autoFocus
                          name="firstName"
                          id="firstName"
                          labelName="First name"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormInput 
                          name="lastName"
                          id="lastName"
                          autoFocus
                          labelName="Last name"
                          helperText="Not required"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormInput 
                          name="password"
                          id="password"
                          labelName="Password"
                          type="password"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormInput 
                          name="passwordConfirm"
                          id="passwordConfirm"
                          labelName="Password Confirm"
                          type="password"
                        />
                      </FormGroup>
                      <ButtonGroup>
                        <Button
                          disabled={!allFieldsHaveValues}
                          fadeUp={allFieldsHaveValues}
                          type="submit"
                        >
                          Submit
                        </Button>
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

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
  FormNumericInput,
} from '../../src/lib/package/components';

const VALIDATIONS = {
  firstName: {
    required: 'First name is required',
    'max_length[24]': 'Too long. Do you have a nickname?',
    alpha_dash_dot_space: 'Name can only contain letters, dashes, periods, and spaces',
  },
  lastName: {
    alpha_dash_dot_space: 'Name can only contain letters, dashes, periods, and spaces',
  },
  dob: {
    required: 'Date of birth is required',
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
                render={({ allRequiredFieldsHaveBeenVisited, handleSubmit }) => {
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
                          labelName="Last name"
                          helperText="Not required"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormNumericInput 
                          name="dob"
                          id="dob"
                          labelName="Date of birth"
                          mask={[/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, /\d/, /\d/]}
                          helperText="mm/dd/yyyy"
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
                          disabled={!allRequiredFieldsHaveBeenVisited}
                          fadeUp={allRequiredFieldsHaveBeenVisited}
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

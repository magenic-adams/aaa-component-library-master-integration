/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// MUI Components
import Paper from '@material-ui/core/Paper';

// Components
import {
  ACEPrimaryTheme,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  FormRadioGroup,
  FormSelectDropdown,
} from '../../src/lib/package/components';

const VALIDATIONS = {
  status: {
    required: 'Status is required',
  },
  cars: {
    required: '',
  },
};

const status = [
  { id: 0, value: 'P', display: 'Prefer not to answer' },
  { id: 1, value: 'S', display: 'Single' },
  { id: 2, value: 'M', display: 'Married' },
  { id: 3, value: 'A', display: 'Divorced' },
  { id: 4, value: 'C', display: 'Widowed' },
];

const cars = [
  { id: 1, value: 'Honda1', display: 'Honda' },
  { id: 2, value: 'Toyota2', display: 'Toyota' },
  { id: 3, value: 'Mitsubishi3', display: 'Mitsubishi' },
  { id: 4, value: 'Ford4', display: 'Ford' },
  { id: 5, value: 'Suzuki5', display: 'Suzuki' },
  { id: 6, value: 'Hyundai6', display: 'Hyundai' },
];

function handleFormValueSubmission(vals) {
  console.log('vals', vals);
  action(vals);
}

const stories = storiesOf('Molecules|Form', module);
stories.add('basic form - dropdown & radio group', () => {
  return (
    <ACEPrimaryTheme>
      <div className="u-background--gray">
        <Paper className="u-padding--50">
          <Form
            validations={VALIDATIONS}
            onSubmit={handleFormValueSubmission}
            render={({
              allRequiredFieldsHaveBeenVisitedOrHaveValues,
              handleSubmit,
            }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormSelectDropdown
                      id="status"
                      items={status}
                      initialValue=""
                      label="Status"
                      placeHolder="Select one"
                      helperText="Choose one above"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormRadioGroup
                      id="cars"
                      items={cars}
                      instructionLabel="Choose one"
                    />
                  </FormGroup>
                  <ButtonGroup>
                    <Button
                      disabled={!allRequiredFieldsHaveBeenVisitedOrHaveValues}
                      fadeUp={allRequiredFieldsHaveBeenVisitedOrHaveValues}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </ButtonGroup>
                </form>
              );
            }}
          />
        </Paper>
      </div>
    </ACEPrimaryTheme>
  );
});

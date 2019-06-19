/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
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
  FormInput,
  FormGroup,
  FormRadioGroup,
  RadioGroup,
} from '../../src/lib/package/components';

const VALIDATIONS = {
  // firstName: {
  //   required: 'First name is required',
  // },
  cars: {
    required: '',
  },
};

const cars = [
  { id: 1, value: 1, text: 'Honda' },
  { id: 2, value: 2, text: 'Toyota' },
  { id: 3, value: 3, text: 'Mitsubishi' },
  { id: 4, value: 4, text: 'Ford' },
  { id: 5, value: 5, text: 'Suzuki' },
  { id: 6, value: 6, text: 'Chev' },
];

function handleFormValueSubmission(vals) {
  action(vals);
}

class FormRadioGroupContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedIds: [] };
  }

  handleSelect = selectedItem => {
    const { selectedIds } = this.state;
    this.setState({
      selectedId: selectedItem.id,
      selectedIds: [...selectedIds, selectedItem.id],
    });
  };

  render() {
    const { selectedId, selectedIds } = this.state;
    const { items } = this.props;
    return (
      <AAAPrimaryTheme>
        <div className="u-background--gray">
          <Paper className="u-padding--50">
            <Form
              validations={VALIDATIONS}
              onSubmit={handleFormValueSubmission}
              render={({
                allRequiredFieldsHaveBeenVisited,
                invalid,
                handleSubmit,
                values,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
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
                      <FormRadioGroup
                        type="multi-select"
                        name="cars"
                        id="cars"
                        instructionLabel="Choose One:"
                        items={items}
                        selectedIds={selectedIds}
                        onSelect={this.handleSelect}
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
              }}
            />
          </Paper>
        </div>
      </AAAPrimaryTheme>
    );
  }
}

const stories = storiesOf('Molecules|Form', module);
stories.add('form radio group', () => {
  return <FormRadioGroupContainer items={cars} />;
});

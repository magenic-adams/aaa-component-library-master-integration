/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// MUI Components
import Paper from '@material-ui/core/Paper';

import { AAAPrimaryTheme, RadioGroup } from '../src/lib/package/components';

const cars = [
  { id: 1, value: 1, display: 'Honda' },
  { id: 2, value: 2, display: 'Toyota' },
  { id: 3, value: 3, display: 'Mitsubishi' },
  { id: 4, value: 4, display: 'Ford' },
  { id: 5, value: 5, display: 'Suzuki' },
  { id: 6, value: 6, display: 'Chev' },
];

class RadioGroupContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedId: null };
  }

  handleSelect = item => {
    this.setState({
      selectedId: item.id,
    });
  };

  render() {
    const { selectedId } = this.state;
    const { items } = this.props;
    return (
      <AAAPrimaryTheme>
        <div className="u-background--gray">
          <Paper className="u-padding--50">
            <RadioGroup
              id="cars"
              instructionLabel="Choose One:"
              items={items}
              selectedId={selectedId}
              onSelect={this.handleSelect}
            />
          </Paper>
        </div>
      </AAAPrimaryTheme>
    );
  }
}

const stories = storiesOf('Molecules|Radio Group', module);
stories.add('Radio group', () => {
  return <RadioGroupContainer items={cars} />;
});

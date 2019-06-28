/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

// Components
import {
  AAAPrimaryTheme,
  RadioGroup,
  Subheadline,
  Subtitle,
} from '../src/lib/package/components';

import StoryIntroduction from '../src/lib/internal/StoryIntroduction/StoryIntroduction';

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

    this.state = { selectedId: null, selectedIds: [] };
  }

  handleSingleSelect = item => {
    this.setState({
      selectedId: item.id,
    });
  };

  handleMultiSelect = item => {
    const { selectedIds } = this.state;
    this.setState({
      selectedIds: [...selectedIds, item.id],
    });
  };

  render() {
    const { selectedId, selectedIds } = this.state;
    const { items } = this.props;
    return (
      <AAAPrimaryTheme>
        <div className="u-padding--50">
          <StoryIntroduction elementName="Single-Select/Multi-Select RadioGroup" />
        </div>
        <div className="u-padding--50">
          <Subtitle>States</Subtitle>
          <br />
          <Subheadline>Enabled State</Subheadline>
          <br />
          <div className="u-background--gray">
            <RadioGroup
              id="cars"
              instructionLabel="Choose One:"
              items={items}
              selectedId={selectedId}
              onSelect={this.handleSingleSelect}
            />
          </div>
          <br />
          <Subheadline>Disabled State</Subheadline>
          <br />
          <div className="u-background--gray">
            <RadioGroup
              id="cars"
              instructionLabel="Choose One:"
              items={items}
              selectedId={selectedId}
              onSelect={this.handleSingleSelect}
              disableAll
            />
          </div>
          <br />
          <Subheadline>Multi-select</Subheadline>
          <br />
          <div className="u-background--gray">
            <RadioGroup
              type="multi-select"
              id="cars"
              instructionLabel="Choose here:"
              items={items}
              selectedIds={selectedIds}
              onSelect={this.handleMultiSelect}
            />
          </div>
        </div>
      </AAAPrimaryTheme>
    );
  }
}

const stories = storiesOf('Molecules|Radio Group', module);
stories.add('Usage and States', () => {
  return <RadioGroupContainer items={cars} />;
});

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import {
  ACEPrimaryTheme,
  SelectDropdown,
  Subtitle,
  Subheadline,
} from '../src/lib/package/components';
import { demo, scope } from '../src/lib/internal/live_demos/SelectDropdown';

import ElementContainer from '../src/lib/internal/ElementContainer/ElementContainer';
import StoryIntroduction from '../src/lib/internal/StoryIntroduction/StoryIntroduction';
import StoryLayoutContainer from '../src/lib/internal/StoryLayoutContainer/StoryLayoutContainer';
import StoryUsageDescription from '../src/lib/internal/StoryUsageDescription/StoryUsageDescription';
import StoryCodePlayground from '../src/lib/internal/StoryCodePlayground/StoryCodePlayground';
import { StorySectionHeader } from '../src/lib/internal/StorySectionHeader/StorySectionHeader';

const status = [
  { id: 1, value: 'S', display: 'Single' },
  { id: 2, value: 'M', display: 'Married' },
  { id: 3, value: 'A', display: 'Divorced' },
  { id: 4, value: 'C', display: 'Widowed' },
];

const id = 'status';
function SelectDropdownContainer({ disabled, error }) {
  const [values, setValues] = React.useState({
    status: '',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <SelectDropdown
      id={id}
      items={status}
      onChange={handleChange}
      value={values.status}
      label="Status"
      placeHolder="Select one"
      helperText="Choose one above"
      error={error}
      disabled={disabled}
    />
  );
}

const stories = storiesOf('Atomic|Single-select - Dropdown', module);
stories.addDecorator(withKnobs).add('Usage and States', () => {
  return (
    <ACEPrimaryTheme>
      <StoryLayoutContainer>
        <StoryIntroduction elementName="Single-select Dropdown" />
      </StoryLayoutContainer>
      <StoryLayoutContainer>
        <StoryUsageDescription
          positive
          usageText="Dropdown Usage"
          items={[
            'to pick one option from a a set of choices',
            'when options are dynamically generated (meaning the choices can vary in numbers from 4 or more)',
          ]}
        />
      </StoryLayoutContainer>
      <StoryLayoutContainer>
        <StoryUsageDescription
          positive={false}
          usageText="Dropdown DON'Ts"
          items={[
            'if the choices are not presetted',
            'if multiple options can be chosen from the set of choices.',
          ]}
        />
      </StoryLayoutContainer>
      <div className="u-padding--50">
        <Subtitle>States</Subtitle>
        <Subheadline>Enabled State</Subheadline>
      </div>
      <ElementContainer>
        <SelectDropdownContainer items={status} />
      </ElementContainer>
      <div className="u-padding--50">
        <Subtitle>States</Subtitle>
        <Subheadline>Disabled State</Subheadline>
      </div>
      <ElementContainer>
        <SelectDropdownContainer items={status} disabled />
      </ElementContainer>
      <div className="u-padding--50">
        <Subtitle>States</Subtitle>
        <Subheadline>Error State</Subheadline>
      </div>
      <ElementContainer>
        <SelectDropdownContainer
          items={status}
          error="This is a required field"
        />
      </ElementContainer>
      <StoryLayoutContainer>
        <StorySectionHeader title="Code examples" />
        <StoryCodePlayground demo={demo} scope={scope} />
      </StoryLayoutContainer>
    </ACEPrimaryTheme>
  );
});

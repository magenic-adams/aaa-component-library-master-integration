/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

// Components
import { ACEPrimaryTheme, SelectList } from '../src/lib/package/components';
import { demo, scope } from '../src/lib/internal/live_demos/SelectList';

// Internal
import StoryIntroduction from '../src/lib/internal/StoryIntroduction/StoryIntroduction';
import StoryCodePlayground from '../src/lib/internal/StoryCodePlayground/StoryCodePlayground';
import StoryLayoutContainer from '../src/lib/internal/StoryLayoutContainer/StoryLayoutContainer';
import StoryUsageDescription from '../src/lib/internal/StoryUsageDescription/StoryUsageDescription';
import { StorySectionHeader } from '../src/lib/internal/StorySectionHeader/StorySectionHeader';
import ElementContainer from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Atomic|SelectList', module);
const items = [
  { id: 1, value: 1, display: 'First Item' },
  { id: 2, value: 2, display: 'Second Item' },
  { id: 3, value: 3, display: 'Third Item ' },
  { id: 4, value: 4, display: '4th Item' },
  { id: 5, value: 5, display: '5th Item' },
  { id: 6, value: 6, display: '6th item' },
  { id: 7, value: 7, display: '7th Item' },
];

stories.add('Usage and States', () => {
  return (
    <ACEPrimaryTheme>
      <StoryLayoutContainer>
        <StoryIntroduction
          elementName="SelectList"
          subtitle="Base element for Dropdown or RadioGroup"
        />
      </StoryLayoutContainer>
      
      <StoryLayoutContainer>
        <StoryUsageDescription
          positive
          usageText="SelectList usage"
          items={[
            'To pick one option from a a set of choices.',
            'When options are dynamically generated (meaning the choices can vary in numbers from 4 or more)',
          ]}
        />

        <StoryUsageDescription
          positive={false}
          usageText="SelectList DON'Ts"
          items={[
            'If the choices are not preset.',
            'If multiple options can be chosen from the set of choices.',
          ]}
        />
      </StoryLayoutContainer>

      <ElementContainer>
        <SelectList
          type="primary"
          items={items}
          onSelect={action('You selected:')}
        />
      </ElementContainer>

      <StoryLayoutContainer>
        <StorySectionHeader title="Code examples" />
        <StoryCodePlayground demo={demo} scope={scope} />
      </StoryLayoutContainer>
    </ACEPrimaryTheme>
  );
});

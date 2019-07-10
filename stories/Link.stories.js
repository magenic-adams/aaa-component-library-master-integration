/* eslint-disable import/named */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

// Components
import { ACEPrimaryTheme, Link as TextLink } from '../src/lib/package/components';

// Internal
// Internal
import ElementContainer from '../src/lib/internal/ElementContainer/ElementContainer';
import StoryIntroduction from '../src/lib/internal/StoryIntroduction/StoryIntroduction';
import StoryLayoutContainer from '../src/lib/internal/StoryLayoutContainer/StoryLayoutContainer';
import StoryUsageDescription from '../src/lib/internal/StoryUsageDescription/StoryUsageDescription';

const stories = storiesOf('Atomic|Link', module);

stories
  .addDecorator(withKnobs)
  
  .add('text link', () => (
    <ACEPrimaryTheme>
      <StoryLayoutContainer>
        <StoryIntroduction
          elementName="Link"
          subtitle="Primary and Secondary"
        />
      </StoryLayoutContainer>

      <StoryLayoutContainer>
        <StoryUsageDescription
          positive
          usageText="Primary Link usage"
          items={[
            'when a primary submit action is needed on the form',
            'for an action to take to begin a new task',
            'for an action to specificy a new or next step in the process',
          ]}
        />

        <StoryUsageDescription
          positive={false}
          usageText="Primary Link DON'Ts"
          items={[
            'for a secondary action on the form',
            'for a guidance or little descriptive link',
          ]}
        />
      </StoryLayoutContainer>

      <ElementContainer>
        <div>
          <TextLink
            className="primary"
            onClick={action('clicked')}
          >
              Primary
          </TextLink>
        </div>
      </ElementContainer>

      <div className="u-mt--50">
        <StoryLayoutContainer>
          <StoryUsageDescription
            positive
            usageText="Secondary Link usage"
            items={[
              'when the action is important but not the primary action on the page',
              'for a skip function paired with a primary link',
            ]}
          />

          <StoryUsageDescription
            positive={false}
            usageText="Secondary Link DON'Ts"
            items={[
              'as the primary action',
              'by itself. Always need to pair with primary link',
            ]}
          />
        </StoryLayoutContainer>
      </div>
      <ElementContainer>
        <div>
          <TextLink className="secondary" onClick={action('clicked')}>Secondary</TextLink>
        </div>
      </ElementContainer>

    </ACEPrimaryTheme>
  )
);

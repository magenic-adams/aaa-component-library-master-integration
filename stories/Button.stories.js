import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

// Components
import {
  AAAPrimaryTheme,
  Button,
  ButtonGroup,
} from '../src/lib/package/components';
import { demo, scope } from '../src/lib/internal/live_demos/Button';

// Internal
import ElementContainer from '../src/lib/internal/ElementContainer/ElementContainer';
import StoryIntroduction from '../src/lib/internal/StoryIntroduction/StoryIntroduction';
import StoryLayoutContainer from '../src/lib/internal/StoryLayoutContainer/StoryLayoutContainer';
import StoryUsageDescription from '../src/lib/internal/StoryUsageDescription/StoryUsageDescription';
import StorySectionHeader from '../src/lib/internal/StorySectionHeader/StorySectionHeader';
import StoryCodePlayground from '../src/lib/internal/StoryCodePlayground/StoryCodePlayground';

console.log('ElementContainer', ElementContainer);

const stories = storiesOf('Atomic|Button', module);

stories
  .addDecorator(withKnobs)
  .add('primary and secondary', () => (
    <AAAPrimaryTheme>
      <StoryLayoutContainer>
        <StoryIntroduction
          elementName="Button"
          subtitle="Primary and Secondary"
        />
      </StoryLayoutContainer>
      
      <StoryLayoutContainer>
        <StoryUsageDescription
          positive
          usageText="Primary Button usage"
          items={[
            'when a primary submit action is needed on the form',
            'for an action to take to begin a new task',
            'for an action to specificy a new or next step in the process',
          ]}
        />

        <StoryUsageDescription
          positive={false}
          usageText="Primary Button DON'Ts"
          items={[
            'for a secondary action on the form',
            'for a guidance or little descriptive link',
          ]}
        />
      </StoryLayoutContainer>
      
      <ElementContainer>
        <div className="u-flex--center">
          <ButtonGroup>
            <Button color="primary" onClick={action('clicked')}>Primary</Button>
            <Button color="primary" disabled onClick={action('clicked')}>Primary disabled</Button>
          </ButtonGroup>
        </div>
      </ElementContainer>

      <div className="u-mt--50">
        <StoryLayoutContainer>
          <StoryUsageDescription
            positive
            usageText="Secondary Button usage"
            items={[
              'when the action is important but not the primary action on the page',
              'for a skip function paired with a primary button',
            ]}
          />

          <StoryUsageDescription
            positive={false}
            usageText="Secondary Button DON'Ts"
            items={[
              'as the primary action',
              'by itself. Always need to pair with primary button',
            ]}
          />
        </StoryLayoutContainer>
      </div>
      <ElementContainer>
        <div className="u-flex--center">
          <ButtonGroup>
            <Button color="secondary" onClick={action('clicked')}>Secondary</Button>
            <Button color="secondary" disabled onClick={action('clicked')}>Secondary disabled</Button>
          </ButtonGroup>
        </div>
      </ElementContainer>

      <StoryLayoutContainer>
        <StorySectionHeader title="Code examples" />
        <StoryCodePlayground demo={demo} scope={scope} />
      </StoryLayoutContainer>

    </AAAPrimaryTheme>
  ));

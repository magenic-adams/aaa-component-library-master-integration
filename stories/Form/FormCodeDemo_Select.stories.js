/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

// React-Live Editor Components
import StoryLayoutContainer from '../../src/lib/internal/StoryLayoutContainer/StoryLayoutContainer';
import StoryCodePlayground from '../../src/lib/internal/StoryCodePlayground/StoryCodePlayground';

// Components
import {
  demo,
  scope,
} from '../../src/lib/internal/live_demos/FormWithSelection';

const stories = storiesOf('Molecules|Form', module);
stories.add('basic form - dropdown & radio group + code demo', () => {
  return (
    <StoryLayoutContainer>
      <StoryCodePlayground demo={demo} scope={scope} />
    </StoryLayoutContainer>
  );
});

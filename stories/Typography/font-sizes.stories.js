import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import { AAAPrimaryTheme } from '../../src/lib/components';
import Headline from '../../src/lib/components/Headline/Headline'

// Internal
// import {ElementContainer} from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Atomic|Typography', module);

stories
  .add('Text sizes', () => (
    <AAAPrimaryTheme>
      <div>
        <Headline>
          What looked like a small patch of purple grass, above five feet square,
          was moving across the sand in their direction. When it came near enough
          he perceived that it was not grass; there were no blades, but only purple roots.
        </Headline>
      </div>
    </AAAPrimaryTheme>
  ))

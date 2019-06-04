import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import { AAAPrimaryTheme } from '../../src/lib/components';
import Headline from '../../src/lib/components/Headline/Headline'
import Subheadline from '../../src/lib/components/Subheadline/Subheadline'
import Subtitle from '../../src/lib/components/Subtitle/Subtitle'
import Body from '../../src/lib/components/Body/Body'

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

        <Subheadline>
          The screen shot below shows a section of a news page containing two columns
          and three rows of news story headlines.  There is a picture and headline text
          for each item.
        </Subheadline>

        <Subtitle>
          The screen shot below shows a section of a news page containing two columns
          and three rows of news story headlines.  There is a picture and headline text
          for each item.
        </Subtitle>

        <Body>
          The screen shot below shows a section of a news page containing two columns
          and three rows of news story headlines.  There is a picture and headline text
          for each item.
        </Body>

        <Body secondary>
          The screen shot below shows a section of a news page containing two columns
          and three rows of news story headlines.  There is a picture and headline text
          for each item.
        </Body>
      </div>
    </AAAPrimaryTheme>
  ))

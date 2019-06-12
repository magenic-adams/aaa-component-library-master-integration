import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import { AAAPrimaryTheme } from '../../src/lib/package/components';
import Headline from '../../src/lib/package/components/Headline/Headline';
import Subheadline from '../../src/lib/package/components/Subheadline/Subheadline';
import Subtitle from '../../src/lib/package/components/Subtitle/Subtitle';
import Body from '../../src/lib/package/components/Body/Body';

// Internal
import { StoryLayoutContainer } from '../../src/lib/internal/StoryLayoutContainer/StoryLayoutContainer';
import { StoryIntroduction } from '../../src/lib/internal/StoryIntroduction/StoryIntroduction';
import { TypographyContainer } from '../../src/lib/internal/Typography/TypographyContainer';

const stories = storiesOf('Atomic|Typography', module);

stories
  .add('Text sizes', () => (
    <AAAPrimaryTheme>
      <StoryLayoutContainer>
        <StoryIntroduction
          elementName="Typography"
        />
        <TypographyContainer
          name={(
            <Headline>
              Headline
            </Headline>
          )}
          description="Roboto Medium 20px ; 30px line-spacing(1.5)"
          usage={(
            <Headline>
              What looked like a small patch of purple grass, above five feet square,
              was moving across the sand in their direction. When it came near enough
              he perceived that it was not grass; there were no blades, but only purple roots.
            </Headline>
          )}
        />
        
        <TypographyContainer
          name={(
            <Subheadline>
              Subheadline
            </Subheadline>
          )}
          description="Roboto Regular 18px ; 26px line-spacing(1.45)"
          usage={(
            <Subheadline>
              The screen shot below shows a section of a news page containing two columns
              and three rows of news story headlines.  There is a picture and headline text
              for each item.
            </Subheadline>
          )}
        />

        <TypographyContainer
          name={(
            <Subtitle>
              <span>Subtitle / </span><br/><span>Primary copy + Table header</span>
            </Subtitle>
          )}
          description="Roboto Medium 16px ; 24px line-spacing(1.5)"
          usage={(
            <Subtitle>
              The screen shot below shows a section of a news page containing two columns
              and three rows of news story headlines.  There is a picture and headline text
              for each item.
            </Subtitle>
          )}
        />

        <TypographyContainer
          name={(
            <Body>
              <span>Body 1 / </span><br/><span>Primary copy + Label</span>
            </Body>
          )}
          description="Roboto Regular 16px ; 24px line-spacing(1.5)"
          usage={(
            <Body>
              The screen shot below shows a section of a news page containing two columns
              and three rows of news story headlines.  There is a picture and headline text
              for each item.
            </Body>
          )}
        />

        <TypographyContainer
          name={(
            <Body>
              Body 2 / Secondary copy
            </Body>
          )}
          description="Roboto Regular 14px ; 20px line-spacing(1.45)"
          usage={(
            <Body secondary>
              The screen shot below shows a section of a news page containing two columns
              and three rows of news story headlines.  There is a picture and headline text
              for each item.
            </Body>
          )}
        />
      </StoryLayoutContainer>
    </AAAPrimaryTheme>
  ));

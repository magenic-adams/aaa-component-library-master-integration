import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import { AAAPrimaryTheme } from '../../src/lib/package/components';
import Headline from '../../src/lib/package/components/Headline/Headline';
import Subheadline from '../../src/lib/package/components/Subheadline/Subheadline';
import Subtitle from '../../src/lib/package/components/Subtitle/Subtitle';
import Body from '../../src/lib/package/components/Body/Body';

// Internal
import StoryLayoutContainer from '../../src/lib/internal/StoryLayoutContainer/StoryLayoutContainer';
import StoryIntroduction from '../../src/lib/internal/StoryIntroduction/StoryIntroduction';
import TypographyContainer from '../../src/lib/internal/Typography/TypographyContainer';

// CodePlayground Demos
import { demo as headlineDemo, scope as headlineScope } from '../../src/lib/internal/live_demos/Headline';
import { demo as subheadlineDemo, scope as subheadlineScope } from '../../src/lib/internal/live_demos/Subheadline';
import { demo as subtitleDemo, scope as subtitleScope } from '../../src/lib/internal/live_demos/Subtitle';
import { demo as bodyOneDemo, scope as bodyOneScope } from '../../src/lib/internal/live_demos/BodyOne';
import { demo as bodyTwoDemo, scope as bodyTwoScope } from '../../src/lib/internal/live_demos/BodyTwo';

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
          description={(
            <span>
              <span>Desktop: Roboto Medium 28px ; 44px line-spacing(1.57)</span>
              <br/>
              <span>Mobile: Roboto Medium 20px ; 30px line-spacing(1.5)</span>
            </span>
          )}
          usage={(
            <Headline>
              What looked like a small patch of purple grass, above five feet square,
              was moving across the sand in their direction. When it came near enough
              he perceived that it was not grass; there were no blades, but only purple roots.
            </Headline>
          )}
          demo={headlineDemo}
          scope={headlineScope}
        />
        
        <TypographyContainer
          name={(
            <Subheadline>
              Subheadline
            </Subheadline>
          )}
          description={(
            <span>
              <span>Desktop: Roboto Regular 22px ; 32px line-spacing(1.45)</span>
              <br/>
              <span>Mobile: Roboto Regular 18px ; 26px line-spacing(1.45)</span>
            </span>
          )}
          usage={(
            <Subheadline>
              The screen shot below shows a section of a news page containing two columns
              and three rows of news story headlines.  There is a picture and headline text
              for each item.
            </Subheadline>
          )}
          demo={subheadlineDemo}
          scope={subheadlineScope}
        />

        <TypographyContainer
          name={(
            <Subtitle>
              <span>Subtitle / </span><br/><span>Primary copy + Table header</span>
            </Subtitle>
          )}
          description={(
            <span>
              <span>Desktop: Roboto Medium 18px ; 26px line-spacing(1.45)</span>
              <br/>
              <span>Mobile: Roboto Medium 16px ; 24px line-spacing(1.5)</span>
            </span>
          )}
          usage={(
            <Subtitle>
              The screen shot below shows a section of a news page containing two columns
              and three rows of news story headlines.  There is a picture and headline text
              for each item.
            </Subtitle>
          )}
          demo={subtitleDemo}
          scope={subtitleScope}
        />

        <TypographyContainer
          name={(
            <Body>
              <span>Body 1 / </span><br/><span>Primary copy + Label</span>
            </Body>
          )}
          description={(
            <span>
              <span>Desktop: Roboto Regular 18px ; 26px line-spacing(1.45)</span>
              <br/>
              <span>Mobile: Roboto Regular 16px ; 24px line-spacing(1.5)</span>
            </span>
          )}
          usage={(
            <Body>
              The screen shot below shows a section of a news page containing two columns
              and three rows of news story headlines.  There is a picture and headline text
              for each item.
            </Body>
          )}
          demo={bodyOneDemo}
          scope={bodyOneScope}
        />

        <TypographyContainer
          name={(
            <Body secondary>
              Body 2 / Secondary copy
            </Body>
          )}
          description={(
            <span>
              <span>Desktop: Roboto Regular 16px ; 24px line-spacing(1.5)</span>
              <br/>
              <span>Mobile: Roboto Regular 14px ; 20px line-spacing(1.45)</span>
            </span>
          )}
          usage={(
            <Body secondary>
              The screen shot below shows a section of a news page containing two columns
              and three rows of news story headlines.  There is a picture and headline text
              for each item.
            </Body>
          )}
          demo={bodyTwoDemo}
          scope={bodyTwoScope}
        />
      </StoryLayoutContainer>
    </AAAPrimaryTheme>
  ));

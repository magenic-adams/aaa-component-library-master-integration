import React from 'react';

import StoryIntroduction from './StoryIntroduction/StoryIntroduction';
import { AAAPrimaryTheme, Body } from '../package/components';

function Welcome(){
  return (
    <AAAPrimaryTheme>
      <div className="u-padding--50">
        <StoryIntroduction elementName="Welcome to storybook"></StoryIntroduction>
        <div className="u-mt--20">
          <Body>This is a UI component dev environment for your app.</Body>
        </div>
        <div className="u-mt--20">
          <Body>We&apos;ve added some basic stories inside the src/stories directory.</Body>
        </div>
        <div className="u-mt--20">
          <Body>A story is a single state of one or more UI components. You can have as many stories as you want. (Basically a story is like a visual test case.)</Body>
        </div>
        <div className="u-mt--20">
          <Body>See these sample stories for a component called <b>Button</b>.</Body>
        </div>
      </div>
    </AAAPrimaryTheme>
  );
}

export default Welcome;

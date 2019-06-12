import React from 'react';

// React-Live Editor Components
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import theme from '../live_demos/theme';

// CSS
import './StoryCodePlayground.css';

type propTypes = {
  demo: {},
  scope: {},
};

export function StoryCodePlayground({ demo, scope }:propTypes){
  return (
    <div className="StoryCodePlayground">
      <LiveProvider
          code={demo}
          scope={scope}
          theme={theme}
        >
          <div className="u-flex">
            <div className="u-padding--20">
              <LivePreview />
            </div>
            <div className="u-flex--1">
              <LiveEditor />
              <LiveError />
            </div>
          </div>
        </LiveProvider>
    </div>
  );
}

export default {
  StoryCodePlayground,
};

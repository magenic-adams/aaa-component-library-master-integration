/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

// React-Live Editor Components
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';

import theme from '../../src/lib/internal/live_demos/theme';

// Components
import { demo, scope } from '../../src/lib/internal/live_demos/Form';


const stories = storiesOf('Molecules|Form', module);
stories
  .add('basic form + code demo', () => {
    return (
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
    );
  });

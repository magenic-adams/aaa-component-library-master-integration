import React from 'react';
import { storiesOf } from '@storybook/react';

// Global CSS
// NOTE: This might not be the best place to put it, but for now this is ok
import '../src/css/helpers.css';
import '../src/css/reset.css';

// Internal
import { Welcome } from '../src/lib/internal/Welcome';

storiesOf('Welcome|Storybook', module).add('Welcome description', () => <Welcome />);

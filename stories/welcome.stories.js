import React from 'react';
import { storiesOf } from '@storybook/react';

// Internal
import {Welcome} from '../src/lib/internal/Welcome';

storiesOf('Welcome|Storybook', module).add('Welcome description', () => <Welcome />);

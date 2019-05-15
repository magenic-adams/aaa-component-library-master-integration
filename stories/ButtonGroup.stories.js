import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import {AAAPrimaryTheme, Button, ButtonGroup} from '../src/lib/components';
const stories = storiesOf('Molecules|ButtonGroup', module);

stories
  .add('primary and secondary', () => {
    return (
      <AAAPrimaryTheme>
        <h2>Use of button groups</h2>
        <ButtonGroup>
          <Button>Primary</Button>
          <Button color="secondary">Secondary</Button>
        </ButtonGroup>
      </AAAPrimaryTheme>
    )
  })

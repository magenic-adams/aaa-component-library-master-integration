import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import {AAAPrimaryTheme, Button, ButtonGroup} from '../src/lib/components';
import {ElementContainer} from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Molecules|ButtonGroup', module);
stories
  .add('primary and secondary', () => {
    return (
      <AAAPrimaryTheme>
        <h2>Use of button groups</h2>
        <ElementContainer>
          <ButtonGroup>
            <Button>Primary</Button>
            <Button color="secondary">Secondary</Button>
          </ButtonGroup>
        </ElementContainer>
      </AAAPrimaryTheme>
    )
  })

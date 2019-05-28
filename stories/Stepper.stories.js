import React from 'react';
import { storiesOf } from '@storybook/react';

import { AAAPrimaryTheme } from '../src/lib/components';
import NumericalStepper from '../src/lib/components/Stepper/NumericalStepper';

// Internal
import { ElementContainer } from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Molecules|Stepper', module);
stories.add('Numerical Stepper', () => {
  return (
    <AAAPrimaryTheme>
      <ElementContainer>
        <NumericalStepper
          labelText='This is a numerical stepper'
          errorText='This is an error message'
          error
        />
      </ElementContainer>
    </AAAPrimaryTheme>
  );
});

import React from 'react';
import { storiesOf } from '@storybook/react';

import { AAAPrimaryTheme } from '../src/lib/components';
import NumericalStepper from '../src/lib/components/Stepper/NumericalStepper';

// Internal
import { ElementContainer } from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Molecules|Stepper', module);
stories.add('numerical ', () => {
  return (
    <AAAPrimaryTheme>
      <h2>Numerical Stepper with Helper Text</h2>
      <ElementContainer>
        <NumericalStepper
          labelText="This is a numerical stepper"
          helpText="This is a helper message"
        />
      </ElementContainer>
      <h2>Numerical Stepper with Error Text</h2>
      <ElementContainer>
        <NumericalStepper
          labelText="This is a numerical stepper"
          helpText="This is an error text"
          error
        />
      </ElementContainer>
    </AAAPrimaryTheme>
  );
});

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { AAAPrimaryTheme } from '../src/lib/components';
import NumericalStepper from '../src/lib/components/Stepper/NumericalStepper';
// Internal
import { ElementContainer } from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Molecules|Stepper', module);

stories.add('numerical ', () => {
  return (
    <AAAPrimaryTheme>
      <div style={{ textAlign: 'center' }}>
        <h2>Numerical Stepper with Helper Text</h2>
      </div>
      <br />
      <ElementContainer>
        <NumericalStepper
          id="1"
          labelText="This is a numerical stepper"
          helpText="This is a helper message"
          inputText="10"
          onIncrease={action('Button increase responded.')}
          onDecrease={action('Button decrease responded.')}
        />
      </ElementContainer>
      <br />
      <div style={{ textAlign: 'center' }}>
        <h2>Numerical Stepper with Error Text</h2>
      </div>
      <ElementContainer>
        <NumericalStepper
          id="2"
          labelText="This is a numerical stepper"
          errorText="This is an error text"
          helpText="This is a helper text"
          inputText="SDFSdss"
          error
        />
      </ElementContainer>
      <br />
      <div style={{ textAlign: 'center' }}>
        <h2>Numerical Stepper in Disabled state</h2>
      </div>
      <ElementContainer>
        <NumericalStepper
          id="3"
          labelText="This is a numerical stepper"
          helpText="This is a helper message"
          disabled
        />
      </ElementContainer>
    </AAAPrimaryTheme>
  );
});

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ACEPrimaryTheme } from '../src/lib/package/components';
import NumericalStepper from '../src/lib/package/components/Stepper/NumericalStepper';
// Internal
import ElementContainer from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Molecules|Stepper', module);

stories.addDecorator(withKnobs).add('numerical ', () => {
  return (
    <ACEPrimaryTheme>
      <div style={{ textAlign: 'center' }}>
        <h2>Numerical Stepper with Helper Text</h2>
      </div>
      <br />
      <ElementContainer>
        <NumericalStepper
          id="1"
          labelText="This is a numerical stepper"
          helperText="This is a helper message"
          value={text('Numeric Value', 99)}
          mask={[/\d/, /\d/]}
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
          error="This is an error text"
          helperText="This is a helper text"
          mask={[/\d/, /\d/, /\d/]}
          onIncrease={action('Button increase responded.')}
          onDecrease={action('Button decrease responded.')}
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
          helperText="This is a helper message"
          onIncrease={action('Button increase responded.')}
          onDecrease={action('Button decrease responded.')}
          disabled
        />
      </ElementContainer>
    </ACEPrimaryTheme>
  );
});

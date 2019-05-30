import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

import {AAAPrimaryTheme} from '../src/lib/components';
import NumericalStepper from '../src/lib/components/Stepper/NumericalStepper';

// Internal
import {ElementContainer} from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Molecules|Stepper', module);
stories
    .add('Numerical Stepper', () => {
        return (
            <AAAPrimaryTheme>
                 <ElementContainer>
                    <NumericalStepper/>
                </ElementContainer>
            </AAAPrimaryTheme>
        )
    })
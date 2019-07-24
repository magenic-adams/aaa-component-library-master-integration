/* eslint-disable no-console */
/* global document */

import React from 'react';
import { render } from 'react-dom';
	// Assets
import phoneImage from './Images/phone.svg';
import {
  ACEPrimaryTheme,
  BaseInput,
  Button,
  Link as TextLink,
  SelectList,
} from './lib/package/components';
import NumericalStepper from './lib/package/components/Stepper/NumericalStepper';

const handleSelectItem = selectedItem => {
  console.log('selectedItem', selectedItem);
};

const items = [
  { id: 1, value: 1, display: 'First Item' },
  { id: 2, value: 2, display: 'Second Item' },
  { id: 3, value: 3, display: 'Third Item ' },
  { id: 4, value: 4, display: '4th Item' },
  { id: 5, value: 5, display: '5th Item' },
  { id: 6, value: 6, display: '6th item' },
  { id: 7, value: 7, display: '7th Item' },
];

const overrideDefaultStepperStyles = () => {
  return {
    labelColor: '#9ACD32', // yellowgreen,
  };
};

const App = () => {
  return (
    <ACEPrimaryTheme>
      <h1>ACE Component Library</h1>
      <Button color='primary'>Here lies a button</Button>
      <br />
      <br />
      <Button id='lie-button' color='primary'>
        Here lies a button
      </Button>
      <Button id='lie-secondary-button' color='secondary'>
        Here lies a secondary button
      </Button>
      <Button id='button-with-icon-left' color='primary' leftIcon={phoneImage}>
        Submit application form 
      </Button>
      <br/>
      <br/>
      <BaseInput
        disabled
        id='disabledId'
        name='disabledName'
        type='text'
        onChange={() => {}}
        helperText='Disabled'
        labelName='Disabled Label'
        value='Disabled'
        onClear={() => {}}
      />
      <br />
      <BaseInput
        id='enabledId'
        name='enabledName'
        labelName='Enabled Label'
        type='text'
        onChange={() => {}}
        value='Enabled'
        onClear={() => {}}
      />
      <br />
      <br />
      <BaseInput
        id='errorId'
        name='errorName'
        type='text'
        onChange={() => {}}
        helperText='Error'
        labelName='Error Label'
        error='This is an error'
        value='Error'
      />
      <br />
      <br />
      <TextLink color='primary' onClick={() => {}}>
        Primary enabled Link
      </TextLink>
      <br />
      <br />
      <TextLink color='secondary' target='_blank' onClick={() => {}}>
        Secondary enabled Link
      </TextLink>
      <SelectList
        type='primary'
        items={items}
        onSelect={selectedOption => handleSelectItem(selectedOption)}
      />
      <br />
      <br />
      <NumericalStepper
        id='3'
        overrides={overrideDefaultStepperStyles()}
        labelText='Numerical stepper with style overrides'
        helperText='This is a helper message'
        mask={[/\d/, /\d/]}
        onIncrease={() => {}}
        onDecrease={() => {}}
      />
    </ACEPrimaryTheme>
  );
};
// eslint-disable-next-line no-undef
render(<App />, document.getElementById('root'));

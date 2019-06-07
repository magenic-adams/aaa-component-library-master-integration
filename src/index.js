/* eslint-disable no-console */
/* global document */

import React from 'react';
import { render } from 'react-dom';
import {
  AAAPrimaryTheme,
  Button,
  TextInput,
  Link as TextLink,
  SelectList
} from './lib/components';

const handleSelectItem = selectedItem => {
  console.log('selectedItem', selectedItem);
};

const items = [
  { id: 1, value: 1, display: 'First Item', selected: true },
  { id: 2, value: 2, display: 'Second Item' },
  {
    id: 3,
    value: 3,
    display: 'Third Item '
  },
  { id: 4, value: 4, display: '4th Item' },
  { id: 5, value: 5, display: '5th Item' },
  {
    id: 6,
    value: 6,
    display: '6th item'
  },
  { id: 7, value: 7, display: '7th Item' }
];

const App = () => (
  <AAAPrimaryTheme>
    <h1>AAA Component Library</h1>
    <Button color="primary">Here lies a button</Button>
    <br />
    <br />
    <Button id="lie-button" color="primary">
      Here lies a button
    </Button>
    <Button id="lie-secondary-button" color="secondary">
      Here lies a secondary button
    </Button>
    <br />
    <br />
    <TextInput
      disabled
      id="disabledId"
      name="disabledName"
      type="text"
      onChange={() => {}}
      helperText="Disabled"
      labelName="Disabled Label"
      value="Disabled"
      onClear={() => {}}
    />
    <br />
    <TextInput
      id="enabledId"
      name="enabledName"
      labelName="Enabled Label"
      type="text"
      onChange={() => {}}
      value="Enabled"
      onClear={() => {}}
    />
    <br />
    <br />
    <TextInput
      error
      id="errorId"
      name="errorName"
      type="text"
      onChange={() => {}}
      helperText="Error"
      labelName="Error Label"
      errorText="Error text"
      value="Error"
    />
    <br />
    <br />
    <TextLink className="primary" onClick={() => {}}>
      Primary enabled Link
    </TextLink>
    <br />
    <br />
    <TextLink className="secondary" onClick={() => {}}>
      Secondary enabled Link
    </TextLink>

    <SelectList
      type="primary"
      items={items}
      onSelect={selectedOption => handleSelectItem(selectedOption)}
    />
  </AAAPrimaryTheme>
);

// eslint-disable-next-line no-undef
render(<App />, document.getElementById('root'));

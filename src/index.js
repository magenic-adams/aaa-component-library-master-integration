/* eslint-disable no-console */
/* global document */

import React from 'react';
import { render } from 'react-dom';
import {
  AAAPrimaryTheme,
  Button,
  BaseInput,
  Link as TextLink,
  // RadioGroup,
} from './lib/components';
import RadioButtonGroup from './lib/components/experiment/experiment';

// const handleSelectItem = event => {
//   console.log('selectedItem', event.targe);
// };

// const items = [
//   { id: 1, value: 1, text: 'First Item' },
//   { id: 2, value: 2, text: 'Second Item' },
//   { id: 3, value: 3, text: 'Third Item' },
//   { id: 4, value: 4, text: '4th Item' },
//   { id: 5, value: 5, text: '5th Item' },
//   { id: 6, value: 6, text: '6th Item' },
// ];

const App = () => {
  return (
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
      <BaseInput
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
      <BaseInput
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
      <BaseInput
        id="errorId"
        name="errorName"
        type="text"
        onChange={() => {}}
        helperText="Error"
        labelName="Error Label"
        error="This is an error"
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
      {/* <RadioGroup
        name="testRadio"
        value={2}
        items={items}
        onSelect={selectedOption => handleSelectItem(selectedOption)}
      /> */}
      <RadioButtonGroup />
    </AAAPrimaryTheme>
  );
};
// eslint-disable-next-line no-undef
render(<App />, document.getElementById('root'));

/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
// import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import {
  AAAPrimaryTheme,
  RadioGroup,
  RadioItem,
  SelectList
} from './lib/components';

const handleSelectItem = selectedItem => {
  console.log('selectedItem', selectedItem);
};

const items = [
  { id: 1, value: 1, text: 'First Item', isSelected: true },
  { id: 2, value: 2, text: 'Second Item' },
  {
    id: 3,
    value: 3,
    text: 'Third Item '
  },
  { id: 4, value: 4, text: '4th Item' },
  { id: 5, value: 5, text: '5th Item' },
  { id: 6, value: 6, text: '6th Item' }
  // { id: 7, value: 7, display: '7th Item' }
];

// eslint-disable-next-line no-unused-vars
const radioItems = [
  {
    id: 1,
    value: 1,
    display: (
      <RadioItem
        value="a"
        name="radio-button-demo"
        aria-label="A"
        text="AAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAA AAAAAAAA"
        onSelect={selectedOption => handleSelectItem(selectedOption)}
      />
    )
  },
  {
    id: 2,
    value: 1,
    display: (
      <RadioItem
        value="ab"
        name="radio-button-demo"
        aria-label="b"
        text="ABAAAAAAAAAAAAAAAAAAA"
        onSelect={selectedOption => handleSelectItem(selectedOption)}
      />
    )
  }
];

const App = () => (
  <AAAPrimaryTheme>
    <h1>AAA Component Library</h1>
    <RadioGroup
      name="radioGroup"
      items={items}
      onSelect={selectedOption => handleSelectItem(selectedOption)}
    />
    {/* // <RadioGroup aria-label="Gender">
  //   <Radio value="a" name="radio-button-demo" aria-label="A" />
  //   <Radio value="ab" name="radio-button-demo" aria-label="b" />
  // </RadioGroup> */}
  </AAAPrimaryTheme>
);

// eslint-disable-next-line no-undef
render(<App />, document.getElementById('root'));

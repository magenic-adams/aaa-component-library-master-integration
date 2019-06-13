/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '../RadioGroup/RadioGroup';

const items = [
  { id: 1, value: 1, text: 'First Item' },
  { id: 2, value: 2, text: 'Second Item' },
  // { id: 3, value: 3, text: 'Third Item' },
  // { id: 4, value: 4, text: '4th Item' },
  // { id: 5, value: 5, text: '5th Item' },
  // { id: 6, value: 6, text: '6th Item' },
];

class RadioButtonsGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
      selectedValues: [],
    };
  }

  //   function handleChange(event) {
  //     console.log('event.target.value', event.target.value);
  //     temp.push(event.target.value);
  //     // selectedValues.push(event.target.value);
  //     setValues(temp);
  // }

  handleChange = event => {
    const { selectedValues } = this.state;
    this.setState({
      selectedValue: event.target.value,
      selectedValues: [...selectedValues, event.target.value],
    });
  };

  render() {
    const { selectedValue, selectedValues } = this.state;
    return (
      <div>
        {/* <FormControl component="fieldset" className={classes.formControl}> */}
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          type="multi-select-radio"
          name="testRadio"
          items={items}
          selectedValue={selectedValue}
          selectedValues={selectedValues}
          onSelect={this.handleChange}
        />
        {/* <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value={1} control={<Radio />} label="Female" />
          <FormControlLabel value={2} control={<Radio />} label="Male" />
          <FormControlLabel value={3} control={<Radio />} label="Other" />
          <FormControlLabel
            value={4}
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup> */}
        {/* </FormControl> */}
        {/* <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className={classes.group}
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Female"
              labelPlacement="start"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Male"
              labelPlacement="start"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="primary" />}
              label="Other"
              labelPlacement="start"
            />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
              labelPlacement="start"
            />
          </RadioGroup>
          <FormHelperText>labelPlacement start</FormHelperText>
        </FormControl> */}
      </div>
    );
  }
}

export default RadioButtonsGroup;

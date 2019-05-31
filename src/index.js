/* eslint-disable no-undef */

import React from 'react';
import { render } from "react-dom";
import { AAAPrimaryTheme, Button, Input, TextLink } from "./lib/components";

const App = () => (
  <AAAPrimaryTheme>
    <h1>AAA Component Library</h1>
    <Button color="primary">
      Here lies a button
    </Button>
    <br/><br/>
    <Input disabled id="disabledId" name="disabledName" type="text" onChange={() => { }} helperText="Disabled" labelName="Disabled Label" value="Disabled" onClear={()=> {}} />
    <br/>
    <Input id="enabledId" name="enabledName" labelName="Enabled Label" type="text" onChange={() => { }} value="Enabled"  onClear={()=> {}}/>
    <br/><br/>
    <Input error id="errorId" name="errorName" type="text" onChange={() => { }} helperText="Error" labelName="Error Label" errorText="Error text" value="Error" />
    <br/><br/>
    <TextLink className="primary" onClick={() => { }}>Primary enabled Link</TextLink>
    <br/><br/>
    <TextLink className="secondary" onClick={() => { }}>Secondary enabled Link</TextLink>
  </AAAPrimaryTheme>
);

render(<App />, document.getElementById("root"));

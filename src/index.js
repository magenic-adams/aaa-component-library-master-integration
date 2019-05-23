import React from 'react';
import { render } from "react-dom";
import { AAAPrimaryTheme, Button, Input } from "./lib/components";

const App = () => (
  <AAAPrimaryTheme>
    <h1>AAA Component Library</h1>
    <Button color="primary" disabled>
      Here lies a button
    </Button>
    <br></br><br></br>
    <Input disabled id="disabledId" name="disabledName" type="text" onChange={() => { }} helperText="Disabled" labelName="Disabled Label" />
    <br></br>
    <Input id="enabledId" name="enabledName" labelName="Enabled Label" type="text" onChange={() => { }} value="Enabled"  onClear={()=> {}}/>
    <br></br><br></br>
    <Input error id="errorId" name="errorName" type="text" onChange={() => { }} helperText="Error" labelName="Error Label" errorText="Error text" value="Error" />
  </AAAPrimaryTheme>
);

render(<App />, document.getElementById("root"));

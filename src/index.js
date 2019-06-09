
/* global document */

import React from 'react';
import { render } from "react-dom";
import { AAAPrimaryTheme, Button, BaseInput, Link as TextLink } from "./lib/components";

const App = () => (
  <AAAPrimaryTheme>
    <h1>AAA Component Library</h1>
    <Button color="primary">
      Here lies a button
    </Button>
    <br/><br/>
    <Button id="lie-button" color="primary">
      Here lies a button
    </Button>
    <Button id="lie-secondary-button" color="secondary">
      Here lies a secondary button
    </Button>
    <br></br><br></br>
    <BaseInput disabled id="disabledId" name="disabledName" type="text" onChange={() => { }} helperText="Disabled" labelName="Disabled Label" value="Disabled" onClear={()=> {}} />
    <br/>
    <BaseInput id="enabledId" name="enabledName" labelName="Enabled Label" type="text" onChange={() => { }} value="Enabled"  onClear={()=> {}}/>
    <br/><br/>
    <BaseInput id="errorId" name="errorName" type="text" onChange={() => { }} helperText="Error" labelName="Error Label" error="This is an error" value="Error" />
    <br/><br/>
    <TextLink className="primary" onClick={() => { }}>Primary enabled Link</TextLink>
    <br/><br/>
    <TextLink className="secondary" onClick={() => { }}>Secondary enabled Link</TextLink>
  </AAAPrimaryTheme>
);

render(<App />, document.getElementById("root"));

import React from 'react';
import { render } from "react-dom";
import {Button} from "./lib/components";


const App = () => (
  <div>
    <h1>AAA Component Library</h1>
    <Button color="primary">
      Here lies a button
    </Button>
  </div>
);

render(<App />, document.getElementById("root"));

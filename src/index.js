import React from 'react';
import { render } from "react-dom";
import {AAAPrimaryTheme, Button} from "./lib/components";


const App = () => (
  <AAAPrimaryTheme>
    <h1>AAA Component Library</h1>
    <Button color="primary">
      Here lies a button
    </Button>
  </AAAPrimaryTheme>
);

render(<App />, document.getElementById("root"));

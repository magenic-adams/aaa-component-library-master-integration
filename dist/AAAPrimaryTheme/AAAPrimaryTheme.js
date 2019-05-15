// https://next.material-ui.com/customization/themes
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
var theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif'
  }
});
export default function AAAThemeProvider(_ref) {
  var children = _ref.children;
  return React.createElement(ThemeProvider, {
    theme: theme
  }, children);
}
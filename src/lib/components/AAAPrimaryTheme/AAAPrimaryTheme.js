// https://next.material-ui.com/customization/themes
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

type propTypes = {
  children: PropTypes.node,
};

export default function AAAThemeProvider({children}:propTypes){
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

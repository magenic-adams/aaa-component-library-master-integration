// https://next.material-ui.com/customization/themes
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const AAA_COLOR_MAIN_BLUE = '#4470bf';
const AAA_COLOR_ERROR = '#da291c';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    }
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: AAA_COLOR_MAIN_BLUE,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    error: {
      main: AAA_COLOR_ERROR,
    },
  },
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

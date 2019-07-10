// https://next.material-ui.com/customization/themes
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

// Augmented themea definition
import createStyleTheme from '../../utilities/createStyleTheme';

// Colors
import {
  ACE_COLOR_MAIN_ERROR,
  ACE_COLOR_MAIN_BLACK,
  ACE_COLOR_MAIN_BLUE,
  ACE_COLOR_MAIN_DISABLED,
  ACE_COLOR_MAIN_DARK_BLUE,
  ACE_COLOR_MAIN_DARKER_BLUE,
  ACE_COLOR_MAIN_ERROR_HOVER,
  ACE_COLOR_MAIN_GRAY,
  ACE_COLOR_MAIN_VERY_LIGHT_GRAY,
  ACE_COLOR_MAIN_WHITE,
  ACE_COLOR_SECONDARY_HOVER,
  ACE_COLOR_TRANSPARENT,
  ACE_COLOR_MAIN_VERY_DARK_BLUE,
} from '../../constants/colors';

const theme = createStyleTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      // NOTE: when not specifying other values like "light", they will
      // be calculated from palette.primary.main,
      main: ACE_COLOR_MAIN_BLUE,
      dark: ACE_COLOR_MAIN_DARK_BLUE,
    },
    error: {
      main: ACE_COLOR_MAIN_ERROR,
    },
  },
  secondaryPalette: {
    // ** Client Library Defined **
    disabled: {
      main: ACE_COLOR_MAIN_DISABLED,
    },
    // These are use defined variables we can use
    colorVariables: {
      BLACK: ACE_COLOR_MAIN_BLACK,
      SECONDARY_HOVER: ACE_COLOR_SECONDARY_HOVER,
      ERROR_HOVER: ACE_COLOR_MAIN_ERROR_HOVER,
      TRANSPARENT: ACE_COLOR_TRANSPARENT,
      DARKER_BLUE: ACE_COLOR_MAIN_DARKER_BLUE,
      VERY_DARK_BLUE: ACE_COLOR_MAIN_VERY_DARK_BLUE,
      GRAY: ACE_COLOR_MAIN_GRAY,
      VERY_LIGHT_GRAY: ACE_COLOR_MAIN_VERY_LIGHT_GRAY,
      WHITE: ACE_COLOR_MAIN_WHITE,
    },
  },
  
  typographyValues: {
    // ** Client Library Defined **
    color: ACE_COLOR_MAIN_BLACK,
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    fontStyle: 'regular',
    fontWeight: 400, // Medium
  },
  typographyElements: {},
});



// ** Typography ** //
theme.typography.h1 = {
  // Headline
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: 500,
  lineHeight: 1.5,
  fontSize: 20,
  [theme.breakpoints.up('lg')]: {
    fontSize: 28,
    lineHeight: 1.57,
  },
};

theme.typography.h2 = {
  // Subheadline
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  lineHeight: 1.45,
  fontSize: 18,
  [theme.breakpoints.up('lg')]: {
    fontSize: 22,
  },
};

theme.typography.subtitle1 = {
  // Subtitle 1 / Table Header
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 500,
  [theme.breakpoints.up('lg')]: {
    fontSize: 18,
    lineHeight: 1.45,
  },
};

theme.typography.body1 = {
  // Body 1 / Primary Copy
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 16,
  lineHeight: 1.5,
  [theme.breakpoints.up('lg')]: {
    fontSize: 18,
    lineHeight: 1.45,
  },
};

theme.typography.body2 = {
  // Body 2 / Primary Copy
  color: theme.typographyValues.color,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 14,
  lineHeight: 1.45,
  [theme.breakpoints.up('lg')]: {
    fontSize: 16,
    lineHeight: 1.5,
  },
};

// ** Client Library Defined **
theme.typographyElements.buttonPrimary = {
  color: theme.secondaryPalette.colorVariables.WHITE,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: 500,
  lineHeight: 1.45,
  fontSize: 18,
  [theme.breakpoints.up('lg')]: {
    fontSize: 20,
  },
};
// ** Client Library Defined **
theme.typographyElements.buttonSecondary = {
  color: theme.palette.primary.main,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 18,
  lineHeight: 1.45,
};
// ** Client Library Defined **
theme.typographyElements.linkPrimary = {
  color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 16,
  lineHeight: 1.45,
  [theme.breakpoints.up('lg')]: {
    fontSize: 18,
  },
};

theme.typographyElements.linkSecondary = {
  color: theme.secondaryPalette.colorVariables.DARKER_BLUE,
  fontFamily: theme.typographyValues.fontFamily,
  fontStyle: theme.typographyValues.fontStyle,
  fontWeight: theme.typographyValues.fontWeight,
  fontSize: 16,
  lineHeight: 1.45,
  [theme.breakpoints.up('lg')]: {
    fontSize: 18,
  },
};

export default function ACEThemeProvider({ children }: { children: any }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

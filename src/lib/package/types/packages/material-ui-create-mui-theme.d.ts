import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    secondaryPalette: {
      disabled: {
        main: string
      },
      colorVariables: {
        BLACK: string,
        SECONDARY_HOVER: string,
        ERROR_HOVER: string,
        TRANSPARENT: string,
        DARKER_BLUE: string,
        DARK_GRAYISH_BLUE: string,
        VERY_DARK_BLUE: string,
        LIGHT_GRAYISH_BLUE: string,
        GRAY: string,
        VERY_LIGHT_GRAY: string,
        WHITE: string,
      }
    },
    typographyValues: {
      color: string,
      fontStyle: string,
      fontFamily: string
      fontWeight: number,
    },
    typographyElements: {
      buttonPrimary: TypographyStyle,
      buttonSecondary: TypographyStyle,
      linkPrimary: TypographyStyle,
      linkSecondary: TypographyStyle,
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    secondaryPalette: {
      disabled: {
        main?: string
      },
      colorVariables: {
        BLACK?: string,
        SECONDARY_HOVER?: string,
        ERROR_HOVER?: string,
        TRANSPARENT?: string,
        DARKER_BLUE?: string,
        DARK_GRAYISH_BLUE?: string,
        VERY_DARK_BLUE?: string,
        LIGHT_GRAYISH_BLUE?: string,
        GRAY?: string,
        VERY_LIGHT_GRAY?: string,
        WHITE?: string,
      }
    },
    typographyValues: {
      color?: string,
      fontStyle?: string,
      fontWeight?: number,
      fontFamily?: string
    },
    typographyElements?: {
      buttonPrimary?: TypographyStyle,
      buttonSecondary?: TypographyStyle,
    }
  }
}

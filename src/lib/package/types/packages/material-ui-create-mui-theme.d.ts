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
        VERY_DARK_BLUE: string,
        GRAY: string,
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
        VERY_DARK_BLUE?: string,
        GRAY?: string,
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

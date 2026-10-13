import { createTheme } from '@mui/material/styles'
import type { ThemeOptions } from '@mui/material/styles'
import { tokens } from '../tokens'

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: tokens.background.main.primary.default,       // midnight-900: #020c33
      light: tokens.background.main.primary.light,        // midnight-50:  #eff0f6
      dark: tokens.background.main.primary.pressed,       // midnight-900: #020c33
      contrastText: tokens.colors.base.white,
    },
    secondary: {
      main: tokens.background.main.secondary.default,     // lime: #b0d361
      light: tokens.background.main.secondary.light,      // lime-50: #eff6df
      dark: tokens.background.main.secondary.pressed,     // lime-500: #b0d361
      contrastText: tokens.colors.midnight[900],
    },
    error: {
      main: tokens.functional.main.error,                 // red-500: #c81e1e
      light: tokens.functional.main['error-light'],       // red-50:  #fce9e9
      dark: tokens.functional.main['error-dark'],         // red-700: #781212
      contrastText: tokens.colors.base.white,
    },
    warning: {
      main: tokens.functional.main.warning,               // lime-500: #b0d361
      light: tokens.functional.main['warning-light'],     // lime-50:  #f7fbef
      dark: tokens.functional.main['warning-dark'],       // lime-600: #95bf35
      contrastText: tokens.colors.midnight[900],
    },
    info: {
      main: tokens.functional.main.info,                  // blue-500: #1a73e8
      light: tokens.functional.main['info-light'],        // blue-50:  #e8f1fd
      dark: tokens.functional.main['info-dark'],          // blue-700: #0e448b
      contrastText: tokens.colors.base.white,
    },
    success: {
      main: tokens.functional.main.success,               // emerald-500: #27b178
      light: tokens.functional.main['success-light'],     // emerald-50:  #e6f9f1
      dark: tokens.functional.main['success-dark'],       // deep-green:  #00611b
      contrastText: tokens.colors.base.white,
    },
    text: {
      primary: tokens.fg.default,     // #000000
      secondary: tokens.fg.muted,     // zinc-700: #4a5568
      disabled: tokens.fg.subtle,     // zinc-500: #a0aec0
    },
    background: {
      default: tokens.background.main.base.default,       // zinc-50:  #f9fafb
      paper: tokens.background.main.base.white,           // #ffffff
    },
    divider: tokens.border.main.default,                  // zinc-200: #e5e7eb
  },

  typography: {
    fontFamily: `"${tokens.fontFamilies.body}", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: Number(tokens.fontSizes.body),
    h1: {
      fontFamily: `"${tokens.fontFamilies.heading}", sans-serif`,
      fontSize: tokens.fontSizes.h1,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: tokens.letterSpacing.decreased,
    },
    h2: {
      fontFamily: `"${tokens.fontFamilies.heading}", sans-serif`,
      fontSize: tokens.fontSizes.h2,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: tokens.letterSpacing.decreased,
    },
    h3: {
      fontFamily: `"${tokens.fontFamilies.heading}", sans-serif`,
      fontSize: tokens.fontSizes.h3,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: `"${tokens.fontFamilies.heading}", sans-serif`,
      fontSize: tokens.fontSizes.h4,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: `"${tokens.fontFamilies.heading}", sans-serif`,
      fontSize: tokens.fontSizes.h5,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: `"${tokens.fontFamilies.heading}", sans-serif`,
      fontSize: Number(tokens.fontSizes.h6),
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: Number(tokens.fontSizes.body),
      lineHeight: 1.5,
    },
    body2: {
      fontSize: tokens.fontSizes.sm,
      lineHeight: 1.43,
    },
    caption: {
      fontSize: tokens.fontSizes.xs,
      lineHeight: 1.4,
    },
  },

  shape: {
    borderRadius: tokens.radius['rounded-lg'], // 8px
  },

  spacing: 4, // base unit: 4px — matches tokens spacing.4 = 4, spacing.8 = 8, etc.

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius['rounded-lg'],
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius['rounded-xl'],
          boxShadow: `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06)`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius['rounded-md'],
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
}

export const theme = createTheme(themeOptions)
export default theme

import { createTheme } from '@mui/material/styles'
import type { ThemeOptions } from '@mui/material/styles'
import { tokens } from '../tokens'

const themeOptions: ThemeOptions = {
  palette: {
    primary: tokens.color.primary,
    secondary: tokens.color.secondary,
    error: tokens.color.error,
    warning: tokens.color.warning,
    info: tokens.color.info,
    success: tokens.color.success,
    text: tokens.color.text,
    background: tokens.color.background,
  },
  typography: {
    fontFamily: tokens.typography.fontFamily,
    fontSize: tokens.typography.fontSize,
    h1: tokens.typography.h1,
    h2: tokens.typography.h2,
    h3: tokens.typography.h3,
    h4: tokens.typography.h4,
    h5: tokens.typography.h5,
    h6: tokens.typography.h6,
    body1: tokens.typography.body1,
    body2: tokens.typography.body2,
  },
  shape: {
    borderRadius: tokens.shape.borderRadius,
  },
  spacing: tokens.spacing,
}

export const theme = createTheme(themeOptions)
export default theme

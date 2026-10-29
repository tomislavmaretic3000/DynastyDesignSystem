import { createTheme } from '@mui/material/styles'
import type { ThemeOptions, Shadows } from '@mui/material/styles'
import '@mui/x-date-pickers/themeAugmentation'
import {
  CaretDown,
  Square,
  CheckSquare,
  MinusSquare,
  CheckCircle,
  Warning,
  XCircle,
  Info,
  X,
  Star,
  CalendarBlank,
  Clock,
} from '@phosphor-icons/react'
import { tokens } from '../tokens'

// Stable wrappers for MUI icon slots — bold weight matches global IconContext default
function SelectIcon({ className }: { className?: string }) {
  return <CaretDown className={className} size={20} weight="bold" />
}
function CalendarIcon() { return <CalendarBlank size={20} weight="bold" /> }
function ClockIcon() { return <Clock size={20} weight="bold" /> }

// ─── Shadow system ────────────────────────────────────────────────────────────
// Shadow color source: tokens.shadows.color (tools/tokens/tokens/2. Theme/Mode 1.json)
// Adjust these three opacity values to tune intensity across all components.
const shadowOpacity = {
  sm: 0.06,  // lightest layer — e.g. Card resting
  md: 0.10,  // mid layer — e.g. Popover, Menu
  lg: 0.18,  // deepest layer — e.g. Modal, Drawer
}

// midnight-900 (#020c33) broken out as RGB for rgba() usage
const sRgb = '2, 12, 51'
const sh = (y: number, blur: number, a: number, spread = 0) =>
  `0px ${y}px ${blur}px ${spread}px rgba(${sRgb}, ${a})`
const { sm, md, lg } = shadowOpacity

const systemShadows: Shadows = [
  'none',
  `${sh(1, 3,  sm)}, ${sh(1, 2,  sm / 2)}`,
  `${sh(1, 5,  sm)}, ${sh(2, 2,  sm / 2)}`,
  `${sh(1, 8,  md)}, ${sh(3, 4,  sm)}`,
  `${sh(2, 4,  md, -1)}, ${sh(4, 5,  sm)}`,
  `${sh(3, 5,  md, -1)}, ${sh(5, 8,  sm)}`,
  `${sh(3, 5,  md, -1)}, ${sh(6, 10, sm)}`,
  `${sh(4, 5,  md, -2)}, ${sh(7, 10, sm)}`,
  `${sh(5, 5,  md, -3)}, ${sh(8, 10, sm)}`,
  `${sh(5, 6,  md, -3)}, ${sh(9, 12, sm)}`,
  `${sh(6, 6,  md, -3)}, ${sh(10, 14, sm)}`,
  `${sh(6, 7,  md, -4)}, ${sh(11, 15, sm)}`,
  `${sh(7, 8,  md, -4)}, ${sh(12, 17, sm)}`,
  `${sh(7, 8,  md, -4)}, ${sh(13, 19, sm)}`,
  `${sh(7, 9,  md, -4)}, ${sh(14, 21, sm)}`,
  `${sh(8, 9,  md, -5)}, ${sh(15, 22, sm)}`,
  `${sh(8, 10, md, -5)}, ${sh(16, 24, sm)}`,
  `${sh(8, 11, md, -5)}, ${sh(17, 26, sm)}`,
  `${sh(9, 11, md, -5)}, ${sh(18, 28, sm)}`,
  `${sh(9, 12, md, -6)}, ${sh(19, 29, sm)}`,
  `${sh(10, 13, md, -6)}, ${sh(20, 31, sm)}`,
  `${sh(10, 13, md, -6)}, ${sh(21, 33, sm)}`,
  `${sh(10, 14, md, -6)}, ${sh(22, 35, sm)}`,
  `${sh(11, 14, md, -7)}, ${sh(23, 36, sm)}`,
  `${sh(11, 15, lg, -7)}, ${sh(24, 38, md)}`,
]
// ─────────────────────────────────────────────────────────────────────────────

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
    fontFamily: `"Geist", "Helvetica", "Arial", sans-serif`,
    fontSize: Number(tokens.fontSizes.body),
    h1: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: tokens.fontSizes.h1,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: tokens.fontSizes.h2,
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: tokens.fontSizes.h3,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: tokens.fontSizes.h4,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: tokens.fontSizes.h5,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: Number(tokens.fontSizes.h6),
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: `"Geist", sans-serif`,
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: `"Geist", sans-serif`,
      fontWeight: 500,
    },
    body1: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: Number(tokens.fontSizes.body),
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: tokens.fontSizes.sm,
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: tokens.fontSizes.xs,
      lineHeight: 1.4,
    },
    overline: {
      fontFamily: `"Geist", sans-serif`,
      fontWeight: 600,
      letterSpacing: '0.08em',
    },
    button: {
      fontFamily: `"Geist", sans-serif`,
      fontWeight: 400,
      textTransform: 'none',
    },
  },

  shadows: systemShadows,

  shape: {
    borderRadius: tokens.radius['rounded-lg'], // 8px
  },

  spacing: 4, // base unit: 4px — matches tokens spacing.4 = 4, spacing.8 = 8, etc.

  components: {
    MuiIconButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          borderRadius: tokens.radius['rounded-md'],
          '&:hover': {
            backgroundColor: 'transparent',
            color: tokens.colors.midnight[700],
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: tokens.radius['rounded-lg'],
          textTransform: 'none',
          fontWeight: 400,
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'background-color 120ms ease, color 120ms ease, box-shadow 120ms ease, transform 80ms ease',
            '&:active': { transform: 'scale(0.96)' },
          },
        },
        containedPrimary: {
          '&:hover': { backgroundColor: tokens.colors.midnight[700] },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        InputLabelProps: { shrink: true },
      },
    },
    MuiInputLabel: {
      defaultProps: { shrink: true },
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          transformOrigin: 'unset',
          maxWidth: '100%',
          pointerEvents: 'auto',
          fontSize: tokens.fontSizes.sm,
          fontWeight: 500,
          color: tokens.fg.muted,
          marginBottom: '6px',
          '&.MuiInputLabel-shrink': { transform: 'none', maxWidth: '100%' },
          '&.Mui-error': { color: tokens.functional.main.error },
          '&.Mui-disabled': { color: tokens.fg.subtle },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: tokens.colors.zinc[600],
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: tokens.border.main.focus,      // midnight.500 — clear but not midnight.900
            borderWidth: 2,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: tokens.functional.main.error,
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: tokens.border.main.default,
          },
        },
        notchedOutline: {
          top: 0,
          borderColor: tokens.colors.zinc[500],           // zinc.500 — visible but not active-looking
          '& legend': { display: 'none' },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 2 },
      styleOverrides: {
        root: {
          borderRadius: tokens.radius['rounded-xl'],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: { color?: string; variant?: string } }) => ({
          borderRadius: tokens.radius['rounded-md'],
          ...(ownerState.variant !== 'outlined' && ownerState.color === 'success' && {
            backgroundColor: tokens.functional.main['success-light'],
            color: tokens.functional.main['success-dark'],
          }),
          ...(ownerState.variant !== 'outlined' && ownerState.color === 'error' && {
            backgroundColor: tokens.functional.main['error-light'],
            color: tokens.functional.main['error-dark'],
          }),
          ...(ownerState.variant !== 'outlined' && ownerState.color === 'warning' && {
            backgroundColor: tokens.functional.main['warning-light'],
            color: tokens.functional.main['warning-dark'],
          }),
          ...(ownerState.variant !== 'outlined' && ownerState.color === 'info' && {
            backgroundColor: tokens.functional.main['info-light'],
            color: tokens.functional.main['info-dark'],
          }),
          ...(ownerState.variant !== 'outlined' && ownerState.color === 'primary' && {
            backgroundColor: tokens.background.main.primary.light,
            color: tokens.colors.midnight[700],
          }),
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 52,
          height: 32,
          padding: 0,
          overflow: 'hidden',
          flexShrink: 0,
          '&.MuiSwitch-sizeSmall': {
            width: 36,
            height: 22,
          },
        },
        switchBase: {
          padding: 3,
          margin: 0,
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(20px)',
            margin: 0,
          },
          '.MuiSwitch-sizeSmall &': {
            padding: 2,
            '&.Mui-checked': {
              transform: 'translateX(14px)',
            },
          },
        },
        thumb: {
          width: 26,
          height: 26,
          backgroundColor: '#fff',
          boxShadow: `0 2px 4px rgba(${sRgb}, 0.15)`,
          '.MuiSwitch-sizeSmall &': {
            width: 18,
            height: 18,
            boxShadow: `0 1px 3px rgba(${sRgb}, 0.15)`,
          },
        },
        track: {
          borderRadius: 16,
          opacity: 1,
          backgroundColor: tokens.colors.zinc[300],
          '.Mui-checked + &': {
            opacity: 1,
            backgroundColor: tokens.colors.midnight[700],
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,          // MUI default is -11px to compensate for ripple padding; reset since our controls define their own spacing
          gap: tokens.spacing[8],
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: tokens.fontSizes.sm,  // match label size
          marginLeft: 0,                  // align with label, not input interior
          marginTop: tokens.spacing[4],
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        square: true,
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderTop: `1px solid ${tokens.border.main.default}`,
          '&:last-of-type': {
            borderBottom: `1px solid ${tokens.border.main.default}`,
          },
          '&::before': { display: 'none' },
          background: 'transparent',
        },
      },
    },
    MuiAccordionSummary: {
      defaultProps: {
        expandIcon: <CaretDown size={20} weight="bold" />,
      },
      styleOverrides: {
        root: { padding: '0 16px' },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { padding: '0 16px 16px' },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${tokens.border.main.default}`,
          borderLeft: 'none',
          borderRight: 'none',
        },
        head: {
          fontWeight: 600,
          borderBottom: `2px solid ${tokens.border.main.dark}`,
        },
      },
    },
    MuiDatePicker: {
      defaultProps: {
        slots: { openPickerIcon: CalendarIcon },
      },
    },
    MuiDateTimePicker: {
      defaultProps: {
        slots: { openPickerIcon: CalendarIcon },
      },
    },
    MuiTimePicker: {
      defaultProps: {
        slots: { openPickerIcon: ClockIcon },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: SelectIcon,
      },
      styleOverrides: {
        icon: { fontSize: '20px' },
      },
    },
    MuiNativeSelect: {
      defaultProps: {
        IconComponent: SelectIcon,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        icon: <Square size={22} weight="light" />,
        checkedIcon: <CheckSquare size={22} weight="fill" />,
        indeterminateIcon: <MinusSquare size={22} weight="fill" />,
      },
      styleOverrides: {
        root: {
          padding: 0,
          color: tokens.colors.zinc[400],
          '&:hover': {
            backgroundColor: 'transparent',
            color: tokens.colors.midnight[700],
          },
          '&.MuiCheckbox-colorPrimary:not(.Mui-checked):not(.MuiCheckbox-indeterminate)': {
            color: tokens.colors.zinc[400],
          },
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          success: <CheckCircle size={22} weight="fill" />,
          warning: <Warning size={22} weight="fill" />,
          error: <XCircle size={22} weight="fill" />,
          info: <Info size={22} weight="fill" />,
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <CaretDown size={20} weight="bold" />,
        clearIcon: <X size={16} weight="bold" />,
      },
    },
    MuiRating: {
      defaultProps: {
        icon: <Star size={24} weight="fill" />,
        emptyIcon: <Star size={24} weight="bold" />,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: tokens.functional.main.info,
          textDecorationColor: 'currentColor',
          textUnderlineOffset: '3px',
          '&:hover': {
            color: tokens.functional.main['info-dark'],
          },
        },
      },
    },
  },
}

export const theme = createTheme(themeOptions)
export default theme

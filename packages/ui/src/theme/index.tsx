import { createTheme, Fade } from '@mui/material'
import type { ThemeOptions, Shadows } from '@mui/material/styles'
import type { CSSProperties } from 'react'

declare module '@mui/material/styles' {
  interface Palette { neutral: Palette['primary'] }
  interface PaletteOptions { neutral?: PaletteOptions['primary'] }
  interface TypographyVariants { keyFig: CSSProperties }
  interface TypographyVariantsOptions { keyFig?: CSSProperties }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides { neutral: true }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides { keyFig: true }
}
import '@mui/x-date-pickers/themeAugmentation'
import {
  CaretDown, Triangle,
  Check,
  Minus,
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
  return <CaretDown className={className} size={18} weight="bold" />
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

// Shared height token for all small-size form controls and control-like elements
export const controlHeightSm = 40

// Row height for data tables — matches DataGrid's actual auto-computed row
// height (cell padding + line-height), kept in sync for any component that
// needs to align its own row height to the grid (e.g. drawer detail lists)
export const dataGridRowHeight = 42

// Spacing between a form label and its field — spacing(1.5)
export const formLabelGap = 1.5

// Spacing between a primary line (e.g. a title) and secondary helper text below it
export const helperTextGap = 0

// Width for right-anchored detail/panel drawers — consistent across all such drawers
export const detailDrawerWidth = 600

// Shared "selected" color for controls that indicate an active/checked/favorited
// state via icon or fill color (Checkbox, Switch track, favorite Star, etc.) —
// single source of truth so parallel selection indicators stay visually aligned
export const selectedColor = tokens.icon.main.primary.primary

// Counterpart muted/unselected color for the same family of controls
export const mutedIconColor = tokens.icon.main.base.subtle

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
      main: tokens.functional.main.error,
      light: tokens.functional.main['error-light'],
      dark: tokens.functional.main['error-dark'],
      contrastText: tokens.colors.base.white,
    },
    warning: {
      main: tokens.functional.main.warning,
      light: tokens.functional.main['warning-light'],
      dark: tokens.functional.main['warning-dark'],
      contrastText: tokens.colors.midnight[900],
    },
    info: {
      main: tokens.functional.main.info,
      light: tokens.functional.main['info-light'],
      dark: tokens.functional.main['info-dark'],
      contrastText: tokens.colors.base.white,
    },
    success: {
      main: tokens.functional.main.success,
      light: tokens.functional.main['success-light'],
      dark: tokens.functional.main['success-dark'],
      contrastText: tokens.colors.base.white,
    },
    neutral: {
      main: tokens.colors.zinc[200],
      light: tokens.colors.zinc[100],
      dark: tokens.colors.zinc[300],
      contrastText: tokens.colors.zinc[900],
    },
    text: {
      primary: tokens.colors.zinc[900], // #111928
      secondary: tokens.fg.muted,     // zinc-700: #4a5568
      disabled: tokens.fg.subtle,     // zinc-500: #a0aec0
    },
    background: {
      default: tokens.colors.zinc[100],                    // zinc-100: #f3f4f6
      paper: tokens.background.main.base.white,           // #ffffff
    },
    divider: tokens.border.main.default,                  // zinc-200: #e5e7eb
    action: {
      selectedOpacity: 0.12,
    },
  },

  typography: {
    fontFamily: `"Geist", "Helvetica", "Arial", sans-serif`,
    fontSize: Number(tokens.fontSizes.body),
    h1: {
      fontFamily: `var(--font-raleway), "Raleway", sans-serif`,
      fontSize: tokens.fontSizes.h1,
      fontWeight: tokens.fontWeights.headingRegular,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: `var(--font-raleway), "Raleway", sans-serif`,
      fontSize: tokens.fontSizes.h2,
      fontWeight: tokens.fontWeights.headingRegular,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: `var(--font-raleway), "Raleway", sans-serif`,
      fontSize: tokens.fontSizes.h3,
      fontWeight: tokens.fontWeights.headingRegular,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: `var(--font-raleway), "Raleway", sans-serif`,
      fontSize: tokens.fontSizes.h4,
      fontWeight: tokens.fontWeights.headingRegular,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: `var(--font-raleway), "Raleway", sans-serif`,
      fontSize: tokens.fontSizes.h5,
      fontWeight: tokens.fontWeights.headingRegular,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: `var(--font-raleway), "Raleway", sans-serif`,
      fontSize: Number(tokens.fontSizes.h6),
      fontWeight: tokens.fontWeights.headingRegular,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: `"Geist", sans-serif`,
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: `"Geist", sans-serif`,
      fontWeight: 400,
    },
    body1: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: Number(tokens.fontSizes.body),
      lineHeight: 1.4,
    },
    body2: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: tokens.fontSizes.sm,
      lineHeight: 1.4,
    },
    caption: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: tokens.fontSizes.xs,
      lineHeight: 1.4,
    },
    // Large standalone figures (dashboard stat cards, KPI totals) — tabular-nums
    // keeps digits a fixed width so a column of figures doesn't jitter.
    keyFig: {
      fontFamily: `"Geist", sans-serif`,
      fontSize: Number(tokens.fontSizes.keyFig),
      fontVariantNumeric: 'tabular-nums',
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
    MuiCssBaseline: {
      styleOverrides: `
        * {
          scrollbar-width: thin;
          scrollbar-color: ${tokens.colors.zinc[300]} transparent;
        }
        *::-webkit-scrollbar {
          width: ${tokens.spacing[6]}px;
          height: ${tokens.spacing[6]}px;
        }
        *::-webkit-scrollbar-track {
          background: transparent;
        }
        *::-webkit-scrollbar-thumb {
          background-color: ${tokens.colors.zinc[300]};
          border-radius: ${tokens.spacing[4]}px;
        }
        *::-webkit-scrollbar-thumb:hover {
          background-color: ${tokens.colors.zinc[400]};
        }
      `,
    },
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
        sizeSmall: {
          padding: tokens.spacing[4],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
          paddingLeft: tokens.spacing[16],
          paddingRight: tokens.spacing[16],
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'background-color 120ms ease, color 120ms ease, box-shadow 120ms ease, transform 120ms cubic-bezier(0.23, 1, 0.32, 1)',
            '&:active': { transform: 'scale(0.97)', transition: 'transform 100ms cubic-bezier(0.23, 1, 0.32, 1)' },
          },
        },
        sizeSmall: {
          height: controlHeightSm,
          paddingLeft: tokens.spacing[14],
          paddingRight: tokens.spacing[14],
          fontSize: tokens.fontSizes.sm,
        },
        sizeMedium: {
          height: tokens.spacing[48],
        },
        sizeLarge: {
          height: tokens.spacing[56],
        },
        outlined: {
          borderColor: tokens.colors.zinc[300],
          '&:hover': { borderColor: tokens.colors.zinc[400] },
        },
        containedPrimary: {
          '&:hover': { backgroundColor: tokens.colors.midnight[700] },
        },
        startIcon: {
          color: tokens.fg.muted,
          '& > svg': { width: 16, height: 16 },
        },
        endIcon: {
          color: tokens.fg.muted,
          '& > svg': { width: 16, height: 16 },
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
          marginBottom: tokens.spacing[6],
          '&.MuiInputLabel-shrink': { transform: 'none', maxWidth: '100%' },
          '&.Mui-error': { color: tokens.functional.main.error },
          '&.Mui-disabled': { color: tokens.fg.subtle },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        placeholder: ' ',
      },
      styleOverrides: {
        input: {
          fontSize: tokens.fontSizes.sm,
          lineHeight: tokens.lineHeights.body,
          '&::placeholder': {
            color: tokens.fg.subtle,
            opacity: 1,
          },
          '&.MuiInputBase-inputMultiline': {
            '&::-webkit-scrollbar-track': { margin: `${tokens.spacing[4]}px 0` },
          },
        },
        sizeSmall: {
          '&:not(.MuiInputBase-multiline)': {
            height: controlHeightSm,
          },
        },
        root: {
          backgroundColor: tokens.background.main.base.white,
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: tokens.colors.zinc[400],
            },
          },
          '&.Mui-disabled': {
            backgroundColor: tokens.background.main.base.subtle,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: tokens.colors.midnight[400],
            borderWidth: 1,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: tokens.functional.main.error,
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: tokens.border.main.default,
          },
          '&.MuiInputBase-multiline': {
            paddingRight: tokens.spacing[4],
          },
          // Higher specificity than MUI's .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input — no !important needed
          '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
            paddingRight: tokens.spacing[40],
          },
        },
        notchedOutline: {
          top: 0,
          borderColor: tokens.colors.zinc[300],
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          // MUI bumps padding-bottom to 24px on a CardContent that's the
          // last child of its Card — keep all four sides equal instead
          '&:last-child': {
            paddingBottom: tokens.spacing[16],
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: { color?: string; variant?: string } }) => ({
          borderRadius: tokens.radius['rounded-md'],
          maxWidth: '100%',
          overflow: 'hidden',
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
        label: {
          paddingLeft: tokens.spacing[8],
          paddingRight: tokens.spacing[8],
          fontSize: tokens.fontSizes.sm,
          fontWeight: 400,
          lineHeight: 1,
        },
        labelSmall: {
          paddingLeft: tokens.spacing[6],
          paddingRight: tokens.spacing[6],
          fontSize: tokens.fontSizes.xs,
          fontWeight: 400,
          lineHeight: 1,
        },
      },
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(({
      MuiDataGrid: {
        defaultProps: {
          rowHeight: dataGridRowHeight,
          columnHeaderHeight: dataGridRowHeight,
          getRowHeight: () => 'auto',
        },
        styleOverrides: {
          root: {
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'transparent',
              borderTop: `1px solid ${tokens.border.main.default}`,
              borderBottom: `1px solid ${tokens.colors.zinc[400]}`,
            },
            '& .MuiDataGrid-columnHeader': {
              paddingTop: tokens.spacing[8],
              paddingBottom: tokens.spacing[8],
              paddingLeft: 0,
              paddingRight: 0,
              borderRadius: 0,
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontSize: tokens.fontSizes.sm,
              fontWeight: 400,
              color: tokens.fg.muted,
            },
            // Sort icon + menu icon — same zinc grey, same size
            '& .MuiDataGrid-sortIcon': {
              color: tokens.colors.zinc[400],
              fontSize: tokens.fontSizes.sm,
              opacity: 1,
            },
            '& .MuiDataGrid-iconButtonContainer': {
              visibility: 'visible',
              '& button': {
                color: tokens.colors.zinc[400],
                padding: tokens.spacing[4],
                '&:hover': {
                  color: tokens.colors.zinc[600],
                  backgroundColor: 'transparent',
                },
              },
            },
            '& .MuiDataGrid-menuIcon': {
              marginLeft: 0,
              '& button': {
                color: tokens.colors.zinc[400],
                fontSize: tokens.fontSizes.sm,
                padding: tokens.spacing[4],
                '&:hover': {
                  color: tokens.colors.zinc[600],
                  backgroundColor: 'transparent',
                },
              },
            },
            // Remove focus outlines
            '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
              outline: 'none',
            },
            '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
              outline: 'none',
            },
            '& .MuiDataGrid-cell': {
              fontSize: tokens.fontSizes.sm,
              alignItems: 'flex-start',
              paddingTop: tokens.spacing[8],
              paddingBottom: tokens.spacing[8],
              paddingLeft: 0,
              paddingRight: 0,
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              lineHeight: 1.5,
              borderBottom: `1px solid ${tokens.border.main.default}`,
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: tokens.colors.zinc[50],
            },
            '&.MuiDataGrid-root .MuiDataGrid-row.Mui-selected': {
              backgroundColor: tokens.colors.zinc[100],
            },
            '&.MuiDataGrid-root .MuiDataGrid-row.Mui-selected:hover': {
              backgroundColor: tokens.colors.zinc[200],
            },
            // Summary/total row — opt in via getRowClassName={() => 'DynastyDataGrid-totalRow'}
            '& .DynastyDataGrid-totalRow': {
              backgroundColor: tokens.colors.zinc[100],
              fontWeight: 600,
              '& .MuiDataGrid-cell': {
                borderTop: `1px solid ${tokens.colors.zinc[400]}`,
              },
            },
            // Icons/checkboxes align to the top of the cell, not centered —
            // matters once cell content wraps to multiple lines
            '& .MuiDataGrid-cell .MuiIconButton-root, & .MuiDataGrid-cell .MuiCheckbox-root': {
              alignSelf: 'flex-start',
            },
          },
        },
      },
    }) as any),
    MuiDrawer: {
      defaultProps: {
        transitionDuration: { enter: 300, exit: 220 },
      },
      styleOverrides: {
        paper: ({ ownerState }: { ownerState: { anchor?: string } }) => ({
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1) !important',
          ...(ownerState.anchor === 'right' && {
            width: detailDrawerWidth,
            display: 'flex',
            flexDirection: 'column',
          }),
        }),
      },
    },
    MuiCollapse: {
      defaultProps: {
        timeout: { enter: 300, exit: 220 },
        easing: {
          enter: 'cubic-bezier(0.22, 1, 0.36, 1)',
          exit: 'cubic-bezier(0.22, 1, 0.36, 1)',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: `rgba(${sRgb}, 0.28)`,
          '&.MuiBackdrop-invisible': { backgroundColor: 'transparent' },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: tokens.radius['rounded-2xl'],
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '& .MuiButton-text': {
            border: `1px solid ${tokens.border.main.default}`,
            '&:hover': {
              borderColor: tokens.colors.zinc[300],
            },
          },
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
    MuiSwitch: {
      defaultProps: {
        // MUI's own Switch.js bakes a `color:'primary'` variant that sets the
        // checked track's background via a high-specificity nested selector
        // (`.MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track`), which
        // beats a plain track-slot override — the same class of specificity
        // trap as the small-size padding/thumb issue above. 'default' isn't
        // a real palette entry, so no such variant is generated, and our own
        // track styleOverrides apply uncontested.
        color: 'default',
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: { size?: string } }) => ({
          width: tokens.spacing[52],
          height: tokens.spacing[32],
          padding: 0,
          overflow: 'hidden',
          flexShrink: 0,
          ...(ownerState.size === 'small' && {
            width: tokens.spacing[36],
            height: tokens.spacing[20] + 2, // 22px: thumb(18) + padding(2)*2
            // MUI's own Switch.js bakes the small-size switchBase padding and
            // checked transform into the root's `size:small` variant via this
            // same nested selector, which outranks a plain switchBase-slot
            // override on specificity. Matching that shape here is the only
            // way to actually win the cascade (theme overrides are inserted
            // after component variants, so equal-specificity rules resolve
            // in our favor).
            '& .MuiSwitch-switchBase': {
              padding: tokens.spacing[2],
              '&.Mui-checked': {
                transform: `translateX(${tokens.spacing[14]}px)`,
              },
            },
            // Same specificity trap for the thumb: MUI's size:small variant
            // also hardcodes `& .MuiSwitch-thumb { width:16, height:16 }`
            // here, which otherwise beats the thumb slot's own override.
            '& .MuiSwitch-thumb': {
              width: tokens.spacing[18],
              height: tokens.spacing[18],
            },
          }),
        }),
        switchBase: {
          padding: tokens.spacing[2] + 1,
          margin: 0,
          '&.Mui-checked': {
            color: tokens.colors.base.white,
            transform: `translateX(${tokens.spacing[20]}px)`,
            margin: 0,
          },
        },
        thumb: {
          width: 26,
          height: 26,
          backgroundColor: tokens.colors.base.white,
          boxShadow: 'none',
        },
        track: {
          borderRadius: tokens.spacing[16],
          opacity: 0.35,
          backgroundColor: selectedColor,
          '.Mui-checked + &': {
            opacity: 1,
            backgroundColor: selectedColor,
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
        root: { padding: `0 ${tokens.spacing[16]}px` },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { padding: `0 ${tokens.spacing[16]}px ${tokens.spacing[16]}px` },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: tokens.fontSizes.sm,
          paddingTop: tokens.spacing[8],
          paddingBottom: tokens.spacing[8],
          paddingLeft: 0,
          paddingRight: 0,
          verticalAlign: 'top',
          lineHeight: 1.5,
          borderBottom: `1px solid ${tokens.border.main.default}`,
          borderLeft: 'none',
          borderRight: 'none',
        },
        head: {
          fontWeight: 400,
          color: tokens.fg.muted,
          verticalAlign: 'middle',
          borderTop: `1px solid ${tokens.border.main.default}`,
          borderBottom: `1px solid ${tokens.colors.zinc[400]}`,
          '&:focus': { outline: 'none' },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.background.main.base.white,
          '&:hover': {
            backgroundColor: tokens.colors.zinc[50],
          },
          '&.Mui-selected': {
            backgroundColor: tokens.colors.zinc[100],
            '&:hover': {
              backgroundColor: tokens.colors.zinc[200],
            },
          },
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: tokens.fg.muted,
          '&:hover': {
            color: tokens.fg.muted,
            '& .MuiTableSortLabel-icon': {
              color: tokens.colors.zinc[600],
              opacity: 1,
            },
          },
          '&.Mui-active': {
            color: tokens.fg.muted,
            '& .MuiTableSortLabel-icon': {
              color: tokens.colors.zinc[400],
              opacity: 1,
            },
          },
        },
        icon: {
          color: tokens.colors.zinc[400],
          opacity: 1,
          fontSize: tokens.fontSizes.sm,
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
    MuiTooltip: {
      defaultProps: {
        enterDelay: 300,
        enterNextDelay: 100,
        TransitionComponent: Fade,
        TransitionProps: { timeout: { enter: 120, exit: 80 } },
      },
      styleOverrides: {
        tooltip: {
          fontSize: tokens.fontSizes.sm,
          backgroundColor: tokens.colors.zinc[900],
          color: tokens.colors.base.white,
          borderRadius: tokens.radius['rounded-md'],
          padding: `${tokens.spacing[4] + 1}px ${tokens.spacing[10]}px`,
          animation: 'ds-tooltip-in 120ms cubic-bezier(0.22, 1, 0.36, 1) both',
        },
        arrow: {
          color: tokens.colors.zinc[900],
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        transitionDuration: { enter: 80, exit: 60 },
        TransitionComponent: Fade,
      },
      styleOverrides: {
        paper: {
          border: `1px solid ${tokens.border.main.default}`,
        },
        list: {
          padding: tokens.spacing[2],
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        transitionDuration: { enter: 80, exit: 60 },
        TransitionComponent: Fade,
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: tokens.fontSizes.sm,
          color: tokens.fg.muted,
          margin: tokens.spacing[2],
          paddingTop: tokens.spacing[4],
          paddingBottom: tokens.spacing[4],
          paddingLeft: tokens.spacing[8],
          paddingRight: tokens.spacing[8],
          borderRadius: tokens.radius['rounded-md'],
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: SelectIcon,
        MenuProps: { TransitionComponent: Fade },
      },
      styleOverrides: {
        icon: { right: tokens.spacing[14] },
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
        // Phosphor's square glyphs are a single flat color, so a filled box
        // with a contrasting icon (checked/indeterminate) needs composing by
        // hand — icon/checkedIcon/indeterminateIcon each render a fixed,
        // non-reactive element, so the three states are three separate spans
        // sharing one size/radius rather than one component branching on props.
        icon: (
          <span
            style={{
              width: tokens.spacing[18],
              height: tokens.spacing[18],
              borderRadius: tokens.radius.rounded,
              border: `1.5px solid ${mutedIconColor}`,
              boxSizing: 'border-box',
            }}
          />
        ),
        checkedIcon: (
          <span
            style={{
              width: tokens.spacing[18],
              height: tokens.spacing[18],
              borderRadius: tokens.radius.rounded,
              backgroundColor: selectedColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Check size={12} weight="bold" color={tokens.colors.base.white} />
          </span>
        ),
        indeterminateIcon: (
          <span
            style={{
              width: tokens.spacing[18],
              height: tokens.spacing[18],
              borderRadius: tokens.radius.rounded,
              backgroundColor: selectedColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Minus size={12} weight="bold" color={tokens.colors.base.white} />
          </span>
        ),
      },
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.colors.zinc[100],
          '&::after': {
            background: `linear-gradient(90deg, transparent, ${tokens.colors.zinc[50]}, transparent)`,
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
        popupIcon: <CaretDown size={18} weight="bold" />,
        clearIcon: <X size={16} weight="bold" />,
      },
      styleOverrides: {
        endAdornment: {
          right: tokens.spacing[14],
        },
        popupIndicator: {
          padding: 0,
          color: tokens.fg.muted,
          '&:hover': { backgroundColor: 'transparent' },
        },
        option: {
          fontSize: tokens.fontSizes.sm,
          color: tokens.fg.muted,
          '&.Mui-focused': {
            backgroundColor: `${tokens.colors.zinc[50]} !important`,
          },
          '&[aria-selected="true"]': {
            backgroundColor: `${tokens.colors.zinc[50]} !important`,
          },
          '&[aria-selected="true"].Mui-focused': {
            backgroundColor: `${tokens.colors.zinc[100]} !important`,
          },
        },
      },
    },
    MuiRating: {
      defaultProps: {
        icon: <Star size={24} weight="fill" />,
        emptyIcon: <Star size={24} weight="bold" />,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
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
    MuiPagination: {
      defaultProps: {
        shape: 'rounded',
        color: 'standard',
        hidePrevButton: true,
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: { selected?: boolean } }) => ({
          fontSize: tokens.fontSizes.sm,
          fontWeight: 400,
          color: tokens.fg.muted,
          '&:hover': {
            backgroundColor: tokens.colors.zinc[50],
          },
          ...(ownerState.selected && {
            backgroundColor: tokens.colors.zinc[100],
            color: tokens.colors.zinc[900],
            fontWeight: 500,
            '&:hover': {
              backgroundColor: tokens.colors.zinc[100],
            },
          }),
        }),
      },
    },
  },
}

export const theme = createTheme(themeOptions)
export default theme

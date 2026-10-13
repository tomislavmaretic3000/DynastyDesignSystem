# Dynasty Design System — AI Reference

## Overview
Dynasty Design System (DynastyDS) is a MUI v5-based design system.
Tokens are sourced from Figma via Tokens Studio → Style Dictionary → MUI theme.

## Package
`@dynasty-ds/ui`

**Always import from `@dynasty-ds/ui` — never directly from `@mui/material`.**
Exception: `ThemeProvider` and `CssBaseline` are imported from `@mui/material`.

```ts
import { Button, TextField, Stack } from '@dynasty-ds/ui'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@dynasty-ds/ui'
```

## App Setup

```tsx
// app/layout.tsx or _app.tsx
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@dynasty-ds/ui'

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
```

## Design Rules
- **Colors**: Never hardcode hex values. Use `theme.palette.*` via `sx` or `styled()`.
- **Spacing**: Use MUI system — `sx={{ p: 2, gap: 1 }}` maps to multiples of `theme.spacing(1)` = 8px.
- **Typography**: Always use `<Typography variant="...">` — never raw `<p>`, `<h1>`, etc.
- **Custom components**: Only build custom components for features MUI cannot support.
- **One-off overrides**: `sx` prop. Reusable styled variants: `styled()` from `@mui/material/styles`.

## Available Components

### Layout
`Box` `Container` `Grid` `Grid2` `Stack`

### Navigation
`AppBar` `Toolbar` `Drawer` `Menu` `MenuItem` `Tabs` `Tab`

### Inputs
`Button` `IconButton` `TextField` `Select` `FormControl` `FormLabel`
`FormHelperText` `InputLabel` `Checkbox` `Radio` `RadioGroup` `Switch`
`Slider` `Autocomplete`

### Data Display
`Typography` `Avatar` `Badge` `Chip` `Divider` `List` `ListItem`
`ListItemText` `ListItemIcon` `Table` `TableBody` `TableCell`
`TableContainer` `TableHead` `TableRow`

### Feedback
`Alert` `CircularProgress` `LinearProgress` `Skeleton` `Snackbar`
`Dialog` `DialogTitle` `DialogContent` `DialogActions` `Tooltip`

### Surfaces
`Card` `CardContent` `CardHeader` `CardActions` `CardMedia` `Paper`
`Accordion` `AccordionSummary` `AccordionDetails`

## Component Usage Patterns

### Button
```tsx
// variants: contained | outlined | text
// colors: primary | secondary | error | warning | info | success
// sizes: small | medium | large
<Button variant="contained" color="primary">Label</Button>
<Button variant="outlined" color="secondary" size="small">Label</Button>
<Button variant="text" disabled>Label</Button>
<Button variant="contained" startIcon={<SomeIcon />}>With Icon</Button>
```

### TextField
```tsx
// variants: outlined | filled | standard
<TextField label="Label" variant="outlined" fullWidth />
<TextField label="Email" type="email" variant="outlined" />
<TextField label="Label" error helperText="Required field" />
<TextField label="Notes" multiline rows={4} />
```

### Select
```tsx
<FormControl fullWidth>
  <InputLabel>Label</InputLabel>
  <Select value={value} label="Label" onChange={handleChange}>
    <MenuItem value="a">Option A</MenuItem>
    <MenuItem value="b">Option B</MenuItem>
  </Select>
</FormControl>
```

### Typography
```tsx
// variants: h1 h2 h3 h4 h5 h6 subtitle1 subtitle2 body1 body2 caption overline
<Typography variant="h4">Heading</Typography>
<Typography variant="body1" color="text.secondary">Body text</Typography>
<Typography variant="caption">Small label</Typography>
```

### Card
```tsx
<Card>
  <CardHeader title="Title" subheader="Subheader" />
  <CardContent>
    <Typography variant="body2">Content goes here</Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Action</Button>
  </CardActions>
</Card>
```

### Dialog
```tsx
<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
  <DialogTitle>Title</DialogTitle>
  <DialogContent>
    <Typography>Content</Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} variant="text">Cancel</Button>
    <Button onClick={handleSubmit} variant="contained">Confirm</Button>
  </DialogActions>
</Dialog>
```

### Alert
```tsx
// severities: success | info | warning | error
<Alert severity="success">Operation completed.</Alert>
<Alert severity="error" onClose={handleClose}>Something went wrong.</Alert>
```

## Token Pipeline
Tokens live in `tools/tokens/tokens/`. Run `pnpm tokens` to regenerate `packages/ui/src/tokens/index.ts`.
Never edit `packages/ui/src/tokens/index.ts` directly — it is auto-generated.

## Storybook
Source of truth for all components. Run `pnpm storybook` to open.
Stories: `packages/ui/src/components/**/*.stories.tsx`

## Repo Structure
```
packages/ui/        → @dynasty-ds/ui (the publishable package)
apps/storybook/     → Component documentation & visual reference
tools/tokens/       → Figma token export → MUI theme pipeline
ai-context/         → Reference files for AI tools (Lovable, etc.)
```

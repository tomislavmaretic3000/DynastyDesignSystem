# Dynasty Design System — Lovable System Prompt

Paste the block below into Lovable's project system prompt, or prepend it to any prompt
where you want Lovable to respect the design system.

---

## System Prompt Block

You are building UI using the **Dynasty Design System**, built on **MUI v5**.

**Package:** `@dynasty-ds/ui`

### Import rules
- Import ALL components from `@dynasty-ds/ui`, never directly from `@mui/material`
- Exception: `ThemeProvider` and `CssBaseline` come from `@mui/material`
- Import the theme: `import { theme } from '@dynasty-ds/ui'`

### App root (required once per app)
```tsx
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@dynasty-ds/ui'

<ThemeProvider theme={theme}>
  <CssBaseline />
  {children}
</ThemeProvider>
```

### Styling rules
- Never use hardcoded hex colors — use `sx={{ color: 'primary.main' }}` or `theme.palette.*`
- Spacing: use `sx={{ p: 2, gap: 1, mt: 3 }}` — each unit = 8px
- Text: always `<Typography variant="...">` — never `<p>`, `<h1>`, `<span>` for content
- One-off styles: `sx` prop. Reusable: `styled()` from `@mui/material/styles`

### Available components
- **Layout:** Box, Container, Grid, Grid2, Stack
- **Navigation:** AppBar, Toolbar, Drawer, Menu, MenuItem, Tabs, Tab
- **Inputs:** Button, IconButton, TextField, Select, FormControl, FormLabel, FormHelperText, InputLabel, Checkbox, Radio, RadioGroup, Switch, Slider, Autocomplete
- **Data Display:** Typography, Avatar, Badge, Chip, Divider, List, ListItem, ListItemText, ListItemIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow
- **Feedback:** Alert, CircularProgress, LinearProgress, Skeleton, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions, Tooltip
- **Surfaces:** Card, CardContent, CardHeader, CardActions, CardMedia, Paper, Accordion, AccordionSummary, AccordionDetails

### Do not
- Create custom Button, TextField, Select, Checkbox, or any component MUI already covers
- Use CSS files or Tailwind classes — MUI sx prop only
- Hardcode any color, font size, or spacing value

import type { Meta, StoryObj } from '@storybook/react'
import { Box, Stack, Typography, Divider, Grid, Paper, Chip } from '@dynasty-ds/ui'
import { tokens } from '../../tokens'

const meta: Meta = {
  title: 'Design Tokens/Overview',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

const colorGroups = [
  { name: 'Blue', palette: tokens.colors.blue },
  { name: 'Midnight', palette: tokens.colors.midnight },
  { name: 'Emerald', palette: tokens.colors.emerald },
  { name: 'Lime', palette: tokens.colors.lime },
  { name: 'Teal', palette: tokens.colors.teal },
  { name: 'Red', palette: tokens.colors.red },
  { name: 'Yellow', palette: tokens.colors.yellow },
  { name: 'Tangerine', palette: tokens.colors.tangerine },
  { name: 'Royal', palette: tokens.colors.royal },
  { name: 'Cyan', palette: tokens.colors.cyan },
  { name: 'Gray', palette: tokens.colors.gray },
  { name: 'Zinc', palette: tokens.colors.zinc },
]

function ColorSwatch({ color, label }: { color: string; label: string }) {
  const isLight = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return (r * 299 + g * 587 + b * 114) / 1000 > 128
  }
  return (
    <Box
      sx={{
        bgcolor: color,
        borderRadius: 1,
        p: 1.5,
        minHeight: 64,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <Typography variant="caption" sx={{ color: isLight(color) ? '#000' : '#fff', fontWeight: 500 }}>
        {label}
      </Typography>
      <Typography variant="caption" sx={{ color: isLight(color) ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)', fontSize: 10 }}>
        {color}
      </Typography>
    </Box>
  )
}

export const ColorPalette: Story = {
  render: () => (
    <Stack spacing={4}>
      {colorGroups.map(({ name, palette }) => (
        <Box key={name}>
          <Typography variant="subtitle2" gutterBottom>{name}</Typography>
          <Grid container spacing={1}>
            {Object.entries(palette).map(([scale, color]) => (
              <Grid item key={scale} xs={1}>
                <ColorSwatch color={color as string} label={scale} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  ),
}

export const SemanticColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="subtitle1" fontWeight={600}>Semantic — Functional</Typography>
      <Grid container spacing={2}>
        {[
          { label: 'Error', color: tokens.functional.main.error },
          { label: 'Error Light', color: tokens.functional.main['error-light'] },
          { label: 'Error Dark', color: tokens.functional.main['error-dark'] },
          { label: 'Warning', color: tokens.functional.main.warning },
          { label: 'Warning Light', color: tokens.functional.main['warning-light'] },
          { label: 'Warning Dark', color: tokens.functional.main['warning-dark'] },
          { label: 'Success', color: tokens.functional.main.success },
          { label: 'Success Light', color: tokens.functional.main['success-light'] },
          { label: 'Success Dark', color: tokens.functional.main['success-dark'] },
          { label: 'Info', color: tokens.functional.main.info },
          { label: 'Info Light', color: tokens.functional.main['info-light'] },
          { label: 'Info Dark', color: tokens.functional.main['info-dark'] },
        ].map(({ label, color }) => (
          <Grid item xs={2} key={label}>
            <ColorSwatch color={color} label={label} />
          </Grid>
        ))}
      </Grid>

      <Divider />
      <Typography variant="subtitle1" fontWeight={600}>Semantic — Foreground / Background</Typography>
      <Grid container spacing={2}>
        {[
          { label: 'fg.default', color: tokens.fg.default },
          { label: 'fg.muted', color: tokens.fg.muted },
          { label: 'fg.subtle', color: tokens.fg.subtle },
          { label: 'bg.default', color: tokens.bg.default },
          { label: 'bg.muted', color: tokens.bg.muted },
          { label: 'bg.subtle', color: tokens.bg.subtle },
        ].map(({ label, color }) => (
          <Grid item xs={2} key={label}>
            <Box sx={{ bgcolor: color, border: '1px solid', borderColor: 'divider', borderRadius: 1, p: 1.5, minHeight: 64 }}>
              <Typography variant="caption" sx={{ fontSize: 10 }}>{label}</Typography>
              <Typography variant="caption" display="block" sx={{ fontSize: 10, color: 'text.secondary' }}>{color}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  ),
}

export const Typography_: Story = {
  name: 'Typography Scale',
  render: () => (
    <Stack spacing={2}>
      {[
        { label: 'H1', size: tokens.fontSizes.h1 },
        { label: 'H2', size: tokens.fontSizes.h2 },
        { label: 'H3', size: tokens.fontSizes.h3 },
        { label: 'H4', size: tokens.fontSizes.h4 },
        { label: 'H5', size: tokens.fontSizes.h5 },
        { label: 'H6', size: tokens.fontSizes.h6 },
        { label: 'Body', size: tokens.fontSizes.body },
        { label: 'SM', size: tokens.fontSizes.sm },
        { label: 'XS', size: tokens.fontSizes.xs },
      ].map(({ label, size }) => (
        <Stack key={label} direction="row" alignItems="baseline" spacing={3}>
          <Typography variant="caption" color="text.secondary" sx={{ width: 40 }}>{label}</Typography>
          <Typography variant="caption" color="text.disabled" sx={{ width: 60 }}>{size}px · Geist</Typography>
          <Typography sx={{ fontSize: size, fontFamily: '"Geist", sans-serif' }}>
            The quick brown fox
          </Typography>
        </Stack>
      ))}
    </Stack>
  ),
}

export const Spacing_: Story = {
  name: 'Spacing Scale',
  render: () => (
    <Stack spacing={2}>
      {Object.entries(tokens.spacing).filter(([k]) => !isNaN(Number(k))).map(([key, value]) => (
        <Stack key={key} direction="row" alignItems="center" spacing={2}>
          <Typography variant="caption" color="text.secondary" sx={{ width: 40 }}>spacing.{key}</Typography>
          <Typography variant="caption" color="text.disabled" sx={{ width: 50 }}>{value}px</Typography>
          <Box sx={{ height: 8, bgcolor: 'primary.main', borderRadius: 0.5, width: Number(value) }} />
        </Stack>
      ))}
    </Stack>
  ),
}

export const Elevation_: Story = {
  name: 'Elevation & Shadows',
  render: () => (
    <Stack spacing={3}>
      <Typography variant="caption" color="text.secondary">
        Adjust <code>shadowOpacity</code> in <code>packages/ui/src/theme/index.ts</code> to tune all levels at once.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((level) => (
          <Stack key={level} alignItems="center" spacing={1.5}>
            <Paper
              elevation={level}
              sx={{ width: 88, height: 88, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Typography variant="caption" color="text.secondary" fontWeight={600}>{level}</Typography>
            </Paper>
            <Typography variant="caption" color="text.disabled">elevation {level}</Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  ),
}

export const BorderRadius_: Story = {
  name: 'Border Radius',
  render: () => (
    <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
      {Object.entries(tokens.radius).map(([name, value]) => (
        <Stack key={name} alignItems="center" spacing={1}>
          <Box sx={{ width: 80, height: 80, bgcolor: 'primary.light', borderRadius: `${value}px` }} />
          <Typography variant="caption" color="text.secondary">{name}</Typography>
          <Typography variant="caption" color="text.disabled">{value}px</Typography>
        </Stack>
      ))}
    </Stack>
  ),
}

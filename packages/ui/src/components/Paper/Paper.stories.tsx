import type { Meta, StoryObj } from '@storybook/react'
import { Paper, Stack, Box, Typography, Grid } from '@dynasty-ds/ui'

const meta: Meta<typeof Paper> = {
  title: 'Components/Surfaces/Paper',
  component: Paper,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Paper>

export const Elevation: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="flex-start">
      {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((e) => (
        <Paper key={e} elevation={e} sx={{ p: 2, minWidth: 72, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">e={e}</Typography>
        </Paper>
      ))}
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="subtitle2" gutterBottom>Elevation (default)</Typography>
        <Typography variant="body2" color="text.secondary">Uses box-shadow to indicate depth.</Typography>
      </Paper>
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography variant="subtitle2" gutterBottom>Outlined</Typography>
        <Typography variant="body2" color="text.secondary">Uses a border instead of shadow. Good for cards on white backgrounds.</Typography>
      </Paper>
    </Stack>
  ),
}

export const Shapes: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Paper elevation={3} square sx={{ p: 3 }}>
        <Typography variant="caption" color="text.secondary">square</Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="caption" color="text.secondary">default radius</Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 6 }}>
        <Typography variant="caption" color="text.secondary">rounded-xl</Typography>
      </Paper>
    </Stack>
  ),
}

export const AsContainer: Story = {
  name: 'As section container',
  render: () => (
    <Grid container spacing={2} sx={{ maxWidth: 640 }}>
      {[
        { title: 'Total revenue', value: '$48,295', change: '+12.5%' },
        { title: 'Active users', value: '3,842', change: '+8.1%' },
        { title: 'Conversion', value: '3.6%', change: '+0.4%' },
      ].map(({ title, value, change }) => (
        <Grid item xs={12} sm={4} key={title}>
          <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
            <Typography variant="caption" color="text.secondary" display="block">{title}</Typography>
            <Typography variant="h5" fontWeight={700} sx={{ my: 0.5 }}>{value}</Typography>
            <Typography variant="caption" color="success.main" fontWeight={500}>{change}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  ),
}

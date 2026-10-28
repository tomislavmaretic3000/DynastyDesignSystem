import type { Meta, StoryObj } from '@storybook/react'
import { Fab, Stack, Box, Tooltip } from '@dynasty-ds/ui'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import NavigationIcon from '@mui/icons-material/Navigation'
import FavoriteIcon from '@mui/icons-material/Favorite'

const meta: Meta<typeof Fab> = {
  title: 'Components/Inputs/FAB',
  component: Fab,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['circular', 'extended'] },
  },
}

export default meta
type Story = StoryObj<typeof Fab>

export const Default: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab aria-label="favorite">
        <FavoriteIcon />
      </Fab>
      <Fab disabled aria-label="disabled">
        <AddIcon />
      </Fab>
    </Stack>
  ),
}

export const Extended: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab variant="extended" color="secondary">
        <AddIcon sx={{ mr: 1 }} />
        Create
      </Fab>
      <Fab variant="extended" disabled>
        <EditIcon sx={{ mr: 1 }} />
        Disabled
      </Fab>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Fab size="small" color="primary" aria-label="add small">
        <AddIcon fontSize="small" />
      </Fab>
      <Fab size="medium" color="primary" aria-label="add medium">
        <AddIcon />
      </Fab>
      <Fab size="large" color="primary" aria-label="add large">
        <AddIcon />
      </Fab>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <Tooltip key={color} title={color} placement="top">
          <Fab color={color} aria-label={color}>
            <AddIcon />
          </Fab>
        </Tooltip>
      ))}
    </Stack>
  ),
}

export const PageContext: Story = {
  name: 'Page context (fixed position)',
  render: () => (
    <Box sx={{ position: 'relative', height: 200, bgcolor: 'background.default', border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ p: 2 }}>
        <Stack spacing={1}>
          {['Item one', 'Item two', 'Item three'].map((t) => (
            <Box key={t} sx={{ p: 1.5, bgcolor: 'background.paper', borderRadius: 1, border: 1, borderColor: 'divider' }}>{t}</Box>
          ))}
        </Stack>
      </Box>
      <Fab
        color="primary"
        size="medium"
        aria-label="add"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </Box>
  ),
}

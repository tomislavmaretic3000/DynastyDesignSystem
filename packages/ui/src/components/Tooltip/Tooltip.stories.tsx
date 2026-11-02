import { Trash, Plus, Info } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, Button, IconButton, Stack, Box, Typography, Fab, Chip } from '@dynasty-ds/ui'




const meta: Meta<typeof Tooltip> = {
  title: 'Components/Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip title="This is a tooltip">
      <Button variant="outlined">Hover me</Button>
    </Tooltip>
  ),
}

export const Placements: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 1, width: 'fit-content', mx: 'auto' }}>
      <Tooltip title="top-start" placement="top-start"><Button size="small" variant="outlined">top-start</Button></Tooltip>
      <Tooltip title="top" placement="top"><Button size="small" variant="outlined">top</Button></Tooltip>
      <Tooltip title="top-end" placement="top-end"><Button size="small" variant="outlined">top-end</Button></Tooltip>
      <Tooltip title="left" placement="left"><Button size="small" variant="outlined">left</Button></Tooltip>
      <Box />
      <Tooltip title="right" placement="right"><Button size="small" variant="outlined">right</Button></Tooltip>
      <Tooltip title="bottom-start" placement="bottom-start"><Button size="small" variant="outlined">bottom-start</Button></Tooltip>
      <Tooltip title="bottom" placement="bottom"><Button size="small" variant="outlined">bottom</Button></Tooltip>
      <Tooltip title="bottom-end" placement="bottom-end"><Button size="small" variant="outlined">bottom-end</Button></Tooltip>
    </Box>
  ),
}

export const Arrow: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Tooltip title="With arrow" arrow>
        <Button variant="contained">Arrow tooltip</Button>
      </Tooltip>
      <Tooltip title="Without arrow">
        <Button variant="outlined">No arrow</Button>
      </Tooltip>
    </Stack>
  ),
}

export const RichContent: Story = {
  render: () => (
    <Tooltip
      arrow
      title={
        <Stack spacing={0.5}>
          <Typography variant="subtitle2">Keyboard shortcut</Typography>
          <Typography variant="caption" color="inherit" sx={{ opacity: 0.8 }}>
            Press ⌘ + K to open the command palette
          </Typography>
        </Stack>
      }
    >
      <Button variant="outlined" startIcon={<Info />}>Rich tooltip</Button>
    </Tooltip>
  ),
}

export const OnIcons: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Tooltip title="Delete item">
        <IconButton color="error"><Trash /></IconButton>
      </Tooltip>
      <Tooltip title="Add new">
        <Fab size="small" color="primary"><Plus /></Fab>
      </Tooltip>
      <Tooltip title="Pro plan only" arrow>
        <span>
          <Chip label="Export CSV" disabled />
        </span>
      </Tooltip>
    </Stack>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tooltip title="Tooltips work on disabled elements too" arrow>
      <span>
        <Button variant="contained" disabled>Disabled button</Button>
      </span>
    </Tooltip>
  ),
}

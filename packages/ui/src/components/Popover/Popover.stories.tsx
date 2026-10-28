import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Popover, Button, Typography, Box, Stack, TextField,
  Divider, List, ListItemButton, ListItemText, Avatar, Chip,
} from '@dynasty-ds/ui'

const meta: Meta<typeof Popover> = {
  title: 'Components/Utils/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)
    return (
      <Box>
        <Button variant="outlined" onClick={(e) => setAnchor(e.currentTarget)}>Open popover</Button>
        <Popover
          open={Boolean(anchor)}
          anchorEl={anchor}
          onClose={() => setAnchor(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Box sx={{ p: 2, maxWidth: 260 }}>
            <Typography variant="body2">
              A popover can be used to display some content on top of another. Unlike a tooltip it requires interaction to open.
            </Typography>
          </Box>
        </Popover>
      </Box>
    )
  },
}

export const UserCard: Story = {
  name: 'User profile card',
  render: () => {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null)
    return (
      <Box>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }} onClick={(e) => setAnchor(e.currentTarget)}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 14 }}>A</Avatar>
          <Typography variant="body2" fontWeight={500}>Alex Morgan</Typography>
        </Stack>
        <Popover
          open={Boolean(anchor)}
          anchorEl={anchor}
          onClose={() => setAnchor(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <Box sx={{ p: 2, width: 260 }}>
            <Stack direction="row" spacing={2} alignItems="center" mb={1.5}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 44, height: 44 }}>AM</Avatar>
              <Box>
                <Typography variant="subtitle2">Alex Morgan</Typography>
                <Typography variant="caption" color="text.secondary">alex@dynasty.com</Typography>
              </Box>
            </Stack>
            <Chip label="Pro plan" size="small" color="secondary" sx={{ mb: 1.5 }} />
            <Divider sx={{ mb: 1 }} />
            <List dense disablePadding>
              <ListItemButton sx={{ borderRadius: 1 }}><ListItemText primary="View profile" /></ListItemButton>
              <ListItemButton sx={{ borderRadius: 1 }}><ListItemText primary="Settings" /></ListItemButton>
              <ListItemButton sx={{ borderRadius: 1, color: 'error.main' }}><ListItemText primary="Sign out" /></ListItemButton>
            </List>
          </Box>
        </Popover>
      </Box>
    )
  },
}

export const FilterPopover: Story = {
  name: 'Filter panel',
  render: () => {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)
    const [status, setStatus] = useState('all')
    return (
      <Box>
        <Button variant="outlined" size="small" onClick={(e) => setAnchor(e.currentTarget)}>
          Filter {status !== 'all' ? `· ${status}` : ''}
        </Button>
        <Popover
          open={Boolean(anchor)}
          anchorEl={anchor}
          onClose={() => setAnchor(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Box sx={{ p: 2, width: 220 }}>
            <Typography variant="subtitle2" gutterBottom>Filter by status</Typography>
            <Stack spacing={0.5}>
              {['all', 'active', 'inactive', 'pending'].map((s) => (
                <ListItemButton
                  key={s}
                  selected={status === s}
                  onClick={() => { setStatus(s); setAnchor(null) }}
                  sx={{ borderRadius: 1, textTransform: 'capitalize' }}
                >
                  <ListItemText primary={s} primaryTypographyProps={{ variant: 'body2' }} />
                </ListItemButton>
              ))}
            </Stack>
          </Box>
        </Popover>
      </Box>
    )
  },
}

export const Anchors: Story = {
  name: 'Anchor positions',
  render: () => {
    const [anchor, setAnchor] = useState<{ el: HTMLButtonElement; pos: string } | null>(null)
    const positions = [
      { label: 'Bottom left', origin: { vertical: 'bottom' as const, horizontal: 'left' as const } },
      { label: 'Bottom center', origin: { vertical: 'bottom' as const, horizontal: 'center' as const } },
      { label: 'Bottom right', origin: { vertical: 'bottom' as const, horizontal: 'right' as const } },
    ]
    return (
      <Stack direction="row" spacing={1}>
        {positions.map(({ label, origin }) => (
          <Button key={label} size="small" variant="outlined" onClick={(e) => setAnchor({ el: e.currentTarget, pos: label })}>
            {label}
          </Button>
        ))}
        <Popover
          open={Boolean(anchor)}
          anchorEl={anchor?.el}
          onClose={() => setAnchor(null)}
          anchorOrigin={positions.find((p) => p.label === anchor?.pos)?.origin ?? { vertical: 'bottom', horizontal: 'left' }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="body2">{anchor?.pos}</Typography>
          </Box>
        </Popover>
      </Stack>
    )
  },
}

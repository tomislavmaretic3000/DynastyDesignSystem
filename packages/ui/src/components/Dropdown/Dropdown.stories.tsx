import { useState, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Button, Menu, MenuItem, IconButton, Divider, ListItemIcon,
  ListItemText, Typography, Stack, Chip, Avatar, Box,
} from '@dynasty-ds/ui'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import EditIcon from '@mui/icons-material/Edit'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'
import ArchiveIcon from '@mui/icons-material/Archive'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'

const meta: Meta = {
  title: 'Components/Navigation/Dropdown',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

function DropdownMenu({ trigger, items }: {
  trigger: ReactNode
  items: ReactNode
}) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  return (
    <>
      <Box onClick={(e) => setAnchor(e.currentTarget as HTMLElement)}>{trigger}</Box>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
        <Box onClick={() => setAnchor(null)}>{items}</Box>
      </Menu>
    </>
  )
}

export const Default: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
          Options
        </Button>
      }
      items={
        <>
          <MenuItem>Option One</MenuItem>
          <MenuItem>Option Two</MenuItem>
          <MenuItem>Option Three</MenuItem>
        </>
      }
    />
  ),
}

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <Button variant="contained" endIcon={<KeyboardArrowDownIcon />}>
          Actions
        </Button>
      }
      items={
        <>
          <MenuItem>
            <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon><ContentCopyIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Duplicate</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon><ArchiveIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Archive</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem sx={{ color: 'error.main' }}>
            <ListItemIcon><DeleteIcon fontSize="small" color="error" /></ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </>
      }
    />
  ),
}

export const IconButtonMenu: Story = {
  render: () => (
    <DropdownMenu
      trigger={<IconButton><MoreVertIcon /></IconButton>}
      items={
        <>
          <MenuItem>
            <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon><ContentCopyIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Copy link</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem sx={{ color: 'error.main' }}>
            <ListItemIcon><DeleteIcon fontSize="small" color="error" /></ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </>
      }
    />
  ),
}

export const UserMenu: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <Stack direction="row" spacing={1} alignItems="center" sx={{ cursor: 'pointer' }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>A</Avatar>
          <Typography variant="body2" fontWeight={500}>Alex Morgan</Typography>
          <KeyboardArrowDownIcon fontSize="small" />
        </Stack>
      }
      items={
        <>
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography variant="subtitle2">Alex Morgan</Typography>
            <Typography variant="caption" color="text.secondary">alex@dynasty.com</Typography>
          </Box>
          <Divider />
          <MenuItem>
            <ListItemIcon><PersonIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon><SettingsIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </MenuItem>
        </>
      }
    />
  ),
}

export const WithDescriptions: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
          New item
        </Button>
      }
      items={
        <>
          <MenuItem sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 1.5 }}>
            <Typography variant="body2" fontWeight={500}>Project</Typography>
            <Typography variant="caption" color="text.secondary">Create a new project workspace</Typography>
          </MenuItem>
          <MenuItem sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 1.5 }}>
            <Typography variant="body2" fontWeight={500}>Team</Typography>
            <Typography variant="caption" color="text.secondary">Invite people and create a team</Typography>
          </MenuItem>
          <MenuItem sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 1.5 }}>
            <Typography variant="body2" fontWeight={500}>Template</Typography>
            <Typography variant="caption" color="text.secondary">Start from a pre-built template</Typography>
          </MenuItem>
        </>
      }
    />
  ),
}

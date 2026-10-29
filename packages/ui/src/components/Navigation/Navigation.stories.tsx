import { List as ListIcon, Tray, SquaresFour, Users, Gear, Bell } from '@phosphor-icons/react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  AppBar, Toolbar, Tabs, Tab, Box, Typography, Button,
  IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Divider, Stack, Avatar,
} from '@dynasty-ds/ui'







const meta: Meta = {
  title: 'Components/Navigation',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const TopBar: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Dynasty
          </Typography>
          <Button color="inherit" variant="text">Login</Button>
          <Button color="inherit" variant="outlined" sx={{ ml: 1 }}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  ),
}

export const TopBarWithActions: Story = {
  render: () => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: 700, mr: 4 }}>Dynasty</Typography>
          <Stack direction="row" spacing={1} sx={{ flexGrow: 1 }}>
            {['Dashboard', 'Projects', 'Team', 'Reports'].map((item) => (
              <Button key={item} color="inherit" variant="text" size="small">{item}</Button>
            ))}
          </Stack>
          <IconButton size="large">
            <Bell />
          </IconButton>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', ml: 1 }}>A</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  ),
}

export const TabsHorizontal: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)}>
          <Tab label="Overview" />
          <Tab label="Analytics" />
          <Tab label="Reports" />
          <Tab label="Settings" disabled />
        </Tabs>
      </Box>
    )
  },
}

export const TabsWithContent: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    const panels = ['Overview content goes here.', 'Analytics charts go here.', 'Reports table goes here.']
    return (
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={(_, v) => setValue(v)}>
            <Tab label="Overview" />
            <Tab label="Analytics" />
            <Tab label="Reports" />
          </Tabs>
        </Box>
        <Box sx={{ p: 3 }}>
          <Typography variant="body1" color="text.secondary">{panels[value]}</Typography>
        </Box>
      </Box>
    )
  },
}

export const SideDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const items = [
      { label: 'Dashboard', icon: <SquaresFour /> },
      { label: 'Team', icon: <Users /> },
      { label: 'Inbox', icon: <Tray /> },
      { label: 'Settings', icon: <Gear /> },
    ]
    return (
      <>
        <Button variant="contained" startIcon={<ListIcon />} onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 240, pt: 2 }}>
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography variant="h6" fontWeight={700}>Dynasty</Typography>
            </Box>
            <Divider />
            <List>
              {items.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton onClick={() => setOpen(false)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    )
  },
}

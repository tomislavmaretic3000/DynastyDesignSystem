import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BottomNavigation, BottomNavigationAction, Box, Paper, Typography, Stack } from '@dynasty-ds/ui'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import DashboardIcon from '@mui/icons-material/Dashboard'

const meta: Meta<typeof BottomNavigation> = {
  title: 'Components/Navigation/Bottom Navigation',
  component: BottomNavigation,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof BottomNavigation>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <Box sx={{ maxWidth: 500, border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
        <BottomNavigation value={value} onChange={(_, v) => setValue(v)} showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Alerts" icon={<NotificationsIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </Box>
    )
  },
}

export const WithoutLabels: Story = {
  render: () => {
    const [value, setValue] = useState(1)
    return (
      <Box sx={{ maxWidth: 500, border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
        <BottomNavigation value={value} onChange={(_, v) => setValue(v)}>
          <BottomNavigationAction icon={<HomeIcon />} />
          <BottomNavigationAction icon={<SearchIcon />} />
          <BottomNavigationAction icon={<BookmarkIcon />} />
          <BottomNavigationAction icon={<PersonIcon />} />
        </BottomNavigation>
      </Box>
    )
  },
}

export const MobileAppFrame: Story = {
  name: 'Mobile app context',
  render: () => {
    const [value, setValue] = useState(0)
    const tabs = [
      { label: 'Home', icon: <HomeIcon />, content: 'Dashboard content goes here.' },
      { label: 'Search', icon: <SearchIcon />, content: 'Search results appear here.' },
      { label: 'Saved', icon: <BookmarkIcon />, content: 'Your saved items.' },
      { label: 'Me', icon: <PersonIcon />, content: 'Profile and account settings.' },
    ]
    return (
      <Box
        sx={{
          width: 375, height: 480, border: 1, borderColor: 'divider', borderRadius: 3,
          overflow: 'hidden', display: 'flex', flexDirection: 'column', mx: 'auto',
        }}
      >
        <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
          <Typography variant="h6" gutterBottom>{tabs[value].label}</Typography>
          <Typography variant="body2" color="text.secondary">{tabs[value].content}</Typography>
        </Box>
        <Paper elevation={3} square>
          <BottomNavigation value={value} onChange={(_, v) => setValue(v)} showLabels>
            {tabs.map(({ label, icon }) => (
              <BottomNavigationAction key={label} label={label} icon={icon} />
            ))}
          </BottomNavigation>
        </Paper>
      </Box>
    )
  },
}

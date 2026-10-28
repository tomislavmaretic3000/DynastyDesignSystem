import type { Meta, StoryObj } from '@storybook/react'
import { Box, Grid, Stack, Typography, TextField, Tooltip, Chip } from '@dynasty-ds/ui'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'
import WarningIcon from '@mui/icons-material/Warning'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MenuIcon from '@mui/icons-material/Menu'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import FilterListIcon from '@mui/icons-material/FilterList'
import SortIcon from '@mui/icons-material/Sort'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LockIcon from '@mui/icons-material/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import RefreshIcon from '@mui/icons-material/Refresh'
import LogoutIcon from '@mui/icons-material/Logout'

const meta: Meta = {
  title: 'Components/Data Display/Icons',
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

const iconGroups = [
  {
    label: 'Navigation',
    icons: [
      { icon: <HomeIcon />, name: 'Home' },
      { icon: <DashboardIcon />, name: 'Dashboard' },
      { icon: <ArrowBackIcon />, name: 'ArrowBack' },
      { icon: <ArrowForwardIcon />, name: 'ArrowForward' },
      { icon: <ExpandMoreIcon />, name: 'ExpandMore' },
      { icon: <MenuIcon />, name: 'Menu' },
    ],
  },
  {
    label: 'Actions',
    icons: [
      { icon: <AddIcon />, name: 'Add' },
      { icon: <EditIcon />, name: 'Edit' },
      { icon: <DeleteIcon />, name: 'Delete' },
      { icon: <SaveIcon />, name: 'Save' },
      { icon: <CloseIcon />, name: 'Close' },
      { icon: <CheckIcon />, name: 'Check' },
      { icon: <SearchIcon />, name: 'Search' },
      { icon: <RefreshIcon />, name: 'Refresh' },
      { icon: <ContentCopyIcon />, name: 'ContentCopy' },
      { icon: <MoreVertIcon />, name: 'MoreVert' },
      { icon: <FilterListIcon />, name: 'FilterList' },
      { icon: <SortIcon />, name: 'Sort' },
    ],
  },
  {
    label: 'Status',
    icons: [
      { icon: <CheckCircleIcon />, name: 'CheckCircle' },
      { icon: <WarningIcon />, name: 'Warning' },
      { icon: <ErrorIcon />, name: 'Error' },
      { icon: <InfoIcon />, name: 'Info' },
    ],
  },
  {
    label: 'Social / Misc',
    icons: [
      { icon: <StarIcon />, name: 'Star' },
      { icon: <FavoriteIcon />, name: 'Favorite' },
      { icon: <ShareIcon />, name: 'Share' },
      { icon: <NotificationsIcon />, name: 'Notifications' },
      { icon: <DownloadIcon />, name: 'Download' },
      { icon: <UploadIcon />, name: 'Upload' },
      { icon: <BarChartIcon />, name: 'BarChart' },
    ],
  },
  {
    label: 'User / Auth',
    icons: [
      { icon: <PersonIcon />, name: 'Person' },
      { icon: <EmailIcon />, name: 'Email' },
      { icon: <PhoneIcon />, name: 'Phone' },
      { icon: <LockIcon />, name: 'Lock' },
      { icon: <VisibilityIcon />, name: 'Visibility' },
      { icon: <VisibilityOffIcon />, name: 'VisibilityOff' },
      { icon: <LogoutIcon />, name: 'Logout' },
      { icon: <SettingsIcon />, name: 'Settings' },
    ],
  },
]

export const Catalog: Story = {
  render: () => (
    <Stack spacing={4}>
      {iconGroups.map(({ label, icons }) => (
        <Box key={label}>
          <Typography variant="subtitle2" gutterBottom>{label}</Typography>
          <Grid container spacing={2}>
            {icons.map(({ icon, name }) => (
              <Grid item key={name}>
                <Tooltip title={name}>
                  <Stack alignItems="center" spacing={0.5} sx={{ width: 64, cursor: 'default' }}>
                    <Box sx={{ color: 'text.secondary', display: 'flex' }}>{icon}</Box>
                    <Typography variant="caption" color="text.disabled" sx={{ fontSize: 9, textAlign: 'center', lineHeight: 1.2 }}>{name}</Typography>
                  </Stack>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      {(['small', 'medium', 'large'] as const).map((size) => (
        <Stack key={size} alignItems="center" spacing={0.5}>
          <HomeIcon fontSize={size} color="action" />
          <Typography variant="caption" color="text.secondary">{size}</Typography>
        </Stack>
      ))}
      <Stack alignItems="center" spacing={0.5}>
        <HomeIcon sx={{ fontSize: 40 }} color="action" />
        <Typography variant="caption" color="text.secondary">custom 40px</Typography>
      </Stack>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      {[
        { color: 'inherit' as const, label: 'inherit' },
        { color: 'action' as const, label: 'action' },
        { color: 'disabled' as const, label: 'disabled' },
        { color: 'primary' as const, label: 'primary' },
        { color: 'secondary' as const, label: 'secondary' },
        { color: 'error' as const, label: 'error' },
        { color: 'warning' as const, label: 'warning' },
        { color: 'info' as const, label: 'info' },
        { color: 'success' as const, label: 'success' },
      ].map(({ color, label }) => (
        <Stack key={label} alignItems="center" spacing={0.5}>
          <StarIcon color={color} />
          <Typography variant="caption" color="text.disabled" sx={{ fontSize: 9 }}>{label}</Typography>
        </Stack>
      ))}
    </Stack>
  ),
}

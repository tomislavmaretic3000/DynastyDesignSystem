import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  TextField, InputAdornment, IconButton, Stack, Box,
  List, ListItem, ListItemButton, ListItemText, ListItemIcon, Paper,
  Typography, Chip, CircularProgress,
} from '@dynasty-ds/ui'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import HistoryIcon from '@mui/icons-material/History'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PersonIcon from '@mui/icons-material/Person'

const meta: Meta = {
  title: 'Components/Inputs/Search Bar',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <TextField
        fullWidth
        placeholder="Search..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  ),
}

export const WithClear: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Box sx={{ maxWidth: 480 }}>
        <TextField
          fullWidth
          placeholder="Search..."
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            endAdornment: value ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setValue('')}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
        />
      </Box>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 480 }}>
      <TextField
        fullWidth
        placeholder="Small search"
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" color="action" /></InputAdornment>,
        }}
      />
      <TextField
        fullWidth
        placeholder="Medium search"
        variant="outlined"
        size="medium"
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>,
        }}
      />
    </Stack>
  ),
}

export const WithDropdownResults: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const results = ['Alex Morgan', 'Jordan Lee', 'Sam Rivera', 'Casey Kim']
      .filter((name) => value && name.toLowerCase().includes(value.toLowerCase()))

    return (
      <Box sx={{ maxWidth: 480, position: 'relative' }}>
        <TextField
          fullWidth
          placeholder="Search users..."
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>,
            endAdornment: value ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setValue('')}><ClearIcon fontSize="small" /></IconButton>
              </InputAdornment>
            ) : null,
          }}
        />
        {results.length > 0 && (
          <Paper
            elevation={4}
            sx={{ position: 'absolute', top: '100%', left: 0, right: 0, mt: 0.5, zIndex: 10 }}
          >
            <List dense>
              {results.map((name) => (
                <ListItemButton key={name} onClick={() => setValue(name)}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        )}
      </Box>
    )
  },
}

export const WithSuggestionsPanel: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [focused, setFocused] = useState(false)
    const recent = ['Dashboard analytics', 'Team members', 'Project settings']
    const trending = ['New feature requests', 'Q4 Reports', 'Design tokens']

    return (
      <Box sx={{ maxWidth: 480, position: 'relative' }}>
        <TextField
          fullWidth
          placeholder="Search..."
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>,
          }}
        />
        {focused && !value && (
          <Paper elevation={4} sx={{ position: 'absolute', top: '100%', left: 0, right: 0, mt: 0.5, zIndex: 10, p: 1 }}>
            <Typography variant="caption" color="text.secondary" sx={{ px: 1 }}>Recent</Typography>
            <List dense>
              {recent.map((item) => (
                <ListItemButton key={item} onClick={() => setValue(item)}>
                  <ListItemIcon sx={{ minWidth: 32 }}><HistoryIcon fontSize="small" color="action" /></ListItemIcon>
                  <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
                </ListItemButton>
              ))}
            </List>
            <Typography variant="caption" color="text.secondary" sx={{ px: 1 }}>Trending</Typography>
            <List dense>
              {trending.map((item) => (
                <ListItemButton key={item} onClick={() => setValue(item)}>
                  <ListItemIcon sx={{ minWidth: 32 }}><TrendingUpIcon fontSize="small" color="action" /></ListItemIcon>
                  <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        )}
      </Box>
    )
  },
}

export const Loading: Story = {
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <TextField
        fullWidth
        placeholder="Search..."
        variant="outlined"
        defaultValue="design sys"
        InputProps={{
          startAdornment: <InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>,
          endAdornment: <InputAdornment position="end"><CircularProgress size={20} /></InputAdornment>,
        }}
      />
    </Box>
  ),
}

export const FilterChips: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [filters, setFilters] = useState<string[]>(['Design'])
    const options = ['Design', 'Engineering', 'Product', 'Marketing']
    const toggle = (f: string) =>
      setFilters((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f])

    return (
      <Box sx={{ maxWidth: 560 }}>
        <TextField
          fullWidth
          placeholder="Search..."
          variant="outlined"
          size="small"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" color="action" /></InputAdornment>,
          }}
          sx={{ mb: 1.5 }}
        />
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {options.map((f) => (
            <Chip
              key={f}
              label={f}
              size="small"
              variant={filters.includes(f) ? 'filled' : 'outlined'}
              color={filters.includes(f) ? 'primary' : 'default'}
              onClick={() => toggle(f)}
            />
          ))}
        </Stack>
      </Box>
    )
  },
}

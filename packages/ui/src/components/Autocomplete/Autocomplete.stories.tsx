import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete, TextField, Stack, Chip, Avatar, Box, Typography } from '@dynasty-ds/ui'

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Inputs/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Autocomplete>

const countries = ['Afghanistan', 'Albania', 'Algeria', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'China', 'Croatia', 'Czech Republic', 'Denmark', 'Egypt', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kenya', 'Mexico', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Pakistan', 'Poland', 'Portugal', 'Romania', 'Russia', 'Saudi Arabia', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Ukraine', 'United Kingdom', 'United States', 'Vietnam']

const team = [
  { label: 'Alex Morgan', role: 'Designer' },
  { label: 'Jordan Lee', role: 'Engineer' },
  { label: 'Sam Rivera', role: 'Product' },
  { label: 'Casey Kim', role: 'Marketing' },
  { label: 'Taylor Brooks', role: 'Engineer' },
  { label: 'Morgan Walsh', role: 'Designer' },
]

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360 }}>
      <Autocomplete
        options={countries}
        renderInput={(params) => <TextField {...params} label="Country" />}
      />
    </Box>
  ),
}

export const FreeSolo: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360 }}>
      <Autocomplete
        freeSolo
        options={countries}
        renderInput={(params) => <TextField {...params} label="Search or enter country" />}
      />
    </Box>
  ),
}

export const WithObjectOptions: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360 }}>
      <Autocomplete
        options={team}
        getOptionLabel={(o) => o.label}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            <Stack>
              <Typography variant="body2">{option.label}</Typography>
              <Typography variant="caption" color="text.secondary">{option.role}</Typography>
            </Stack>
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Team member" />}
      />
    </Box>
  ),
}

export const MultipleValues: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    return (
      <Box sx={{ maxWidth: 480 }}>
        <Autocomplete
          multiple
          options={countries}
          value={value}
          onChange={(_, v) => setValue(v)}
          renderTags={(val, getTagProps) =>
            val.map((option, index) => (
              <Chip label={option} size="small" {...getTagProps({ index })} key={option} />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} label="Countries" placeholder="Add country" />
          )}
        />
      </Box>
    )
  },
}

export const Grouped: Story = {
  render: () => {
    const options = team.flatMap(({ label, role }) => ({ label, group: role }))
      .sort((a, b) => a.group.localeCompare(b.group))
    return (
      <Box sx={{ maxWidth: 360 }}>
        <Autocomplete
          options={options}
          groupBy={(o) => o.group}
          getOptionLabel={(o) => o.label}
          renderInput={(params) => <TextField {...params} label="Team member by role" />}
        />
      </Box>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360 }}>
      <Autocomplete
        disabled
        options={countries}
        defaultValue="France"
        renderInput={(params) => <TextField {...params} label="Country (disabled)" />}
      />
    </Box>
  ),
}

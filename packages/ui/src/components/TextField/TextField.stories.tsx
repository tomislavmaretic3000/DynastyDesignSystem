import type { Meta, StoryObj } from '@storybook/react'
import { TextField, Stack, Box } from '@dynasty-ds/ui'

const meta: Meta<typeof TextField> = {
  title: 'Components/Inputs/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      table: { defaultValue: { summary: 'outlined' } },
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      table: { defaultValue: { summary: 'medium' } },
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    multiline: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    variant: 'outlined',
  },
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={3} width={320}>
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} width={320}>
      <TextField label="Medium" size="medium" variant="outlined" />
      <TextField label="Small" size="small" variant="outlined" />
    </Stack>
  ),
}

export const States: Story = {
  render: () => (
    <Stack spacing={3} width={320}>
      <TextField label="Default" variant="outlined" />
      <TextField label="With value" variant="outlined" defaultValue="John Doe" />
      <TextField label="Focused" variant="outlined" autoFocus />
      <TextField label="Disabled" variant="outlined" disabled defaultValue="Disabled value" />
      <TextField label="Read only" variant="outlined" InputProps={{ readOnly: true }} defaultValue="Read only value" />
      <TextField label="Error" variant="outlined" error helperText="This field is required" />
    </Stack>
  ),
}

export const Types: Story = {
  render: () => (
    <Stack spacing={3} width={320}>
      <TextField label="Email" type="email" variant="outlined" placeholder="name@example.com" />
      <TextField label="Password" type="password" variant="outlined" />
      <TextField label="Number" type="number" variant="outlined" />
      <TextField label="Search" type="search" variant="outlined" />
    </Stack>
  ),
}

export const WithHelperText: Story = {
  render: () => (
    <Stack spacing={3} width={320}>
      <TextField label="Username" variant="outlined" helperText="Must be at least 4 characters" />
      <TextField label="Email" variant="outlined" error helperText="Please enter a valid email address" />
    </Stack>
  ),
}

export const Multiline: Story = {
  render: () => (
    <Stack spacing={3} width={320}>
      <TextField label="Notes" variant="outlined" multiline rows={3} />
      <TextField label="Description" variant="outlined" multiline minRows={3} maxRows={6} helperText="Expands up to 6 rows" />
    </Stack>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Box>
      <TextField label="Full width field" variant="outlined" fullWidth />
    </Box>
  ),
}

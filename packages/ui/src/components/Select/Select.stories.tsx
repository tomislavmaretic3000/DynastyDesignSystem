import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Select, FormControl, InputLabel, MenuItem,
  FormHelperText, Stack,
} from '@dynasty-ds/ui'

const meta: Meta = {
  title: 'Components/Inputs/Select',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

const options = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
]

function ControlledSelect({ label = 'Department', size = 'medium', error = false, disabled = false, helperText = '' }: {
  label?: string
  size?: 'small' | 'medium'
  error?: boolean
  disabled?: boolean
  helperText?: string
}) {
  const [value, setValue] = useState('')
  return (
    <FormControl fullWidth size={size} error={error} disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={(e) => setValue(e.target.value as string)}>
        {options.map((o) => (
          <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export const Default: Story = {
  render: () => (
    <Stack width={320}>
      <ControlledSelect />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} width={320}>
      <ControlledSelect label="Medium" size="medium" />
      <ControlledSelect label="Small" size="small" />
    </Stack>
  ),
}

export const States: Story = {
  render: () => (
    <Stack spacing={3} width={320}>
      <ControlledSelect label="Default" />
      <ControlledSelect label="Disabled" disabled />
      <ControlledSelect label="Error" error helperText="Please select a department" />
      <ControlledSelect label="With helper" helperText="Choose your team" />
    </Stack>
  ),
}

export const NativeSelect: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <FormControl fullWidth sx={{ width: 320 }}>
        <InputLabel shrink htmlFor="native-select">Department</InputLabel>
        <Select
          native
          value={value}
          label="Department"
          onChange={(e) => setValue(e.target.value as string)}
          inputProps={{ id: 'native-select' }}
        >
          <option value="">Select...</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </Select>
      </FormControl>
    )
  },
}

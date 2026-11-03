import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel,
  Stack, Box, Typography, Divider,
} from '@dynasty-ds/ui'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If true, the component is checked (controlled)',
      table: { defaultValue: { summary: 'undefined' } },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state (uncontrolled)',
      table: { defaultValue: { summary: false } },
    },
    indeterminate: {
      control: 'boolean',
      description: 'If true, the component appears indeterminate — used for select-all patterns',
      table: { defaultValue: { summary: false } },
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled',
      table: { defaultValue: { summary: false } },
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the checkbox',
      table: { defaultValue: { summary: 'medium' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'],
      description: 'The color of the checkbox when checked — all map to midnight-500 via theme override',
      table: { defaultValue: { summary: 'primary' } },
    },
    required: {
      control: 'boolean',
      description: 'If true, the input element is required',
      table: { defaultValue: { summary: false } },
    },
    disableRipple: {
      control: 'boolean',
      description: 'Disable the ripple effect — enabled by default in this DS',
      table: { defaultValue: { summary: true } },
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the state changes — (event: React.ChangeEvent<HTMLInputElement>) => void',
    },
  },
  args: {
    defaultChecked: false,
    indeterminate: false,
    disabled: false,
    size: 'medium',
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
  render: (args) => (
    <FormControlLabel control={<Checkbox {...args} />} label="Checkbox label" />
  ),
}

export const States: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormControlLabel control={<Checkbox />} label="Unchecked" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
      <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <FormControlLabel control={<Checkbox disabled defaultChecked />} label="Disabled checked" />
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <FormControlLabel
          key={color}
          control={<Checkbox defaultChecked color={color} />}
          label={color}
        />
      ))}
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Small" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Medium" />
    </Stack>
  ),
}

export const FormGroupExample: Story = {
  name: 'Form group',
  render: () => {
    const [state, setState] = useState({ design: true, engineering: false, product: true })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setState((prev) => ({ ...prev, [e.target.name]: e.target.checked }))
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Select departments</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={state.design} onChange={handleChange} name="design" />} label="Design" />
          <FormControlLabel control={<Checkbox checked={state.engineering} onChange={handleChange} name="engineering" />} label="Engineering" />
          <FormControlLabel control={<Checkbox checked={state.product} onChange={handleChange} name="product" />} label="Product" />
        </FormGroup>
      </FormControl>
    )
  },
}

export const WorstCase: Story = {
  name: 'Worst case — color matches Switch',
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <Typography variant="caption" color="text.secondary">
        Checked Checkbox and checked Switch must use the same active color (midnight-500)
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Checkbox checked" />
        <FormControlLabel control={<Switch defaultChecked />} label="Switch on" />
        <FormControlLabel control={<Switch size="small" defaultChecked />} label="Switch small" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
        <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Small" />
      </Stack>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Enable automatic background sync for all connected workspaces and sub-accounts — long label wraps without squishing the checkbox"
      />
    </Stack>
  ),
}

export const IndeterminateParent: Story = {
  name: 'Select all / indeterminate',
  render: () => {
    const items = ['Notifications', 'Email digest', 'SMS alerts']
    const [checked, setChecked] = useState([true, false, true])
    const allChecked = checked.every(Boolean)
    const someChecked = checked.some(Boolean) && !allChecked
    const toggle = (i: number) => setChecked((prev) => prev.map((v, idx) => idx === i ? !v : v))
    return (
      <Box>
        <FormControlLabel
          label={<Typography fontWeight={500}>All notifications</Typography>}
          control={
            <Checkbox
              checked={allChecked}
              indeterminate={someChecked}
              onChange={() => setChecked(checked.map(() => !allChecked))}
            />
          }
        />
        <Divider sx={{ my: 1 }} />
        <FormGroup sx={{ pl: 2 }}>
          {items.map((item, i) => (
            <FormControlLabel
              key={item}
              control={<Checkbox checked={checked[i]} onChange={() => toggle(i)} />}
              label={item}
            />
          ))}
        </FormGroup>
      </Box>
    )
  },
}

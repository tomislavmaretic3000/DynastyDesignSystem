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
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
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

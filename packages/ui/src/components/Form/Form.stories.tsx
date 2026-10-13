import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Box, Stack, Typography, TextField, Select, FormControl, InputLabel, MenuItem,
  Checkbox, Radio, RadioGroup, FormControlLabel, FormLabel, FormHelperText,
  Switch, Slider, Button, Divider, Card, CardContent,
} from '@dynasty-ds/ui'

const meta: Meta = {
  title: 'Components/Inputs/Form',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const CheckboxGroup: Story = {
  render: () => {
    const [checked, setChecked] = useState({ design: true, engineering: false, product: true })
    const toggle = (key: keyof typeof checked) =>
      setChecked((s) => ({ ...s, [key]: !s[key] }))
    return (
      <Stack>
        <FormLabel component="legend">Select teams</FormLabel>
        <FormControlLabel control={<Checkbox checked={checked.design} onChange={() => toggle('design')} />} label="Design" />
        <FormControlLabel control={<Checkbox checked={checked.engineering} onChange={() => toggle('engineering')} />} label="Engineering" />
        <FormControlLabel control={<Checkbox checked={checked.product} onChange={() => toggle('product')} />} label="Product" />
        <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      </Stack>
    )
  },
}

export const RadioGroupStory: Story = {
  name: 'Radio Group',
  render: () => {
    const [value, setValue] = useState('monthly')
    return (
      <FormControl>
        <FormLabel>Billing cycle</FormLabel>
        <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
          <FormControlLabel value="yearly" control={<Radio />} label="Yearly (save 20%)" />
          <FormControlLabel value="custom" control={<Radio />} label="Custom" />
          <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled option" />
        </RadioGroup>
      </FormControl>
    )
  },
}

export const Switches: Story = {
  render: () => {
    const [state, setState] = useState({ notifications: true, marketing: false, analytics: true })
    return (
      <Stack>
        <FormLabel component="legend" sx={{ mb: 1 }}>Email preferences</FormLabel>
        {(Object.keys(state) as (keyof typeof state)[]).map((key) => (
          <FormControlLabel
            key={key}
            control={
              <Switch
                checked={state[key]}
                onChange={() => setState((s) => ({ ...s, [key]: !s[key] }))}
              />
            }
            label={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        ))}
        <FormControlLabel control={<Switch disabled />} label="Disabled" />
      </Stack>
    )
  },
}

export const SliderStory: Story = {
  name: 'Slider',
  render: () => {
    const [value, setValue] = useState<number>(30)
    const [range, setRange] = useState<number[]>([20, 60])
    return (
      <Stack spacing={4} sx={{ maxWidth: 400, px: 2 }}>
        <Box>
          <Typography gutterBottom>Simple slider — {value}</Typography>
          <Slider value={value} onChange={(_, v) => setValue(v as number)} />
        </Box>
        <Box>
          <Typography gutterBottom>Range slider — {range[0]} to {range[1]}</Typography>
          <Slider value={range} onChange={(_, v) => setRange(v as number[])} />
        </Box>
        <Box>
          <Typography gutterBottom>With marks</Typography>
          <Slider
            defaultValue={30}
            step={10}
            marks
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
        </Box>
        <Box>
          <Typography gutterBottom color="text.secondary">Disabled</Typography>
          <Slider defaultValue={30} disabled />
        </Box>
      </Stack>
    )
  },
}

export const CompleteForm: Story = {
  render: () => {
    const [dept, setDept] = useState('')
    return (
      <Card sx={{ maxWidth: 480 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Create Account</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Fill in the details below to create your account.
          </Typography>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2}>
              <TextField label="First Name" variant="outlined" fullWidth />
              <TextField label="Last Name" variant="outlined" fullWidth />
            </Stack>
            <TextField label="Email Address" type="email" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth helperText="Min 8 characters" />
            <FormControl fullWidth>
              <InputLabel>Department</InputLabel>
              <Select value={dept} label="Department" onChange={(e) => setDept(e.target.value as string)}>
                {['Design', 'Engineering', 'Product', 'Marketing'].map((d) => (
                  <MenuItem key={d} value={d.toLowerCase()}>{d}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body2">
                  I agree to the Terms of Service and Privacy Policy
                </Typography>
              }
            />
            <Button variant="contained" size="large" fullWidth>Create Account</Button>
            <Divider />
            <Button variant="text" fullWidth>Already have an account? Sign In</Button>
          </Stack>
        </CardContent>
      </Card>
    )
  },
}

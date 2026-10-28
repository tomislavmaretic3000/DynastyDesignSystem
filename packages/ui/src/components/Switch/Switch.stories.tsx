import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Switch, FormControlLabel, FormGroup, FormControl, FormLabel,
  Stack, Box, Typography, Divider,
} from '@dynasty-ds/ui'

const meta: Meta<typeof Switch> = {
  title: 'Components/Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => (
    <Stack spacing={1}>
      <FormControlLabel control={<Switch />} label="Off" />
      <FormControlLabel control={<Switch defaultChecked />} label="On" />
      <FormControlLabel control={<Switch disabled />} label="Disabled off" />
      <FormControlLabel control={<Switch disabled defaultChecked />} label="Disabled on" />
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <FormControlLabel
          key={color}
          control={<Switch defaultChecked color={color} />}
          label={color}
        />
      ))}
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <FormControlLabel control={<Switch size="small" defaultChecked />} label="Small" />
      <FormControlLabel control={<Switch defaultChecked />} label="Medium" />
    </Stack>
  ),
}

export const SettingsPanel: Story = {
  name: 'Settings panel',
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      emailDigest: false,
      twoFactor: true,
      darkMode: false,
      autoSave: true,
    })
    const toggle = (key: keyof typeof settings) =>
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }))

    const items = [
      { key: 'notifications' as const, label: 'Push notifications', desc: 'Receive alerts for mentions and updates' },
      { key: 'emailDigest' as const, label: 'Email digest', desc: 'Weekly summary of activity' },
      { key: 'twoFactor' as const, label: 'Two-factor auth', desc: 'Require 2FA on sign-in' },
      { key: 'darkMode' as const, label: 'Dark mode', desc: 'Switch to dark color scheme' },
      { key: 'autoSave' as const, label: 'Auto-save', desc: 'Save changes automatically' },
    ]

    return (
      <Box sx={{ maxWidth: 420 }}>
        <Stack divider={<Divider />}>
          {items.map(({ key, label, desc }) => (
            <Stack key={key} direction="row" justifyContent="space-between" alignItems="center" py={1.5}>
              <Box>
                <Typography variant="body2" fontWeight={500}>{label}</Typography>
                <Typography variant="caption" color="text.secondary">{desc}</Typography>
              </Box>
              <Switch checked={settings[key]} onChange={() => toggle(key)} color="primary" />
            </Stack>
          ))}
        </Stack>
      </Box>
    )
  },
}

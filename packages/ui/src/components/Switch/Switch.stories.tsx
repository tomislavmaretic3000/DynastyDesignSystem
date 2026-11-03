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
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If true, the component is on (controlled)',
      table: { defaultValue: { summary: 'undefined' } },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default on/off state (uncontrolled)',
      table: { defaultValue: { summary: false } },
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the switch is disabled',
      table: { defaultValue: { summary: false } },
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Small: 36×22px · Medium: 52×32px',
      table: { defaultValue: { summary: 'medium' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'],
      description: 'Track color when checked — theme uses midnight-500 for primary',
      table: { defaultValue: { summary: 'primary' } },
    },
    required: {
      control: 'boolean',
      description: 'If true, the input element is required',
      table: { defaultValue: { summary: false } },
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the state changes — (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void',
    },
  },
  args: {
    defaultChecked: false,
    disabled: false,
    size: 'medium',
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
  render: (args) => (
    <FormControlLabel control={<Switch {...args} />} label="Switch label" />
  ),
}

export const States: Story = {
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

export const WorstCase: Story = {
  name: 'Worst case — sizes + long labels',
  render: () => (
    <Stack spacing={1} sx={{ maxWidth: 400 }}>
      <Typography variant="caption" color="text.secondary">
        Small checked must translate correctly; long label must wrap without squishing the control
      </Typography>
      <FormControlLabel
        control={<Switch size="small" defaultChecked />}
        label="Small — checked"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Medium — checked"
      />
      <FormControlLabel
        control={<Switch size="small" defaultChecked />}
        label="Enable automatic background sync for all connected workspaces and sub-accounts"
      />
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

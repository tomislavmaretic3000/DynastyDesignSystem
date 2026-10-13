import type { Meta, StoryObj } from '@storybook/react'
import { Badge, Stack, IconButton, Avatar, Typography, Box } from '@dynasty-ds/ui'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
    children: <MailIcon />,
  },
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      {(['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <Badge key={color} badgeContent={4} color={color}>
          <MailIcon />
        </Badge>
      ))}
    </Stack>
  ),
}

export const DotVariant: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge variant="dot" color="error">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="success">
        <NotificationsIcon />
      </Badge>
      <Badge variant="dot" color="primary">
        <ShoppingCartIcon />
      </Badge>
    </Stack>
  ),
}

export const MaxValue: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <Badge badgeContent={5} color="primary"><MailIcon /></Badge>
      <Badge badgeContent={100} color="primary"><MailIcon /></Badge>
      <Badge badgeContent={1000} max={999} color="primary"><MailIcon /></Badge>
    </Stack>
  ),
}

export const Notification: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <Badge badgeContent={12} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={3} color="primary">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={0} showZero color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Stack>
  ),
}

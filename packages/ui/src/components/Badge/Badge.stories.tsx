import type { Meta, StoryObj } from '@storybook/react'
import { Badge, Stack, IconButton, Avatar, Typography, Box } from '@dynasty-ds/ui'
import { Envelope, Bell, ShoppingCart } from '@phosphor-icons/react'



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
    children: <Envelope />,
  },
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      {(['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <Badge key={color} badgeContent={4} color={color}>
          <Envelope />
        </Badge>
      ))}
    </Stack>
  ),
}

export const DotVariant: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge variant="dot" color="error">
        <Envelope />
      </Badge>
      <Badge variant="dot" color="success">
        <Bell />
      </Badge>
      <Badge variant="dot" color="primary">
        <ShoppingCart />
      </Badge>
    </Stack>
  ),
}

export const MaxValue: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <Badge badgeContent={5} color="primary"><Envelope /></Badge>
      <Badge badgeContent={100} color="primary"><Envelope /></Badge>
      <Badge badgeContent={1000} max={999} color="primary"><Envelope /></Badge>
    </Stack>
  ),
}

export const Notification: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton>
        <Badge badgeContent={12} color="error">
          <Bell />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={3} color="primary">
          <Envelope />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={0} showZero color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </Stack>
  ),
}

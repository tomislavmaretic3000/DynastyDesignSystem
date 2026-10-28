import type { Meta, StoryObj } from '@storybook/react'
import { Divider, Stack, Box, Typography, Chip, Avatar } from '@dynasty-ds/ui'

const meta: Meta<typeof Divider> = {
  title: 'Components/Data Display/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 400 }}>
      <Typography variant="body2">Section above the divider</Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body2">Section below the divider</Typography>
    </Box>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 400 }}>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>Full width (default)</Typography>
        <Divider />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>Inset</Typography>
        <Divider variant="inset" />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>Middle</Typography>
        <Divider variant="middle" />
      </Box>
    </Stack>
  ),
}

export const WithText: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 400 }}>
      <Divider>OR</Divider>
      <Divider>Continue with</Divider>
      <Divider><Chip label="Section A" size="small" /></Divider>
      <Divider><Typography variant="caption" color="text.secondary">Updated today</Typography></Divider>
    </Stack>
  ),
}

export const TextAlignment: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 400 }}>
      <Divider textAlign="left">Left</Divider>
      <Divider textAlign="center">Center</Divider>
      <Divider textAlign="right">Right</Divider>
    </Stack>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center" divider={<Divider orientation="vertical" flexItem />}>
      <Typography variant="body2">Dashboard</Typography>
      <Typography variant="body2">Projects</Typography>
      <Typography variant="body2">Reports</Typography>
      <Typography variant="body2">Settings</Typography>
    </Stack>
  ),
}

export const InList: Story = {
  name: 'In a list',
  render: () => {
    const items = [
      { name: 'Alex Morgan', role: 'Designer' },
      { name: 'Jordan Lee', role: 'Engineer' },
      { name: 'Sam Rivera', role: 'Product' },
    ]
    return (
      <Box sx={{ maxWidth: 320 }}>
        <Stack divider={<Divider />}>
          {items.map(({ name, role }) => (
            <Stack key={name} direction="row" alignItems="center" spacing={2} py={1.5}>
              <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main', fontSize: 14 }}>
                {name[0]}
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight={500}>{name}</Typography>
                <Typography variant="caption" color="text.secondary">{role}</Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    )
  },
}

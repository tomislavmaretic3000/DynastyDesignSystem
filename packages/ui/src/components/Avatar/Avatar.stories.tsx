import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup, Stack, Badge, Typography, Box } from '@dynasty-ds/ui'
import FolderIcon from '@mui/icons-material/Folder'
import PersonIcon from '@mui/icons-material/Person'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    children: 'AB',
  },
}

export const Types: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar src="https://i.pravatar.cc/80?img=3" alt="Photo" />
      <Avatar>AB</Avatar>
      <Avatar><PersonIcon /></Avatar>
      <Avatar sx={{ bgcolor: 'transparent', color: 'inherit', border: '1px dashed', borderColor: 'divider' }}>?</Avatar>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ bgcolor: 'primary.main' }}>P</Avatar>
      <Avatar sx={{ bgcolor: 'secondary.main' }}>S</Avatar>
      <Avatar sx={{ bgcolor: 'error.main' }}>E</Avatar>
      <Avatar sx={{ bgcolor: 'warning.main' }}>W</Avatar>
      <Avatar sx={{ bgcolor: 'success.main' }}>S</Avatar>
      <Avatar sx={{ bgcolor: 'info.main' }}>I</Avatar>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>XS</Avatar>
      <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>S</Avatar>
      <Avatar>M</Avatar>
      <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
      <Avatar sx={{ width: 72, height: 72, fontSize: 28 }}>XL</Avatar>
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Avatar variant="circular" sx={{ bgcolor: 'primary.main' }}>C</Avatar>
      <Avatar variant="rounded" sx={{ bgcolor: 'secondary.main' }}>R</Avatar>
      <Avatar variant="square" sx={{ bgcolor: 'success.main' }}>S</Avatar>
    </Stack>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="success"
      >
        <Avatar src="https://i.pravatar.cc/80?img=5" />
      </Badge>
      <Badge badgeContent={3} color="error">
        <Avatar sx={{ bgcolor: 'primary.main' }}>AB</Avatar>
      </Badge>
    </Stack>
  ),
}

export const Group: Story = {
  render: () => (
    <Stack spacing={3}>
      <AvatarGroup max={4}>
        {['?img=1','?img=2','?img=3','?img=4','?img=5','?img=6'].map((q, i) => (
          <Avatar key={i} src={`https://i.pravatar.cc/80${q}`} />
        ))}
      </AvatarGroup>
      <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 32, height: 32, fontSize: 14 } }}>
        {['?img=7','?img=8','?img=9','?img=10'].map((q, i) => (
          <Avatar key={i} src={`https://i.pravatar.cc/80${q}`} />
        ))}
      </AvatarGroup>
    </Stack>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        color="success"
        sx={{ '& .MuiBadge-badge': { width: 12, height: 12, borderRadius: '50%', border: '2px solid white' } }}
      >
        <Avatar src="https://i.pravatar.cc/80?img=12" sx={{ width: 48, height: 48 }} />
      </Badge>
      <Box>
        <Typography variant="subtitle2">Alex Morgan</Typography>
        <Typography variant="caption" color="text.secondary">Product Designer</Typography>
      </Box>
    </Stack>
  ),
}

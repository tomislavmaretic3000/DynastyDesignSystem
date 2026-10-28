import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, Stack, Box, Avatar, Typography, Card, CardContent, CardHeader } from '@dynasty-ds/ui'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <Stack spacing={1} sx={{ maxWidth: 360 }}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width="80%" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width="60%" sx={{ fontSize: '1rem' }} />
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={3} alignItems="center">
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="rectangular" width={120} height={80} />
      <Skeleton variant="rounded" width={120} height={80} />
      <Stack spacing={0.5}>
        <Skeleton variant="text" width={160} sx={{ fontSize: '0.875rem' }} />
        <Skeleton variant="text" width={120} sx={{ fontSize: '0.75rem' }} />
      </Stack>
    </Stack>
  ),
}

export const Animation: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 320 }}>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>Pulse (default)</Typography>
        <Skeleton variant="rounded" height={60} />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>Wave</Typography>
        <Skeleton variant="rounded" height={60} animation="wave" />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>Disabled</Typography>
        <Skeleton variant="rounded" height={60} animation={false} />
      </Box>
    </Stack>
  ),
}

export const CardLoading: Story = {
  name: 'Card loading state',
  render: () => (
    <Box sx={{ maxWidth: 340 }}>
      <Card>
        <CardHeader
          avatar={<Skeleton variant="circular" width={40} height={40} />}
          title={<Skeleton variant="text" width="60%" />}
          subheader={<Skeleton variant="text" width="40%" />}
        />
        <Skeleton variant="rectangular" height={160} />
        <CardContent>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="80%" />
        </CardContent>
      </Card>
    </Box>
  ),
}

export const TableLoading: Story = {
  name: 'Table loading state',
  render: () => (
    <Stack spacing={0} sx={{ maxWidth: 480 }}>
      <Box sx={{ display: 'flex', gap: 2, px: 2, py: 1.5, borderBottom: 1, borderColor: 'divider' }}>
        <Skeleton variant="text" width="30%" />
        <Skeleton variant="text" width="30%" />
        <Skeleton variant="text" width="20%" />
        <Skeleton variant="text" width="15%" />
      </Box>
      {[...Array(5)].map((_, i) => (
        <Box key={i} sx={{ display: 'flex', gap: 2, px: 2, py: 1.5, alignItems: 'center', borderBottom: 1, borderColor: 'divider' }}>
          <Skeleton variant="circular" width={28} height={28} />
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="rounded" width={60} height={20} />
          <Skeleton variant="text" width="12%" sx={{ ml: 'auto' }} />
        </Box>
      ))}
    </Stack>
  ),
}

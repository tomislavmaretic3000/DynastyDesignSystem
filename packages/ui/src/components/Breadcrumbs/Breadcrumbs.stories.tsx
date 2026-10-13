import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs, Link, Typography, Stack, Chip } from '@dynasty-ds/ui'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import FolderIcon from '@mui/icons-material/Folder'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="#">Home</Link>
      <Link underline="hover" color="inherit" href="#">Projects</Link>
      <Typography color="text.primary">Current Page</Typography>
    </Breadcrumbs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Breadcrumbs>
      <Link underline="hover" color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <HomeIcon fontSize="small" />
        Home
      </Link>
      <Link underline="hover" color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <FolderIcon fontSize="small" />
        Projects
      </Link>
      <Typography color="text.primary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <FolderIcon fontSize="small" />
        Design System
      </Typography>
    </Breadcrumbs>
  ),
}

export const CustomSeparator: Story = {
  render: () => (
    <Stack spacing={2}>
      <Breadcrumbs separator="›">
        <Link underline="hover" color="inherit" href="#">Home</Link>
        <Link underline="hover" color="inherit" href="#">Projects</Link>
        <Typography color="text.primary">Current</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator="-">
        <Link underline="hover" color="inherit" href="#">Home</Link>
        <Link underline="hover" color="inherit" href="#">Projects</Link>
        <Typography color="text.primary">Current</Typography>
      </Breadcrumbs>

      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        <Link underline="hover" color="inherit" href="#">Home</Link>
        <Link underline="hover" color="inherit" href="#">Projects</Link>
        <Typography color="text.primary">Current</Typography>
      </Breadcrumbs>
    </Stack>
  ),
}

export const Collapsed: Story = {
  render: () => (
    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="#">Home</Link>
      <Link underline="hover" color="inherit" href="#">Catalog</Link>
      <Link underline="hover" color="inherit" href="#">Accessories</Link>
      <Link underline="hover" color="inherit" href="#">New Collection</Link>
      <Typography color="text.primary">Belts</Typography>
    </Breadcrumbs>
  ),
}

export const AppBreadcrumb: Story = {
  render: () => (
    <Stack spacing={3}>
      {[
        ['Home'],
        ['Home', 'Settings'],
        ['Home', 'Team', 'Members', 'Alex Morgan'],
      ].map((path, i) => (
        <Breadcrumbs key={i} separator={<NavigateNextIcon fontSize="small" />}>
          {path.map((segment, j) =>
            j < path.length - 1 ? (
              <Link key={segment} underline="hover" color="inherit" href="#">{segment}</Link>
            ) : (
              <Typography key={segment} color="text.primary" fontWeight={500}>{segment}</Typography>
            )
          )}
        </Breadcrumbs>
      ))}
    </Stack>
  ),
}

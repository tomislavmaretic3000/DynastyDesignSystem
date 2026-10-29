import type { Meta, StoryObj } from '@storybook/react'
import { Link, Stack, Typography, Box } from '@dynasty-ds/ui'
import { ArrowSquareOut } from '@phosphor-icons/react'

const meta: Meta<typeof Link> = {
  title: 'Components/Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none'],
      table: { defaultValue: { summary: 'always' } },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'inherit', 'text.primary', 'text.secondary'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default link',
  },
}

export const Underline: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <Link href="#" underline="always">Always underlined</Link>
      <Link href="#" underline="hover">Hover underline</Link>
      <Link href="#" underline="none">No underline</Link>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="inherit">Inherit</Link>
      <Link href="#" color="text.primary">Text primary</Link>
      <Link href="#" color="text.secondary">Text secondary</Link>
    </Stack>
  ),
}

export const ExternalLink: Story = {
  render: () => (
    <Stack spacing={2}>
      <Link
        href="https://mui.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
      >
        MUI Documentation
        <ArrowSquareOut fontSize="small" />
      </Link>
      <Link
        href="https://storybook.js.org"
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
      >
        Storybook Docs
        <ArrowSquareOut fontSize="small" />
      </Link>
    </Stack>
  ),
}

export const InlineText: Story = {
  render: () => (
    <Box maxWidth={480}>
      <Typography variant="body1">
        Already have an account?{' '}
        <Link href="#" underline="hover">Sign in here</Link>
        {' '}or{' '}
        <Link href="#" underline="hover">reset your password</Link>.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        By continuing you agree to our{' '}
        <Link href="#" underline="hover" color="inherit" fontWeight={500}>Terms of Service</Link>
        {' '}and{' '}
        <Link href="#" underline="hover" color="inherit" fontWeight={500}>Privacy Policy</Link>.
      </Typography>
    </Box>
  ),
}

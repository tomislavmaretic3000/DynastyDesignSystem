import type { Meta, StoryObj } from '@storybook/react'
import { Typography, Stack, Divider, Box } from '@dynasty-ds/ui'

const meta: Meta<typeof Typography> = {
  title: 'Components/Data Display/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1','h2','h3','h4','h5','h6','subtitle1','subtitle2','body1','body2','caption','overline'],
    },
    color: {
      control: 'select',
      options: ['text.primary','text.secondary','text.disabled','primary.main','secondary.main','error.main','success.main'],
    },
    align: {
      control: 'select',
      options: ['left','center','right','justify'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    variant: 'body1',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}

export const HeadingScale: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h1">H1 — Heading One</Typography>
      <Typography variant="h2">H2 — Heading Two</Typography>
      <Typography variant="h3">H3 — Heading Three</Typography>
      <Typography variant="h4">H4 — Heading Four</Typography>
      <Typography variant="h5">H5 — Heading Five</Typography>
      <Typography variant="h6">H6 — Heading Six</Typography>
    </Stack>
  ),
}

export const BodyScale: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="subtitle1">Subtitle 1 — Semibold subtitle text</Typography>
      <Typography variant="subtitle2">Subtitle 2 — Smaller subtitle text</Typography>
      <Divider />
      <Typography variant="body1">Body 1 — Default body text. The quick brown fox jumps over the lazy dog. Used for main content areas and paragraphs.</Typography>
      <Typography variant="body2">Body 2 — Smaller body text. The quick brown fox jumps over the lazy dog. Used for secondary content and descriptions.</Typography>
      <Divider />
      <Typography variant="caption">Caption — Small label text</Typography>
      <Typography variant="overline">Overline — Uppercase label</Typography>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      <Typography variant="body1" color="text.primary">text.primary — Main content</Typography>
      <Typography variant="body1" color="text.secondary">text.secondary — Supporting content</Typography>
      <Typography variant="body1" color="text.disabled">text.disabled — Disabled state</Typography>
      <Typography variant="body1" color="primary.main">primary.main — Brand color</Typography>
      <Typography variant="body1" color="secondary.main">secondary.main — Accent color</Typography>
      <Typography variant="body1" color="error.main">error.main — Error state</Typography>
      <Typography variant="body1" color="success.main">success.main — Success state</Typography>
    </Stack>
  ),
}

export const Paragraph: Story = {
  render: () => (
    <Box maxWidth={600}>
      <Typography variant="h4" gutterBottom>Article Heading</Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        A subtitle providing additional context to the heading above.
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </Typography>
      <Typography variant="body1" paragraph>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Published October 13, 2026
      </Typography>
    </Box>
  ),
}

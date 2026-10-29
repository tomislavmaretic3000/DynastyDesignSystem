import { Smiley, Check } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react'
import { Chip, Stack, Avatar } from '@dynasty-ds/ui'



const meta: Meta<typeof Chip> = {
  title: 'Components/Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      table: { defaultValue: { summary: 'filled' } },
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    disabled: { control: 'boolean' },
    clickable: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {
    label: 'Chip',
    variant: 'filled',
  },
}

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {(['default','primary','secondary','error','warning','info','success'] as const).map((color) => (
          <Chip key={color} label={color} color={color} variant="filled" />
        ))}
      </Stack>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {(['default','primary','secondary','error','warning','info','success'] as const).map((color) => (
          <Chip key={color} label={color} color={color} variant="outlined" />
        ))}
      </Stack>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Chip label="Medium" size="medium" />
      <Chip label="Small" size="small" />
    </Stack>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
      <Chip avatar={<Avatar alt="Natacha" src="https://i.pravatar.cc/40?img=1" />} label="Natacha" />
      <Chip icon={<Smiley />} label="With Icon" />
    </Stack>
  ),
}

export const Deletable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={() => {}} />
      <Chip label="Custom icon" onDelete={() => {}} deleteIcon={<Check />} />
      <Chip label="Outlined" variant="outlined" onDelete={() => {}} />
    </Stack>
  ),
}

export const Clickable: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable" clickable onClick={() => {}} />
      <Chip label="Clickable + Delete" clickable onClick={() => {}} onDelete={() => {}} color="primary" />
    </Stack>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      <Chip label="Active" color="success" size="small" />
      <Chip label="Pending" color="warning" size="small" />
      <Chip label="Inactive" color="default" size="small" />
      <Chip label="Error" color="error" size="small" />
      <Chip label="Draft" variant="outlined" size="small" />
      <Chip label="Archived" variant="outlined" color="default" size="small" />
    </Stack>
  ),
}

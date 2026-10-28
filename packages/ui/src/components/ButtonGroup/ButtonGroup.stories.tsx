import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, Button, Stack, Box } from '@dynasty-ds/ui'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Inputs/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color: { control: 'select', options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: () => (
    <ButtonGroup variant="outlined" color="primary">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={3}>
      <ButtonGroup variant="outlined" color="primary">
        <Button>Outlined</Button>
        <Button>Button</Button>
        <Button>Group</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="primary">
        <Button>Contained</Button>
        <Button>Button</Button>
        <Button>Group</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary">
        <Button>Text</Button>
        <Button>Button</Button>
        <Button>Group</Button>
      </ButtonGroup>
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <ButtonGroup key={color} variant="outlined" color={color}>
          <Button>{color}</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      ))}
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2} alignItems="flex-start">
      <ButtonGroup size="small" variant="outlined" color="primary">
        <Button>Small</Button><Button>Group</Button><Button>Buttons</Button>
      </ButtonGroup>
      <ButtonGroup size="medium" variant="outlined" color="primary">
        <Button>Medium</Button><Button>Group</Button><Button>Buttons</Button>
      </ButtonGroup>
      <ButtonGroup size="large" variant="outlined" color="primary">
        <Button>Large</Button><Button>Group</Button><Button>Buttons</Button>
      </ButtonGroup>
    </Stack>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <ButtonGroup orientation="vertical" variant="outlined" color="primary">
        <Button>Top</Button>
        <Button>Middle</Button>
        <Button>Bottom</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" variant="contained" color="primary">
        <Button>Top</Button>
        <Button>Middle</Button>
        <Button>Bottom</Button>
      </ButtonGroup>
    </Stack>
  ),
}

export const Pagination: Story = {
  name: 'Pagination pattern',
  render: () => (
    <Box>
      <ButtonGroup variant="outlined" color="primary" size="small">
        <Button>‹ Prev</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>Next ›</Button>
      </ButtonGroup>
    </Box>
  ),
}

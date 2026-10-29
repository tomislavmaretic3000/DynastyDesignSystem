import { TextB, TextItalic, TextUnderline, TextAlignLeft, TextAlignCenter, TextAlignRight, Rows, SquaresFour } from '@phosphor-icons/react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ToggleButton, ToggleButtonGroup, Stack, Box } from '@dynasty-ds/ui'









const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Components/Inputs/Toggle Button',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof ToggleButtonGroup>

export const Default: Story = {
  render: () => {
    const [alignment, setAlignment] = useState('left')
    return (
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={(_, v) => v && setAlignment(v)}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned"><TextAlignLeft /></ToggleButton>
        <ToggleButton value="center" aria-label="centered"><TextAlignCenter /></ToggleButton>
        <ToggleButton value="right" aria-label="right aligned"><TextAlignRight /></ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const MultiSelect: Story = {
  render: () => {
    const [formats, setFormats] = useState<string[]>(['bold'])
    return (
      <ToggleButtonGroup
        value={formats}
        onChange={(_, v) => setFormats(v)}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold"><TextB /></ToggleButton>
        <ToggleButton value="italic" aria-label="italic"><TextItalic /></ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined"><TextUnderline /></ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <ToggleButtonGroup key={size} size={size} value="left" exclusive aria-label={`${size} alignment`}>
          <ToggleButton value="left"><TextAlignLeft /></ToggleButton>
          <ToggleButton value="center"><TextAlignCenter /></ToggleButton>
          <ToggleButton value="right"><TextAlignRight /></ToggleButton>
        </ToggleButtonGroup>
      ))}
    </Stack>
  ),
}

export const TextLabels: Story = {
  render: () => {
    const [view, setView] = useState('month')
    return (
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={(_, v) => v && setView(v)}
        size="small"
      >
        <ToggleButton value="day">Day</ToggleButton>
        <ToggleButton value="week">Week</ToggleButton>
        <ToggleButton value="month">Month</ToggleButton>
        <ToggleButton value="year">Year</ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const ViewToggle: Story = {
  name: 'View toggle (icon + label)',
  render: () => {
    const [view, setView] = useState<'list' | 'grid'>('list')
    return (
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={(_, v) => v && setView(v)}
        size="small"
      >
        <ToggleButton value="list" aria-label="list view">
          <Rows fontSize="small" sx={{ mr: 0.5 }} />
          List
        </ToggleButton>
        <ToggleButton value="grid" aria-label="grid view">
          <SquaresFour fontSize="small" sx={{ mr: 0.5 }} />
          Grid
        </ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      {(['standard', 'primary', 'secondary'] as const).map((color) => (
        <ToggleButtonGroup key={color} value="left" exclusive color={color} size="small">
          <ToggleButton value="left"><TextAlignLeft /></ToggleButton>
          <ToggleButton value="center"><TextAlignCenter /></ToggleButton>
          <ToggleButton value="right"><TextAlignRight /></ToggleButton>
        </ToggleButtonGroup>
      ))}
    </Stack>
  ),
}

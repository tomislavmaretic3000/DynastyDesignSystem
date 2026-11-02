import { SpeakerLow, SpeakerHigh } from '@phosphor-icons/react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider, Stack, Box, Typography } from '@dynasty-ds/ui'



const meta: Meta<typeof Slider> = {
  title: 'Components/Inputs/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360, px: 1 }}>
      <Slider defaultValue={40} />
    </Box>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 360, px: 1 }}>
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <Box key={color}>
          <Typography variant="caption" color="text.secondary" gutterBottom display="block">{color}</Typography>
          <Slider defaultValue={60} color={color} />
        </Box>
      ))}
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 360, px: 1 }}>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>Small</Typography>
        <Slider size="small" defaultValue={40} />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block" gutterBottom>Medium</Typography>
        <Slider defaultValue={40} />
      </Box>
    </Stack>
  ),
}

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([20, 70])
    return (
      <Box sx={{ maxWidth: 360, px: 1 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Range: {value[0]}% – {value[1]}%
        </Typography>
        <Slider
          value={value}
          onChange={(_, v) => setValue(v as number[])}
          valueLabelDisplay="auto"
        />
      </Box>
    )
  },
}

export const WithSteps: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360, px: 1 }}>
      <Slider
        defaultValue={20}
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </Box>
  ),
}

export const CustomMarks: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360, px: 2 }}>
      <Slider
        defaultValue={3}
        step={null}
        marks={[
          { value: 1, label: 'XS' },
          { value: 2, label: 'S' },
          { value: 3, label: 'M' },
          { value: 4, label: 'L' },
          { value: 5, label: 'XL' },
        ]}
        min={1}
        max={5}
        valueLabelDisplay="off"
      />
    </Box>
  ),
}

export const VolumeControl: Story = {
  name: 'Volume control',
  render: () => {
    const [volume, setVolume] = useState(60)
    return (
      <Stack direction="row" spacing={2} alignItems="center" sx={{ maxWidth: 360 }}>
        <SpeakerLow color="action" />
        <Slider
          value={volume}
          onChange={(_, v) => setVolume(v as number)}
          aria-label="Volume"
        />
        <SpeakerHigh color="action" />
      </Stack>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <Box sx={{ maxWidth: 360, px: 1 }}>
      <Slider disabled defaultValue={50} />
    </Box>
  ),
}

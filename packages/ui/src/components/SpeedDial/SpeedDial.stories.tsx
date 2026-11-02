import { CopySimple, FloppyDisk, Printer, ShareNetwork, PencilSimple, X } from '@phosphor-icons/react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Box, Typography } from '@dynasty-ds/ui'







const actions = [
  { icon: <CopySimple />, name: 'Copy' },
  { icon: <FloppyDisk />, name: 'Save' },
  { icon: <Printer />, name: 'Print' },
  { icon: <ShareNetwork />, name: 'Share' },
]

const meta: Meta<typeof SpeedDial> = {
  title: 'Components/Navigation/Speed Dial',
  component: SpeedDial,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof SpeedDial>

export const Default: Story = {
  render: () => (
    <Box sx={{ position: 'relative', height: 220, bgcolor: 'background.default', border: 1, borderColor: 'divider', borderRadius: 2 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((a) => (
          <SpeedDialAction key={a.name} icon={a.icon} tooltipTitle={a.name} />
        ))}
      </SpeedDial>
    </Box>
  ),
}

export const OpenOnHover: Story = {
  render: () => (
    <Box sx={{ position: 'relative', height: 220, border: 1, borderColor: 'divider', borderRadius: 2 }}>
      <SpeedDial
        ariaLabel="SpeedDial open on hover"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((a) => (
          <SpeedDialAction key={a.name} icon={a.icon} tooltipTitle={a.name} tooltipOpen />
        ))}
      </SpeedDial>
    </Box>
  ),
}

export const CustomIcon: Story = {
  render: () => (
    <Box sx={{ position: 'relative', height: 220, border: 1, borderColor: 'divider', borderRadius: 2 }}>
      <SpeedDial
        ariaLabel="SpeedDial custom icon"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<X />} icon={<PencilSimple />} />}
        color="secondary"
      >
        {actions.map((a) => (
          <SpeedDialAction key={a.name} icon={a.icon} tooltipTitle={a.name} />
        ))}
      </SpeedDial>
    </Box>
  ),
}

export const Directions: Story = {
  render: () => (
    <Box sx={{ position: 'relative', height: 260, border: 1, borderColor: 'divider', borderRadius: 2 }}>
      {(['up', 'down', 'left', 'right'] as const).map((dir, i) => (
        <SpeedDial
          key={dir}
          ariaLabel={`SpeedDial ${dir}`}
          sx={{
            position: 'absolute',
            ...(i === 0 ? { bottom: 16, right: 16 } : {}),
            ...(i === 1 ? { top: 16, right: 16 } : {}),
            ...(i === 2 ? { bottom: 16, left: 16 } : {}),
            ...(i === 3 ? { top: 16, left: 16 } : {}),
          }}
          icon={<SpeedDialIcon />}
          direction={dir}
        >
          {actions.slice(0, 2).map((a) => (
            <SpeedDialAction key={a.name} icon={a.icon} tooltipTitle={a.name} />
          ))}
        </SpeedDial>
      ))}
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary">up · down · left · right</Typography>
      </Box>
    </Box>
  ),
}

import { Info, Star } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react'
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Box, Typography, Stack } from '@dynasty-ds/ui'



const meta: Meta<typeof ImageList> = {
  title: 'Components/Layout/Image List',
  component: ImageList,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof ImageList>

const colors = [
  '#020c33', '#1565c0', '#6a1b9a', '#1b5e20', '#b0d361',
  '#e65100', '#880e4f', '#006064', '#37474f', '#4e342e',
  '#1a237e', '#004d40',
]

const labels = [
  'Midnight blue', 'Ocean', 'Violet', 'Forest', 'Lime',
  'Amber', 'Ruby', 'Teal', 'Slate', 'Mocha',
  'Indigo', 'Emerald',
]

function ColorTile({ color, label }: { color: string; label: string }) {
  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: '4/3',
        bgcolor: color,
        display: 'flex',
        alignItems: 'flex-end',
        p: 1,
      }}
    >
      <Typography variant="caption" sx={{ color: '#fff', opacity: 0.8, fontSize: 10 }}>{label}</Typography>
    </Box>
  )
}

export const Standard: Story = {
  render: () => (
    <ImageList sx={{ maxWidth: 520 }} cols={3} rowHeight={120}>
      {colors.map((color, i) => (
        <ImageListItem key={color}>
          <ColorTile color={color} label={labels[i]} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
}

export const WithTitleBar: Story = {
  render: () => (
    <ImageList sx={{ maxWidth: 520 }} cols={3} rowHeight={140}>
      {colors.slice(0, 9).map((color, i) => (
        <ImageListItem key={color}>
          <Box sx={{ width: '100%', height: '100%', bgcolor: color }} />
          <ImageListItemBar
            title={labels[i]}
            actionIcon={
              <IconButton sx={{ color: 'rgba(255,255,255,.54)' }} aria-label={labels[i]}>
                <Info />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  ),
}

export const Masonry: Story = {
  render: () => (
    <ImageList sx={{ maxWidth: 520 }} variant="masonry" cols={3} gap={8}>
      {colors.map((color, i) => (
        <ImageListItem key={color}>
          <Box
            sx={{
              width: '100%',
              height: 80 + (i % 4) * 30,
              bgcolor: color,
              borderRadius: 1,
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  ),
}

export const Quilted: Story = {
  render: () => {
    const quilted = [
      { color: '#020c33', label: 'Midnight', rows: 2, cols: 2 },
      { color: '#1565c0', label: 'Ocean', rows: 1, cols: 1 },
      { color: '#6a1b9a', label: 'Violet', rows: 1, cols: 1 },
      { color: '#1b5e20', label: 'Forest', rows: 1, cols: 2 },
      { color: '#b0d361', label: 'Lime', rows: 2, cols: 1 },
      { color: '#e65100', label: 'Amber', rows: 1, cols: 1 },
      { color: '#880e4f', label: 'Ruby', rows: 1, cols: 1 },
      { color: '#006064', label: 'Teal', rows: 1, cols: 2 },
    ]
    return (
      <ImageList sx={{ maxWidth: 520 }} variant="quilted" cols={4} rowHeight={100}>
        {quilted.map(({ color, label, rows, cols }) => (
          <ImageListItem key={label} rows={rows} cols={cols}>
            <Box sx={{ width: '100%', height: '100%', bgcolor: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="caption" sx={{ color: '#fff', opacity: 0.8 }}>{label}</Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    )
  },
}

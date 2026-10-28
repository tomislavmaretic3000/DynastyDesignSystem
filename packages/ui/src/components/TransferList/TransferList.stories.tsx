import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Box, Button, ButtonGroup, Card, Checkbox, Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Stack, Typography,
} from '@dynasty-ds/ui'

const meta: Meta = {
  title: 'Components/Inputs/Transfer List',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

function not(a: string[], b: string[]) { return a.filter((v) => !b.includes(v)) }
function intersection(a: string[], b: string[]) { return a.filter((v) => b.includes(v)) }

function TransferListBase() {
  const ALL = ['Analytics', 'Billing', 'Calendar', 'Dashboard', 'Export', 'Forms', 'Integrations', 'Notifications']
  const [left, setLeft] = useState(ALL.slice(0, 5))
  const [right, setRight] = useState(ALL.slice(5))
  const [checked, setChecked] = useState<string[]>([])

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const toggle = (value: string) => {
    const current = checked.indexOf(value)
    setChecked(current === -1 ? [...checked, value] : checked.filter((v) => v !== value))
  }

  const moveRight = () => { setRight([...right, ...leftChecked]); setLeft(not(left, leftChecked)); setChecked(not(checked, leftChecked)) }
  const moveLeft = () => { setLeft([...left, ...rightChecked]); setRight(not(right, rightChecked)); setChecked(not(checked, rightChecked)) }
  const moveAllRight = () => { setRight([...right, ...left]); setLeft([]); setChecked(not(checked, left)) }
  const moveAllLeft = () => { setLeft([...left, ...right]); setRight([]); setChecked(not(checked, right)) }

  const renderList = (title: string, items: string[]) => (
    <Card variant="outlined" sx={{ minWidth: 200, flex: 1 }}>
      <Box sx={{ px: 2, py: 1, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" color="text.secondary">{intersection(checked, items).length}/{items.length} selected</Typography>
      </Box>
      <List dense sx={{ maxHeight: 220, overflow: 'auto' }}>
        {items.map((item) => (
          <ListItemButton key={item} onClick={() => toggle(item)} sx={{ px: 1 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Checkbox
                edge="start"
                checked={checked.includes(item)}
                tabIndex={-1}
                disableRipple
                size="small"
              />
            </ListItemIcon>
            <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
          </ListItemButton>
        ))}
        {items.length === 0 && (
          <ListItem>
            <ListItemText primary="Empty" primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
          </ListItem>
        )}
      </List>
    </Card>
  )

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {renderList('Available', left)}
      <Stack spacing={1}>
        <Button size="small" variant="outlined" onClick={moveAllRight} disabled={left.length === 0}>≫</Button>
        <Button size="small" variant="outlined" onClick={moveRight} disabled={leftChecked.length === 0}>›</Button>
        <Button size="small" variant="outlined" onClick={moveLeft} disabled={rightChecked.length === 0}>‹</Button>
        <Button size="small" variant="outlined" onClick={moveAllLeft} disabled={right.length === 0}>≪</Button>
      </Stack>
      {renderList('Selected', right)}
    </Stack>
  )
}

export const Default: Story = {
  render: () => <TransferListBase />,
}

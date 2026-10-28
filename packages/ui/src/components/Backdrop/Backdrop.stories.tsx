import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Backdrop, Button, CircularProgress, Stack, Box, Typography, Paper } from '@dynasty-ds/ui'

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Feedback/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Backdrop>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Box sx={{ position: 'relative', height: 200, border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="body2" color="text.secondary">Click the button to show a backdrop over this panel.</Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => setOpen(true)}>Show backdrop</Button>
        </Box>
        <Backdrop
          sx={{ position: 'absolute', zIndex: 1, color: '#fff', borderRadius: 2 }}
          open={open}
          onClick={() => setOpen(false)}
        >
          <Typography variant="body2">Click anywhere to close</Typography>
        </Backdrop>
      </Box>
    )
  },
}

export const WithSpinner: Story = {
  name: 'Loading overlay',
  render: () => {
    const [loading, setLoading] = useState(false)
    const handleSave = () => {
      setLoading(true)
      setTimeout(() => setLoading(false), 2000)
    }
    return (
      <Box>
        <Button variant="contained" onClick={handleSave} disabled={loading}>
          {loading ? 'Saving…' : 'Save changes'}
        </Button>
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
          <Stack alignItems="center" spacing={2}>
            <CircularProgress color="inherit" />
            <Typography variant="body2" color="inherit">Saving your changes…</Typography>
          </Stack>
        </Backdrop>
      </Box>
    )
  },
}

export const WithContent: Story = {
  name: 'With confirmation card',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Box>
        <Button variant="outlined" color="error" onClick={() => setOpen(true)}>Delete account</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <Paper sx={{ p: 3, maxWidth: 360, mx: 2 }} elevation={8}>
            <Typography variant="h6" gutterBottom>Are you sure?</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Deleting your account is permanent and cannot be undone. All data will be lost.
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" color="error" onClick={() => setOpen(false)}>Delete</Button>
            </Stack>
          </Paper>
        </Backdrop>
      </Box>
    )
  },
}

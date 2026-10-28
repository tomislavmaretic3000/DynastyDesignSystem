import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal, Box, Button, Typography, Stack, TextField, Fade, Backdrop } from '@dynasty-ds/ui'

const meta: Meta<typeof Modal> = {
  title: 'Components/Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Modal>

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  outline: 'none',
}

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Box>
        <Button variant="contained" onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-title">
          <Box sx={{ ...modalStyle, width: 400 }}>
            <Typography id="modal-title" variant="h6" gutterBottom>Basic modal</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              This is a low-level modal. For confirmation flows, prefer Dialog — it adds ARIA roles, focus trapping, and keyboard handling on top.
            </Typography>
            <Button variant="contained" onClick={() => setOpen(false)}>Close</Button>
          </Box>
        </Modal>
      </Box>
    )
  },
}

export const WithFadeTransition: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Box>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open with fade</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{ backdrop: { timeout: 300 } }}
        >
          <Fade in={open}>
            <Box sx={{ ...modalStyle, width: 380 }}>
              <Typography variant="h6" gutterBottom>Fade transition</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                The modal fades in and out smoothly. Click outside or the button to dismiss.
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="flex-end">
                <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="contained" onClick={() => setOpen(false)}>Confirm</Button>
              </Stack>
            </Box>
          </Fade>
        </Modal>
      </Box>
    )
  },
}

export const FormModal: Story = {
  name: 'Form in modal',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Box>
        <Button variant="outlined" onClick={() => setOpen(true)}>Edit profile</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={{ ...modalStyle, width: 440 }}>
            <Typography variant="h6" gutterBottom>Edit profile</Typography>
            <Stack spacing={2} sx={{ my: 2 }}>
              <TextField label="Display name" defaultValue="Alex Morgan" size="small" fullWidth />
              <TextField label="Email" defaultValue="alex@dynasty.com" size="small" fullWidth />
              <TextField label="Bio" multiline rows={3} placeholder="Tell us about yourself…" size="small" fullWidth />
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="flex-end">
              <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)}>Save changes</Button>
            </Stack>
          </Box>
        </Modal>
      </Box>
    )
  },
}

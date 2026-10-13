import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
  Button, TextField, Stack, Typography,
} from '@dynasty-ds/ui'

const meta: Meta = {
  title: 'Components/Feedback/Dialog',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

function DialogWrapper({ title, content, maxWidth = 'sm', children }: {
  title: string
  content: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth={maxWidth} fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        {children ?? (
          <DialogActions>
            <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Confirm</Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  )
}

export const Confirmation: Story = {
  render: () => (
    <DialogWrapper
      title="Delete Item"
      content={
        <DialogContentText>
          Are you sure you want to delete this item? This action cannot be undone.
        </DialogContentText>
      }
    >
      <DialogActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained" color="error">Delete</Button>
      </DialogActions>
    </DialogWrapper>
  ),
}

export const Form: Story = {
  render: () => (
    <DialogWrapper
      title="Add Team Member"
      content={
        <Stack spacing={3} sx={{ pt: 1 }}>
          <TextField label="Full Name" variant="outlined" fullWidth autoFocus />
          <TextField label="Email Address" type="email" variant="outlined" fullWidth />
          <TextField
            label="Role"
            variant="outlined"
            fullWidth
            helperText="e.g. Designer, Engineer, Product Manager"
          />
        </Stack>
      }
    >
      <DialogActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Add Member</Button>
      </DialogActions>
    </DialogWrapper>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <DialogWrapper
          key={size}
          title={`maxWidth="${size}"`}
          maxWidth={size}
          content={
            <DialogContentText>
              This dialog has <strong>maxWidth="{size}"</strong>. The dialog grows up to this width.
            </DialogContentText>
          }
        >
          <DialogActions>
            <Button variant="text">Close</Button>
          </DialogActions>
        </DialogWrapper>
      ))}
    </Stack>
  ),
}

export const Alert: Story = {
  render: () => (
    <DialogWrapper
      title="Session Expired"
      maxWidth="xs"
      content={
        <DialogContentText>
          Your session has expired. Please log in again to continue.
        </DialogContentText>
      }
    >
      <DialogActions>
        <Button variant="contained" fullWidth>Log In Again</Button>
      </DialogActions>
    </DialogWrapper>
  ),
}

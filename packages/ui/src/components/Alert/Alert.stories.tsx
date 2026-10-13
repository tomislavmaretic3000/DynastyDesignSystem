import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, Stack, Button } from '@dynasty-ds/ui'

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      table: { defaultValue: { summary: 'info' } },
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      table: { defaultValue: { summary: 'standard' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    severity: 'info',
    children: 'This is an informational alert.',
  },
}

export const Severities: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="success">Operation completed successfully.</Alert>
      <Alert severity="info">Here is some useful information.</Alert>
      <Alert severity="warning">Please review before continuing.</Alert>
      <Alert severity="error">Something went wrong. Please try again.</Alert>
    </Stack>
  ),
}

export const WithTitle: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Your changes have been saved successfully.
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        A new software update is available for download.
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Your account is about to expire. Renew to keep access.
      </Alert>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Unable to process payment. Please check your card details.
      </Alert>
    </Stack>
  ),
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Stack spacing={2}>
        <Alert severity="success" variant="standard">Standard — Success</Alert>
        <Alert severity="error" variant="standard">Standard — Error</Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert severity="success" variant="filled">Filled — Success</Alert>
        <Alert severity="error" variant="filled">Filled — Error</Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert severity="success" variant="outlined">Outlined — Success</Alert>
        <Alert severity="error" variant="outlined">Outlined — Error</Alert>
      </Stack>
    </Stack>
  ),
}

export const Dismissible: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert severity="info" onClose={() => {}}>
        Click the X to dismiss this alert.
      </Alert>
      <Alert severity="warning" onClose={() => {}}>
        <AlertTitle>Warning</AlertTitle>
        This alert can be dismissed by the user.
      </Alert>
    </Stack>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Stack spacing={2}>
      <Alert
        severity="info"
        action={<Button color="inherit" size="small" variant="outlined">UNDO</Button>}
      >
        File has been deleted.
      </Alert>
      <Alert
        severity="warning"
        action={<Button color="inherit" size="small" variant="text">REVIEW</Button>}
      >
        Your session will expire in 5 minutes.
      </Alert>
    </Stack>
  ),
}

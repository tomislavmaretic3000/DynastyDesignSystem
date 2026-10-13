import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  CircularProgress, LinearProgress, Skeleton, Snackbar, Alert,
  Tooltip, Button, Stack, Box, Typography, Card, CardContent,
  IconButton,
} from '@dynasty-ds/ui'
import CloseIcon from '@mui/icons-material/Close'

const meta: Meta = {
  title: 'Components/Feedback/Loading & Progress',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const CircularProgressStory: Story = {
  name: 'Circular Progress',
  render: () => (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3} alignItems="center">
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="error" />
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center">
        <CircularProgress size={24} />
        <CircularProgress size={40} />
        <CircularProgress size={56} />
        <CircularProgress size={72} />
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center">
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} color="success" />
      </Stack>
    </Stack>
  ),
}

export const LinearProgressStory: Story = {
  name: 'Linear Progress',
  render: () => (
    <Stack spacing={3} width="100%">
      <Box>
        <Typography variant="caption" color="text.secondary" gutterBottom display="block">Indeterminate</Typography>
        <LinearProgress />
      </Box>
      <Box>
        <Typography variant="caption" color="text.secondary" gutterBottom display="block">Determinate — 60%</Typography>
        <LinearProgress variant="determinate" value={60} />
      </Box>
      <Stack spacing={1}>
        {(['primary', 'secondary', 'success', 'error', 'warning', 'info'] as const).map((color) => (
          <LinearProgress key={color} color={color} variant="determinate" value={65} />
        ))}
      </Stack>
    </Stack>
  ),
}

export const SkeletonStory: Story = {
  name: 'Skeleton',
  render: () => (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="caption" color="text.secondary">Text variants</Typography>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={240} />
        <Skeleton variant="text" width={300} />
        <Skeleton variant="text" width={200} />
      </Stack>
      <Stack spacing={1}>
        <Typography variant="caption" color="text.secondary">Shape variants</Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Skeleton variant="circular" width={48} height={48} />
          <Skeleton variant="rectangular" width={120} height={48} />
          <Skeleton variant="rounded" width={120} height={48} />
        </Stack>
      </Stack>
      <Box>
        <Typography variant="caption" color="text.secondary" display="block" mb={1}>Card skeleton</Typography>
        <Card sx={{ maxWidth: 320 }}>
          <CardContent>
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Stack flex={1}>
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="60%" />
              </Stack>
            </Stack>
            <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 1, mb: 1 }} />
            <Skeleton variant="text" />
            <Skeleton variant="text" width="80%" />
          </CardContent>
        </Card>
      </Box>
    </Stack>
  ),
}

export const SnackbarStory: Story = {
  name: 'Snackbar',
  render: () => {
    const [state, setState] = useState<{ open: boolean; msg: string; severity: 'success' | 'error' | 'info' | 'warning' }>({
      open: false, msg: '', severity: 'info',
    })

    const show = (msg: string, severity: typeof state.severity) =>
      setState({ open: true, msg, severity })

    return (
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <Button variant="contained" color="success" onClick={() => show('Changes saved!', 'success')}>Success</Button>
        <Button variant="contained" color="error" onClick={() => show('Something went wrong.', 'error')}>Error</Button>
        <Button variant="contained" color="warning" onClick={() => show('Please review your input.', 'warning')}>Warning</Button>
        <Button variant="contained" color="info" onClick={() => show('New update available.', 'info')}>Info</Button>

        <Snackbar
          open={state.open}
          autoHideDuration={3000}
          onClose={() => setState((s) => ({ ...s, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            severity={state.severity}
            onClose={() => setState((s) => ({ ...s, open: false }))}
          >
            {state.msg}
          </Alert>
        </Snackbar>
      </Stack>
    )
  },
}

export const TooltipStory: Story = {
  name: 'Tooltip',
  render: () => (
    <Stack direction="row" spacing={4} flexWrap="wrap" useFlexGap alignItems="center">
      <Tooltip title="Top tooltip" placement="top">
        <Button variant="outlined">Top</Button>
      </Tooltip>
      <Tooltip title="Bottom tooltip" placement="bottom">
        <Button variant="outlined">Bottom</Button>
      </Tooltip>
      <Tooltip title="Left tooltip" placement="left">
        <Button variant="outlined">Left</Button>
      </Tooltip>
      <Tooltip title="Right tooltip" placement="right">
        <Button variant="outlined">Right</Button>
      </Tooltip>
      <Tooltip title="Arrow tooltip" arrow>
        <Button variant="contained">With Arrow</Button>
      </Tooltip>
    </Stack>
  ),
}

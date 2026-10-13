import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stack, TextField, Typography, Box, Alert } from '@dynasty-ds/ui'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'

const meta: Meta = {
  title: 'Components/Inputs/Date Picker',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Story />
      </LocalizationProvider>
    ),
  ],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    return (
      <Box sx={{ maxWidth: 320 }}>
        <DatePicker
          label="Select date"
          value={value}
          onChange={setValue}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Box>
    )
  },
}

export const WithDefaultValue: Story = {
  render: () => (
    <Box sx={{ maxWidth: 320 }}>
      <DatePicker
        label="Date of birth"
        defaultValue={dayjs('1990-01-15')}
        slotProps={{ textField: { fullWidth: true } }}
      />
    </Box>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 320 }}>
      <DatePicker
        label="Small"
        slotProps={{ textField: { size: 'small', fullWidth: true } }}
      />
      <DatePicker
        label="Medium"
        slotProps={{ textField: { size: 'medium', fullWidth: true } }}
      />
    </Stack>
  ),
}

export const States: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 320 }}>
      <DatePicker
        label="Default"
        slotProps={{ textField: { fullWidth: true } }}
      />
      <DatePicker
        label="Disabled"
        disabled
        slotProps={{ textField: { fullWidth: true } }}
      />
      <DatePicker
        label="Error"
        slotProps={{
          textField: { fullWidth: true, error: true, helperText: 'Invalid date' },
        }}
      />
      <DatePicker
        label="Read only"
        readOnly
        defaultValue={dayjs()}
        slotProps={{ textField: { fullWidth: true } }}
      />
    </Stack>
  ),
}

export const DateTimePickerStory: Story = {
  name: 'Date & Time Picker',
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    return (
      <Box sx={{ maxWidth: 360 }}>
        <DateTimePicker
          label="Select date & time"
          value={value}
          onChange={setValue}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Box>
    )
  },
}

export const TimePickerStory: Story = {
  name: 'Time Picker',
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    return (
      <Box sx={{ maxWidth: 320 }}>
        <TimePicker
          label="Select time"
          value={value}
          onChange={setValue}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Box>
    )
  },
}

export const DateRange: Story = {
  name: 'Date Range',
  render: () => {
    const [value, setValue] = useState<[Dayjs | null, Dayjs | null]>([null, null])
    return (
      <Stack spacing={2}>
        <Alert severity="info" sx={{ maxWidth: 560 }}>
          DateRangePicker requires @mui/x-date-pickers-pro license. Shown here for documentation — replace with two DatePickers if using the free tier.
        </Alert>
        <Stack direction="row" spacing={2} sx={{ maxWidth: 560 }}>
          <DatePicker
            label="Start date"
            value={value[0]}
            onChange={(v) => setValue([v, value[1]])}
            slotProps={{ textField: { fullWidth: true } }}
          />
          <DatePicker
            label="End date"
            value={value[1]}
            onChange={(v) => setValue([value[0], v])}
            minDate={value[0] ?? undefined}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </Stack>
      </Stack>
    )
  },
}

export const InForm: Story = {
  render: () => (
    <Stack spacing={3} sx={{ maxWidth: 400 }}>
      <Typography variant="h6">Schedule Event</Typography>
      <TextField label="Event Title" fullWidth variant="outlined" />
      <Stack direction="row" spacing={2}>
        <DatePicker
          label="Start date"
          defaultValue={dayjs()}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <TimePicker
          label="Start time"
          defaultValue={dayjs().hour(9).minute(0)}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <DatePicker
          label="End date"
          defaultValue={dayjs()}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <TimePicker
          label="End time"
          defaultValue={dayjs().hour(10).minute(0)}
          slotProps={{ textField: { fullWidth: true } }}
        />
      </Stack>
    </Stack>
  ),
}

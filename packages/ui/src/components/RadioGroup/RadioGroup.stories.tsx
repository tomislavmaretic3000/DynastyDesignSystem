import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  RadioGroup, Radio, FormControlLabel, FormControl, FormLabel,
  Stack, Box, Typography, Paper,
} from '@dynasty-ds/ui'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Inputs/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Notification frequency</FormLabel>
      <RadioGroup defaultValue="daily">
        <FormControlLabel value="realtime" control={<Radio />} label="Real-time" />
        <FormControlLabel value="daily" control={<Radio />} label="Daily digest" />
        <FormControlLabel value="weekly" control={<Radio />} label="Weekly summary" />
        <FormControlLabel value="never" control={<Radio />} label="Never" />
      </RadioGroup>
    </FormControl>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={3} flexWrap="wrap">
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map((color) => (
        <FormControlLabel
          key={color}
          control={<Radio defaultChecked color={color} />}
          label={color}
        />
      ))}
    </Stack>
  ),
}

export const Row: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Priority</FormLabel>
      <RadioGroup row defaultValue="medium">
        <FormControlLabel value="low" control={<Radio />} label="Low" />
        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
        <FormControlLabel value="high" control={<Radio />} label="High" />
        <FormControlLabel value="urgent" control={<Radio color="error" />} label="Urgent" />
      </RadioGroup>
    </FormControl>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [plan, setPlan] = useState('pro')
    const plans = [
      { value: 'free', label: 'Free', desc: 'Up to 3 projects' },
      { value: 'pro', label: 'Pro', desc: 'Unlimited projects · $12/mo' },
      { value: 'team', label: 'Team', desc: 'Collaboration features · $49/mo' },
      { value: 'enterprise', label: 'Enterprise', desc: 'Custom pricing' },
    ]
    return (
      <FormControl>
        <FormLabel sx={{ mb: 1 }}>Select plan</FormLabel>
        <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
          <Stack spacing={1}>
            {plans.map(({ value, label, desc }) => (
              <Paper
                key={value}
                variant="outlined"
                sx={{
                  px: 2, py: 1.5, borderRadius: 2, cursor: 'pointer',
                  borderColor: plan === value ? 'primary.main' : 'divider',
                  bgcolor: plan === value ? 'primary.main' : 'transparent',
                  '&:hover': { borderColor: 'primary.main' },
                  transition: '.15s',
                }}
                onClick={() => setPlan(value)}
              >
                <FormControlLabel
                  value={value}
                  control={<Radio sx={{ color: plan === value ? '#fff' : undefined }} />}
                  label={
                    <Box>
                      <Typography variant="body2" fontWeight={600} color={plan === value ? '#fff' : 'text.primary'}>{label}</Typography>
                      <Typography variant="caption" color={plan === value ? 'rgba(255,255,255,.7)' : 'text.secondary'}>{desc}</Typography>
                    </Box>
                  }
                  sx={{ m: 0, width: '100%' }}
                />
              </Paper>
            ))}
          </Stack>
        </RadioGroup>
      </FormControl>
    )
  },
}

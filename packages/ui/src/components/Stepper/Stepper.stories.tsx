import { CaretLeft, CaretRight, CheckCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Stepper, Step, StepLabel, StepContent,
  Button, Typography, Box, Stack, Paper, MobileStepper,
} from '@dynasty-ds/ui'




const meta: Meta<typeof Stepper> = {
  title: 'Components/Navigation/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Stepper>

const steps = ['Account details', 'Company info', 'Review & submit']

export const Horizontal: Story = {
  render: () => {
    const [active, setActive] = useState(1)
    return (
      <Box sx={{ maxWidth: 560 }}>
        <Stepper activeStep={active} sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}><StepLabel>{label}</StepLabel></Step>
          ))}
        </Stepper>
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Step {active + 1} of {steps.length}: <strong>{steps[active]}</strong>
          </Typography>
        </Paper>
        <Stack direction="row" spacing={1}>
          <Button disabled={active === 0} onClick={() => setActive((p) => p - 1)} variant="outlined" size="small">Back</Button>
          <Button onClick={() => setActive((p) => Math.min(p + 1, steps.length - 1))} variant="contained" size="small">
            {active === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Stack>
      </Box>
    )
  },
}

export const WithOptionalStep: Story = {
  render: () => {
    const [active, setActive] = useState(0)
    const optional = 1
    return (
      <Box sx={{ maxWidth: 560 }}>
        <Stepper activeStep={active}>
          {steps.map((label, i) => (
            <Step key={label}>
              <StepLabel optional={i === optional ? <Typography variant="caption">Optional</Typography> : undefined}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          <Stack direction="row" spacing={1}>
            <Button disabled={active === 0} onClick={() => setActive((p) => p - 1)} size="small" variant="outlined">Back</Button>
            <Button onClick={() => setActive((p) => Math.min(p + 1, steps.length))} size="small" variant="contained">
              {active >= steps.length ? 'Reset' : 'Next'}
            </Button>
          </Stack>
        </Box>
      </Box>
    )
  },
}

export const Vertical: Story = {
  render: () => {
    const [active, setActive] = useState(0)
    const vertSteps = [
      { label: 'Create account', desc: 'Enter your name, email and choose a secure password.' },
      { label: 'Verify email', desc: "We'll send a 6-digit code to your email address." },
      { label: 'Set up team', desc: 'Invite teammates or skip to explore solo first.' },
    ]
    return (
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={active} orientation="vertical">
          {vertSteps.map(({ label, desc }, i) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{desc}</Typography>
                <Stack direction="row" spacing={1}>
                  <Button size="small" variant="contained" onClick={() => setActive((p) => p + 1)}>
                    {i === vertSteps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button size="small" disabled={i === 0} onClick={() => setActive((p) => p - 1)}>Back</Button>
                </Stack>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {active === vertSteps.length && (
          <Paper variant="outlined" sx={{ p: 2, mt: 2, borderRadius: 2 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircle color="success" fontSize="small" />
              <Typography variant="body2">All steps completed!</Typography>
            </Stack>
            <Button size="small" onClick={() => setActive(0)} sx={{ mt: 1 }}>Reset</Button>
          </Paper>
        )}
      </Box>
    )
  },
}

export const Mobile: Story = {
  name: 'Mobile stepper',
  render: () => {
    const [active, setActive] = useState(0)
    return (
      <Box sx={{ maxWidth: 400, border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ p: 3, minHeight: 100 }}>
          <Typography variant="subtitle2" gutterBottom>Step {active + 1}</Typography>
          <Typography variant="body2" color="text.secondary">{steps[active]}</Typography>
        </Box>
        <MobileStepper
          variant="dots"
          steps={steps.length}
          position="static"
          activeStep={active}
          nextButton={
            <Button size="small" onClick={() => setActive((p) => p + 1)} disabled={active === steps.length - 1}>
              Next <CaretRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={() => setActive((p) => p - 1)} disabled={active === 0}>
              <CaretLeft /> Back
            </Button>
          }
        />
      </Box>
    )
  },
}

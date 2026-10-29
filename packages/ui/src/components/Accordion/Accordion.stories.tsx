import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion, AccordionSummary, AccordionDetails,
  Typography, Stack, Box, Divider, Chip,
} from '@dynasty-ds/ui'


const meta: Meta<typeof Accordion> = {
  title: 'Components/Surfaces/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 560 }}>
      <Accordion>
        <AccordionSummary>
          <Typography fontWeight={500}>What is Dynasty Design System?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            Dynasty DS is a MUI v5-based component library with Figma token integration. It provides a consistent visual language across all products.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography fontWeight={500}>How do I install it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            Run <code>pnpm add @dynasty-ds/ui</code> in your project. Then wrap your app with <code>ThemeProvider</code> from <code>@mui/material</code>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography fontWeight={500}>Where do I report bugs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            Open a GitHub issue on the DynastyDesignSystem repository with reproduction steps and a Storybook link.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  ),
}

export const ControlledExpansion: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string | false>('panel1')
    const toggle = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false)
    const panels = [
      { id: 'panel1', title: 'Account settings', content: 'Manage your profile, password, and connected apps.' },
      { id: 'panel2', title: 'Notifications', content: 'Control how and when you receive email, push, and SMS notifications.' },
      { id: 'panel3', title: 'Privacy', content: 'Adjust data sharing preferences and download your data.' },
    ]
    return (
      <Box sx={{ maxWidth: 560 }}>
        {panels.map(({ id, title, content }) => (
          <Accordion key={id} expanded={expanded === id} onChange={toggle(id)}>
            <AccordionSummary>
              <Typography fontWeight={expanded === id ? 600 : 400}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">{content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    )
  },
}

export const WithSubheading: Story = {
  render: () => (
    <Box sx={{ maxWidth: 560 }}>
      <Accordion defaultExpanded>
        <AccordionSummary>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', mr: 1 }}>
            <Typography fontWeight={500}>Integrations</Typography>
            <Chip label="3 active" size="small" color="success" />
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1} divider={<Divider />}>
            {['GitHub', 'Slack', 'Figma'].map((name) => (
              <Stack key={name} direction="row" justifyContent="space-between" alignItems="center" py={0.5}>
                <Typography variant="body2">{name}</Typography>
                <Chip label="Connected" size="small" color="success" variant="outlined" />
              </Stack>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  ),
}

export const DisabledPanel: Story = {
  render: () => (
    <Box sx={{ maxWidth: 560 }}>
      <Accordion defaultExpanded>
        <AccordionSummary>
          <Typography fontWeight={500}>Available</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">This panel is expanded by default.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary>
          <Typography>Disabled panel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">You cannot expand this.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  ),
}

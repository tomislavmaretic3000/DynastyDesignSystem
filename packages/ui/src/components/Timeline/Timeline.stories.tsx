import { Check, Code, Bug, Rocket, PenNib } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineContent, TimelineDot, TimelineOppositeContent,
} from '@dynasty-ds/ui'
import { Typography, Paper, Stack, Chip } from '@dynasty-ds/ui'






const meta: Meta<typeof Timeline> = {
  title: 'Components/Layout/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Timeline>

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle2">Project kickoff</Typography>
          <Typography variant="caption" color="text.secondary">Jan 15, 2026</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle2">Design system scaffolded</Typography>
          <Typography variant="caption" color="text.secondary">Jan 22, 2026</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle2">Token pipeline live</Typography>
          <Typography variant="caption" color="text.secondary">Feb 3, 2026</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle2">v1.0 released</Typography>
          <Typography variant="caption" color="text.secondary">Oct 28, 2026</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
}

export const WithOppositeContent: Story = {
  render: () => (
    <Timeline position="alternate">
      {[
        { date: 'Jan 2026', event: 'Monorepo scaffolded', color: 'primary' as const },
        { date: 'Feb 2026', event: 'Token pipeline built', color: 'secondary' as const },
        { date: 'Apr 2026', event: 'First 10 components', color: 'success' as const },
        { date: 'Aug 2026', event: 'Storybook deployed', color: 'info' as const },
        { date: 'Oct 2026', event: 'v1.0 shipped', color: 'warning' as const },
      ].map(({ date, event, color }) => (
        <TimelineItem key={event}>
          <TimelineOppositeContent color="text.secondary" variant="caption">{date}</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={color} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="body2" fontWeight={500}>{event}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Timeline sx={{ maxWidth: 480 }}>
      {[
        { icon: <PenNib fontSize="small" />, title: 'Design review', desc: 'Figma tokens exported and reviewed.', color: 'primary' as const, status: 'done' },
        { icon: <Code fontSize="small" />, title: 'Implementation', desc: 'Components built with MUI v5.', color: 'secondary' as const, status: 'done' },
        { icon: <Bug fontSize="small" />, title: 'QA testing', desc: 'Accessibility and cross-browser checks.', color: 'warning' as const, status: 'active' },
        { icon: <Rocket fontSize="small" />, title: 'Release', desc: 'Publish to npm and update docs.', color: 'success' as const, status: 'pending' },
      ].map(({ icon, title, desc, color, status }) => (
        <TimelineItem key={title}>
          <TimelineSeparator>
            <TimelineDot color={color} variant={status === 'pending' ? 'outlined' : 'filled'}>
              {icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ pb: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
              <Typography variant="subtitle2">{title}</Typography>
              <Chip
                label={status}
                size="small"
                color={status === 'done' ? 'success' : status === 'active' ? 'warning' : 'default'}
                variant={status === 'pending' ? 'outlined' : 'filled'}
                sx={{ height: 18, fontSize: 10 }}
              />
            </Stack>
            <Typography variant="body2" color="text.secondary">{desc}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  ),
}

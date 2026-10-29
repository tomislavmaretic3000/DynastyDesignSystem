import type { Meta, StoryObj } from '@storybook/react'
import { Box, Grid, Stack, Typography, TextField, Tooltip } from '@dynasty-ds/ui'
import {
  House, Gear, User, Bell, MagnifyingGlass, Plus, PencilSimple, Trash,
  FloppyDisk, X, Check, Warning, XCircle, Info, CheckCircle,
  ArrowLeft, ArrowRight, CaretDown, List, DotsThreeVertical,
  Star, Heart, ShareNetwork, DownloadSimple, UploadSimple,
  Funnel, ArrowsDownUp, SquaresFour, File, Folder, Image,
  Lock, Envelope, Phone, MapPin, Calendar, Clock, Tag,
  ChartBar, ChartLine, ChartPie, CurrencyDollar, Package,
  ArrowUp, ArrowDown, ArrowCircleRight, Spinner,
  Eye, EyeSlash, Copy, Link, Scissors, Clipboard,
  SmileyWink, Lightning, Rocket, Shield, Globe,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

const meta: Meta = {
  title: 'Design System/Icons',
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

const groups: { name: string; icons: [string, Icon][] }[] = [
  {
    name: 'Navigation & Actions',
    icons: [
      ['House', House], ['ArrowLeft', ArrowLeft], ['ArrowRight', ArrowRight],
      ['ArrowUp', ArrowUp], ['ArrowDown', ArrowDown], ['CaretDown', CaretDown],
      ['List', List], ['DotsThreeVertical', DotsThreeVertical],
      ['ArrowCircleRight', ArrowCircleRight],
    ],
  },
  {
    name: 'Common Actions',
    icons: [
      ['Plus', Plus], ['X', X], ['Check', Check], ['PencilSimple', PencilSimple],
      ['Trash', Trash], ['FloppyDisk', FloppyDisk], ['Copy', Copy],
      ['Scissors', Scissors], ['Clipboard', Clipboard], ['Link', Link],
    ],
  },
  {
    name: 'UI & Interface',
    icons: [
      ['MagnifyingGlass', MagnifyingGlass], ['Gear', Gear], ['Funnel', Funnel],
      ['ArrowsDownUp', ArrowsDownUp], ['SquaresFour', SquaresFour],
      ['Eye', Eye], ['EyeSlash', EyeSlash], ['Tag', Tag],
    ],
  },
  {
    name: 'Status & Feedback',
    icons: [
      ['CheckCircle', CheckCircle], ['Warning', Warning],
      ['XCircle', XCircle], ['Info', Info], ['Spinner', Spinner],
      ['Shield', Shield],
    ],
  },
  {
    name: 'People & Communication',
    icons: [
      ['User', User], ['Bell', Bell], ['Envelope', Envelope],
      ['Phone', Phone], ['ShareNetwork', ShareNetwork], ['Globe', Globe],
    ],
  },
  {
    name: 'Files & Media',
    icons: [
      ['File', File], ['Folder', Folder], ['Image', Image],
      ['DownloadSimple', DownloadSimple], ['UploadSimple', UploadSimple],
    ],
  },
  {
    name: 'Data & Finance',
    icons: [
      ['ChartBar', ChartBar], ['ChartLine', ChartLine], ['ChartPie', ChartPie],
      ['CurrencyDollar', CurrencyDollar], ['Package', Package],
    ],
  },
  {
    name: 'Misc',
    icons: [
      ['Star', Star], ['Heart', Heart], ['Lock', Lock],
      ['MapPin', MapPin], ['Calendar', Calendar], ['Clock', Clock],
      ['SmileyWink', SmileyWink], ['Lightning', Lightning], ['Rocket', Rocket],
    ],
  },
]

const weights = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'] as const

export const Gallery: Story = {
  render: () => (
    <Stack spacing={5}>
      {groups.map(({ name, icons }) => (
        <Box key={name}>
          <Typography variant="subtitle2" fontWeight={600} gutterBottom>{name}</Typography>
          <Grid container spacing={1}>
            {icons.map(([label, Icon]) => (
              <Grid item key={label} xs={2} sm={1}>
                <Tooltip title={label} placement="top">
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 0.5,
                      p: 1.5,
                      borderRadius: 1,
                      cursor: 'default',
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <Icon size={24} />
                    <Typography variant="caption" color="text.disabled" sx={{ fontSize: 9, textAlign: 'center', lineHeight: 1.2 }}>
                      {label}
                    </Typography>
                  </Box>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  ),
}

export const Weights: Story = {
  name: 'Icon Weights',
  render: () => (
    <Stack spacing={3}>
      <Typography variant="caption" color="text.secondary">
        Phosphor icons ship 6 weights per icon. Use <code>regular</code> for UI, <code>bold</code> for emphasis, <code>fill</code> for active/selected states.
      </Typography>
      {weights.map((weight) => (
        <Stack key={weight} direction="row" alignItems="center" spacing={3}>
          <Typography variant="caption" color="text.secondary" sx={{ width: 64 }}>{weight}</Typography>
          <Stack direction="row" spacing={2}>
            {[House, Bell, CheckCircle, Star, Warning, Lock, Gear].map((Icon, i) => (
              <Icon key={i} size={24} weight={weight} />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  ),
}

export const Sizes: Story = {
  name: 'Icon Sizes',
  render: () => (
    <Stack spacing={2}>
      {[12, 16, 20, 24, 32, 40, 48].map((size) => (
        <Stack key={size} direction="row" alignItems="center" spacing={3}>
          <Typography variant="caption" color="text.secondary" sx={{ width: 32 }}>{size}px</Typography>
          <House size={size} />
          <Bell size={size} />
          <CheckCircle size={size} />
          <Star size={size} />
        </Stack>
      ))}
    </Stack>
  ),
}

export const InContext: Story = {
  name: 'Icons in Context',
  render: () => (
    <Stack spacing={3} maxWidth={480}>
      <TextField
        label="Search"
        placeholder="Search…"
        InputProps={{ startAdornment: <MagnifyingGlass size={18} style={{ marginRight: 8, flexShrink: 0 }} /> }}
      />
      <Stack direction="row" spacing={1}>
        {[
          { label: 'Add item', icon: <Plus size={18} /> },
          { label: 'Edit', icon: <PencilSimple size={18} /> },
          { label: 'Delete', icon: <Trash size={18} /> },
          { label: 'Share', icon: <ShareNetwork size={18} /> },
        ].map(({ label, icon }) => (
          <Box
            key={label}
            sx={{
              display: 'inline-flex', alignItems: 'center', gap: 0.75,
              px: 2, py: 1, borderRadius: 1, bgcolor: 'primary.light',
              color: 'primary.main', cursor: 'pointer', fontSize: 13, fontWeight: 500,
              '&:hover': { bgcolor: 'primary.main', color: 'primary.contrastText' },
            }}
          >
            {icon}{label}
          </Box>
        ))}
      </Stack>
    </Stack>
  ),
}

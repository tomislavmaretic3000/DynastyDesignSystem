import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stack, Typography, Box, Pagination, PaginationItem } from '@dynasty-ds/ui'



const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined'],
    },
    shape: {
      control: 'select',
      options: ['circular', 'rounded'],
    },
    color: {
      control: 'select',
      options: ['standard', 'primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    count: 10,
    color: 'primary',
  },
}

export const Variants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Pagination count={10} variant="text" color="primary" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Pagination count={10} color="standard" />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Pagination count={10} size="small" color="primary" />
      <Pagination count={10} size="medium" color="primary" />
      <Pagination count={10} size="large" color="primary" />
    </Stack>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return (
      <Stack spacing={2} alignItems="center">
        <Typography variant="body2" color="text.secondary">Page {page} of 20</Typography>
        <Pagination
          count={20}
          page={page}
          color="primary"
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    )
  },
}

export const CustomPrevNext: Story = {
  render: () => (
    <Pagination
      count={10}
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowLeft, next: ArrowRight }}
          {...item}
        />
      )}
    />
  ),
}

export const WithTableContext: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const perPage = 5
    const total = 47
    const totalPages = Math.ceil(total / perPage)
    const from = (page - 1) * perPage + 1
    const to = Math.min(page * perPage, total)

    return (
      <Stack spacing={2}>
        <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 1, p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Table content — showing rows {from}–{to} of {total}
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="caption" color="text.secondary">
            Showing {from}–{to} of {total} results
          </Typography>
          <Pagination
            count={totalPages}
            page={page}
            size="small"
            color="primary"
            onChange={(_, value) => setPage(value)}
          />
        </Stack>
      </Stack>
    )
  },
}

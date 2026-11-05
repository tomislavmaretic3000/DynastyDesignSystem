'use client'

import { useState, type ReactNode } from 'react'
import { Box, Collapse, Stack, Typography } from '@mui/material'
import { CaretDown, CaretUp } from '@phosphor-icons/react'

type CollapsibleSectionProps = {
  title: string
  count?: number
  defaultOpen?: boolean
  children: ReactNode
}

export function CollapsibleSection({ title, count, defaultOpen = true, children }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        onClick={() => setOpen((prev) => !prev)}
        sx={{ cursor: 'pointer', py: 2 }}
      >
        <Typography variant="subtitle1" color="primary.main" fontWeight={600}>
          {title}
          {count !== undefined ? ` (${count})` : ''}
        </Typography>
        {open ? <CaretUp size={16} /> : <CaretDown size={16} />}
      </Stack>
      <Collapse in={open}>{children}</Collapse>
    </Box>
  )
}

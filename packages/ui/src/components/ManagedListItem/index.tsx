'use client'

import type { ReactNode } from 'react'
import { Stack, Typography } from '@mui/material'
import { Lock } from '@phosphor-icons/react'
import { mutedIconColor } from '../../theme'

type ManagedListItemProps = {
  title: string
  locked?: boolean
  /** Inline badges rendered next to the title, e.g. an expiry warning chip. */
  titleChips?: ReactNode
  byline?: string
  /** Topic/category chip row, rendered below the byline. */
  tags?: ReactNode
  description?: string
  /** Right-aligned status chip or action icons — content varies per row. */
  trailing?: ReactNode
}

export function ManagedListItem({
  title,
  locked,
  titleChips,
  byline,
  tags,
  description,
  trailing,
}: ManagedListItemProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={3}
      sx={{
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        '&:last-of-type': { borderBottom: 0 },
      }}
    >
      <Stack spacing={1} sx={{ minWidth: 0, flex: 1 }}>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Typography variant="body2">{title}</Typography>
          {locked && <Lock size={14} weight="fill" color={mutedIconColor} />}
          {titleChips}
        </Stack>
        {byline && (
          <Typography variant="caption" color="text.secondary">
            By {byline}
          </Typography>
        )}
        {tags}
        {description && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>
        )}
      </Stack>
      {trailing && (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ flexShrink: 0 }}>
          {trailing}
        </Stack>
      )}
    </Stack>
  )
}

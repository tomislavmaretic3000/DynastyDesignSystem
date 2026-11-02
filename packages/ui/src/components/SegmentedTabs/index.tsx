'use client'

import { useRef, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'

export type SegmentedTabItem<T extends string = string> = {
  value: T
  label: string
  count?: number
}

type SegmentedTabsProps<T extends string> = {
  tabs: SegmentedTabItem<T>[]
  value: T
  onChange: (value: T) => void
  sx?: SxProps<Theme>
}

// Height matches MUI TextField size="small" (40px) so it aligns inline with inputs.
const TAB_HEIGHT = 40

export function SegmentedTabs<T extends string>({
  tabs,
  value,
  onChange,
  sx,
}: SegmentedTabsProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLSpanElement>(null)
  const mountedRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    const pill = pillRef.current
    if (!container || !pill) return
    const btn = container.querySelector<HTMLButtonElement>(`[data-tab="${value}"]`)
    if (!btn) return
    const cRect = container.getBoundingClientRect()
    const bRect = btn.getBoundingClientRect()
    const left = bRect.left - cRect.left
    const width = bRect.width
    if (!mountedRef.current) {
      mountedRef.current = true
      pill.style.transition = 'none'
      pill.style.transform = `translateX(${left}px)`
      pill.style.width = `${width}px`
      void pill.offsetWidth
      pill.style.transition = ''
    } else {
      pill.style.transform = `translateX(${left}px)`
      pill.style.width = `${width}px`
    }
  }, [value])

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        display: 'flex',
        width: 'max-content',
        height: TAB_HEIGHT,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'hidden',
        bgcolor: 'grey.50',
        ...sx,
      }}
    >
      <span ref={pillRef} className="seg-tabs-pill" />
      {tabs.map(({ value: v, label, count }) => (
        <Box
          key={v}
          component="button"
          data-tab={v}
          onClick={() => onChange(v)}
          sx={{
            flex: 'none',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 1,
            border: 0,
            background: 'transparent',
            cursor: 'pointer',
            height: '100%',
            px: 5,
            fontSize: 14,
            fontWeight: value === v ? 600 : 400,
            color: value === v ? 'text.primary' : 'text.secondary',
            transition: 'color var(--tabs-dur) var(--tabs-ease)',
            '&:hover': { color: 'text.primary' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            fontFamily: 'inherit',
          }}
        >
          <Box component="span" sx={{ whiteSpace: 'nowrap', flex: 'none' }}>{label}</Box>
          {count !== undefined && (
            <Typography component="span" variant="body2" sx={{ fontWeight: 'inherit', whiteSpace: 'nowrap', flex: 'none' }}>
              ({count})
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  )
}

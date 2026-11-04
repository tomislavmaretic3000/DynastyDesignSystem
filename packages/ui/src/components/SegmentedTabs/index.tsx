'use client'

import { useRef, useEffect } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'
import { tokens } from '../../tokens'
import { controlHeightSm } from '../../theme'

export type SegmentedTabItem<T extends string = string> = {
  value: T
  label: string
  count?: number
}

type SegmentedTabsProps<T extends string> = {
  tabs: SegmentedTabItem<T>[]
  value: T
  onChange: (value: T) => void
  /** Stretches the control to fill its container, distributing tabs evenly. */
  fullWidth?: boolean
  sx?: SxProps<Theme>
}


export function SegmentedTabs<T extends string>({
  tabs,
  value,
  onChange,
  fullWidth = false,
  sx,
}: SegmentedTabsProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLSpanElement>(null)
  const mountedRef = useRef(false)
  const theme = useTheme()

  const pillTransition = theme.transitions.create(['transform', 'width'], {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut,
  })

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
      pill.style.transition = pillTransition
    } else {
      pill.style.transform = `translateX(${left}px)`
      pill.style.width = `${width}px`
    }
  }, [value, pillTransition])

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        display: 'flex',
        width: fullWidth ? '100%' : 'max-content',
        height: controlHeightSm,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.default',
        ...sx,
      }}
    >
      <Box
        ref={pillRef}
        component="span"
        className="seg-tabs-pill"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          borderRadius: 1,
          bgcolor: 'background.paper',
          zIndex: 0,
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.06))',
        }}
      />
      {tabs.map(({ value: v, label, count }) => (
        <Box
          key={v}
          component="button"
          data-tab={v}
          onClick={() => onChange(v)}
          sx={{
            flex: fullWidth ? '1 1 0' : 'none',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 1,
            border: 0,
            background: 'transparent',
            cursor: 'pointer',
            height: '100%',
            px: 5,
            fontSize: tokens.fontSizes.sm,
            fontWeight: 400,
            color: value === v ? 'text.primary' : 'text.secondary',
            transition: (t) => t.transitions.create('color', {
              duration: t.transitions.duration.shortest,
              easing: t.transitions.easing.easeInOut,
            }),
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
            <Typography component="span" variant="body2" sx={{ whiteSpace: 'nowrap', flex: 'none' }}>
              ({count})
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  )
}

import type { Preview } from '@storybook/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@dynasty-ds/ui'
import { IconContext } from '@phosphor-icons/react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IconContext.Provider value={{ weight: 'bold', size: 20 }}>
          <Story />
        </IconContext.Provider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'paper', value: '#f5f5f5' },
        { name: 'dark', value: '#121212' },
      ],
    },
  },
}

export default preview

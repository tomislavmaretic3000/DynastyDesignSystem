import { TwitterLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Box, Container, Grid, Stack, Typography, Link, Divider,
  IconButton,
} from '@dynasty-ds/ui'




const meta: Meta = {
  title: 'Components/Layout/Footer',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'API Reference', 'Storybook', 'GitHub'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
}

export const Simple: Story = {
  render: () => (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 3,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 Dynasty. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" underline="hover" color="text.secondary" variant="body2">Privacy</Link>
            <Link href="#" underline="hover" color="text.secondary" variant="body2">Terms</Link>
            <Link href="#" underline="hover" color="text.secondary" variant="body2">Contact</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  ),
}

export const WithColumns: Story = {
  render: () => (
    <Box component="footer" sx={{ bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={700} gutterBottom>Dynasty</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, maxWidth: 280 }}>
              A MUI v5-based design system for building consistent, accessible interfaces faster.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" href="#"><TwitterLogo fontSize="small" /></IconButton>
              <IconButton size="small" href="#"><LinkedinLogo fontSize="small" /></IconButton>
              <IconButton size="small" href="#"><GithubLogo fontSize="small" /></IconButton>
            </Stack>
          </Grid>

          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <Typography variant="subtitle2" fontWeight={600} gutterBottom>{category}</Typography>
              <Stack spacing={1}>
                {links.map((link) => (
                  <Link key={link} href="#" underline="hover" color="text.secondary" variant="body2">
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="caption" color="text.secondary">
            © 2026 Dynasty Inc. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" underline="hover" color="text.secondary" variant="caption">Privacy Policy</Link>
            <Link href="#" underline="hover" color="text.secondary" variant="caption">Terms of Service</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  ),
}

export const Dark: Story = {
  render: () => (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={700} gutterBottom color="inherit">Dynasty</Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.7, maxWidth: 280 }}>
              Building great products with a consistent design language.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: 'inherit', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                <TwitterLogo fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'inherit', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                <LinkedinLogo fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: 'inherit', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                <GithubLogo fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {Object.entries(footerLinks).slice(0, 3).map(([category, links]) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <Typography variant="subtitle2" fontWeight={600} gutterBottom color="inherit">{category}</Typography>
              <Stack spacing={1}>
                {links.map((link) => (
                  <Link key={link} href="#" underline="hover" variant="body2"
                    sx={{ color: 'inherit', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.15)' }} />

        <Typography variant="caption" sx={{ opacity: 0.5 }}>
          © 2026 Dynasty Inc. All rights reserved.
        </Typography>
      </Container>
    </Box>
  ),
}

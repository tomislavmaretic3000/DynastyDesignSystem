import type { Meta, StoryObj } from '@storybook/react'
import {
  Card, CardContent, CardHeader, CardActions, CardMedia, CardActionArea,
  Button, Typography, Avatar, IconButton, Grid, Chip, Stack, Box,
} from '@dynasty-ds/ui'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'

const meta: Meta<typeof Card> = {
  title: 'Components/Surfaces/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Card Title</Typography>
        <Typography variant="body2" color="text.secondary">
          Card content goes here. This is the default card layout with just content.
        </Typography>
      </CardContent>
    </Card>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>R</Avatar>}
        action={<IconButton><MoreVertIcon /></IconButton>}
        title="Card Title"
        subheader="September 14, 2026"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish. You can have it ready in 45 minutes.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"><FavoriteIcon /></IconButton>
        <IconButton aria-label="share"><ShareIcon /></IconButton>
      </CardActions>
    </Card>
  ),
}

export const WithMedia: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        component="img"
        height="160"
        image="https://picsum.photos/seed/dynasty/400/200"
        alt="Card image"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>Card with Image</Typography>
        <Typography variant="body2" color="text.secondary">
          Cards can include images to provide visual context for the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="text">Learn More</Button>
        <Button size="small" variant="contained">Action</Button>
      </CardActions>
    </Card>
  ),
}

export const Clickable: Story = {
  render: () => (
    <Card sx={{ maxWidth: 360 }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" gutterBottom>Clickable Card</Typography>
          <Typography variant="body2" color="text.secondary">
            The entire card surface is a click target. Useful for navigation cards.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ),
}

export const Elevated: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      {[0, 1, 2, 4, 8, 16].map((elevation) => (
        <Card key={elevation} elevation={elevation} sx={{ width: 160, p: 2 }}>
          <Typography variant="caption" color="text.secondary">elevation={elevation}</Typography>
          <Typography variant="body2">Card content</Typography>
        </Card>
      ))}
    </Stack>
  ),
}

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Outlined Card</Typography>
        <Typography variant="body2" color="text.secondary">
          This card uses a border instead of a shadow for its visual boundary.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">Action</Button>
      </CardActions>
    </Card>
  ),
}

export const StatCard: Story = {
  render: () => (
    <Grid container spacing={2} sx={{ maxWidth: 800 }}>
      {[
        { label: 'Total Users', value: '12,430', change: '+12%', color: 'primary.main' },
        { label: 'Revenue', value: '$84,200', change: '+8.3%', color: 'success.main' },
        { label: 'Active Sessions', value: '1,890', change: '-2.1%', color: 'error.main' },
        { label: 'Conversion Rate', value: '3.24%', change: '+0.4%', color: 'secondary.main' },
      ].map((stat) => (
        <Grid item xs={6} key={stat.label}>
          <Card>
            <CardContent>
              <Typography variant="caption" color="text.secondary" display="block">{stat.label}</Typography>
              <Typography variant="h4" sx={{ my: 1 }}>{stat.value}</Typography>
              <Chip
                label={stat.change}
                size="small"
                sx={{
                  bgcolor: stat.change.startsWith('+') ? 'success.light' : 'error.light',
                  color: stat.change.startsWith('+') ? 'success.dark' : 'error.dark',
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  ),
}

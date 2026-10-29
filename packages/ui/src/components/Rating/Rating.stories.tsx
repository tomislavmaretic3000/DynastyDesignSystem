import { Heart } from '@phosphor-icons/react'
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Rating, Stack, Box, Typography } from '@dynasty-ds/ui'



const meta: Meta<typeof Rating> = {
  title: 'Components/Inputs/Rating',
  component: Rating,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {
  render: () => (
    <Stack spacing={2}>
      <Rating defaultValue={3} />
      <Rating defaultValue={4.5} precision={0.5} />
      <Rating defaultValue={0} />
      <Rating defaultValue={3} readOnly />
    </Stack>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(3)
    return (
      <Stack spacing={1}>
        <Typography variant="body2" color="text.secondary">
          Rating: {value ?? 'none'}
        </Typography>
        <Rating
          value={value}
          onChange={(_, v) => setValue(v)}
        />
      </Stack>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Rating defaultValue={3} size="small" />
      <Rating defaultValue={3} size="medium" />
      <Rating defaultValue={3} size="large" />
    </Stack>
  ),
}

export const HalfPrecision: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="caption" color="text.secondary">Full precision</Typography>
      <Rating defaultValue={2} />
      <Typography variant="caption" color="text.secondary">Half precision</Typography>
      <Rating defaultValue={2.5} precision={0.5} />
    </Stack>
  ),
}

export const CustomIcon: Story = {
  render: () => (
    <Rating
      defaultValue={3}
      icon={<Heart color="error" />}
      emptyIcon={<Heart />}
    />
  ),
}

export const ProductReviews: Story = {
  name: 'Product reviews',
  render: () => {
    const reviews = [
      { name: 'Alex M.', rating: 5, comment: 'Excellent design system, saves hours every sprint.' },
      { name: 'Jordan L.', rating: 4, comment: 'Really clean components. Minor token issues fixed quickly.' },
      { name: 'Sam R.', rating: 5, comment: 'The Figma → code pipeline is seamless.' },
    ]
    return (
      <Stack spacing={3} sx={{ maxWidth: 480 }}>
        {reviews.map(({ name, rating, comment }) => (
          <Box key={name} sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={0.5}>
              <Typography variant="subtitle2">{name}</Typography>
              <Rating value={rating} readOnly size="small" />
            </Stack>
            <Typography variant="body2" color="text.secondary">{comment}</Typography>
          </Box>
        ))}
      </Stack>
    )
  },
}

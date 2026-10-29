import { PencilSimple, Trash } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, Paper, Chip, Avatar, Stack, Typography, IconButton,
} from '@dynasty-ds/ui'


import { useState } from 'react'

const meta: Meta = {
  title: 'Components/Data Display/Table',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

const rows = [
  { id: 1, name: 'Alex Morgan', email: 'alex@example.com', role: 'Designer', status: 'Active' },
  { id: 2, name: 'Jordan Lee', email: 'jordan@example.com', role: 'Engineer', status: 'Active' },
  { id: 3, name: 'Sam Rivera', email: 'sam@example.com', role: 'Product', status: 'Pending' },
  { id: 4, name: 'Casey Kim', email: 'casey@example.com', role: 'Marketing', status: 'Inactive' },
  { id: 5, name: 'Taylor Chen', email: 'taylor@example.com', role: 'Engineer', status: 'Active' },
]

const statusColor = (status: string) => {
  if (status === 'Active') return 'success'
  if (status === 'Pending') return 'warning'
  return 'default'
}

export const Simple: Story = {
  render: () => (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  size="small"
                  color={statusColor(row.status) as any}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const WithAvatars: Story = {
  render: () => (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: 14 }}>
                    {row.name[0]}
                  </Avatar>
                  <Stack>
                    <Typography variant="body2" fontWeight={500}>{row.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{row.email}</Typography>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography variant="body2">{row.role}</Typography>
              </TableCell>
              <TableCell>
                <Chip label={row.status} size="small" color={statusColor(row.status) as any} />
              </TableCell>
              <TableCell align="right">
                <IconButton size="small"><PencilSimple fontSize="small" /></IconButton>
                <IconButton size="small" color="error"><Trash fontSize="small" /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const WithPagination: Story = {
  render: () => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(3)
    const visible = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    return (
      <Paper variant="outlined">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visible.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>
                    <Chip label={row.status} size="small" color={statusColor(row.status) as any} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, p) => setPage(p)}
          onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0) }}
        />
      </Paper>
    )
  },
}

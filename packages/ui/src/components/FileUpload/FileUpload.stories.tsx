import { useState, useRef } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Box, Button, Stack, Typography, LinearProgress,
  List, ListItem, ListItemIcon, ListItemText, IconButton,
  Paper, Chip, Alert,
} from '@dynasty-ds/ui'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import ImageIcon from '@mui/icons-material/Image'
import DeleteIcon from '@mui/icons-material/Delete'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const meta: Meta = {
  title: 'Components/Inputs/File Upload',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export const ButtonTrigger: Story = {
  render: () => {
    const [files, setFiles] = useState<File[]>([])
    const ref = useRef<HTMLInputElement>(null)
    return (
      <Stack spacing={2} sx={{ maxWidth: 480 }}>
        <input
          type="file"
          multiple
          ref={ref}
          style={{ display: 'none' }}
          onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
        />
        <Button
          variant="outlined"
          startIcon={<UploadFileIcon />}
          onClick={() => ref.current?.click()}
        >
          Upload Files
        </Button>
        {files.length > 0 && (
          <List dense>
            {files.map((file) => (
              <ListItem
                key={file.name}
                secondaryAction={
                  <IconButton size="small" edge="end" onClick={() => setFiles((f) => f.filter((x) => x !== file))}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                }
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {file.type.startsWith('image/') ? <ImageIcon fontSize="small" color="primary" /> : <InsertDriveFileIcon fontSize="small" />}
                </ListItemIcon>
                <ListItemText
                  primary={file.name}
                  secondary={formatSize(file.size)}
                  primaryTypographyProps={{ variant: 'body2', noWrap: true }}
                  secondaryTypographyProps={{ variant: 'caption' }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Stack>
    )
  },
}

export const DropZone: Story = {
  render: () => {
    const [dragging, setDragging] = useState(false)
    const [files, setFiles] = useState<File[]>([])
    const ref = useRef<HTMLInputElement>(null)

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setDragging(false)
      setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)])
    }

    return (
      <Stack spacing={2} sx={{ maxWidth: 480 }}>
        <input
          type="file"
          multiple
          ref={ref}
          style={{ display: 'none' }}
          onChange={(e) => setFiles((prev) => [...prev, ...Array.from(e.target.files ?? [])])}
        />
        <Paper
          variant="outlined"
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => ref.current?.click()}
          sx={{
            p: 4,
            textAlign: 'center',
            cursor: 'pointer',
            borderStyle: 'dashed',
            borderColor: dragging ? 'primary.main' : 'divider',
            bgcolor: dragging ? 'primary.light' : 'background.default',
            transition: 'all 0.2s',
            '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
          <Typography variant="body1" fontWeight={500}>Drop files here or click to upload</Typography>
          <Typography variant="caption" color="text.secondary">
            PNG, JPG, PDF up to 10MB
          </Typography>
        </Paper>

        {files.length > 0 && (
          <List dense>
            {files.map((file, i) => (
              <ListItem
                key={`${file.name}-${i}`}
                secondaryAction={
                  <IconButton size="small" edge="end" onClick={() => setFiles((f) => f.filter((_, idx) => idx !== i))}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                }
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {file.type.startsWith('image/') ? <ImageIcon fontSize="small" color="primary" /> : <InsertDriveFileIcon fontSize="small" />}
                </ListItemIcon>
                <ListItemText
                  primary={file.name}
                  secondary={formatSize(file.size)}
                  primaryTypographyProps={{ variant: 'body2', noWrap: true }}
                  secondaryTypographyProps={{ variant: 'caption' }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Stack>
    )
  },
}

export const WithProgress: Story = {
  render: () => {
    const mockFiles = [
      { name: 'design-tokens.json', size: '24 KB', progress: 100, status: 'done' },
      { name: 'brand-assets.zip', size: '4.2 MB', progress: 65, status: 'uploading' },
      { name: 'typography.pdf', size: '1.1 MB', progress: 0, status: 'queued' },
    ]
    return (
      <Stack spacing={2} sx={{ maxWidth: 480 }}>
        <Button variant="outlined" startIcon={<UploadFileIcon />}>Add Files</Button>
        <List>
          {mockFiles.map((file) => (
            <ListItem key={file.name} disablePadding sx={{ mb: 1 }}>
              <Box sx={{ width: '100%' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={0.5}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <InsertDriveFileIcon fontSize="small" color="action" />
                    <Typography variant="body2">{file.name}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="caption" color="text.secondary">{file.size}</Typography>
                    {file.status === 'done' && <CheckCircleIcon fontSize="small" color="success" />}
                    {file.status === 'queued' && <Chip label="Queued" size="small" variant="outlined" />}
                  </Stack>
                </Stack>
                {file.status !== 'queued' && (
                  <LinearProgress
                    variant="determinate"
                    value={file.progress}
                    color={file.status === 'done' ? 'success' : 'primary'}
                    sx={{ borderRadius: 1 }}
                  />
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      </Stack>
    )
  },
}

export const AvatarUpload: Story = {
  render: () => {
    const [preview, setPreview] = useState<string | null>(null)
    const ref = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (ev) => setPreview(ev.target?.result as string)
        reader.readAsDataURL(file)
      }
    }

    return (
      <Stack spacing={2} alignItems="flex-start">
        <input type="file" accept="image/*" ref={ref} style={{ display: 'none' }} onChange={handleChange} />
        <Box
          onClick={() => ref.current?.click()}
          sx={{
            width: 96, height: 96, borderRadius: '50%',
            border: '2px dashed', borderColor: 'divider',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', overflow: 'hidden',
            '&:hover': { borderColor: 'primary.main' },
            backgroundImage: preview ? `url(${preview})` : 'none',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        >
          {!preview && <CloudUploadIcon color="action" />}
        </Box>
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" onClick={() => ref.current?.click()}>
            {preview ? 'Change photo' : 'Upload photo'}
          </Button>
          {preview && (
            <Button size="small" variant="text" color="error" onClick={() => setPreview(null)}>
              Remove
            </Button>
          )}
        </Stack>
        <Typography variant="caption" color="text.secondary">
          JPG, PNG or GIF. Max 2MB.
        </Typography>
      </Stack>
    )
  },
}

import { Button } from '@mui/material'
import React from 'react'

export default function Logsign({theme, value}) {
  return (
    <div>
        <Button variant="contained" size="medium" sx={{ width: "100%", fontWeight: "600", background: theme.palette.secondary.blue, ":hover": { background: theme.palette.primary.main, color: theme.palette.secondary.blue } }}>{value}</Button>
    </div>
  )
}

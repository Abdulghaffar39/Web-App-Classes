import { Button } from '@mui/material'
import React from 'react'

export default function LoginSignupbtn({ value }) {
    return (

        <Button variant="contained" sx={{ width: "100%", fontWeight: "600", background: theme.palette.secondary.blue, ":hover": { background: theme.palette.primary.main, color: theme.palette.secondary.blue } }} size="medium">{value}</Button>

    )
}

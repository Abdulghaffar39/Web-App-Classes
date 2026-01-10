import React from 'react'
import { Button, Paper, Stack, Typography } from '@mui/material'
import Input from '../../Components/Input/Input'
import { Link } from 'react-router'

export default function Login({theme}) {

    return (

        <div>

            <Paper sx={{ width: "50%", background: theme.palette.primary.main, margin: "150px auto", alignItems: "center", color: theme.palette.secondary.main, borderRadius: "20px", padding: "20px" }}>

                <Stack spacing={2} sx={{ padding: "30px", gap: "30px" }}>

                    <Typography sx={{ textAlign: "center", fontSize: "38px", fontWeight: "600" }}>
                        Log In
                    </Typography>

                    <Input label="Email" placeholder="Enter your email name" />
                    <Input label="Password" placeholder="Enter your password name" />


                    <Link to="/Home"><Button variant="contained" sx={{ width: "100%", fontWeight: "600", background: theme.palette.secondary.blue, ":hover": { background: theme.palette.primary.main, color: theme.palette.secondary.blue } }} size="medium">Login</Button></Link>
                </Stack>

            </Paper >

        </div>
    )
}

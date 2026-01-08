import { Autocomplete, Box, colors, Container, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Input from '../../Components/Input/Input'

export default function SignUp() {
    return (


        <Paper sx={{ width: "50%", background: "#1B1B1B", margin: "auto", alignItems: "center", color: "white", borderRadius: "20px" }}>

            <Stack spacing={2} sx={{ padding: "30px" }}>

                <Typography sx={{ textAlign: "center" }}>
                    SignUp
                </Typography>

                <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                    <Input sx={{ width: "50%" }} label="First Name" placeholder="Enter your first name" />
                    <Input sx={{ width: "50%" }} label="Last Name" placeholder="Enter your last name" />
                </Box>

                <Input label="Email" placeholder="Enter your email name" />
                <Input label="Password" placeholder="Enter your password name" />

            </Stack>

        </Paper>


    )
}

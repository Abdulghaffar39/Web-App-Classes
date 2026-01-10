import React from 'react'
import { Box, Button, colors, Paper, Stack, Typography } from '@mui/material'
import Input from '../../Components/Input/Input'
import { Link } from 'react-router'
import Logsign from '../../Components/Buttons/Logsign/Logsign'

export default function SignUp({ theme }) {

    return (

        <Paper sx={{ width: "50%", background: theme.palette.primary.main, margin: "150px auto", alignItems: "center", color: theme.palette.secondary.main, borderRadius: "20px", padding: "20px" }}>

            <Stack spacing={2} sx={{ padding: "30px", gap: "30px" }}>

                <Typography sx={{ textAlign: "center", fontSize: "38px", fontWeight: "600" }}>
                    SignUp
                </Typography>

                <Box sx={{ display: "flex", gap: "20px" }}>
                    <Input label="First Name" placeholder="Enter your first name" />
                    <Input label="Last Name" placeholder="Enter your last name" />
                </Box>

                <Input label="Email" placeholder="Enter your email name" />
                <Input label="Password" placeholder="Enter your password name" />


                <Link to="/login"></Link>
                <Logsign value="Sign Up" />
            </Stack>

        </Paper >


    )
}

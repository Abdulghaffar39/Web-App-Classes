import React, { useState } from 'react'
import { Button, Paper, Stack, Typography } from '@mui/material'
import Input from '../../Components/Input/Input'
import { Link } from 'react-router'
import Logsign from '../../Components/Buttons/Logsign/Logsign'

export default function Login({ theme }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const [user, setUser] = useState(null)
    // const [error, setError] = useState(null)
    // const [isLoading, setIsLoading] = useState(false)
    // const [shouldSignup, setShouldSignup] = useState(false)

    return (

        <div>

            <Paper sx={{ width: "50%", background: theme.palette.primary.main, margin: "150px auto", alignItems: "center", color: theme.palette.secondary.main, borderRadius: "20px", padding: "20px" }}>

                <Stack spacing={2} sx={{ padding: "30px", gap: "30px" }}>

                    <Typography sx={{ textAlign: "center", fontSize: "38px", fontWeight: "600" }}>
                        Log In
                    </Typography>

                    <Input
                        value={email}
                        label="Email"
                        placeholder="Enter your email name"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        value={password}
                        label="Password"
                        placeholder="Enter your password name"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Link to="/Home"><Logsign theme={theme} value="Log In" /></Link>
                </Stack>

            </Paper >

        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import Input from '../../Components/Input/Input'
import { Link } from 'react-router'

export default function Login({ theme }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [shouldSignup, setShouldSignup] = useState(false)

    useEffect(() => {
        if (!shouldSignup) return;
        async function HandleFuc() {
            const value = (email, password)
            console.log(value);
            
        }
        HandleFuc()
    })

    return (

        <div>

            <Paper sx={{ width: "50%", backgroundColor: theme.palette.secondary.main, margin: "120px auto", alignItems: "center", color: theme.palette.secondary.main, borderRadius: "20px", padding: "20px" }}>

                <Stack spacing={2} sx={{ padding: "30px", gap: "30px" }}>

                    <Typography sx={{ color: "black", textAlign: "center", fontSize: "38px", fontWeight: "700" }}>
                        Log In
                    </Typography>

                    <TextField
                        sx={{ color: "red", label: { color: "gray" }, input: { color: "black", borderColor: "white" } }}
                        type="email"
                        label="Email"
                        placeholder="Enter your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        sx={{ color: "red", label: { color: "gray" }, input: { color: "black", borderColor: "white" } }}
                        type="password"
                        label="Password"
                        placeholder="Enter your Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Link to="/home">
                        <Button
                            variant="contained"
                            size="medium"
                            sx={{ width: "100%", fontWeight: "600", background: theme.palette.secondary.blue, ":hover": { background: theme.palette.primary.main, color: theme.palette.secondary.blue } }}
                            disabled={!email || !password}
                            onClick={() => setShouldSignup(true)}>

                            {/* {isLoading ? "Log In..." : "Login"} */}
                            Login

                        </Button>
                    </Link>
                </Stack>

            </Paper >

        </div>
    )
}

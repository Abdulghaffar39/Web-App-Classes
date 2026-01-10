import { useEffect, useState } from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import Input from '../../Components/Input/Input'
import { Link } from 'react-router'
import Logsign from '../../Components/Buttons/Logsign/Logsign'

export default function SignUp({ theme }) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [shouldSignup, setShouldSignup] = useState(false);

    useEffect(() => {

        const handleSingup = async () => {
            try {

                let values = { fname, lname, email, password }
                console.log(values);
                console.log('lkjfdlksdf');

            }
            catch (err) {
                console.log(err);

            }
        }

        handleSingup()

    }, [shouldSignup, email, password])

    return (

        <Paper sx={{ width: "50%", background: theme.palette.primary.main, margin: "120px auto", alignItems: "center", color: theme.palette.secondary.main, borderRadius: "20px", padding: "20px" }}>

            <Stack spacing={2} sx={{ padding: "30px", gap: "30px" }}>

                <Typography sx={{ textAlign: "center", fontSize: "38px", fontWeight: "600" }}>
                    SignUp
                </Typography>

                <Box sx={{ display: "flex", gap: "20px" }}>

                    <Input
                        type="fname"
                        value={fname}
                        label="First Name"
                        placeholder="Enter your first name"
                        onChange={(e) => setFname(e.target.value)}
                    />
                    <Input
                        type="lname"
                        value={lname}
                        label="Last Name"
                        placeholder="Enter your last name"
                        onChange={(e) => setLname(e.target.value)}
                    />
                </Box>

                <Input
                    type="email"
                    value={email}
                    label="Email"
                    placeholder="Enter your email name"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    type="password"
                    value={password}
                    label="Password"
                    placeholder="Enter your password name"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Link to="/login">
                    <Logsign
                        onClick={() => setShouldSignup(true)}
                        theme={theme} value="Sign Up"
                        disabled={isLoading || !email || !password || !fname || !lname}
                        {isLoading ? "Signup in..." : "Signup"}
                    />
                </Link>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {user && <h2>Welcome, {user.result.fname + " " + user.result.lname}</h2>}

            </Stack>

        </Paper >


    )
}

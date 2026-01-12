import { useEffect, useState } from 'react'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
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

        if (!shouldSignup) return;

        async function handleFuc() {
            try {
                setError(null);
                setIsLoading(true);
                console.log(fname + lname + email + password);

                // const userData = (fname, lname, email, password)
                // setUser(userData);

            } catch (err) {
                console.log(err + "Error");
                setError(err.message || "Signup failed");
                setUser(null);

            } finally {
                setIsLoading(false);
                setShouldSignup(false);
            }
        }

        handleFuc()


    }, [shouldSignup, email, password])

    return (

        <Paper sx={{ width: "50%", backgroundColor: theme.palette.secondary.main, margin: "120px auto", alignItems: "center", color: theme.palette.secondary.main, borderRadius: "20px", padding: "20px" }}>

            <Stack spacing={2} sx={{ padding: "30px", gap: "30px" }}>

                <Typography sx={{ color: "black", textAlign: "center", fontSize: "38px", fontWeight: "700" }}>
                    SignUp
                </Typography>

                <Box sx={{ display: "flex", gap: "20px" }}>

                    <TextField
                        sx={{ width: "50%", color: "red", label: { color: "gray" }, input: { color: "black", borderColor: "white" } }}
                        type="fname"
                        label="First Name"
                        placeholder="Enter your first name"
                        onChange={(e) => setFname(e.target.value)}
                    />

                    <TextField
                        sx={{ width: "50%", color: "red", label: { color: "gray" }, input: { color: "black", borderColor: "white" } }}
                        type="lname"
                        label="Last Name"
                        placeholder="Enter your last name"
                        onChange={(e) => setLname(e.target.value)}
                    />

                </Box>

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
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Link to="/login">
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{ width: "100%", fontWeight: "600", background: theme.palette.secondary.blue, ":hover": { background: theme.palette.primary.main, color: theme.palette.secondary.blue } }}
                        disabled={!email || !password || !fname || !lname}
                        onClick={() => setShouldSignup(true)}>

                        {isLoading ? "Signup in..." : "Signup"}

                    </Button>
                </Link>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {user && <h2>Welcome, {user.fname}</h2>}

            </Stack>

        </Paper >


    )
}

import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase';
const auth = getAuth(app)

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((value) => {
                const user = value.user
                console.log(user);
                alert("Sign In Successfuly")
            })
            .catch((err) => { (alert(err)), console.log(err) })
    }

    return (

        <div style={{ width: "80%", margin: "0 auto", display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>

            <h1>Log In</h1>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "30px" }}>
                <input
                    required
                    type="email"
                    value={email}
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ height: '35px', padding: "6px", fontSize: "20px", borderRadius: "10px", outline: "none" }}
                />

                <input
                    required
                    type="password"
                    value={password}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ height: '35px', padding: "6px", fontSize: "20px", borderRadius: "10px", outline: "none" }}
                />
            </div>
            <button onClick={Login}>Log In</button>
        </div>

    )
}

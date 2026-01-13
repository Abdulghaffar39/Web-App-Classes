import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from '../../firebase'
const auth = getAuth(app)

export default function SignUp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const CreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => { alert("Sign Up Successfuly") })
      .catch((err) => { (alert(err)), console.log(err) })
  }

  return (
    <div style={{ width: "80%", margin: "0 auto", display: "flex", flexDirection: "column", gap: "10px", padding: "20px" }}>

      <h1>Sign Up</h1>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0px" }}>

        <input
          required
          type="email"
          value={email}
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
          style={{ height: '35px', padding: "6px", fontSize: "20px", borderRadius:"10px", outline:"none" }}
        /><br />

        <input
          required
          type="password"
          value={password}
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
          style={{ height: '35px', padding: "6px", fontSize: "20px", borderRadius:"10px", outline:"none"  }}
        />

      </div>

      <button onClick={CreateUser}>Sign Up</button>

    </div>
  )
}

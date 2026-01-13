import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from '../../firebase'
const auth = getAuth(app)

export default function SignUp() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const CreateUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => { alert("Sign Up Successfuly") })
  }

  return (
    <div>


      <div>

        <input
          required
          type="email"
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        /><br />

        <input
          required
          type="password"
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

      </div>

      <button onClick={CreateUser}>Sign Up</button>


    </div>
  )
}

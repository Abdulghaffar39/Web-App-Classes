import { useState } from 'react'

export default function InputFeilds() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (

        <div style={{ width: "100%", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "start", gap: "10px" }}>

            <h1>Input Feilds</h1>

            <label>Name</label>
            <input type="text"
                value={name}
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
            />

            <hr style={{ width: "100%" }} />

            <label>Email</label>
            <input type="email"
                value={email}
                placeholder='Enter your name'
                onChange={(e) => setEmail(e.target.value)}
            />

            <hr style={{ width: "100%" }} />

            <label>Password</label>
            <input type="text"
                value={password}
                placeholder='Enter your name'
                onChange={(e) => setPassword(e.target.value)}
            />

            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{password}</p>
            </div>

            <button onClick={(e) => { setName(""), setEmail(""), setPassword("") }}>Clear Value</button>
        </div>

    )
}

import { useState } from 'react'

export default function InputFeilds() {

    const [Val, setVal] = useState("Abdul")

    return (

        <>
            <h1>Input Feilds</h1>
            <input type="text"
                value={Val}
                placeholder='Enter your name'
                onChange={(e) => setVal(e.target.value)}
            />

            <p>{Val}</p>
            <button onClick={(e)=> setVal("")}>Clear Value</button>
        </>

    )
}

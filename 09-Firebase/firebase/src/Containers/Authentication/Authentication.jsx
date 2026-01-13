import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from '../../firebase'
const auth = getAuth(app)

export default function Authentication() {

    const SignupUser = () => {

        createUserWithEmailAndPassword(

            auth,
            "abdulghaffar39@gmail.com",
            "123456asdad"

        ).then((value) => {
            console.log(value);
        })
    }

    return (
        <>
            <h1>Authentication</h1>
            <button onClick={SignupUser}>Create User</button>
        </>
    )
}

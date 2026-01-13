import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../../firebase';
const db = getDatabase(app);

export default function RealTimeDatabase() {

    const putData = () => {
        set(ref(db, "user/Abdul"), {
            id: 1,
            name: "Abdul Ghaffar Web Developer",
            age: 21,
        })
    }

    return (
        <div>
            <h1>Firebase React App</h1>
            <button onClick={putData}>Put Data</button>
        </div>
    )
}

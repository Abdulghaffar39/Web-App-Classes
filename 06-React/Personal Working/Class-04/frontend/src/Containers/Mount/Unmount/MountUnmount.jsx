import React, { useEffect, useState } from 'react'

export default function MountUnmount() {

    const [data, setData] = useState(0)
    const [count, setCount] = useState(0)
    const [display, setDisplay] = useState(true)

    // useEffect(()=>{
    //     console.log("Mounting Phase only");

    // },[])

    useEffect(() => {
        console.log("Updata Phase only");

    }, [data, count])

    return (

        <div>

            <div style={{display:"flex", justifyContent:"space-between"}}>
                {
                    display ? data : null
                }

                {
                    display ? count : null
                }
            </div>

            <div>
                <button onClick={(e) => setDisplay(!display)}>Toggle</button>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <h1>Data {data}</h1>
                <button onClick={(e) => setData(data + 1)}>Data {data}</button>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <h1>Counter {count}</h1>
                <button onClick={(e) => setCount(count + 1)}>Data {count}</button>
            </div>

        </div>

    )
}

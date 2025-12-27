import React, { useState } from 'react'
import ToggleName from '../../Components/ToggleName'

export default function Toggle() {

    const [display, setDisplay] = useState(true)
    const [count, setCount] = useState(0)


    return (

        <>
            <h1>Toggle</h1>

            {display ? <ToggleName /> : <p>hide</p>}
            <button onClick={() => setDisplay(!display)}>Toggle / Hide & Show</button>

            <div>
                <h1>Multiple Conditions add</h1>
                <button onClick={() => setCount(count + 1)}>Counter {count}</button>
                {
                count==0?<h1>Condition 0</h1>:
                count==1?<h1>Condition 1</h1>:
                count==2?<h1>Condition 2</h1>:
                count==3?<h1>Condition 3</h1>:
                count==4?<h1>Condition 4</h1>:
                <h1>Other Condition</h1>
                }
            </div>

        </>

    )
}

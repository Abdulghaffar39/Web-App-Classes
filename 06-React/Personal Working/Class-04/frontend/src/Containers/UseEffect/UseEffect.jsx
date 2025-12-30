import { useEffect, useState } from 'react'

export default function UseEffect() {

    const [counter, setCouter] = useState(0)
    const [data, setData] = useState(0)

    useEffect(()=> (

        callFun()
    ),[])

    function callFun(){

        console.log("Function is running successfuly");
    }

    // callFun()

    return (

        <div>

            <h1>UseEffect</h1>
            <button onClick={()=>setCouter(counter + 1)}>Counter {counter}</button>
            <button onClick={()=>setData(data + 1)}>Data {data}</button>

        </div>

    )

}

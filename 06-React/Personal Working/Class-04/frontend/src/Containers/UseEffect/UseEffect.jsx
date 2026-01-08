import { useEffect, useState } from 'react'

export default function UseEffect() {

    const [counter, setCouter] = useState(0)
    const [data, setData] = useState(0)

    // -------------------------------------- UseEffect Use Case Started -------------------------------------------
    
    // useEffect(()=> (

    //     // Call every time
    // ))

    // useEffect(()=> (

    //     // Call every Once (One time)
    // ),[])

    // useEffect(()=> (

    //     // Call on changing single state
    // ),[state1])

    // useEffect(()=> (

    //     // Call on changing both state
    // ),[state1, state2])

    // useEffect(()=> (

    //     // Call on changing props
    // ),[props, props])

    // -------------------------------------- UseEffect Use Case Ended -------------------------------------------

    // useEffect(()=> (

    //     callFun()
    // ),[])

    // useEffect(()=> (

    //     callFun()
    // ),[counter])

    
    function callFun(){
        
        console.log("Function is running successfuly");
    }
    
    // useEffect(()=> (
    
    //     callFun()
    // ), [])

    useEffect(()=> (
    
        callFun()
    ), [data])

    return (

        <div>

            <h1>UseEffect</h1>
            <button onClick={()=>setCouter(counter + 1)}>Counter {counter}</button>
            <button onClick={()=>setData(data + 1)}>Data {data}</button>

        </div>

    )

}

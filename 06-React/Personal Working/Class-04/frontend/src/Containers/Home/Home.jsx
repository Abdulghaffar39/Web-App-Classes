import { useState } from 'react'

export default function Home() {

    // How to work function in react
    function checked() {
        alert("Button Clicked")
    }
    function check(name) {
        alert(name)
    }

    // useState in React
    const [fruit, setFruits] = useState("Apple");

    function handlerFuc() {
        setFruits("Banana");
    }

    return (
        <>
            <div>Home</div>

            <h1>Function Working</h1>
            <button onClick={checked}>Click Me</button>
            <button onClick={() => check("First Button")}>Click Me</button>
            <button onClick={() => check("Second Button")}>Click Me</button>

            <h1>useState</h1>
            <p>{fruit}</p>
            <button onClick={handlerFuc}>Click Change Vaue</button>

        </>
    )
}

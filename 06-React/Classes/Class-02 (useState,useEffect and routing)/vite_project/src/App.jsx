import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(0)

  return (
    <>


      <div className="card">

        <h1>Counter</h1>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>

        <h1>ON / OFF Button</h1>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        <p>Light: {isOn ? "Off" : "On"}</p>

      </div>

    </>
  )
}

export default App

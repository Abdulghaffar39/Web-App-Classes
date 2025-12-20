import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [name, setName] = useState("")
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <>


      <div className="card">

        <h1>Counter</h1>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>

        <h1>ON / OFF Button</h1>
        <button onClick={() => setIsOn(!isOn)}>Toggle {isOn ? "Off" : "On"}</button>

        {/* <h1>Name</h1>

          <div className='changeName'>

            <p>Salam, {name}</p>
            <input type="text"
              value={name}
              placeholder='Enter your Name'
              onChange={(e) => setName(e.target.value)}
            />

          </div> */}

        <div>

          <input value={input} onChange={(e) => setInput(e.target.value)} />

          <button onClick={addTodo}>Add</button>

          <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
          </ul>

        </div>

      </div>

    </>
  )
}

export default App

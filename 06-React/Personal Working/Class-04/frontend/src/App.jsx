import { useState } from 'react'
import './App.css'
import Home from './Containers/Home/Home'
import Toggle from './Containers/Toggle/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Home />  
      <Toggle/>
    </>
  )
}

export default App

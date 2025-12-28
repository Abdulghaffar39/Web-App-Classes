import { useState } from 'react'
import './App.css'
import Home from './Containers/Home/Home'
import Toggle from './Containers/Toggle/Toggle'
import Props from './Containers/Props/Props'
import InputFeilds from './Containers/InputFeilds/inputFeilds'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <Home />   */}
      {/* <Toggle/> */}
      {/* <Props /> */}
      <InputFeilds />

    </>
  )
}

export default App

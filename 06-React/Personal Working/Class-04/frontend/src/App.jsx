import { useState } from 'react'
import './App.css'
import Home from './Containers/Home/Home'
import Toggle from './Containers/Toggle/Toggle'
import Props from './Containers/Props/Props'
import InputFeilds from './Containers/InputFeilds/inputFeilds'
import CheckBoxes from './Containers/CheckBoxes/CheckBoxes'
import RadioBtn from './Containers/RadioBtn/RadioBtn'
import DropDown from './Containers/DropDown/DropDown'
import Loop from './Containers/Loop&Map/Loop_Map'
import DigitalClock from './Containers/Clock/Clock'
import NestedLoop from './Containers/NestedLoop/NestedLoop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <Home />   */}
      {/* <Toggle/> */}
      {/* <Props /> */}
      {/* <InputFeilds /> */}
      {/* <CheckBoxes /> */}
      {/* <RadioBtn /> */}
      {/* <DropDown /> */}
      {/* <Loop /> */}
      {/* <DigitalClock /> */}
      <NestedLoop />

    </>
  )
}

export default App

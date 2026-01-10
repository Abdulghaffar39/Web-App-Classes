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
import UseEffect from './Containers/UseEffect/UseEffect'
import MountUnmount from './Containers/Mount/Unmount/MountUnmount'
import Styling from './Containers/Styling/StylingIntro/StylingIntro'

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
      {/* <NestedLoop /> */}
      {/* <UseEffect /> */}
      {/* <MountUnmount /> */}
      <Styling />

    </>
  )
}

export default App

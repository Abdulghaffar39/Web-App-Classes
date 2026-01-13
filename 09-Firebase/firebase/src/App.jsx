import './App.css'
import Authentication from './Containers/Authentication/Authentication'
import RealTimeDatabase from './Containers/RealTimeDatabase/RealTimeDatabase'
import SignIn from './Containers/SignIn.jsx/SignIn'
import SignUp from './Containers/SignUp/SignUp'

function App() {

  return (
    
    <>
      {/* <RealTimeDatabase /> */}
      {/* <Authentication /> */}
      <SignUp />
      <SignIn />
    </>
  )
}

export default App

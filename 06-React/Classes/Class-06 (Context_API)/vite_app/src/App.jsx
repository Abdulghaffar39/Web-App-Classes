import react from 'react'
import { RouterProvider } from "react-router";
import router from "./router";
import AuthContext from './Containers/Context/Auth/Authcontext';

function App() {

  return (

    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>

  )
}

export default App

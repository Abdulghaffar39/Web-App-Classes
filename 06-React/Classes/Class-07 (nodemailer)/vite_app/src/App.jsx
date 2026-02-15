import react from 'react'
import { RouterProvider } from "react-router";
import router from "./router";
import { CookiesProvider } from 'react-cookie';
import AuthContext from './Containers/Context/Auth/Authcontext';

function App() {

  return (

    <CookiesProvider>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </CookiesProvider>

  )
}

export default App

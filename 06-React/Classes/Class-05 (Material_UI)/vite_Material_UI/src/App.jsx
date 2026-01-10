import SignUp from './Containers/SignUp/SignUp'
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router';
import theme from './Theme/Theme';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';

function App() {

  return (
    <>

      <ThemeProvider theme={theme}>
        <Routes>

          <Route path="/" element={<SignUp theme={theme} />} />
          <Route path="/login" element={<Login theme={theme} />} />
          <Route path="/Home" element={<Home />} />

        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App

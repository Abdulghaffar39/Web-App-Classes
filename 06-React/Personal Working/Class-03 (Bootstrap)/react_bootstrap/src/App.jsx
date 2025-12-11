import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Main/Home';
import Link from './Component/Main/Link';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Link" element={<Link />} />
    </Routes>
  );
}

export default App;

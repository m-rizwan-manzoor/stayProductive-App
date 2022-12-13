import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainBoard from "./components/MainBoard.js"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainBoard />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Route>
    </Routes>
  </>
  );
}

export default App;

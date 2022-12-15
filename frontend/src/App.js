import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainBoard from "./components/MainBoard.js";
import Auth from "./components/Auth/Auth";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Auth>
              <MainBoard />
            </Auth>
          }
        >
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;

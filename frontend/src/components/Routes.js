import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import OnBoard from "./Pages/OnBoard";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

const AdminRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/onboard"
            element={
              <Auth>
                <OnBoard />
              </Auth>
            }
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/signup" element={<SignUp />}></Route>
          <Route path="/admin/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AdminRoutes;

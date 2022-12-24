import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/CotactUs";
import { Support } from "./pages/Support";
import { Dashboard } from "./pages/Dashboard";
import { MyTasks } from "./pages/MyTasks";
import { Hero404 } from "./pages/Hero404";
import { Teams } from "./pages/Teams";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Auth from "./pages/Auth";

const Routes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        {/* Public Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/hero404" component={Hero404} />

        {/* Authenticated Routes */}
        <Route
          path="/dashboard"
          render={() => (
            <Auth>
              <Dashboard />
            </Auth>
          )}
        />
        <Route
          path="/mytasks"
          render={() => (
            <Auth>
              <MyTasks />
            </Auth>
          )}
        ></Route>
        <Route
          path="/teams"
          render={() => (
            <Auth>
              <Teams />
            </Auth>
          )}
        ></Route>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;

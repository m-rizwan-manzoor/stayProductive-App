import React, { useState } from "react";
import {
  CDBNavbar,
  CDBNavBrand,
  CDBNavbarNav,
  CDBNavToggle,
  CDBNavItem,
  CDBNavLink,
  CDBLink,
  CDBBtn,
  CDBCollapse,
} from "cdbreact";
import "./Hero404.css";

const AuthErrorPage = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="hero404">
      <div className="page-container">
        <header className="navigation">
          <CDBNavbar
            className="bg-transparent p-0 mt-3"
            expand="md"
            light
            scrolling
          >
            <CDBNavBrand href="/">
              <img
                alt="logo"
                src="/img/pages/Stay_Productive_Logo.png"
                width="150px"
              />
            </CDBNavBrand>
            <CDBNavToggle
              onClick={() => {
                setCollapse(!collapse);
              }}
            />
          </CDBNavbar>
        </header>
        <section className="page-body">
          <div className="message404">
            <h4 className="h1 font-weight-bold">Oops</h4>
            <h4 className="h3 my-4">You are not authenticated.</h4>
            <p>
              Please Login to continue or Signup if you are not already a user.
            </p>
            <div className="row">
              <CDBNavLink to="/login">
                <CDBBtn flat color="light" className="py-2 btn-block rounded">
                  Login
                </CDBBtn>
              </CDBNavLink>
              <CDBNavLink to="/signup">
                <CDBBtn flat color="dark" className="py-2 btn-block rounded">
                  Signup
                </CDBBtn>
              </CDBNavLink>
            </div>
          </div>
          <img className="image404" alt="404" src="/img/pages/hero404.png" />
        </section>
      </div>
    </div>
  );
};

export default AuthErrorPage;

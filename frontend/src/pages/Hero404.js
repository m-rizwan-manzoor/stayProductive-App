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

export const Hero404 = () => {
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
            <h4 className="h3 my-4">Something went wrong</h4>
            <p>
              Sorry about that, hmmm... probably a missing page or the link's
              incorrect.
            </p>
            <CDBNavLink to="/">
              <CDBBtn flat color="dark" className="py-2 btn-block">
                Back Home
              </CDBBtn>
            </CDBNavLink>
          </div>
          <img className="image404" alt="404" src="/img/pages/hero404.png" />
        </section>
      </div>
    </div>
  );
};

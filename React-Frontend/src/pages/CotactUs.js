import React, { useState } from "react";
import {
  CDBNavbar,
  CDBNavBrand,
  CDBNavbarNav,
  CDBNavToggle,
  CDBNavItem,
  CDBNavLink,
  CDBBtn,
  CDBCollapse,
  CDBLink,
} from "cdbreact";
import "./ContactUs.css";

export const ContactUs = () => {
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
            <CDBCollapse id="navbarCollapse1" isOpen={collapse} navbar>
              <CDBNavbarNav right>
                <CDBNavItem>
                  <CDBBtn flat className="p-3 border-0 bg-transparent">
                    <CDBNavLink to="/support">Support</CDBNavLink>
                  </CDBBtn>
                </CDBNavItem>
                <CDBNavItem>
                  <CDBBtn flat className="p-3 border-0 bg-transparent">
                    <CDBNavLink to="/contact-us">Contact Us</CDBNavLink>
                  </CDBBtn>
                </CDBNavItem>
              </CDBNavbarNav>
            </CDBCollapse>
          </CDBNavbar>
        </header>
        <section className="page-body">
          <div className="message404">
            <h4 className="h1 font-weight-bold">Contact Us</h4>
            <p>
              What would you like help with today? You can quickly take care of
              most things here, or connect with us when needed.
            </p>
          </div>
        </section>
        <div>
          <h4 className="h3 my-4">Ask the StayProductive community</h4>
          <p className="w-75">
            Get quick answers, how-to’s, and advice from fellow StayProductive
            users and experts.
          </p>
          <h4 className="h3 my-4">Contact Support</h4>
          <p className="w-75">
            For specific account or billing questions, security concerns, or
            answers not available on our help site, we’re happy to help.
          </p>
          <h4 className="h3 my-4">Forum</h4>
          <p className="w-75">
            Ask questions, get answers, and join our large community of
            StayProductive. Go more in-depth at your own pace with online
            courses that teach frameworks and features.
          </p>
          <h4 className="h3 my-4">Articles</h4>
          <p className="w-75">
            Get an answer faster! There’s a good chance your question has been
            answered in one of our help articles.
          </p>
          <h4 className="h3 my-4">Cases</h4>
          <p className="w-75">
            Learn how other teams like yours use StayProductive and how to build
            out projects specific to your team.
          </p>
        </div>
      </div>
      <footer className="footer bg-dark text-light">
        <div className="d-flex justify-content-between align-items-center">
          <CDBLink to="/" className="text-dark footer-link">
            <span className="ml-2 lead mb-0 font-weight-bold text-light">
              StayProductive
            </span>
          </CDBLink>
          <small className="ml-2 mt-1 mr-2">
            &copy; StayProductive, 2023. All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  );
};

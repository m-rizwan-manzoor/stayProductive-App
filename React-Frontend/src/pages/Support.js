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
import "./Support.css";

export const Support = () => {
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
            <h4 className="h1 font-weight-bold">StayProductive Support</h4>
            <p>We are here to help.</p>
          </div>
        </section>
        <div>
          <h4 className="h3 my-4">Guide</h4>
          <p className="w-75">
            Learn how to onboard your team and use StayProductive to its full
            potential with quick and easy tips. Work with a trainer and peers to
            set up Asana in an interactive session with a live Q&A.
          </p>
          <h4 className="h3 my-4">Forum</h4>
          <p className="w-75">
            Ask questions, get answers, and join our large community of
            StayProductive. Go more in-depth at your own pace with online
            courses that teach frameworks and features.
          </p>
          <h4 className="h3 my-4">Academy</h4>
          <p className="w-75">
            Learn how to use StayProductive through trainings, webinars, and interactive
            courses hosted by StayProductive's Customer Success team.
          </p>
          <h4 className="h3 my-4">Studies</h4>
          <p className="w-75">
            StayProductive has its sights set on international expansion. Almost
            40% of the company's revenue comes from outside the U.S., as well as
            45% of paying customers. With that in mind, it announced on Nov. 2
            that it has expanded its EMEA headquarters in Dublin to improve
            international sales capabilities and customer support, and is
            launching international localized languages in French and German.
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

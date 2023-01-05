import React from "react";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
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
import "./Home.css";

export const Home = () => {
  const [collapse, setCollapse] = useState(false);

  const [loggedUserName, setLoggedUserName] = useState("");

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      var decoded = jwt_decode(token);

      setLoggedUserName(decoded.name);
    }
  }, []);

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
                {loggedUserName && (
                  <CDBNavItem>
                    <div className="mx-3 mt-2 row text-center">
                      <div>
                        <img
                          alt="panelImage"
                          src="img/pane/user.png"
                          style={{ width: "2.5rem", height: "2.5rem" }}
                        />
                        <p style={{ fontSize: "12px" }} className="p-0 m-0">
                          {loggedUserName}
                        </p>
                      </div>
                    </div>
                  </CDBNavItem>
                )}
              </CDBNavbarNav>
            </CDBCollapse>
          </CDBNavbar>
        </header>
        <section className="page-body">
          <div className="message404">
            <h4 className="h1 font-weight-bold">
              The best platform to increase productivity.
            </h4>
            <p>
              Want to drive efficiency across your organization?
              <span style={{ fontWeight: "bold" }}> StayProductive</span> is
              flexible and easy for all teams to use, so you can deliver quality
              work together, faster..
            </p>
            <div className="row">
              {loggedUserName ? (
                <CDBNavLink to="/dashboard">
                  <CDBBtn
                    flat
                    color="dark"
                    className="py-2 w-auto btn-block rounded"
                  >
                    See your Dashboard
                  </CDBBtn>
                </CDBNavLink>
              ) : (
                <>
                  <CDBNavLink to="/login">
                    <CDBBtn
                      flat
                      style={{
                        backgroundColor: "rgb(189, 181, 176)",
                        color: "black",
                      }}
                      className="py-2 border-0 rounded"
                    >
                      Login
                    </CDBBtn>
                  </CDBNavLink>
                  <CDBNavLink to="/signup">
                    <CDBBtn
                      flat
                      color="dark"
                      className="py-2 border-0 btn-block rounded"
                    >
                      Signup
                    </CDBBtn>
                  </CDBNavLink>
                </>
              )}
            </div>
          </div>
          <div className="mx-5">
            <img
              className="my-3"
              src="img/pane/hero_home.png"
              alt="img"
              width="350"
            />
          </div>
        </section>
        <div>
          <p className="w-75 mt-5">
            Bring your team’s work together in one shared space. Choose the
            project view that suits your style, and collaborate no matter where
            you are. StayProductive’s dashboard also lets users access a
            high-level view of the status of projects at a glance.
          </p>
          <p className="w-75 mb-5">
            Organize and assign tasks. With lists, teams see immediately what
            they need to do, which tasks are a priority, and when work is due.
            StayProductive allows teams in organizations to determine how they
            need to work together,” said Margo Visitation, vice president and
            principal researcher at Forrester. “Whether they want to work in a
            way that is driven by conversations or by tasks, they have the
            opportunity to work in the way that is comfortable for the team.
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

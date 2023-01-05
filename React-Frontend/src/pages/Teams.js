import React from "react";
import { useState, useEffect } from "react";
import { CDBBtn, CDBLink } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Teams.css";
import TaskCard from "../Components/TaskCard";

export const Teams = () => {


  return (
    <div className="dashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex m-3 align-items-center border-bottom pb-4">
              <div className="bg-info px-4 py-2 rounded">
                <img
                  alt="panelImage"
                  src="img/pane/statistics.png"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
              </div>
              <div className="input-group ml-4 w-25">
                <select className="custom-select" id="inputGroupSelect01">
                  <option selected>Projects...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 pl-4">
                <div className="mb-4 border-bottom d-flex justify-content-between">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="">
                      <img
                        alt="panelImage"
                        src="img/pane/team.png"
                        style={{ width: "2.5rem", height: "2.5rem" }}
                      />
                    </div>
                    <h5 className="pt-2 ml-2">Team Members</h5>
                  </div>
                </div>
                <div className="mb-4 teams-container">
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="d-flex align-items-center">
                <CDBLink to="/" className="text-dark footer-link">
                  <span className="lead mb-0 font-weight-bold">
                    StayProductive
                  </span>
                </CDBLink>
                <span
                  className="footer-rem"
                  style={{
                    fontSize: "3em",
                    margin: "-1.5rem 0px -1.5rem 1rem",
                    color: "#C4C4C4",
                  }}
                >
                  &#8226;
                </span>
                <small className="ml-2 mt-1">
                  &copy; StayProductive, 2023. All rights reserved.
                </small>
              </div>
              <div className="footer-rem">
                <CDBBtn
                  flat
                  color="dark"
                  className="py-1 px-2 bg-dark border-0"
                >
                  <i className="fab fa-facebook-f"></i>
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="mx-3 py-1 px-2 bg-dark border-0"
                >
                  <i className="fab fa-twitter"></i>
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="py-1 px-2 bg-dark border-0"
                >
                  <i className="fab fa-instagram"></i>
                </CDBBtn>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

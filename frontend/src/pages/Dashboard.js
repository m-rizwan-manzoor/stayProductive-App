import React from "react";
import { useState, useEffect } from "react";
import { CDBBtn, CDBLink } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Dashboard.css";
import TaskCard from "../Components/TaskCard";

export const Dashboard = () => {
  const [loggedUserName, setLoggedUserName] = useState("");

  useEffect(() => {
    var logged = localStorage.getItem("loggedUser");
    var loggedUser = JSON.parse(logged);

    setLoggedUserName(loggedUser);
  }, []);

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
            <div className="text-center">
              <h3>Hi, {loggedUserName}!</h3>
              <p>Welcome to your dashboard...</p>
            </div>

            <div className="row">
              <div className="col-md-6 pl-4">
                <div className="mb-4 border-bottom d-flex justify-content-between">
                  <div className="d-flex mb-1 align-items-center">
                    <div className="">
                      <img
                        alt="panelImage"
                        src="img/pane/home_tasks.png"
                        style={{ width: "2.5rem", height: "2.5rem" }}
                      />
                    </div>
                    <h5 className="pt-2 ml-2">Your Tasks</h5>
                  </div>
                  <CDBLink to="/mytasks" className="m-0 pt-3">
                    See All Tasks
                  </CDBLink>
                </div>
                <div className="mb-4 tasks-container">
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                  <TaskCard></TaskCard>
                </div>
              </div>
              <div className="col-md-6">
              <div className="mb-4 border-bottom d-flex justify-content-between">
                  <div className="d-flex mb-2 align-items-center">
                  <div className="">
                      <img
                        alt="panelImage"
                        src="img/pane/home_projects.png"
                        style={{ width: "2.5rem", height: "2.5rem" }}
                      />
                    </div>
                    <h5 className="pt-2 ml-2">Projects</h5>
                  </div>
                </div>
                <div className="row mx-1">
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

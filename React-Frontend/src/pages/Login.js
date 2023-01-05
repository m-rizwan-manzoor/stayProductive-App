import { useState } from "react";
import { useHistory } from "react-router-dom";
import { http } from "./utils";
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
  CDBAlert,
} from "cdbreact";

function Login() {
  // for NavBar Collapsing
  const [collapse, setCollapse] = useState(false);

  // Login Logic
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  
  const [credentialsError, setCredentialsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const checkCredentials = async (event) => {
    event.preventDefault();

    try {
      const response = await http.post("/users/login", {
        email: enteredEmail,
        password: enteredPassword,
      });

      localStorage.setItem("token", response.data.token);
      history.push("/dashboard");
    } catch (error) {
      // console.log(error.response.data.message);
      setCredentialsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      {credentialsError && <CDBAlert color="danger">{errorMessage}</CDBAlert>}
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
          <div className="container col-md-5 bg-white shadow my-5 p-5 rounded">
            <h1 className="display-6 fw-normal">Login to StayProductive</h1>
            <br></br>
            <form onSubmit={checkCredentials}>
              <div>
                <label className="my-1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEnteredEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="my-1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>

              <br></br>
              <div>
                <button
                  className="w-100 btn btn-dark border-0 rounded-2"
                >
                  Continue
                </button>
              </div>
              <p className="my-3">
                Don't have an account?
                <CDBLink to="/signup" class="text-decoration-none">
                  {" "}
                  SignUp
                </CDBLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

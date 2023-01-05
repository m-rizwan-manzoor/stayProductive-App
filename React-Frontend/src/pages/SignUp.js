import { useEffect, useState } from "react";
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
import { useHistory } from "react-router-dom";

function SignUp() {
  // for NavBar Collapsing
  const [collapse, setCollapse] = useState(false);

  // Signup Logic
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // For Validation
  const [validationError, setValidationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  // Get user data and save into Database
  async function Post(event) {
    event.preventDefault();

    try {
      await http.post("/users/signup", {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      });

      history.push("/login");
    } catch (error) {
      // console.log(error.response.data.message);
      setValidationError(true);
      setErrorMessage(error.response.data.message);
    }
  }

  return (
    <>
      {validationError && <CDBAlert color="danger">{errorMessage}</CDBAlert>}
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
            <h1 className="display-6 fw-normal">Sign Up</h1>
            <br></br>
            <form onSubmit={Post}>
              <div>
                <label className="my-1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServerUsername"
                  placeholder="Enter Your Name"
                  required
                  onChange={(e) => setEnteredName(e.target.value)}
                />
              </div>

              <div>
                <label className="my-1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email Address"
                  required
                  onChange={(e) => setEnteredEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="my-1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                  required
                  onChange={(e) => setEnteredPassword(e.target.value)}
                />
              </div>

              <p className="my-3">
                Already have an account?
                <CDBLink to="/login" class="text-decoration-none">
                  {" "}
                  Login
                </CDBLink>
              </p>
              <div>
                <button
                  className="w-100 btn btn-dark border-0 rounded-2"
                  type="submit"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

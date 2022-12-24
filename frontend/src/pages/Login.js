import { useState } from "react";
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
import { Redirect } from "react-router-dom";
import ErrorModal from "../Components/ErrorModal";

function Login() {
  // for NavBar Collapsing
  const [collapse, setCollapse] = useState(false);

  // Login Logic
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUser, setIsUser] = useState(false);
  // For Validation
  const [error, setError] = useState();

  const checkCredentials = async () => {
    const response = await fetch("http://localhost:3001/users");
    const jsonData = await response.json();

    let filterData = jsonData.filter(
      (user) => user.email == enteredEmail && user.password == enteredPassword
    );

    if (filterData.length > 0) {
      localStorage.setItem("loggedUser", JSON.stringify(filterData[0].name));
      localStorage.setItem("loggedUserId", JSON.stringify(filterData[0].id));
      setIsUser(true);
    }

    if (filterData.length == 0 || enteredEmail == "" || enteredPassword == "") {
      setIsUser(false);
      alert("Invalid Credentials!");
    }

    // if (
    //   enteredEmail.trim().length === 0 ||
    //   enteredPassword.trim().length === 0
    // ) {
    //   setError({
    //     title: "Invalid Credentials",
    //     message: "Please enter your email and password (non-empty values).",
    //   });
    //   return;
    // }
    // if (filterData.length == 0) {
    //   setError({
    //     title: "Invalid Credentials",
    //     message: "User not found.",
    //   });
    //   return;
    // }

    // setEnteredEmail("");
    // setEnteredPassword("");
  };

  return (
    <>
      {/* {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )} */}
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
                onClick={checkCredentials}
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
          </div>
          {isUser && <Redirect to="/dashboard" />}
        </div>
      </div>
    </>
  );
}

export default Login;

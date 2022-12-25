import { useEffect, useState } from "react";
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
  const [enteredName, setName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");

  // For Validation
  const [emptyFieldError, setEmptyFieldError] = useState(false);
  const [existingUserError, setExistingUserError] = useState(false);


  let history = useHistory();

  // Get user data and save into Database
  async function Post() {
    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setEmptyFieldError(true);
      return;
    }

    const user = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };

    // To check if already exists that user or some field is empty

    let isExistingUser;

    const response = await fetch("http://localhost:3001/users");
    const jsonData = await response.json();

    let alreadyUser = jsonData.find((user) => user.name == enteredName || user.email == enteredEmail);

    if (!alreadyUser) {
      isExistingUser = false;
    } else {
      isExistingUser = true;
      setExistingUserError(true);
      return;
    }

    if (!isExistingUser) {
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((info) => {
          console.log("Response from server" + info);
        });

      history.push("/login");
    }
  }

  return (
    <>
      {emptyFieldError && (
        <CDBAlert color="danger">Pleae fill all the fields.</CDBAlert>
      )}
      {existingUserError && (
        <CDBAlert color="danger">User already exists with these credentials.</CDBAlert>
      )}
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

            <div>
              <label className="my-1">Name</label>
              <input
                type="text"
                className="form-control"
                id="validationServerUsername"
                placeholder="Enter Your Name"
                required
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                onClick={Post}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

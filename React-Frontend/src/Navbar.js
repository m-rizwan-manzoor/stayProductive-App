import React from "react";
import { Header } from "./Navbar.style";
import { CDBNavbar, CDBLink } from "cdbreact";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { http } from "./pages/utils";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [loggedUserName, setLoggedUserName] = useState("");
  var history = useHistory();

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      var decoded = jwt_decode(token);

      setLoggedUserName(decoded.name);
    }
  }, []);

  function Logout() {
    const response = http.get("/users/logout");
    if (response) {
      history.push("/login");
      localStorage.removeItem("token");
    }
  }
  return (
    <Header style={{ background: "#333", color: "#fff" }}>
      <CDBNavbar dark expand="md" scrolling className="justify-content-start">
        {/* <CDBInput type="search" size="md" hint="Search" className="mb-n4 mt-n3 input-nav"/> */}

        <div className="ml-auto mr-2 row text-center">
          <CDBLink onClick={Logout} className="text-light text-decoration-none">
            {" "}
            Logout
          </CDBLink>
          {/* <i className="fas fa-bell"></i>
              <i className="fas fa-comment-alt mx-4"></i> */}

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
      </CDBNavbar>
    </Header>
  );
};

export default Navbar;

import React from "react";
import { Header } from "./Navbar.style";
import { CDBNavbar, CDBLink } from "cdbreact";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [loggedUserName, setLoggedUserName] = useState("");

  useEffect(() => {
    var logged = localStorage.getItem("loggedUser");
    var loggedUser = JSON.parse(logged);

    setLoggedUserName(loggedUser);
  }, []);
  return (
    <Header style={{ background: "#333", color: "#fff" }}>
      <CDBNavbar dark expand="md" scrolling className="justify-content-start">
        {/* <CDBInput type="search" size="md" hint="Search" className="mb-n4 mt-n3 input-nav"/> */}

        <div className="ml-auto mr-2 row text-center">
          <CDBLink
            to="/login"
            onClick={() => localStorage.removeItem("loggedUser")}
            className="text-light text-decoration-none"
          >
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
            <p style={{fontSize: "12px"}} className="p-0 m-0">{loggedUserName}</p>
          </div>
        </div>
      </CDBNavbar>
    </Header>
  );
};

export default Navbar;

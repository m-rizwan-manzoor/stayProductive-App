import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Auth(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    var logged = localStorage.getItem("loggedUser");
    var loggedUser = JSON.parse(logged);

    if (loggedUser) {
      setIsLogin(true);
    }
  }, []);
  return (
    <>
      {isLogin ? (
        props.children
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="w-75 mt-5 display-6">
                The best platform to increase productivity.
              </h2>
              <h5 className="fw-normal w-75">
                Want to drive efficiency across your organization?
                <span className="fw-semibold">stayProductive</span> is flexible and easy for all teams to use, so you
                can deliver quality work together, faster..
              </h5>
              <Link to="/login">
                <button className="my-2 btn btn-dark rounded-1">Login</button>
              </Link>
              <Link to="/signup">
                <button className="mx-2 my-2 btn btn-secondary rounded-1">
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="col-md-4">
              <img
                className="my-5"
                src="https://assets.asana.biz/transform/5e1c89aa-e1af-44f5-8902-f692c819c3b2/home-hero-1a"
                alt="img"
                width="300"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Auth;

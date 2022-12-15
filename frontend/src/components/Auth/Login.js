import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Login() {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [isUser, setIsUser] = useState(false);
  
    const checkCredentials = async () => {
      const response = await fetch("http://localhost:3001/users");
      const jsonData = await response.json();
  
      let filterData = jsonData.filter(
        (user) =>
          user.email.includes(enteredEmail) &&
          user.password.includes(enteredPassword)
      );
  
      if (filterData.length > 0) {
        localStorage.setItem("loggedUser", JSON.stringify(filterData[0].name));
        localStorage.setItem("loggedUserId", JSON.stringify(filterData[0].id));
        setIsUser(true);
      }
  
      if (filterData.length == 0 || enteredEmail=="" || enteredPassword=="") {
        setIsUser(false);
        alert("Invalid Credentials!");
      }
    };

  return (
    <>
      <div className="container col-md-5 bg-white shadow my-5 p-5 rounded-2">
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
          <button style={{backgroundColor: "rgb(141, 87, 190)"}} className="w-100 btn btn-primary border-0 rounded-2" onClick={checkCredentials}>
            Continue
          </button>
        </div>
        <p className="my-3">
          Don't have an account?
          <span>
            <Link className="mx-2 text-primary" to="/signup">
                Signup
            </Link>
          </span>
        </p>
      </div>
      {isUser && <Navigate to="/" replace={true} />}
    </>
  );
}

export default Login;
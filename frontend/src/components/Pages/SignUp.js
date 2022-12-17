import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [enteredName, setName] = useState([]);
  const [enteredEmail, setEmail] = useState([]);
  const [enteredEmpId, setEmpId] = useState([]);
  const [enteredDesignation, setDesignation] = useState([]);
  const [enteredPassword, setPassword] = useState([]);

  const navigate = useNavigate();

  // Get user data and save into Database
  async function Post() {
    const user = {
      name: enteredName,
      email: enteredEmail,
      employeeID: enteredEmpId,
      designation: enteredDesignation,
      password: enteredPassword,
    };

    // To check if already exists that user or some field is empty

    let isExistingUser;

    const response = await fetch("http://localhost:3001/users");
    const jsonData = await response.json();

    let alreadyUser = jsonData.find((user) => user.name.includes(enteredName));

    if (!alreadyUser) {
      isExistingUser = false;
    } else if (
      enteredName == "" ||
      enteredEmail == "" ||
      enteredEmpId == "" ||
      enteredDesignation == "" ||
      enteredPassword == ""
    ) {
      isExistingUser = true;
      alert("Please enter all fields!");
      return;
    } else {
      isExistingUser = true;
      alert("User already exist!");
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

      navigate("/login");
    }
  }

  return (
    <div className="container col-md-5 bg-white shadow my-5 p-5 rounded-2">
      <h1 className="display-6 fw-normal">Sign Up</h1>
      <br></br>

      <div>
        <label className="my-1">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
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
        <label className="my-1">Employee ID</label>
        <input
          type="text"
          className="form-control"
          id="employeeID"
          placeholder="Enter Your Employee ID"
          required
          onChange={(e) => setEmpId(e.target.value)}
        />
      </div>

      <div>
        <label className="my-1">Designation</label>
        <input
          type="text"
          className="form-control"
          id="designation"
          placeholder="Enter Your Designation"
          required
          onChange={(e) => setDesignation(e.target.value)}
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
        <span>
          <Link className="mx-2 text-primary" to="/login">
            Login
          </Link>
        </span>
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
  );
}

export default SignUp;

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const [inputData, setInputData] = useState({ password: "", email: "" });
  function handleSubmit(event) {
    event.preventDefault();
    axios.post("https://reqres.in/api/users?page=2", inputData).then(() => {
      alert("Successfully SignUp");
    });
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-6 signup-H">Create an Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                onChange={(e) => {
                  setInputData({ ...inputData, email: e.target.value });
                }}
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                onChange={(e) => {
                  setInputData({ ...inputData, password: e.target.value });
                }}
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Sign Up
            </button>
          </form>
          <p className="mt-3 text-center signup-H">
            Already have an account?{" "}
            <Link to="/" className="my-link">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

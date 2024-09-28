import { useState } from "react";
import { Form, Button } from "react-bootstrap"; // Correct import
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // State for success message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(""); // Reset success message on new submission

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      console.log(response);

      if (response.data.token) {
        // Store the token in local storage
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        setSuccess("Login successful!"); // Set success message
        setTimeout(() => {
          navigate("/home"); // Redirect to the protected route after a short delay
        }, 1000); // Delay for a second to show the success message
      }
    } catch (error) {
      setError("Invalid credentials, please try again.", error); // Set error message
    }
  };

  return (
    <div className="d-flex mt-5 justify-content-center align-items-center">
      <Form className="login-form" onSubmit={handleSubmit}>
        <center>
          <h1>Welcome</h1>
        </center>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          Login
        </Button>
        <Link to="/signup" className="m-4">
          Signup
        </Link>
      </Form>
      {success && <p style={{ color: "green" }}>{success}</p>}{" "}
      {/* Display success message */}
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
    </div>
  );
}

export default Login;

import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      setSuccess("Login successful!");
      navigate("/search?search=Avenger");
      // Optionally, you can store the token if it's returned
    } catch (err) {
      setError(
        "Login failed: " + (err.response?.data?.error || "Unknown error")
      );
    }
  };

  return (
    <div className="d-flex mt-5 justify-content-center align-items-center">
      <Form className="login-form" onSubmit={handleSubmit}>
        <center style={{ fontStyle: "-moz-initial" }}>
          <h1>Welcome </h1>
        </center>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
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
        <Form.Group className="mb-3  " controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link to="signup" className="m-4">
          signup
        </Link>
      </Form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green", alignItems: "bottom" }}>{success}</p>
      )}
    </div>
  );
};

export default Login;

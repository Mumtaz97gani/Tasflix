import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
Link
function SignUp() {
  const [inputData, setInputData] = useState({ password: "", email: "" });
  function handleSubmit(event) {
    event.preventDefault();
    axios.post("https://reqres.in/api/users?page=2", inputData).then(() => {
      alert("Successfully SignUp");
    });
  }
  return (
    <div className="d-flex mt-5 justify-content-center align-items-center">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => {
                setInputData({ ...inputData, email: e.target.value });
              }}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => {
                setInputData({ ...inputData, password: e.target.value });
              }}
              placeholder="Password"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          SignUp
        </Button>
        <Link to="/">
          <Button variant="primary" type="submit" className="ms-2">
            back to logIn
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default SignUp;

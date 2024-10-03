import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="p-0 ">
      <Navbar className="nav  ">
        <h2 className=" nav-h">Tasflix</h2>
        <Form inline>
          <p>eve.holt@</p>
          <Link to="/signup" className="m-4 text-white decoration-none">
            logout
          </Link>
        </Form>
      </Navbar>
    </div>
  );
}

export default NavBar;

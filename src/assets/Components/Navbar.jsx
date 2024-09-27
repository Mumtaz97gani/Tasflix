import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

function NavBar() {
  return (
    <div className="p-0 ">
      <Navbar className="nav justify-content-evenly ">
        <h2 className=" nav-h">Tasflix</h2>
        <Form inline>
          <p>eve.holt@</p>
        </Form>
      </Navbar>
    </div>
  );
}

export default NavBar;

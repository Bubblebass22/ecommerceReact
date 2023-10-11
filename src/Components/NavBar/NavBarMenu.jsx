import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBarEstilos.css";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";

function NavBarMenu() {
  const { login, handleLogout, user } = useContext(AuthContext);

  return (
    <Navbar bg="white" expand="lg" className="navbar-custom">
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://miracomosehace.com/wp-content/uploads/2020/08/Inkscape-logo.jpg"
          alt="logo"
          className="logo-imagen"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="nav1">
        <Nav>
          <Nav.Link
            className="nav-link-1"
            as={Link}
            to="/"
            style={{ margin: "10px" }}
          >
            Home
          </Nav.Link>
          {!login && (
            <>
              <Nav.Link as={Link} to="/alta" style={{ margin: "10px" }}>
                Registro
              </Nav.Link>
              <Nav.Link as={Link} to="/login" style={{ margin: "10px" }}>
                Login
              </Nav.Link>
            </>
          )}

          {login && (
            <>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                style={{ margin: "10px" }}
              >
                <NavDropdown.Item as={Link} to="/producto/alta">
                  Nuevo
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={handleLogout} style={{ margin: "10px" }}>
                Salir
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
      {login && <div className="saludo">Hola {user.name}</div>}
    </Navbar>
  );
}

export default NavBarMenu;

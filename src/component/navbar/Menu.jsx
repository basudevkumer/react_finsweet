import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Logo from "../../assets/logo.png";
import "./menu.css";

const Menu = () => {
  return (
    <Navbar expand="lg" className="navbarColor navMain ">
      <Container>
        <Navbar.Brand href="">
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navElement">
            <Nav.Link href="" className="">
              Home
            </Nav.Link>
            <Nav.Link href="" className="">
              About us
            </Nav.Link>

            <NavDropdown title="Features" className="navDropDownParent" id="basic-nav-dropdown">
              <NavDropdown.Item href="" className="navDropDownChild">
                Work
              </NavDropdown.Item>
              <NavDropdown.Item href="" className="navDropDownChild">
                Read Case Study
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" className="">
              Pricing
            </Nav.Link>
            <Nav.Link href="" className="">
              FAQ
            </Nav.Link>
            <NavDropdown title="Blog" className="navDropDownParent" id="basic-nav-dropdown">
              <NavDropdown.Item href="" className=" navDropDownChild">
                {" "}
                Read Blog
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <a href="" className="contactBtn">Contact Us</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;

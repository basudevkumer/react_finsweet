import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaChartBar } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../../assets/logo.png";
import "./menu.css";

const Menu = () => {
  return ( 
    <Navbar expand="lg" className="navbarColor navMain ">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navImagePrant">
          <Image src={Logo} className="navbarImg" />
        </Navbar.Brand>
        <Navbar.Toggle className="navButtonToggler">
          <FaChartBar className="navButtonIcon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto navElement">
            <Nav.Link as={Link} to={"/"} className="">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/about"} className="">
              About us
            </Nav.Link>

            <NavDropdown
              title="Features"
              className="navDropDownParent"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to={"/feature"}
                className="navDropDownChild"
              >
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/works"}
                className="navDropDownChild"
              >
                Work
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/readcase"}
                className="navDropDownChild"
              >
                Read Case Study
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/pricing"} className="">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to={"/faq"} className="">
              FAQ
            </Nav.Link>
            <NavDropdown
              title="Blog"
              className="navDropDownParent"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to={"/blog"}
                className=" navDropDownChild"
              >
                {" "}
                Blog Page
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/readblog"}
                className=" navDropDownChild"
              >
                {" "}
                Read Blog
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="contactbuttonMain">
            {" "}
            <Link to={"/contact"} className="contactBtn">
              {" "}
              Contact Us
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

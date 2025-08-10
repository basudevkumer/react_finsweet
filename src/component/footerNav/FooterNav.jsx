import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import "./footerNav.css";
import { Link } from "react-router";

const FooterNav = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className="footerNav">
            <p className="pragraph footerPragraph">
              {" "}
              Copyright 2022, Finsweet.com |  <Link to={"/policy"} className=" footerPolicy">Privacy Policy</Link>
            </p>
            <div className="footerNavElement">
              <ul className="footerNavChild">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterNav;

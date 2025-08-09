import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import FtrLogo from "../../assets/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

import "./footer.css";
import FooterNav from "../footerNav/FooterNav";

const Footer = () => {
  return (
    <section>
      <div className="footer">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="footerPart1">
                <a href="">
                  <img src={FtrLogo} alt="FtrLogo" />
                </a>
                <p className="pragraph footerPragraphFirst">
                  We are always open to discuss your project and improve your
                  online presence.
                </p>
                <div className="footerBox">
                  <div className="boxFirstPart">
                    <p className="childOne">Email me at</p>
                    <p className="childTwo">contact@website.com</p>
                  </div>
                  <div className="boxFirstLast">
                    <p className="childOne">Email me at</p>
                    <p className="childTwo">contact@website.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 2 }}>
              <div className="footerPart2">
                <h2 className="heading2 footerHeading">Lets Talk!</h2>
                <p className="pragraph footerHeadingSecond">
                  We are always open to discuss your project, improve your
                  online presence and help with your UX/UI design challenges.
                </p>
                <ul className="icon">
                  <li>
                    <a href="#">
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <FooterNav />
      </div>
    </section>
  );
};

export default Footer;

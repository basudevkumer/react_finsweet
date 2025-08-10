import { Col, Container, Row } from "react-bootstrap";
import "./workPortfolio.css";
import AboutCommon from "../aboutCommon/AboutCommon";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";





const WorkPortfolio = () => {
  return (
    <section className="workPortfolioMain">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
          
         <div className="workPortfolioTopElement">
            <AboutCommon pragraphOne={"What we created"} pragraphTwo={"We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible."} heading={"Our Work Portfolio"}/>
            <ul className="workPortFolioIcon">
              <li><a href="#"><FaSquareFacebook/></a></li>
              <li><a href="#"><FaTwitter/></a></li>
              <li><a href="#"><FaInstagram/></a></li>
              <li><a href="#"><FaLinkedin/></a></li>
            
             
            </ul>
         </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkPortfolio;

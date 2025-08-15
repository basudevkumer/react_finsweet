import { Col, Container, Image, Row } from "react-bootstrap";
import AboutImageOne from "../../assets/aboutdesign.png"
import "./aboutDesign.css";

const AboutDesign = () => {
  return (
    <section className="aboutDesign">
      <Container>
        <Row>
          <Col lg={{ span: 5 }}>
            <div>
              <p className={`pragraph `}>About us</p>
              <h3 className="heading1 aboutDesignHeading">
                Our designs solve problems
              </h3>
              <p className={`pragraph  pragraphOther`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </Col>
          <Col lg={{ span: 5, offset: 2 }}>
            <Image src={AboutImageOne} className="aboutDesignImage" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutDesign;

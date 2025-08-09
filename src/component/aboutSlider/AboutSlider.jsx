//css add
import { Col, Container, Row } from "react-bootstrap";
import "./aboutSlider.css";
import CommonSlider from "../commonSlider/CommonSlider";

const AboutSlider = () => {
  return (
    <section className="aboutslider">
      <Container>
        <Row>
          <Col lg={{ span: 2 }}>
            <div className="aboutUsers">
              <h3 className="heading3">100.000+</h3>
              <p className="pragraph">Finsweet Users</p>
            </div>
          </Col>
          <Col lg={{ span: 9, offset: 1 }}>
            <CommonSlider />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSlider;

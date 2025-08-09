import { Col, Container, Row } from "react-bootstrap";
import "./aboutFollow.css";
import AboutCreativeTask from "../aboutCreativeTask/AboutCreativeTask";

const AboutFollow = () => {
  return (
    <section className="aboutFollow">
      <Container>
        <Row>
          <Col lg={3}>
            <AboutCreativeTask
              heading={"Planning"}
              pragraph={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
              }
            />
          </Col>
          <Col lg={3}>
            <AboutCreativeTask
              heading={"Conception"}
              pragraph={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
              }
            />
          </Col>
          <Col lg={3}>
            <AboutCreativeTask
              heading={"Design"}
              pragraph={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
              }
            />
          </Col>
          <Col lg={3}>
            <AboutCreativeTask
              heading={"Development"}
              pragraph={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutFollow;

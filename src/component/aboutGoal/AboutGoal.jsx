import { Col, Container, Row, Image } from "react-bootstrap";
import "./aboutGoal.css";
import AboutCommon from "../aboutCommon/AboutCommon";
import AboutGoalImages from "../../assets/aboutgoalimg.png";

const AboutGoal = () => {
  return (
    <section className="aboutGoalMain">
      <Container>
        <Row className="aboutGoalRow">
          <Col lg={{ span: 5, offset: 1 }}>
            <AboutCommon
              pragraphOne={"Who we are"}
              heading={"Goal focussed"}
              pragraphTwo={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
            />
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
            <AboutCommon
              heading={"Continuous improvement"}
              pragraphTwo={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="colPaddingReduce">
            <Image src={AboutGoalImages} className="aboutGooalImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutGoal;

import { Col, Container, Image, Row } from "react-bootstrap";
import "./aboutMission.css";
import AboutCommon from "../aboutCommon/AboutCommon";
import MissionImgOne from "../../assets/aboutmissionone.png";
import MissionImgTwo from "../../assets/aboutmissiontwo.png";

const AboutMission = () => {
  return (
    <section className="aboutMissions">
      <Container>
        <Row>
          <Col lg={{ span: 6 }}>
            <AboutCommon
              heading={"Inspire, Innovate, Share"}
              pragraphOne={"Our Mission "}
              pragraphTwo={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
            />
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
            <Image src={MissionImgOne} className="commonImages" />
          </Col>
        </Row>
        <Row className="missionInitialEdit">
          <Col lg={{ span:5}}>
            <Image src={MissionImgTwo} className="commonImages" />
          </Col>
          <Col lg={{ span: 6, offset: 1 }}>
            <AboutCommon
              heading={"Laser focus"}
              pragraphOne={"Our Vision"}
              pragraphTwo={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMission;

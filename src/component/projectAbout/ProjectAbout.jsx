import { Col, Container, Image, Row } from "react-bootstrap";
import "./projectAbout.css";
import ReadCommonCard from "../readCommonCard/ReadCommonCard";
import ReadCaseImage from "../../assets/readCaseImg.png";

const ProjectAbout = () => {
  return (
    <section className="projectAboutMain">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <ReadCommonCard
              heading={"About the project"}
              pragraphOne={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              point1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              point2={
                "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
              }
              point3={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse"
              }
              point4={
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa"
              }
              projectPointClassName5={"none"}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="readCaseImges">
              <Image src={ReadCaseImage} className="commonImages" />
            </div>
          </Col>
        </Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <div className=" readCaseHow">
            <ReadCommonCard
              heading={"How we do it"}
              pragraphOne={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              point1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              point2={
                "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
              }
              point3={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse"
              }
              point4={
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa"
              }
              projectPointClassName5={"none"}
            />
          </div>
        </Col>
      </Container>
    </section>
  );
};
export default ProjectAbout;

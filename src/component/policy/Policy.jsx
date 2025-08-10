import { Col, Container, Row } from "react-bootstrap";
import "./policy.css";
import ReadCommonCard from "../readCommonCard/ReadCommonCard";

const Policy = () => {
  return (
    <section className="policyMain">
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="policyTopPart">
              <h2 className="heading2">Privacy Policy</h2>
              <p className="pragraph">
                When you’re ready to go beyond prototyping in Figma, Webflow’s
                ready to help you bring your
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="policyMiddlePart">
              <ReadCommonCard
                heading={"Lorem ipsum dolor."}
                pragraphOne={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
                }
                pragraphTwo={
                  "Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                projectPointIconCustomise={"none"}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="policyLastPart">
              <ReadCommonCard
                heading={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                pragraphOne={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                }
                point1={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
                }
                point2={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
                }
                point3={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
                }
                projectPointClassName4={"none"}
                projectPointClassName5={"none"}
                pragraphTwo={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
                }
                projectPragraphEndCustomEdit={"policyLastPartPadding"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Policy;

import { Col, Container, Row } from "react-bootstrap";
import "./aboutBenifit.css";
import CommonCard from "../commonCard/CommonCard";
import BenifitImageOne from "../../assets/featureicon6.png";
import BenifitImageTwo from "../../assets/featureicon1.png";
import BenifitImageThree from "../../assets/featureicon3.png";

const AboutBenifit = () => {
  return (
    <section className="aboutBenifit">
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="benifitTopHeading">
              <h2 className="heading2  ">The benefits of working with us</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="abBebMins">
              <CommonCard
                cardHeadingChild={"Customize with ease"}
                cardPragraphChild={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
                }
                cardIcon={BenifitImageOne}
                customParentCardEdition={"benifitCardMain abBebMins"}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="aboutBenifitCardMiddles abBebMins">
              <CommonCard
                cardHeadingChild={"Perfectly Responsive"}
                cardPragraphChild={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
                }
                cardIcon={BenifitImageTwo}
                customParentCardEdition={"benifitCardMain"}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="">
              <CommonCard
                cardHeadingChild={"Friendly Support"}
                cardPragraphChild={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
                }
                cardIcon={BenifitImageThree}
                customParentCardEdition={"benifitCardMain"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AboutBenifit;

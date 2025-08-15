import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "../button/Button";
import { FiArrowRight } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";

import BigCardImage from "../../assets/cardImg1.png";
import "./project.css";
import ProjectCard from "../projectCard/ProjectCard";
import ProjectSmallImage from "../../assets/projectcardimg1.png";
import ProjectSmallImageOther from "../../assets/projectcardimg2.png";

const Project = () => {
  return (
    <section className="project">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="projectElementMain">
              <h2 className="heading2 projectHeading">View our projects</h2>
              <div>
                <Button
                  children={"View More"}
                  className={`projectButton`}
                  textColor={"#282938"}
                />
                <FiArrowRight className="projectIcon" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <div className="bigCard">
              <Image src={BigCardImage} className="projectImg" />
              <div className="overlayChild">
                <h6 className="heading6 projectCardHeading">
                  Workhub office Webflow Webflow Design
                </h6>
                <p className="pragraph projectCardPragraph ">
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam{" "}
                </p>
                <div className="bigCardButtomMains">
                  <Button children={"View portfolio"} textColor={"#FCD980"} />
                  <GoArrowRight className="projectCardIcon" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <Row>
              <Col>
                <div className="smallCardOne">
                  <ProjectCard
                    projectCardImgName={ProjectSmallImage}
                    projectCardHeadingTwo={"Unisaas Website Design"}
                    projectCardButtonTwoText={"View portfolio"}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="smallCardTwo">
                  <ProjectCard
                    projectCardImgName={ProjectSmallImageOther}
                    projectCardHeadingTwo={"Unisaas Website Design"}
                    projectCardButtonTwoText={"View portfolio"}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;

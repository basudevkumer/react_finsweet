import { Col, Container, Row } from "react-bootstrap";
import "./work.css";
import Button from "../button/Button";
import { CgArrowLongRight } from "react-icons/cg";
import WorkCard from "../workCard/WorkCard";
import CardOne from "../../assets/pointer1.png";
import { useEffect } from "react";
import Aos from "aos";

const Work = () => {
 

  return (
    <section className=" work">
      <Container>
        <Row>
          <Col lg={{ span: 4 }}>
            <div className="workPartOne ">
              <h2 className="heading2 workHeadingOne"> How we work</h2>
              <p className="pragraph workPragraphOne" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <div className="workButtonCustomEdit">
                <Button
                  children={"Get in touch with us"}
                  className="pragraph"
                />
                <CgArrowLongRight className="workButtonIcon" />
              </div>
            </div>
          </Col>
          <Col lg={{ span: 6, offset: 1 }}>
            {" "}
            <Row className="cardparent">
              <WorkCard
                col={6}
                imgname={CardOne}
                headingChildren={"Strategy"}
                pragraphChildren={
                  "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                }
              />
              <WorkCard
                col={6}
                imgname={CardOne}
                headingChildren={"Strategy"}
                pragraphChildren={
                  "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                }
              />
              <WorkCard
                col={6}
                imgname={CardOne}
                headingChildren={"Strategy"}
                pragraphChildren={
                  "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                }
                
              />
              <WorkCard
                col={6}
                imgname={CardOne}
                headingChildren={"Strategy"}
                pragraphChildren={
                  "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
                }
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Work;

import { Col, Container, Image, Row } from "react-bootstrap";
import "./readCaseDesign.css";

import ReadDesignImageOne from "../../assets/workTamplateImage1.png";
import ReadCaseFacility from "../readCaseStudiesFacilitys/ReadCaseFacility";

const ReadCaseDesign = () => {
  return (
    <section className=" readCaseDesignMain">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 1 }}>
            <div className="readCaseDesignTopPart">
              <p className="pragraph">Web design and development</p>
              <h2 className="heading2 readCaseDesignHeading">
                {" "}
                Finsweet Design case studies
              </h2>
              <p className="pragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="readCaseDesignImage">
              <Image src={ReadDesignImageOne} className="commonImages " />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 2, offset: 1 }}>
            <div>
              <ReadCaseFacility heading={"facebook.com"} pragraph={"Client"} />
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 1 }}>
            <div>
              <ReadCaseFacility
                heading={"Product Design"}
                pragraph={"Service"}
              />
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <div>
              {" "}
              <ReadCaseFacility
                heading={"UI Screens, UX Flow & Prototype"}
                pragraph={"Deliverable"}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span:10,offset:1}}> 
            <div className="readCaseStudyDivider">

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReadCaseDesign;

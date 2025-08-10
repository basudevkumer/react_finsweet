import { Col, Container, Image, Row } from "react-bootstrap";
import "./readBlogUx.css";
import ReadBlogUxIamges from "../../assets/blogBannarImage.png";
import ReadCommonCard from "../readCommonCard/ReadCommonCard";
import ReadBlogUxImageTwo from "../../assets/readblogbannarimg.jpg";

const ReadBlogUx = () => {
  return (
    <section className="readBlogUx">
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="readBlogUxTopPart">
              <h2 className="heading2">
                A UX Case Study on Creating a Studious Environment for Students
              </h2>
              <p className="pragraph">
                Andrew Jonson Posted on 27th January 2021
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="readBlogImg commonImages">
              <Image src={ReadBlogUxIamges} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="readBlogUxTextPartTop">
              <ReadCommonCard
                heading={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
                pragraphOne={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                projectPointIconCustomise={"none"}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="readBlogUxTextPartMiddle">
              <ReadCommonCard
                heading={"Ut enim ad minim veniam, quis nostrud."}
                pragraphOne={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                projectPointClassName6={"none"}
                pragraphTwo={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                projectPragraphEndCustomEdit={
                  "readBlogUxTextPartMiddleChildPragraph"
                }
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="readBlogUxTextPartBannarSecondImage">
              <Image src={ReadBlogUxImageTwo} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="readBlogUxTextPartLast">
              <ReadCommonCard
                heading={"Ut enim ad minim veniam, quis nostrud."}
                pragraphOne={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
                projectPointIconCustomise={"none"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReadBlogUx;

import { Col, Container, Row } from "react-bootstrap";
import "./workBuild.css";
import Button from "../button/Button";

const WorkBuild = () => {
  return (
    <section className="workBuldMain">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="workBuldElement">
              <h2 className="heading2 workBuildHeading">
                Let's build something great together
              </h2>
              <p className="pragraph workPragraph">
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                ultricies nec dolor sit amet, scelerisque cursus purus.
              </p>
              <Button children={"Contact Us"} className="workBuldButton" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkBuild;

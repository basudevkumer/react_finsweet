import { Col, Container, Image, Row } from "react-bootstrap";
import "./blogStudio.css";
import blogBannarImage  from "../../assets/blogBannarImage.png"
import Button from "../button/Button";

const BlogStudio = () => {
  return (
    <section className="blogStudioMain">
      <Container>
        <Row>
          <Col lg={{ span:10, offset: 1 }}>
           <div className="blogStudioTopPart">
             <h2 className="heading2 blogPagePartHeading">
              A UX Case Study on Creating a Studious Environment for Students
            </h2>
              <p className="pragraph">Posted on 27th January 2021</p>
           </div>
          </Col>
          <Col lg={12}>
           <div className="blogBannarImg">
            <Image src={blogBannarImage} className="commonImages"/>
           </div>
          </Col>
        </Row>
       <Row>
        <Col lg={{span:8,offset:2}}>
          <div className="blogStudioLastPart">
            <p className="pragraph ">
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
            </p>
            <Button children={"Read more"} className="blogLastBtn"/>
          </div>
        </Col>
       </Row>

      </Container>
    </section>
  );
};

export default BlogStudio;

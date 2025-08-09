import { Col, Container, Image, Row } from "react-bootstrap";
import CustomHeadPra from "../customHeadpra/CustomHeadPra";
import SlideImage from "../../assets/sheenshort.png";
import "./clientAbout.css";

const ClientAbout = () => {
  return (
    <section className="clientAbout">
      <Container>
        <Row>
          <Col lg={{ span: 4 }}>
            <div>
              <CustomHeadPra
                custonHeading={"What our clients say about us"}
                custonPragarph={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed."
                }
              />
            </div>
          </Col>
          <Col lg={{ span: 6, offset: 2 }}>
            <Image src={SlideImage} className="slideImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientAbout;

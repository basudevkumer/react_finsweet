import { Col, Container, Row } from "react-bootstrap";
import "./feature.css";
import CommonCard from "../commonCard/CommonCard";
import ImageOne from "../../assets/featureicon1.png";
import ImageTwo from "../../assets/featureicon2.png";
import ImageTree from "../../assets/featureicon3.png";
import ImageFour from "../../assets/featureicon4.png";
import ImageFive from "../../assets/featureicon5.png";
import ImageSix from "../../assets/featureicon6.png";
import Aos from "aos";
import { useEffect } from "react";
const Feature = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once:false
    });
  }, []);
  return (
    <section className="feature">
      <Container>
        <Row>
          <Col lg={12}>
            <div
              className="featureTopPart"
            
                data-aos="fade-up"
               
            >
              <p className="pragraph featurePragraph">Features</p>
              <h2 className="heading2 featureHeading">
                Design that solves problems, one product at a time
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="featureCardRow">
          <Col lg={4}>
            <CommonCard
              cardIcon={ImageOne}
              cardHeadingChild={"Uses Client First"}
              cardPragraphChild={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
          </Col>
          <Col lg={4}>
            <CommonCard
              cardIcon={ImageTwo}
              cardHeadingChild={"Two Free Revision Round"}
              cardPragraphChild={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
          </Col>
          <Col lg={4}>
            <CommonCard
              cardIcon={ImageTree}
              cardHeadingChild={"Two Free Revision Round"}
              cardPragraphChild={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
          </Col>
          <Col lg={4}>
            <CommonCard
              cardIcon={ImageFour}
              cardHeadingChild={"Template Customization"}
              cardPragraphChild={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
          </Col>
          <Col lg={4}>
            <CommonCard
              cardIcon={ImageFive}
              cardHeadingChild={"Quick Delivery"}
              cardPragraphChild={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
          </Col>
          <Col lg={4}>
            <CommonCard
              cardIcon={ImageSix}
              cardHeadingChild={"Hands-on approach"}
              cardPragraphChild={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feature;

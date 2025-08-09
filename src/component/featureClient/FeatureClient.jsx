import { Col, Container, Row, Image } from "react-bootstrap";
import "./featureClient.css";
import AboutCommon from "../aboutCommon/AboutCommon";
import FeatureOne from "../../assets/feature1.png";
import FeatureTwo from "../../assets/feature2.png";
import FeatureThree from "../../assets/feature3.png";
import FeatureFour from "../../assets/feature4.png";

const FeatureClient = () => {
  return (
    <section className="featureClientMains">
      <Container>
        <Row className="featureClientOne">
          <Col lg={{ span: 6 }}>
            <AboutCommon
              pragraphOne={"Use Client-first"}
              pragraphTwo={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              }
              heading={
                "Top agencies and freelancers around the world use Client-first "
              }
            />
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
            <Image src={FeatureOne} className="commonImages" />
          </Col>
        </Row>
        <Row className="featureClientTwo">
          <Col lg={{ span: 5 }}>
            <Image src={FeatureTwo} className="commonImages"/>
          </Col>
          <Col lg={{ span: 6, offset: 1 }}>
            <AboutCommon
              pragraphOne={"Free Revision Rounds"}
              pragraphTwo={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              }
              heading={
                "Get free Revisions and one week of free maintenance "
              }
            />
          </Col>
        </Row>
        <Row className="featureClientTree">
          <Col lg={{ span: 6 }}>
            <AboutCommon
              pragraphOne={"24/7 Support"}
              pragraphTwo={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              }
              heading={
                "Working with us, you will be getting 24/7 priority support"
              }
            />
          </Col>
          <Col lg={{ span: 5, offset: 1 }}>
            <Image src={FeatureThree} className="commonImages" />
          </Col>
        </Row>
        <Row className="featureClientMains">
          <Col lg={{ span: 5 }}>
            <Image src={FeatureFour} className="commonImages"/>
          </Col>
          <Col lg={{ span: 6, offset: 1 }}>
            <AboutCommon
              pragraphOne={"Quick Delivery"}
              pragraphTwo={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
              }
              heading={
                "Guranteed 1 week delivery for standard five pager website"
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureClient;

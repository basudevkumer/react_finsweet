//css file
import "./featurePlan.css";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import FeaturePlanCard from "../featurePlanCard/FeaturePlanCard";
import { FaCaretRight } from "react-icons/fa";

const FeaturePlan = () => {
  return (
    <section className="featurePlanMain">
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="featurePlanTextElement">
              <h2 className="heading2">Our Pricing Plans</h2>
              <p className="pragraph featurePlanePragraphOne">
                When you’re ready to go beyond prototyping in Figma, Webflow is
                ready to help you bring your designs to life — without coding
                them.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="motherCardRow">
          <Col lg={4}>
            <FeaturePlanCard
              headingOne={"$299"}
              pragraphOne={"Per Design"}
              headingTwo={"Landing Page "}
              pragraphTwo={
                "When you’re ready to go beyond prototyping in Figma, "
              }
              item1={"All limited links"}
              item2={"Own analytics platform"}
              item3={"Chat support"}
              item4={"Optimize hashtags"}
              item5={"Unlimited users"}
              fpi7={"isNone"}
              fpi6={"isNone"}
              fpi8={"isNone"}
              featureCardItemsPadding={`featureCardsOne`}
              buttonName={'Get started'}
            />
          </Col>
          <Col lg={4}>
            <FeaturePlanCard
              headingOne={"$399"}
              pragraphOne={"Multi Design"}
              headingTwo={"Website Page "}
              pragraphTwo={
                "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help."
              }
              item1={"All limited links"}
              item2={"Own analytics platform"}
              item3={"Chat support"}
              item4={"Optimize hashtags"}
              item5={"Unlimited users"}
              fpi7={"isNone"}
              fpi6={"isNone"}
              fpi8={"isNone"}
              featureCardItemsPadding={`featureCardsTwo`}
              buttonName={"Get started"}
            />
          </Col>
          <Col lg={4}>
            <FeaturePlanCard
              headingOne={"$499 +"}
              pragraphOne={"Per Design"}
              headingTwo={"Complex Project "}
              pragraphTwo={
                "When you’re ready to go beyond prototyping in Figma, "
              }
              item1={"All limited links"}
              item2={"Own analytics platform"}
              item3={"Chat support"}
              item4={"Optimize hashtags"}
              item5={"Unlimited users"}
              item6={"Unlimited users"}
              item7={"Assist and Help"}
              fpi8={"isNone"}
              featureCardItemsPadding={`featureCardsTree`}
              buttonName={"Contact us"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturePlan;

import { Col, Container, Image, Row } from "react-bootstrap";
import BuildImg from "../../assets/buildingImage.png";
import "./building.css";
import Button from "../button/Button";
import { HiArrowLongRight } from "react-icons/hi2";


const Building = () => {
  return (
    <section className="building">
      <Container>
        <Row className="buildingGutter">
          <Col lg={6}>
            <div className="buildingOverlayMain">
              <Image src={BuildImg} className="buldingImage" />
              <div className="buldingChildOverlay">
                <h1 className="heading1 buildingHeading">
                  Building stellar websites for early startups
                </h1>
                <p className="pragraph buildingPragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="buildingInput">
              <h5 className="heading5 buildingInputHeading">Send inquiry</h5>
              <p className="pragraph buildingInputPragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <div className="buildingInputGroup">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="commonInputCss"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="commonInputCss"
                />
                <input
                  type="text"
                  placeholder="Paste your Figma design URL"
                  className="commonInputCss"
                />
              </div>
              <Button children={"Send an Inquiry"} textColor={"#1B1C2B"} className="buildingButton pragraph"/>
              <div className="iconEdit">
                <Button children={"Send an Inquiry"}  className="buildingButtonTwo pragraph" textColor={"#fff"}/>
              <HiArrowLongRight className="buildingIcon"/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Building;

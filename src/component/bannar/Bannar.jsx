import { Col, Container, Row, Image } from "react-bootstrap";
import Button from "../button/Button";
import { CgArrowLongRight } from "react-icons/cg";
import BannarImgOne from "../../assets/bannarOne.png";
import "./bannar.css";

const  Bannar = ()=> {
  return (
    <section className="bannarMain">
      <Container>
        <Row>
          <Col lg={{ span: 5 }} md={{ span: 5 }}>
            <div className=" bannarFirstPart">
              <h1 className="heading1">
                Building stellar websites for early startups
              </h1>
              <p className="pragraph bannarPragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="homebuttonMain">
                <Button
                  children={"View our work"}
                  textColor={""}
                  className={"bannarbtnOne pragraph"}
                />
                <div>
                  <Button
                    children={"View Pricing"}
                    textColor={"#fff"}
                    className="pragraph bannarbtnTwo"
                  />
                  <CgArrowLongRight className="bannarButtonIcon" />
                </div>
              </div>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
            <div className="bannarImgMain">
              <Image src={BannarImgOne} className="bannarChildImg" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Bannar;

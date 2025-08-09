import { Col, Container, Row, Image } from "react-bootstrap";
import Button from "../button/Button";
import { CgArrowLongRight } from "react-icons/cg";
import "./bannar.css";

const Bannar = ({
  bannarHeadingChild,
  bannarPragraphChild,
  buttonTextChildOne,
  buttonTextChildTwo,
  bannarButtonMain,
  bannarButtonClassNameOne,
  bannarButtonClassNameTwo,
  bannarImageName,
  bannarIconEdit
}) => {
  return (
    <section className="bannarMain">
      <Container>
        <Row>
          <Col lg={{ span: 5 }} md={{ span: 5 }}>
            <div className=" bannarFirstPart">
              <h1 className="heading1 bannarHeading">{bannarHeadingChild}</h1>
              <p className="pragraph bannarPragraph">{bannarPragraphChild}</p>
              <div className="homebuttonMain">
                <Button
                  children={buttonTextChildOne}
                  textColor={""}
                  className={`bannarbtnOne pragraph ${bannarButtonClassNameOne}`}
                />
                <div className={`${bannarButtonMain}`}>
                  <Button
                    children={buttonTextChildTwo}
                    textColor={"#fff"}
                    className={`pragraph bannarbtnTwo ${bannarButtonClassNameTwo}`}
                  />
                  <CgArrowLongRight className={`bannarButtonIcon  ${bannarIconEdit}`} />
                </div>
              </div>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 1 }}>
            <div className="bannarImgMain">
              <Image src={bannarImageName} className="bannarChildImg" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Bannar;

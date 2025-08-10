import { Col, Container, Row } from "react-bootstrap";
import "./workTemPlate.css";
import WorkCommonCard from "../workCommonCard/WorkCommonCard";
import WorkTemplateImgOne from "../../assets/workTamplateImage1.png"
import WorkTemplateImgTwo from "../../assets/workTamplateImage2.png"
import WorkTemplateImgThree from "../../assets/workTamplateImage3.png"
import WorkTemplateImgFour from "../../assets/workTamplateImage4.png"
import WorkTemplateImgFive from "../../assets/workTamplateImage5.png"
import WorkTemplateImgSix from "../../assets/workTamplateImage6.png"

const WorkTemplate = () => {
  return (
    <section className="workTemplateMain">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="workTemplateListMain">
              <ul className="workTemplateListITems">
                <li>
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">UI Design</a>
                </li>
                <li>
                  <a href="#">Webflow Design</a>
                </li>
                <li>
                  <a href="#">Figma Design</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="allTempleteMain">
          <Col lg={6}>
            <WorkCommonCard imageName={WorkTemplateImgOne} headingName={"Template 3"} pragraphName={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."} buttonName={"Read case study"} buttonClassName={"workTempleteButtonCss"}/>
          </Col>
          <Col lg={6}>
            <WorkCommonCard imageName={WorkTemplateImgTwo} headingName={"Template 4"} pragraphName={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."} buttonName={"Read case study"} buttonClassName={"workTempleteButtonCss"}/>
          </Col>
          <Col lg={6}>
            <WorkCommonCard imageName={WorkTemplateImgThree} headingName={"Template 5"} pragraphName={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."} buttonName={"Read case study"} buttonClassName={"workTempleteButtonCss"}/>
          </Col>
          <Col lg={6}>
            <WorkCommonCard imageName={WorkTemplateImgFour} headingName={"Template 6"} pragraphName={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."} buttonName={"Read case study"} buttonClassName={"workTempleteButtonCss"}/>
          </Col>
          <Col lg={6}>
            <WorkCommonCard imageName={WorkTemplateImgFive} headingName={"Template 7"} pragraphName={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."} buttonName={"Read case study"} buttonClassName={"workTempleteButtonCss"}/>
          </Col>
          <Col lg={6}>
            <WorkCommonCard imageName={WorkTemplateImgSix} headingName={"Template 8"} pragraphName={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."} buttonName={"Read case study"} buttonClassName={"workTempleteButtonCss"}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkTemplate;

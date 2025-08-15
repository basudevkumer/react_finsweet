// css file
import "./aboutCard.css";

import { Col, Container, Row } from "react-bootstrap";
import AboutTeamCard from "../aboutTeamCard/AboutTeamCard";

// images name
import TeamImgOne from "../../assets/aboutteamimage1.png";
import TeamImgTwo from "../../assets/aboutteamimage2.png";
import TeamImgThree from "../../assets/aboutteamimage3.png";
import TeamImgFour from "../../assets/aboutteamimage4.png";

const AboutCard = () => {
  return (
    <section className="aboutCardMain">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="aboutCardHeading heading2"> Meet our team</div>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6}>
            <div className="aCardMains1">
              <AboutTeamCard
                imageName={TeamImgOne}
                headingChild={"John Smith"}
                pragrapChild={"CEO"}
              />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="aCardMains2">
              <AboutTeamCard
                imageName={TeamImgTwo}
                headingChild={"Simon Adams"}
                pragrapChild={"CTO"}
              />
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="aCardMains3">
              <AboutTeamCard
                imageName={TeamImgThree}
                headingChild={"Paul Jones"}
                pragrapChild={"Design Lead"}
              />
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="aCardMains4">
              <AboutTeamCard
                imageName={TeamImgFour}
                headingChild={"JSara Hardin"}
                pragrapChild={"Project Manager"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCard;

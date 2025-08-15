import { Image } from "react-bootstrap";
// css folder
import "./aboutTeamCard.css";
// icon
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const AboutTeamCard = ({ imageName, headingChild, pragrapChild }) => {
  return (
    <div className="aboutTeamCardMain">
      <div className="aboutCardImgOverlay">
        <Image src={imageName} roundedCircle className="aboutCardImages" />

        <div className="aboutCardImgIcon">
          <ul className="iconElemtnts">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <IoLogoLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h6 className="heading6 aboutTeamCardHeading">{headingChild}</h6>
      <p className="pragraph aboutTeamCardPragraph ">{pragrapChild}</p>
    </div>
  );
};

export default AboutTeamCard;

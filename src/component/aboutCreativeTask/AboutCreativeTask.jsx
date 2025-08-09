import { Image } from "react-bootstrap";
import "./aboutCreativeTask.css";
import CreativeImageOne from "../../assets/creativecircle.png";
import CreativeImageTwo from "../../assets/creativeline.png";

const AboutCreativeTask = ({ heading, pragraph }) => {
  return (
    <div className="creativeTaskMain">
      <div className="creativeTaskImg">
        <span>
          <Image src={CreativeImageOne} className="creativeImageCommonEdit" />
        </span>
        <span>
          <Image src={CreativeImageTwo}  className="creativeImageCommonEdit"/>
        </span>
      </div>
      <h6 className="heading6 crativeHeading">{heading}</h6>
      <p className="pragraph">{pragraph}</p>
    </div>
  );
};
export default AboutCreativeTask;

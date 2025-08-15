import { Image } from "react-bootstrap";
import "./projectCard.css";
import Button from "../button/Button";
import { GoArrowRight } from "react-icons/go";

const ProjectCard = ({
  projectCardImgName,
  projectCardButtonTwoText,
  projectCardHeadingTwo,
}) => {
  return (
    <div className="projectCardCompntMain">
      <Image src={projectCardImgName} className="projectCardImgEdit" />
      <div className="customProjectOverlay">
        <h6 className="heading6 customProjectHeading">
          {projectCardHeadingTwo}
        </h6>
        <div className="projectCardButtonsElement">
          <Button
            children={projectCardButtonTwoText}
            textColor={"#FCD980"}
            className="projectButton"
          />
          <GoArrowRight className="projectCardIconTwo" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

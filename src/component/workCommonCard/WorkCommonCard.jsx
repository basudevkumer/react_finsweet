import { Image } from "react-bootstrap";
import "./workCommonCard.css";
import Button from "../button/Button";
import { HiMiniArrowLongRight } from "react-icons/hi2";



const WorkCommonCard = ({imageName,headingName,pragraphName,buttonName,buttonClassName}) => {
  return (
    <div className="workCommonCardMain">
      <Image src={imageName} className="commonImages"/>
      <h3 className="heading3 workCommonHeading">{headingName}</h3>
      <p className="pragraph">{pragraphName}</p>
      <div className="workCommonCardButton">
         <Button children={buttonName} className={`${buttonClassName}`}/>
         <span className="workCommonCardIcon"><HiMiniArrowLongRight/></span>
      </div>
      
    </div>
  );
};

export default WorkCommonCard;

import { Image } from "react-bootstrap";

import "./commonCard.css";

const CommonCard = ({ cardIcon, cardHeadingChild, cardPragraphChild,customParentCardEdition }) => {
  return (
    <div className={`commonCardMain ${customParentCardEdition}`}>
      <Image src={cardIcon} className="cardImg" />
      <h6 className=" heading6 cardHeading">{cardHeadingChild}</h6>
      <p className="pragraph cardPragraph"> {cardPragraphChild}</p>
    </div>
  );
};

export default CommonCard;

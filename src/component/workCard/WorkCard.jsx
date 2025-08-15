import { Col, Image } from "react-bootstrap";
import "./workcard.css"

const WorkCard = ({ imgname,headingChildren,pragraphChildren }) => {
  return (
    <Col lg={6}  md={6} sm={6}>
      <div className="workCardsElements">
      <Image src={imgname}/>
      <h5 className="heading5 workCardText"  >{headingChildren}</h5>
      <p className=" pragraph workCardPragraph">{pragraphChildren}</p>
      </div>
    </Col>
  );
};

export default WorkCard;

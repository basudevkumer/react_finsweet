import { Col, Image } from "react-bootstrap";
import "./workcard.css"

const WorkCard = ({ col,imgname,headingChildren,pragraphChildren }) => {
  return (
    <Col lg={col}>
      <div className="">
      <Image src={imgname}/>
      <h5 className="heading5 workCardText"  >{headingChildren}</h5>
      <p className=" pragraph workCardPragraph">{pragraphChildren}</p>
      </div>
    </Col>
  );
};

export default WorkCard;

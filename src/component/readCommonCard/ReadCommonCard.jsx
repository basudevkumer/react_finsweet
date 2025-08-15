import { Card } from "react-bootstrap";
import "./readCommonCard.css";
import { FaDotCircle } from "react-icons/fa";

const ReadCommonCard = ({
  heading,
  pragraphOne,
  pragraphTwo,
  point1,
  point2,
  point3,
  point4,
  point5,
  projectPointClassName1,
  projectPointClassName2,
  projectPointClassName3,
  projectPointClassName4,
  projectPointClassName5,
  projectPragraphEndCustomEdit,
  projectPointIconCustomise,
}) => {
  return (
    <Card className="cardMain">
      <Card.Body>
        <Card.Title className="heading3 ReadCommonCardFirstHeading">{heading}</Card.Title>
        <Card.Text className="pragraph  projectPragarphTop">
          {pragraphOne}
        </Card.Text>

        <div className={`projectPointMain ${projectPointIconCustomise}`}>
          <div className={`projectPoint ${projectPointClassName1}`}>
            <span className="projectPointIcon">
              <FaDotCircle />
            </span>
            <Card.Text className="pragraph">{point1}</Card.Text>
          </div>
          <div className={`projectPoint ${projectPointClassName2}`}>
            <span className="projectPointIcon">
              <FaDotCircle />
            </span>
            <Card.Text className="pragraph">{point2}</Card.Text>
          </div>
          <div className={`projectPoint ${projectPointClassName3}`}>
            <span className="projectPointIcon">
              <FaDotCircle />
            </span>
            <Card.Text className="pragraph">{point3}</Card.Text>
          </div>
          <div className={`projectPoint ${projectPointClassName4}`}>
            <span className="projectPointIcon">
              <FaDotCircle />
            </span>
            <Card.Text className="pragraph">{point4}</Card.Text>
          </div>
          <div className={`projectPoint ${projectPointClassName5}`}>
            <span className="projectPointIcon">
              <FaDotCircle />
            </span>
            <Card.Text className="pragraph">{point5}</Card.Text>
          </div>
        </div>
        <Card.Text className={`pragraph ${projectPragraphEndCustomEdit}`}>
          {pragraphTwo}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReadCommonCard;

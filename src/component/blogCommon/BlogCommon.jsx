import { Card } from "react-bootstrap";
import "./blogCommon.css";
import Button from "../button/Button";
import { HiArrowLongRight } from "react-icons/hi2";

const BlogCommon = ({
  blogImage,
  dateTime,
  cardTitle,
  blogButtonText,
  blogButtonEdit,
  cardPragraph,
}) => {
  return (
    <Card  className="blogCard">
      <Card.Img variant="top" src={blogImage} className="blogImages" />
      <Card.Body>
        <Card.Text className="pragraph blogPragraphOne">{dateTime}</Card.Text>
        <Card.Title className="heading6 blogHeading">{cardTitle}</Card.Title>
        <Card.Text className="pragraph blogPragraphTwo">
          {cardPragraph}
        </Card.Text>
        <div className="blogButtonGroup ">
          <Button children={blogButtonText} className={blogButtonEdit} />
          <HiArrowLongRight className="blogIcons"/>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogCommon;

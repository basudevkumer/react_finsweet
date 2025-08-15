import { Card } from "react-bootstrap";
import "./featurePlanCard.css";
import { FaCaretRight } from "react-icons/fa";
import Button from "../button/Button";

const FeaturePlanCard = ({
  headingOne,
  pragraphOne,
  headingTwo,
  pragraphTwo,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  fpi6,
  fpi7,
  fpi8,
  fpic,
  featureCardItemsPadding,
  buttonName,
}) => {
  return (
    <Card className="featurePlanCardMain">
      <Card.Body className="featureCardBody">
        <div className="featureCardHeadingMoney">
          <Card.Title className="heading3 headingOne">{headingOne}</Card.Title>
          <Card.Text className="pragraph pragraphOne">{pragraphOne}</Card.Text>
        </div>
        <Card.Title className="heading6 featureMiddleHeading">
          {headingTwo}
        </Card.Title>
        <Card.Text className="pragraph fpp">{pragraphTwo}</Card.Text>
        <div className={`featureCardItems  ${featureCardItemsPadding} `}>
          <Card.Text className={`featureItem pragraph ${fpic}`}>
            <span className={`featureIcon `}>
              <FaCaretRight />{" "}
            </span>{" "}
            {item1}
          </Card.Text>
          <Card.Text className={`featureItem pragraph ${fpic}`}>
            <span className={`featureIcon `}>
              <FaCaretRight />{" "}
            </span>{" "}
            {item2}
          </Card.Text>
          <Card.Text className={`featureItem pragraph ${fpic}`}>
            <span className={`featureIcon `}>
              <FaCaretRight />{" "}
            </span>{" "}
            {item3}
          </Card.Text>
          <Card.Text className={`featureItem pragraph ${fpic}`}>
            <span className={`featureIcon `}>
              <FaCaretRight />{" "}
            </span>{" "}
            {item4}
          </Card.Text>
          <Card.Text className={`featureItem pragraph ${fpic}`}>
            <span className={`featureIcon `}>
              <FaCaretRight />{" "}
            </span>{" "}
            {item5}
          </Card.Text>
          <Card.Text className={`featureItem pragraph ${fpi6}`}>
            <span className={`featureIcon `}>
              <FaCaretRight />{" "}
            </span>{" "}
            {item6}
          </Card.Text>
          <Card.Text className={`featureItem pragraph ${fpi7}`}>
            <span className={`featureIcon `}>
              <FaCaretRight />{" "}
            </span>{" "}
            {item7}
          </Card.Text>
          <Card.Text className={`featureItem pragraph ${fpi8}`}>
            <span className={`featureIcon `}>
              <FaCaretRight />{" "}
            </span>{" "}
            {item8}
          </Card.Text>
        </div>
        <div className="featureButtonParent">
          <Button children={buttonName} className="featureButton pragraph" />
        </div>
      </Card.Body>
    </Card>
  );
};
export default FeaturePlanCard;

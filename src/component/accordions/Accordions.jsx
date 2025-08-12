import { Accordion } from "react-bootstrap";
import "./accordions.css";

const Accordions = ({ keys ,accodrionHeading, accordionPragraph, number ,borderAcco}) => {
  return (
   
      <Accordion.Item eventKey={`${keys}`} className={"accordionItems"}>
        <Accordion.Header className="heading6">
          <span className="number heading6 ">{number}</span> {accodrionHeading}
        </Accordion.Header>
        <Accordion.Body className="pragraph accordionBody">{accordionPragraph}</Accordion.Body>
      </Accordion.Item>
  
  );
};

export default Accordions;

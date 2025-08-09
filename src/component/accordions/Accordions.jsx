import { Accordion } from "react-bootstrap";
import "./accordions.css";

const Accordions = ({ keys, accodrionHeading, accordionPragraph, number }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey={`keys`}>
        <Accordion.Header className="heading6">
          <span className="number heading6 ">{number}</span> {accodrionHeading}
        </Accordion.Header>
        <Accordion.Body className="pragraph accordionBody">{accordionPragraph}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Accordions;

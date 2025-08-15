import {
  Accordion,
  AccordionHeader,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import CustomHeadPra from "../customHeadpra/CustomHeadPra";
import "./faqs.css";
import Button from "../button/Button";
import Accordions from "../accordions/Accordions";

const Faq = () => {
  return (
    <section className={`faq`}>
      <Container>
        <Row>
          <Col lg={{ span: 4 }}>
            <div>
              <CustomHeadPra custonHeading={"Frequently asked questions"} />
              <Button
                textColor={"#2405F2"}
                children={"Contact us for more info"}
                className="faqButton"
              />
            </div>
          </Col>
          <Col lg={{ span: 7, offset: 1 }}>
            <div className="accordionPart">
              <Accordion defaultActiveKey={"0"}>
                <Accordions
                  number={"01"}
                  keys={"0"}
                  accodrionHeading={"How much time does it take?"}
                  accordionPragraph={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quod placeat! Optio similique libero voluptates eveniet quisquam, quaerat saepe, quibusdam"
                  }
                />
                <Accordions
                  number={"02"}
                  keys={"1"}
                  accodrionHeading={"What is your class naming convention?"}
                  accordionPragraph={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quod placeat! Optio similique libero voluptates eveniet quisquam, quaerat saepe, quibusdam"
                  }
                />
                <Accordions
                  number={"03"}
                  keys={"2"}
                  accodrionHeading={"How do you communicate?"}
                  accordionPragraph={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quod placeat! Optio similique libero voluptates eveniet quisquam, quaerat saepe, quibusdam"
                  }
                />
                <Accordions
                  number={"04"}
                  keys={"3"}
                  accodrionHeading={"What is your class naming convention?"}
                  accordionPragraph={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quod placeat! Optio similique libero voluptates eveniet quisquam, quaerat saepe, quibusdam"
                  }
                />
                <Accordions
                  number={"05"}
                  keys={"4"}
                  accodrionHeading={
                    "I have a bigger project. Can you handle it?"
                  }
                  accordionPragraph={
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, quod placeat! Optio similique libero voluptates eveniet quisquam, quaerat saepe, quibusdam"
                  }
                />
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;

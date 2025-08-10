import { Col, Container, Row, Form } from "react-bootstrap";
import "./contactUs.css";
import Button from "../button/Button";

const ContactUS = () => {
  return (
    <section className="contactUsMain">
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <div className="contactUsTopPart">
              <h2 className=" heading2">Contact Us</h2>
              <p className="pragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="contactInput">
              <Row className="contactInputInside">
                <Col lg={6}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="inputTitleName">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      className="inputFeilds pragraph  "
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="inputTitleName">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your Email"
                      className="inputFeilds pragraph "
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="inputTitleName">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Provide context"
                      className="inputFeilds pragraph "
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group as={Col} controlId="formGridEmail pragraph ">
                    <Form.Label className="inputTitleName">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Select Subject"
                      className="inputFeilds pragraph  "
                    />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="inputTitleName">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className="inputFeilds pragraph "
                      placeholder="Write your  question here"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="contactPagesButton">
                <Button children={"Send Messege"} className="contactPagesButtonInside"/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ContactUS;

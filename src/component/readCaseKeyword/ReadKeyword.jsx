import { Col, Container, Row } from "react-bootstrap";
import "./ReadKeyword.css"
import ReadSlide from "../readSlide/ReadSlide";

const ReadKeyword =  ()=>{
  return (
    <section className="readKeywordMain">
      <Container >
        <Row>
          <Col lg={{span:10,offset:1}}>
           <ReadSlide/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ReadKeyword;

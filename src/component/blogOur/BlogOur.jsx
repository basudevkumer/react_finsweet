import { Col, Container, Row } from "react-bootstrap";
import "./blogOur.css";
import BlogCommon from "../blogCommon/BlogCommon";

import BlogImageOne from "../../assets/blogpage1.png";
import BlogImageTwo from "../../assets/blogpage2.png";
import BlogImageThree from "../../assets/blogpage3.png";
import BlogImageFour from "../../assets/blogpage4.png";
import BlogImageFive from "../../assets/blogpage5.png";
import BlogImageSix from "../../assets/blogpage6.png";

const BlogOur = () => {
  return (
    <section className="blogOur">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="blogOurHeading">
              <h2 className="heading2"> Our Blog</h2>
            </div>
          </Col>
        </Row>
        <Row className="blogOurElements">
          <Col lg={4}>
            <BlogCommon
              blogImage={BlogImageOne}
              dateTime={"27 Jan 2021"}
              cardTitle={
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
              }
              cardPragraph={
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
              }
              blogButtonText={"Read More"}
              blogButtonEdit={"ourBlogBtn"}
            />
          </Col>
          <Col lg={4}>
            <BlogCommon
              blogImage={BlogImageTwo}
              dateTime={"27 Jan 2021"}
              cardTitle={
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
              }
              cardPragraph={
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
              }
              blogButtonText={"Read More"}
              blogButtonEdit={"ourBlogBtn"}
            />
          </Col>
          <Col lg={4}>
            <BlogCommon
              blogImage={BlogImageThree}
              dateTime={"27 Jan 2021"}
              cardTitle={
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
              }
              cardPragraph={
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
              }
              blogButtonText={"Read More"}
              blogButtonEdit={"ourBlogBtn"}
            />
          </Col>
          <Col lg={4}>
            <BlogCommon
              blogImage={BlogImageFour}
              dateTime={"27 Jan 2021"}
              cardTitle={
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
              }
              cardPragraph={
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
              }
              blogButtonText={"Read More"}
              blogButtonEdit={"ourBlogBtn"}
            />
          </Col>
          <Col lg={4}>
            <BlogCommon
              blogImage={BlogImageFive}
              dateTime={"27 Jan 2021"}
              cardTitle={
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
              }
              cardPragraph={
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
              }
              blogButtonText={"Read More"}
              blogButtonEdit={"ourBlogBtn"}
            />
          </Col>
          <Col lg={4}>
            <BlogCommon
              blogImage={BlogImageSix}
              dateTime={"27 Jan 2021"}
              cardTitle={
                "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
              }
              cardPragraph={
                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
              }
              blogButtonText={"Read More"}
              blogButtonEdit={"ourBlogBtn"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogOur;

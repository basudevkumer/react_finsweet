import { Col, Container, Row } from "react-bootstrap";
import "./homeBlog.css";
import BlogCommon from "../blogCommon/BlogCommon";
import BlogOne from "../../assets/homeblog1.png"

const HomeBlog = () => {
  return (
    <section className="homeBlog">
      <Container>
        <Row>
          <Col lg={12}>
            <div>
              <h2 className="heading2 homeBlogHeading">Our blog</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="homeBlogCard">
              <BlogCommon
                dateTime={"19 Jan 2022"}
                cardTitle={
                  "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
                }
                cardPragraph={
                  "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
                }
                blogButtonText={"Read More"} blogImage={BlogOne}
                 blogButtonEdit={"buttonTextColor"}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="homeBlogCard">
              <BlogCommon
                dateTime={"19 Jan 2022"}
                cardTitle={
                  "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
                }
                cardPragraph={
                  "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
                }
                blogButtonText={"Read More"} blogImage={BlogOne}
                 blogButtonEdit={"buttonTextColor"}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="homeBlogCard">
              <BlogCommon
                dateTime={"19 Jan 2022"}
                cardTitle={
                  "How one Webflow user grew his single person consultancy from $0-100K in 14 months"
                }
                cardPragraph={
                  "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
                }
                blogButtonText={"Read More"} blogImage={BlogOne}
                 blogButtonEdit={"buttonTextColor"}
              />
            </div>
          </Col>
         
        </Row>
      </Container>
    </section>
  );
};

export default HomeBlog;

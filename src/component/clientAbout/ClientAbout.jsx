import { Col, Container, Image, Row } from "react-bootstrap";
import CustomHeadPra from "../customHeadpra/CustomHeadPra";
import "./clientAbout.css";
import SlickSlider from "../homeSlickSlider/SlickSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="left">
      <FaChevronLeft />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="right">
      <FaChevronRight />
    </div>
  );
}

const ClientAbout = () => {
  var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="clientAbout">
      <Container>
        <Row>
          <Col lg={{ span: 4 }}>
            <div>
              <CustomHeadPra
                custonHeading={"What our clients say about us"}
                custonPragarph={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed."
                }
              />
            </div>
          </Col>
          <Col lg={{ span: 6, offset: 2 }}>
            <Slider {...settings}>
              <SlickSlider />
              <SlickSlider />
              <SlickSlider />
              <SlickSlider />
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientAbout;

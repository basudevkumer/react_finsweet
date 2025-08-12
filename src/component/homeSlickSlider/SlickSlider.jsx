import "./slickSlider.css";
import { Image } from "react-bootstrap";

import HomeSliderImage from "../../assets/homesliderimg.png";

const SlickSlider = () => {
  return (
    <div className="slickSliderMain">
      <h5 className="heading5">
        "The best agency we’ve worked with so far. They understand our product
        and are able to add new features with a great focus."
      </h5>
      <div className="slickSliderTextElement">
        <Image src={HomeSliderImage} className="slickSliderImg" />
        <div>
          <p className="slickSliderPragraph">Jenny Wilson</p>
          <p className="pragraph">Vice President</p>
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;

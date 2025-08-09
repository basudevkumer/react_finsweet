import Bannar from "../component/bannar/Bannar";
import FeatureImage from "../assets/featurebannarimg.png";
import FeatureSlide from "../component/featureSlide/FeatureSlide";
import AboutBenifit from "../component/aboutBenifit/AboutBenifit";
import FeatureBenifit from "../component/featureBenifit/FeatureBenifit";
import FeatureClient from "../component/featureClient/FeatureClient";
import FeatureFaq from "../component/featureFaq/FeatureFaq";

const Feature = () => {
  return (
    <>
      <Bannar
        bannarHeadingChild={"All the features you need"}
        bannarPragraphChild={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        buttonTextChildOne={"View Pricing"}
        bannarIconEdit={"none"}
        bannarImageName={FeatureImage}
      />
      <FeatureSlide />
      <FeatureBenifit/>
      <FeatureClient />
      <FeatureFaq/>
    </>
  );
};
export default Feature;

import AboutBenifit from "../component/aboutBenifit/AboutBenifit";
import AboutCard from "../component/aboutCard/AboutCard";
import AboutDesign from "../component/aboutDesign/AboutDesign";
import AboutFollow from "../component/aboutFollow/AboutFollow";
import AboutGoal from "../component/aboutGoal/AboutGoal";
import AboutMission from "../component/aboutMission/AboutMission";
import AboutSlider from "../component/aboutSlider/AboutSlider";

const About = () => {
  return (
    <>
      <AboutDesign />
      <AboutGoal />
      <AboutFollow />
      <AboutMission />
      <AboutBenifit />
      <AboutSlider />
      <AboutCard/>
    </>
  );
};

export default About;

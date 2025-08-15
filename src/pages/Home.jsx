import Bannar from "../component/bannar/Bannar";
import Work from "../component/work/Work";
import BannarImg from "../assets/bannarOne.png"
import Project from "../component/project/Project";
import Feature from "../component/feature/Feature";
import ClientAbout from "../component/clientAbout/ClientAbout";
import Faq from "../component/faq/Faq";
import Building from "../component/building/Building";
import HomeBlog from "../component/homeBlog/HomeBlog";



const  Home = () => {
  return (
    <>
      <Bannar  bannarHeadingChild={"Building stellar websites for early startups"} bannarPragraphChild={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}  buttonTextChildOne={"View our work"} buttonTextChildTwo={"View Pricing"} bannarImageName={BannarImg} bannarButtonMain={"bannarButtonMainTwo"}/>
      <Work/>
      <Project/>
      <Feature/>
      <ClientAbout/>
      <Faq/>
      <Building/>
      <HomeBlog/>
      
    </>
  );
}

export default Home;

import { Outlet } from "react-router";
import Menu from "../component/navbar/Menu";
import Footer from "../component/footer/Footer";

const  RootLayout = () =>{
  return (
    <>
      <>
        <Menu />
        <Outlet />
        <Footer />
      </>
    </>
  );
}

export default RootLayout;

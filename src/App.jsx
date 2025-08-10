import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Pricing from "./pages/Pricing";
import Works from "./pages/Works";
import ReadCaseStudies from "./pages/ReadCaseStudies";
import Blog from "./pages/Blog";
import ReadBlog from "./pages/ReadBlog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";


const App = () => {
  let route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/feature" element={<Feature />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/readcase" element={<ReadCaseStudies />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/readblog" element={<ReadBlog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/policy" element={<PrivacyPolicy />}></Route>
      
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;

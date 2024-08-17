import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContentWrittingPage, IecContent, WncHomeCreation } from "./pages";
import Footer from "./components/footer/Footer";
import GetInTouch from "./components/getInTouch/GetInTouch";
import AboutUs from "./pages/aboutUs/AboutUs";
import Portfolio from "./pages/portfolio/Portfolio";
import Careers from "./pages/careers/Careers";
import Blogs from "./pages/blogs/Blogs";
import Section from "./pages/section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/content-writting" element={<ContentWrittingPage />} />
        <Route path="/wnc-home-creation" element={<WncHomeCreation />} />
        <Route path="/iec-content" element={<IecContent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/section" element={<Section />} />
      </Routes>
      {/* <GetInTouch /> */}
      <Footer />
    </div>
  );
}

export default App;

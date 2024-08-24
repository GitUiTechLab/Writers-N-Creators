import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { ContentWrittingPage, IecContent, WncHomeCreation } from "./pages";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
import Portfolio from "./pages/portfolio/Portfolio";
import Careers from "./pages/careers/Careers";
import Blogs from "./pages/blogs/Blogs";
import Section from "./pages/services/subPages/section/Section";
import Events from "./pages/services/mainPages/eventsandexhibitions/index";
import AandV from "./pages/services/mainPages/aandv";
import Branding from "./pages/services/mainPages/branding/Branding";
import Gifts from "./pages/services/mainPages/gifts";
import Public from "./pages/services/mainPages/publicrelations";
import Corporate from "./pages/services/subPages/writersandcreators/Corporate";
import Food from "./pages/services/subPages/writersandcreators/Food";
import Govt from "./pages/services/subPages/writersandcreators/Govt";
import Offsite from "./pages/services/subPages/writersandcreators/Offsite";
import Writers from "./pages/services/subPages/writersandcreators/Writers";
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
        <Route path="/printingProductions" element={<Section />} />
        <Route path="/eventsExhibitions" element={<Events />} />
        <Route path="/audioVideo" element={<AandV />} />
        <Route path="/brandingAdvertising" element={<Branding />} />
        <Route path="/giftsMiscarticles" element={<Gifts />} />
        <Route path="/publicRelations" element={<Public />} />
        <Route path="/writersandcreaters" element={<Writers />} />
        <Route path="/corporate-events" element={<Corporate />} />
        <Route path="/food-and-cultural-fests" element={<Food />} />
        <Route path="/government-department-events" element={<Govt />} />
        <Route path="/offsite-leisure-tours" element={<Offsite />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

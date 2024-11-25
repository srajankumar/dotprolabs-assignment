import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import Footer from "./components/Footer";

const AboutUsPage: React.FC = () => (
  <div className="min-h-screen flex justify-center items-center font-secondaryUltraBold tracking-wider gap-1 text-3xl">
    <span>About Us</span>
    <span className="text-primary">Page</span>
  </div>
);

const RoadMapPage: React.FC = () => (
  <div className="min-h-screen flex justify-center items-center font-secondaryUltraBold tracking-wider gap-1 text-3xl">
    <span>Roadmap</span>
    <span className="text-primary">Page</span>
  </div>
);

const FAQsPage: React.FC = () => (
  <div className="min-h-screen flex justify-center items-center font-secondaryUltraBold tracking-wider gap-1 text-3xl">
    <span>FAQs</span>
    <span className="text-primary">Page</span>
  </div>
);

const ContactUsPage: React.FC = () => (
  <div className="min-h-screen flex justify-center items-center font-secondaryUltraBold tracking-wider gap-1 text-3xl">
    <span>Contact Us</span>
    <span className="text-primary">Page</span>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg- text-white font-primaryRegular">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/roadmap" element={<RoadMapPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  </StrictMode>
);

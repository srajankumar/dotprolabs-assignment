import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";

const About: React.FC = () => (
  <h1 className="text-center mt-10 text-xl">About Page</h1>
);
const Contact: React.FC = () => (
  <h1 className="text-center mt-10 text-xl">Contact Page</h1>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-[#071624] text-white font-primaryRegular">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);

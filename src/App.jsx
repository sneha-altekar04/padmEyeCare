import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimatedStats from "./components/AnimatedStats";
import GallerySection from "./components/GallerySection";
import ServicesSlider from "./components/Services";
import HospitalInfo from "./components/HospitalInfo";
import Insurance from "./components/Insurance";
// import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

import "./styles/global.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait for React to finish rendering the new page before scrolling
      const id = hash.replace("#", "");
      const attempt = (tries = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries < 10) {
          setTimeout(() => attempt(tries + 1), 80);
        }
      };
      setTimeout(() => attempt(), 80);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HospitalInfo />
      <ServicesSlider />
      <Insurance />
      <AnimatedStats />
      <Footer />
    </>
  );
}

function GalleryPage() {
  return (
    <>
      <Navbar />
      <GallerySection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <ChatWidget />
    </>
  );
}

export default App;
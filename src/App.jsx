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
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
      {/* <MapSection /> */}
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
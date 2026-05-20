import Hero from "../components/Hero";
import ServicesSlider from "../components/Services";
import Stats from "../components/Stats";
import Insurance from "../components/Insurance";

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <ServicesSlider />
      <Stats />
      <Insurance />
    </div>
  );
};

export default Home;
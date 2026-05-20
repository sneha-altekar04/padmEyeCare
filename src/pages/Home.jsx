import Hero from "../components/Hero";
import ServicesSlider from "../components/Services";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <ServicesSlider />
      <Stats />
    </div>
  );
};

export default Home;
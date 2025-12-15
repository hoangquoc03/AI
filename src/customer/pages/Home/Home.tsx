import FashionCategory from "./FashionCategory";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="z-10">
      <Hero />
      <FeatureSection />
      <FashionCategory />
      <Footer />
    </div>
  );
};

export default Home;

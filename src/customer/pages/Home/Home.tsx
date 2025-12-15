import { CartProvider } from "./CartContext";
import FashionCategory from "./FashionCategory";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./Navbar";
import Product from "./Product";
const Home = () => {
  return (
    <div className="z-10">
      <CartProvider>
        <NavBar />
        <Hero />
        <FeatureSection />
        <FashionCategory />
        <Product />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Home;

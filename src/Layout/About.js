import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import AboutImg from "../assets/images/night.jpg";

function About() {
  return (
    <div className="main-layout">
      <AboutUs />
      <Footer />
      <Navbar />
    </div>
  );
}

export default About;

import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "src/components/Trip";
import Hotels from "src/components/Hotels";
import Restaurants from "src/components/Restaurants";
import homeVideo from "src/assets/home.mp4";


function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroVideo={homeVideo}
        title="Hà Nội qua những câu chuyện"
        btnClass="show"
        buttonText="Travel Plan"
        url="/home"
      />
      <Destination />
      <Trip />
      <Hotels />
      <Restaurants />
      <Footer />
    </>
  );
}

export default Home;

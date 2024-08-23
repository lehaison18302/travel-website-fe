import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Trip from "src/components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg="https://media.vietravel.com/images/news/ha-noi-1.jpg" 
      //  heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Hà Nội qua những câu chuyện"
        btnClass="show"
        buttonText="Travel Plan"
        url="/home"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;

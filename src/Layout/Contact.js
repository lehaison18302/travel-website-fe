import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/images/2.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="main-layout">
      <ContactForm />
      <Footer />
      <Navbar />
    </div>
  );
}

export default Contact;

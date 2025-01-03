import Navbar from "../components/Navbar";
import HotelDetails from "src/components/HotelDetails";
import Footer from "../components/Footer";

function HotelDetail() {
    return(
        <div className="main-layout">
            <HotelDetails />
            <Footer />
            <Navbar />
        </div>
    )
}

export default HotelDetail;


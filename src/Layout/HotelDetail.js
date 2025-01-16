import Navbar from "../components/Navbar";
import HotelDetails from "src/components/HotelDetails";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function HotelDetail() {
    const { id } = useParams();
    return(
        <div className="main-layout">
            <HotelDetails id={id}/>
            <Footer />
            <Navbar />
        </div>
    )
}

export default HotelDetail;


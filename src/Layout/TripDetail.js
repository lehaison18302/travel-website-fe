import Navbar from "../components/Navbar";
import TripDetails from "../components/TripDetails"
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function TripDetail() {
    let id = useParams();
    return(
        <>
            <Navbar />
            <TripDetails id={id} />
            <Footer />
        </>
    )
}

export default TripDetail;
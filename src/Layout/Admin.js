import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import ContactAdmin from "src/components/ContactAdmin";

function Admin() {
    return(
        <div className="main-layout">
            <ContactAdmin />
            <Footer />
            <Navbar />
        </div>
    );
}

export default Admin;
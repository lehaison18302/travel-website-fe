import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import TripDetail from "./routes/TripDetail";
import HotelDetail from "./routes/HotelDetail";
import SearchPage from "./routes/Search"
import Admin from "./routes/Admin";
import Feedback from "./routes/Feedback";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<SignUp />} />
          <Route>
            <Route path="/home" element={<Home />} />
            <Route path="/tripID" element={<TripDetail />} />
            <Route path="/hotelID" element={<HotelDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="/feedback" element={<Feedback />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;

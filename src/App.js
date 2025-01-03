import React from "react";
import "./styles.css";
import Home from "./Layout/Home";
import About from "./Layout/About";
import Service from "./Layout/Service";
import Contact from "./Layout/Contact";
import TripDetail from "./Layout/TripDetail";
import HotelDetail from "./Layout/HotelDetail";
import SearchPage from "./Layout/Search";
import Admin from "./Layout/Admin";
import Feedback from "./Layout/Feedback";
import { Route, Routes } from "react-router-dom";
import Account from "./Layout/Account";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/tripID" element={<TripDetail />} />
          <Route path="/hotelID" element={<HotelDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />{" "}
          <Route path="/account" element={<Account />} />
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

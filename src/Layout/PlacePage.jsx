import React, { useState } from "react";
import Navbar from "src/components/Navbar";
import Search from "src/components/Destination/Destination";
import SearchResult from "src/components/SearchResult";
import Footer from "src/components/Footer";

const PlacePage = () => {
  return (
    <div className="main-layout">
      <Search />
      <Footer />
      <Navbar />
    </div>
  );
};

export default PlacePage;

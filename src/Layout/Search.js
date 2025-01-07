import React, { useState } from "react";
import Navbar from "src/components/Navbar";
import Search from "src/components/Search/Search";
import SearchResult from "src/components/SearchResult";
import Footer from "src/components/Footer";

const SearchPage = () => {
  const [results, setResults] = useState([]); // State lưu kết quả tìm kiếm

  return (
    <div className="main-layout">
      {/* <Search onResults={(data) => setResults(data)} /> */}
      {/* <SearchResult results={results} /> */}
      <Search />
      <Footer />
      <Navbar />
    </div>
  );
};

export default SearchPage;

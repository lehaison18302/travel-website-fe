import React, { useState } from "react";
import Navbar from "src/components/Navbar";
import Search from "src/components/Search";
import SearchResult from "src/components/SearchResult";
import Footer from "src/components/Footer";

const SearchPage = () => {
  const [results, setResults] = useState([]); // State lưu kết quả tìm kiếm

  return (
    <div className="main-layout">
      <Navbar />
      <Search onResults={(data) => setResults(data)} />
      <SearchResult results={results} />
      <Footer />
    </div>
  );
};

export default SearchPage;

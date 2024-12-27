import React, { useState } from 'react';
import Navbar from 'src/components/Navbar';
import Search from 'src/components/Search';
import SearchResult from 'src/components/SearchResult';
import Footer from 'src/components/Footer';

const SearchPage = () => {
    const [results, setResults] = useState([]); // State lưu kết quả tìm kiếm

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {/* Navbar */}
            <div
                style={{
                    flexShrink: 0,
                    marginBottom: '20px', // Khoảng cách giữa Navbar và Search
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Navbar />
            </div>

            {/* Search */}
            <div
                style={{
                    flexShrink: 0,
                    margin: '0 auto 20px', // Khoảng cách giữa Search và SearchResult
                    width: '80%',
                }}
            >
                <Search onResults={(data) => setResults(data)} />
            </div>

            {/* SearchResult */}
            <div
                style={{
                    flexShrink: 0,
                    margin: '0 auto 20px', // Khoảng cách giữa SearchResult và Footer
                    width: '80%',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}
            >
                <SearchResult results={results} />
            </div>

            {/* Footer */}
            <div
                style={{
                    flexShrink: 0,
                    backgroundColor: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '1rem 2rem',
                }}
            >
                <Footer />
            </div>
        </div>
    );
};

export default SearchPage;

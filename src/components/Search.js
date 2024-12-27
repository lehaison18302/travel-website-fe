/*
import React, { useState } from 'react';
import axios from 'axios';
import "./SearchStyle.css"; // Import file CSS

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.post('/search', { query: searchTerm });
            console.log('Search results:', response.data);
        } catch (error) {
            console.error('Error while searching:', error);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
        </div>
    );
};

export default Search;
*/

import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onResults }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.post('/search', { query: searchTerm });
            onResults(response.data); // Gửi dữ liệu kết quả tìm kiếm lên SearchPage
        } catch (error) {
            console.error('Error while searching:', error);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
        </div>
    );
};

export default Search;

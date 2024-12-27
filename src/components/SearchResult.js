import React from 'react';

const SearchResult = ({ results }) => {
    return (
        <div className="search-result-container">
            <h2 className="search-result-title">Search Results</h2>
            {results.length === 0 ? (
                <p className="search-result-empty">No results found.</p>
            ) : (
                <ul className="search-result-list">
                    {results.map((result, index) => (
                        <li key={index} className="search-result-item">
                            <strong>{result.title}</strong> <span>({result.source})</span><br />
                            <span>Address: {result.address}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchResult;

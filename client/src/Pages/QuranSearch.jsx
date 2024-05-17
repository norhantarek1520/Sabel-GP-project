import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuranSearch() {
  const [suraName, setSuraName] = useState('');
  const [suraData, setSuraData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setSuraName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/search', {
        suraName, // Send Arabic search term in request body
      }, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8', // Set UTF-8 encoding for Arabic data
        },
      });
      setError("the resopnse is " + response)

      if (response.data) {
        setSuraData(response.data);
      } else {
        setSuraData(null);
        setError('No data with this name '); // Handle API errors gracefully
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while searching.'); // Handle network or other errors
    }
  };

  return (
    <>
      {/* Hero Start (using existing styles from your code) */}
      <div class="container-fluid hero-header">
        {/* ... */}
      </div>
      {/* Hero End */}
      <div className="quran-search-container">
        <div className="whole_search_container">
          {/* Search Section (styled to be centered) */}
          <div className="search-section">
            <h1>معلومات عن السور</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="sura-name">ادخل اسم السوره :</label>
              <input
                type="text"
                id="sura-name"
                value={suraName}
                onChange={handleInputChange}
              />
              <button type="submit">ابحث</button>
            </form>
            {error && <p className="error">{error}</p>}
          </div>

          {/* Sura Results (using existing styles from your code) */}
          {suraData && (
            <div className="sura-results">
              <h2>اسم السوره: {suraData.name}</h2>
              <p>اسم السوره بالانجليزيه: {suraData.englishName}</p>
              <p>عدد اياتها: {suraData.numberOfAyahs}</p>
              <p>مكان نزولها: {suraData.revelationType}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuranSearch;

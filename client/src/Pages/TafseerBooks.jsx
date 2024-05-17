import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuranSearch() {
  const [bookName, setBookName] = useState('');
  const [tafseers, setTafseers] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setBookName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`/search/${bookName}`);
      setTafseers(response.data);
      setError('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('No tafseer found for the given book name.');
      } else {
        setError('An error occurred while searching.');
      }
      console.error(error);
    }
  };

  return (
    <>
     <div class="container-fluid hero-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-header-inner animated zoomIn">
                <h3 class=" text-dark">كتب التفسير</h3>
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <a href="/">الرئيسيه</a>
                  </li>
                  <li class="breadcrumb-item text-dark" aria-current="page">
                    كتب التفسير
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="quran-search">
      <h1>Search Quran Tafseers</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book-name">Enter Book Name:</label>
        <input
          type="text"
          id="book-name"
          value={bookName}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      {tafseers.length > 0 && (
        <div className="tafseers_results">
          <h2>Tafseers Found:</h2>
          {tafseers.map((tafseer) => (
            <div key={tafseer.id} className="tafseer-item">
              <h3>{tafseer.name}</h3>
              <p>Language: {tafseer.language}</p>
              <p>Author: {tafseer.author}</p>
              <p>Book Name: {tafseer.book_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
 
  );
}

export default QuranSearch;

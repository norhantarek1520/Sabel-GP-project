import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await axios.get('http://api.alquran.cloud/v1/page/6/en.asad'); // Replace with your API URL
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching or encountering an error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures fetching only once on mount

  // Display loading, error, or data based on state
  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    const { ayahs, surahs } = data; // Destructure ayahs and surahs arrays from the data object

    return (
      <div>
        <h2>Ayahs from Surah Al-Baqarah (Page 6)</h2>
        {ayahs.map((ayah) => (
          <div key={ayah.number}>
            <p><b>Ayah {ayah.number}:</b> {ayah.text}</p>
            <p><b>Surah:</b> {surahs[ayah.surah.number].name} ({ayah.surah.englishNameTranslation})</p>
          </div>
        ))}
      </div>
    );
  }

  return null; // Return null while nothing is fetched
};

export default DataFetcher;

import React, { useState } from 'react';
import axios from 'axios';

function Ask() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setAnswer(null);
    setError(null);
  };

  const handleAnswerQuestion = async () => {
    if (!query) {
      setError('اكتب سؤالك أولاً');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/get-answer/', { query });
      setAnswer(response.data.answer);
    } catch (error) {
      setError('Error answering your question. Please try again.');
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  return(
    <div>
      <div className="container-fluid test-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="test-header-inner animated zoomIn">
                <h1 className="display-1 text-dark">تفسير القران </h1>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">الرئيسيه</a></li>
                  <li className="breadcrumb-item text-dark" aria-current="page">تفسير القران </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container answer-container mt-5">
        <div className="row">
          <div className="col-md-12 answer-square">
            <label for="searchQuestion" className="form-label">السؤال (موضوع البحث):</label>
            <input type="text" className="form-control" id="searchQuestion" value={query} onChange={handleInputChange} placeholder="اكتب موضوع البحث"/>
            <button type="button" className="answer-btn" id="searchButton" onClick={handleAnswerQuestion}>بحث </button>

            {answer && 
              <div className="answer">
                <h2>الجواب:</h2>
                <p><span>{answer}</span> </p>
              </div>
            }
            {error && <p style={{ color: 'red' }} className="error">{error}</p>}
            {loading && <p style={{ color: 'red' }}>انتظر جارى التحميل ...</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ask
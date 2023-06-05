import React, { useState, useEffect } from 'react';
import '../style/Calculator.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${'learning'}`,
          {
            headers: {
              'X-Api-Key': '4cIYolx2izdKXSCL2c8Ow36G7YHL1z8gflMZ7nkt',
            },
          },
        );
        const json = await response.json();
        setQuotes(json[0]);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchQuote();
  }, []);

  if (error) {
    return (
      <p className="quoteError">Ups... Quote is missing!</p>
    );
  }
  if (loading) {
    return (
      <p className="quoteLoading">Loading...</p>
    );
  }

  return (
    <div className="quoteBox">
      {quotes && (
      <p className="dailyQuote">
        &quot;
        {quotes.quote}
        {' '}
        &quot; -
        <span>
          {' '}
          {quotes.author}
        </span>
      </p>
      )}
    </div>
  );
};

export default Quotes;

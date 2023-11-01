import { useState } from 'react';

const UseApiBackend = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url, method, headers, body) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: method,
        headers: headers,
        body: body,
      });
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
};

export default UseApiBackend;

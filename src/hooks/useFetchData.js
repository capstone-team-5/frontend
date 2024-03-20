import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (apiEndpoint, currentPage, productsPerPage) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiEndpoint, {
          params: {
            page: currentPage,
            pageSize: productsPerPage,
          },
        });
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint, currentPage, productsPerPage]);

  return { products, loading, error };
};

export default useFetchData;

import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const fetchURl = async () => {
    setLoading(true);

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchURl();
  };

  useEffect(() => {
    fetchURl();
  }, []);

  return { loading, data, error, refetch };
}

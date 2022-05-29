import { useEffect, useState } from "react";

export const useQuery = (fn) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fn()
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      
  }, []);
  return { data, error, loading };
};

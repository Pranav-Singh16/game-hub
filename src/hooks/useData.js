import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const useData = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!endpoint) return; // Don't fetch if endpoint is empty

    const controller = new AbortController();
    setLoading(true);
    setError(""); // Clear previous errors

    apiClient
      .get(endpoint, { signal: controller.signal }) // ✅ Correct way to pass signal
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // ✅ Canceled, do nothing
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort(); // ✅ Abort previous request on cleanup
    };
  }, [endpoint]); // ✅ Refetch when endpoint changes

  return { data, error, isLoading };
};

export default useData;

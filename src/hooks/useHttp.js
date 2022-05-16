import { useState, useCallback } from "react";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      requestConfig.url.search = new URLSearchParams(requestConfig.body);
      const response = await fetch(requestConfig.url.href, {
        method: requestConfig.method ?? "GET",
        headers: requestConfig.headers ?? {},
      });

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(requestConfig.errorMsg);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
    setError,
  };
};

export default useHttp;

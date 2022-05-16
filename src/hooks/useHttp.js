import { useState, useCallback } from "react";

/**
 * custom hook to fetch data from source
 * @returns {{isLoading: boolean, setError: (value: unknown) => void, error: unknown,
 *  sendRequest: ((function(*, *): Promise<void>)|*)}} - the fetch states
 */
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false); //state for loading
  const [error, setError] = useState(null); //state for error handling

  /**
   * function to fetch with async
   * @type {(function(*, *): Promise<void>)|*} - a json object if fetch succeeded or error if failed
   */
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true); //toggle loading state on
    setError(null); //initialize error state

    try {
      requestConfig.url.search = new URLSearchParams(requestConfig.body); //create the fetch url

      const response = await fetch(requestConfig.url.href, {
        method: requestConfig.method ?? "GET",
        headers: requestConfig.headers ?? {},
      });

      if (!response.ok) {
        //check the response status
        throw new Error();
      }

      const data = await response.json(); //transform to json
      applyData(data); //set the data with passed function pointer
    } catch (err) {
      //handle errors
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

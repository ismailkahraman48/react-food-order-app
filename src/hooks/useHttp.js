import { useCallback, useEffect } from "react";
import { send } from "vite";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Something went wrong!");
  }

  return responseData;
}

export default function useHttp(url, config) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoading(true);
      try {
        const resData = sendHttpRequest(url, config);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return { data, isLoading, error };
}

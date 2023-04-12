import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Gener {
  id: number;
  name: string;
}

interface FetchGenersResponse {
  count: number;
  results: Gener[];
}

const useGeners = () => {
  const [geners, setGeners] = useState<Gener[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenersResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGeners(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { geners, error, isLoading };
};

export default useGeners;

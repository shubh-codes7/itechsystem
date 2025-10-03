"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios({
        url,
        method: "GET",
        ...options,
      });
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]); // options must be stable

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
}

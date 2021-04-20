import { useCallback, useEffect, useState } from 'react';

import Api from 'api/core';

const useFetchApi = (resource: string) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState<object | null>(null);
  const [error, setError] = useState<object | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await Api.fetch(resource);
      const { data } = await response.json();

      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  }, [resource]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    isFetching,
  };
};

export default useFetchApi;

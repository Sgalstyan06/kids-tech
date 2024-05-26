import { useEffect, useState } from 'react';

import { KidstechType } from './types';

export const useFetchData = (url: string) => {
  const [data, setData] = useState<KidstechType[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        let error = (err as Error);
        setError(error.message);
      }
    };

    fetchData();


  }, []);

  return { data, error };
};



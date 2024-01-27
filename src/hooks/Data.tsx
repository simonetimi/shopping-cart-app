import { useEffect, useState } from 'react';

interface FetchedItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const useStoreData = (category: string) => {
  const [storedData, setStoredData] = useState<FetchedItem[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getStoreData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = (await response.json()) as FetchedItem[];
        setStoredData(result);
        setIsLoading(false);
        return;
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
        return error;
      }
    }
    getStoreData().catch((error) => {
      setError(error as Error);
    });
  }, [category]);
  return { storedData, error, isLoading };
};

export default useStoreData;

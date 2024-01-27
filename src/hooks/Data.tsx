import { useEffect } from 'react';

interface FetchedItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

async function getStoreData(category: string) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result = (await response.json()) as FetchedItem[];
    return result;
  } catch (error) {
    return error;
  }
}

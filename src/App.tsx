import { Outlet, useParams } from 'react-router-dom';
import { createContext, useState } from 'react';

import Navbar from './components/Navbar';

export interface ClothingItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity?: number;
}

interface Context {
  cartState: ClothingItem[];
  setCartState: (newState: ClothingItem[]) => void;
}

export const CartManager = createContext<Context | null>(null);

function App() {
  const { category } = useParams();
  const [cartState, setCartState] = useState<ClothingItem[]>([]);

  return (
    <CartManager.Provider value={{ cartState, setCartState }}>
      <Navbar />
      <Outlet context={[category]} />
    </CartManager.Provider>
  );
}

export default App;

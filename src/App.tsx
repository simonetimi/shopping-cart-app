import { Outlet, useParams } from 'react-router-dom';
import { useState } from 'react';

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

function App() {
  const { category } = useParams();
  const [cartState, setCartState] = useState<ClothingItem[]>([]);

  return (
    <>
      <Navbar cartState={cartState} />
      <Outlet context={{ cartState, setCartState, category }} />
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Shop from './components/Shop.tsx';
import ShoppingCart from './components/ShoppingCart.tsx';
import Splash from './components/Splash.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Splash /> },
      { path: 'shop/:category', element: <Shop /> },
      { path: 'cart', element: <ShoppingCart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

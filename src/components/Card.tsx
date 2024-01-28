import { useState, ChangeEvent } from 'react';
import type { ClothingItem } from '~/App';

interface CardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  item: ClothingItem;
  cartState: ClothingItem[];
  setCartState: (newCart: ClothingItem[]) => void;
}

function Card({
  id,
  title,
  price,
  description,
  image,
  item,
  cartState,
  setCartState,
}: CardProps) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemQuantity(Number(event.target.value));
  };

  const handleAdd = () => {
    const newItem = { ...item, quantity: itemQuantity };
    const itemIndex = cartState.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      setCartState([...cartState, newItem]);
      console.log(cartState);
    } else {
      const updatedCart = cartState.map((cartItem, index) => {
        if (index === itemIndex) {
          const updatedQuantity = (cartItem.quantity ?? 0) + newItem.quantity;
          return { ...cartItem, quantity: updatedQuantity };
        }
        return cartItem;
      });
      setCartState(updatedCart);
      console.log(cartState);
    }
  };

  return (
    <div className="flex gap-6 rounded-xl bg-slate-200 p-4">
      <img className="h-52 rounded-lg border p-3" src={image} />
      <div className="flex flex-col gap-4">
        <p className="font-bold">{title}</p>
        <p className="overflow-auto hyphens-auto text-justify">{description}</p>
        <div className="mt-auto flex items-center justify-center gap-3">
          <p className="mr-auto font-bold">{price.toFixed(2)}€</p>
          <input
            min="0"
            className="h-6 w-11 rounded-lg p-1 text-xs"
            type="number"
            value={itemQuantity}
            onChange={handleQuantityChange}
          />
          <button
            type="button"
            onClick={handleAdd}
            className="material-symbols-outlined rounded-full bg-white p-1 shadow-md shadow-gray-300 active:translate-y-0.5"
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

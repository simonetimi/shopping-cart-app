import type { ClothingItem } from '~/App';
import { useState, ChangeEvent } from 'react';

interface ShoppingCartCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
  item: ClothingItem;
  cartState: ClothingItem[];
  setCartState: (newCart: ClothingItem[]) => void;
}

function ShoppingCartCard({
  id,
  title,
  price,
  image,
  quantity,
  description,
  cartState,
  setCartState,
}: ShoppingCartCardProps) {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleDelete = () => {
    const targetIndex = cartState.findIndex((item) => item.id === id);
    const copiedState = [...cartState];
    copiedState.splice(targetIndex, 1);
    setCartState(copiedState);
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemQuantity(Number(event.target.value));
  };

  const handleEdit = () => {
    const newCart = cartState.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: itemQuantity };
      }
      return item;
    });
    setCartState(newCart);
  };

  return (
    <div className="flex gap-6 rounded-xl bg-slate-200 p-4">
      <img className="h-52 rounded-lg border p-3" src={image} />
      <div className="flex flex-col gap-4">
        <p className="font-bold">{title}</p>
        <p className="overflow-auto hyphens-auto text-justify">{description}</p>
        <div className="mt-auto flex items-center justify-center gap-3">
          <p className="mr-auto font-bold">{(price * quantity).toFixed(2)}€</p>
          <input
            min="1"
            className="h-6 w-11 rounded-lg p-1 text-right text-xs"
            type="number"
            onChange={handleQuantityChange}
            value={itemQuantity}
          />
          <button
            type="button"
            onClick={handleEdit}
            className="material-symbols-outlined rounded-full bg-white p-1 shadow-md shadow-gray-300 active:translate-y-0.5"
          >
            edit
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="material-symbols-outlined rounded-full bg-white p-1 shadow-md shadow-gray-300 active:translate-y-0.5"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartCard;

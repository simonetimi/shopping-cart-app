import { useContext, useState, ChangeEvent } from 'react';
import { CartManager, ClothingItem } from '../App';

interface CardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  item: ClothingItem;
}

function Card({
  id,
  title,
  price,
  description,
  category,
  image,
  item,
}: CardProps) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const handleAdd = () => {
    setItemQuantity((prev) => {
      prev + 1;
    });
  };

  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemQuantity(Number(event.target.value));
  };

  const cartContext = useContext(CartManager);
  if (!cartContext) {
    return null;
  }
  const { cartState, setCartState } = cartContext;

  return (
    <div className="flex gap-6 rounded-xl bg-slate-200 p-4">
      <img className="h-52 rounded-lg border p-3" src={image}></img>
      <div className="flex flex-col gap-4">
        <p className="font-bold">{title}</p>
        <p className="overflow-auto hyphens-auto text-justify">{description}</p>
        <div className="mt-auto flex items-center justify-center gap-3">
          <p className="mr-auto font-bold">Price: {price.toFixed(2)}€</p>
          <input
            className="h-6 w-11 rounded-lg p-1"
            type="number"
            value={itemQuantity}
            onChange={handleQuantityChange}
          />
          <button
            type="button"
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

/*

  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": { "rate": 2.6, "count": 235 }
  },

*/

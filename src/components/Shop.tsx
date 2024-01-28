import useStoreData from '../hooks/Data';
import { useOutletContext } from 'react-router-dom';
import Card from './Card';
import type { ClothingItem } from '~/App';

export interface OutletContext {
  category: string;
  cartState: ClothingItem[];
  setCartState: (newCart: ClothingItem[]) => void;
}

function Shop() {
  const { category, cartState, setCartState }: OutletContext =
    useOutletContext();
  const { storedData, error, isLoading } = useStoreData(category);

  const populateShop = storedData.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        image={item.image}
        item={item}
        cartState={cartState}
        setCartState={setCartState}
      />
    );
  });

  if (isLoading) {
    return (
      <main className="col-start-2 col-end-5 row-start-2 row-end-3 m-4 flex h-full flex-wrap gap-2 p-14">
        Loading...
      </main>
    );
  }
  if (error) {
    return (
      <main className="col-start-2 col-end-5 row-start-2 row-end-3 m-4 flex h-full flex-wrap gap-2 p-14">
        Error retrieving data!
      </main>
    );
  }

  return (
    <main className="col-start-2 col-end-5 row-start-2 row-end-3 m-4 flex h-full flex-wrap justify-center gap-8 pb-6">
      <h1 className="text-4xl">
        {category === "men's clothing" ? "Men's" : "Women's"} wear
      </h1>
      {populateShop}
    </main>
  );
}

export default Shop;

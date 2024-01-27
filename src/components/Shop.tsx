import useStoreData from '../hooks/Data';
import { useOutletContext } from 'react-router-dom';

import Sidebar from './Sidebar';
import Card from './Card';

function Shop() {
  const category: string = useOutletContext();
  const { storedData, error, isLoading } = useStoreData(category);

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

  const populateShop = () => {
    return storedData.map((item) => (
      <Card
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
        category={item.category}
        image={item.image}
      />
    ));
  };

  return (
    <main className="col-start-2 col-end-5 row-start-2 row-end-3 m-4 flex h-full flex-wrap gap-8">
      {populateShop()}
    </main>
  );
}

export default Shop;

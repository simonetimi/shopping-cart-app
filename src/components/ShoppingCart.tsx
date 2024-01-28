import { useOutletContext } from 'react-router-dom';
import type { OutletContext } from './Shop';
import ShoppingCartCard from './ShoppingCartCard';

function ShoppingCart() {
  const { cartState, setCartState }: OutletContext = useOutletContext();

  if (cartState.length === 0) {
    return (
      <main className="col-start-2 col-end-5 row-start-2 row-end-3 m-4 flex h-full flex-wrap justify-center gap-8 pb-6">
        <div className="flex gap-6 rounded-xl bg-slate-200 p-4">
          <p className="overflow-auto hyphens-auto text-justify">
            Your shopping cart is empty!
          </p>
        </div>
      </main>
    );
  }

  const populateShoppingCart = () =>
    cartState.map((item) => {
      return (
        <ShoppingCartCard
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
          quantity={item.quantity!}
          item={item}
          cartState={cartState}
          setCartState={setCartState}
        />
      );
    });

  function totalPrice() {
    return cartState.reduce(
      (accumulator, currentItem) =>
        accumulator + Number(currentItem.price * currentItem.quantity!),
      0
    );
  }

  return (
    <main className="col-start-2 col-end-5 row-start-2 row-end-3 m-4 flex h-full flex-col flex-wrap justify-center gap-8 pb-6">
      <h1 className="self-center text-4xl">Shopping Cart</h1>
      {populateShoppingCart()}
      <p className="mr-36 self-end text-xl font-bold">
        Total: {totalPrice().toFixed(2)}€
      </p>
    </main>
  );
}

export default ShoppingCart;

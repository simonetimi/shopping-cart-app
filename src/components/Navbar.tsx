import { Link } from 'react-router-dom';

function Navbar() {
  const tw = (strings: TemplateStringsArray, ...values: string[]) =>
    String.raw({ raw: strings }, ...values);
  const menuStyles = tw`rounded-lg bg-white p-1.5 shadow-md active:translate-y-0.5`;

  return (
    <nav className="col-span-full flex h-16 items-center justify-between border-b-[1px] shadow-sm shadow-slate-200">
      <img
        className="ml-6 h-12 w-12"
        src="../src/assets/logo.png"
        alt="logo"
      ></img>
      <div className="flex flex-grow justify-center">
        <div className="flex gap-5">
          <Link to="/">
            <button className={menuStyles}>Home</button>
          </Link>
          <Link to="/shop/men's clothing">
            <button className={menuStyles}>Men&apos;s Wear</button>
          </Link>
          <Link to="/shop/women's clothing">
            <button className={menuStyles}>Women&apos;s Wear</button>
          </Link>
        </div>
      </div>
      <button className="material-symbols-outlined mr-6 rounded-full bg-white p-1.5 shadow-md shadow-gray-300 active:translate-y-0.5">
        shopping_cart
      </button>
    </nav>
  );
}

export default Navbar;

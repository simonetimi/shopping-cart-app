function Navbar() {
  const tw = (strings: TemplateStringsArray, ...values: string[]) =>
    String.raw({ raw: strings }, ...values);
  const menuStyles = tw`rounded-lg bg-white p-1.5 shadow-md active:translate-y-0.5`;

  return (
    <nav className="flex h-16 items-center justify-between border-b-[1px] shadow-sm shadow-slate-200">
      <div className="ml-6 flex flex-grow justify-center">
        <div className="flex gap-5">
          <button className={menuStyles}>Home</button>
          <button className={menuStyles}>Men&apos;s Wear</button>
          <button className={menuStyles}>Women&apos;s Wear</button>
        </div>
      </div>
      <button className="material-symbols-outlined mr-6 rounded-full bg-white p-1.5 shadow-md shadow-gray-300 active:translate-y-0.5">
        shopping_cart
      </button>
    </nav>
  );
}

export default Navbar;

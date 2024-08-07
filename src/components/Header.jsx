import {
  AlignJustify,
  HamIcon,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="w-full px-4 py-2 md:px-10 md:py-4 drop-shadow-md border-b  ">
      <div className="md:max-w-7xl mx-auto flex justify-between gap-3 items-center">
        <div className="flex items-center justify-center gap-3">
          <AlignJustify className="md:hidden flex " />
          <div className="font-extrabold text-2xl uppercase ">Shop.co</div>
        </div>
        <ul className="justify-between gap-3 items-center text-sm whitespace-nowrap  hidden md:flex">
          <li>shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brand</li>
        </ul>
        <div className="w-2/4 rounded-3xl drop-shadow-sm bg-slate-200 p-2 px-3 md:flex hidden">
          <Search className="text-gray-400" />
          <input
            className="w-full border-none outline-none bg-transparent px-4"
            placeholder="Search for products..."
          />
        </div>
        <div className="flex items-center gap-2">
          <Search className="md:hidden flex w-[20px] h-[20px]" />
          <ShoppingCart className="w-[20px] h-[20px]" />
          <User className="w-[20px] h-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;

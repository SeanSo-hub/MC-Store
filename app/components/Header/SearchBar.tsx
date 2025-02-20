import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const SearchBar = () => {
  return (
    <div className="bg-[#1B6392] text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between gap-4">
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/logo/alt-logo.png"
              width={48}
              height={48}
              alt="MC Commerce logo"
              className="mr-2"
            />
            <h1 className="text-xl sm:text-2xl font-bold">MC Store</h1>
          </div>

          <div className="sm:hidden">
            <button className="text-white hover:text-[#EBC80C]">
              <MenuIcon />
            </button>
          </div>

          <div className="hidden sm:flex flex-1 max-w-3xl mx-4">
            <form className="relative flex w-full h-12 rounded-lg overflow-hidden">
              <button
                type="button"
                className="hidden md:flex items-center gap-2 px-4 bg-[#155a83] text-white hover:text-[#EBC80C] border-r border-[#1B6392] whitespace-nowrap"
              >
                All Categories
                <KeyboardArrowDownIcon />
              </button>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full h-full pl-4 pr-12 text-[#475156] placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#EBC80C] rounded-lg md:rounded-none"
                />
                <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </form>
          </div>

          <div className="hidden sm:flex items-center gap-4 lg:gap-6">
            <button className="flex flex-col items-center text-white hover:text-[#EBC80C] transition-colors">
              <PersonOutlineIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Account</span>
            </button>
            <button className="flex flex-col items-center text-white hover:text-[#EBC80C] transition-colors">
              <FavoriteBorderIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Wishlist</span>
            </button>
            <button className="flex flex-col items-center text-white hover:text-[#EBC80C] transition-colors group">
              <div className="relative">
                <ShoppingCartOutlinedIcon className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-[#EBC80C] text-[#1B6392] text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="text-xs mt-1">Cart</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;

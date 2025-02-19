"use client";

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
      <nav className="max-w-7xl mx-auto px-4">
        <div className="py-4">
          <div className="flex justify-around items-center gap-8">
            <div className="flex justify-center items-center">
              <Image
                src="/logo/alt-logo.png"
                width={48}
                height={48}
                alt="MC Commerce logo"
                className="mr-2 min-w-[48px]"
              />
              <h1 className="text-2xl font-bold">MC Store</h1>
            </div>

            <div className="sm:hidden">
              <MenuIcon />
            </div>

            <div className="flex-1 max-w-3xl hidden sm:block">
              <div className="">
                <form className="relative flex h-12" action="">
                  <div className="relative flex items-center">
                    <button
                      type="button"
                      className="hidden h-full sm:flex items-center gap-2 px-4 border-r text-white hover:text-[#EBC80C]"
                    >
                      All Categories
                      <KeyboardArrowDownIcon />
                    </button>
                  </div>
                  <div className="relative flex-1 flex items-center">
                    <input
                      type="text"
                      placeholder="Search for products..."
                      className="w-full h-full pl-4 pr-12 border rounded-lg sm:rounded-none sm:border-0 
                     focus:outline-none focus:ring-1 focus:ring-[#1B6392] 
                     text-[#475156] placeholder-gray-400"
                    />
                    <SearchIcon className="absolute right-4 text-gray-400 z-10" />
                  </div>
                </form>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-6">
              <button className="flex flex-col items-center text-white hover:text-[#EBC80C]">
                <PersonOutlineIcon />
                <span className="text-xs mt-1">Account</span>
              </button>
              <button className="flex flex-col items-center text-white hover:text-[#EBC80C]">
                <FavoriteBorderIcon />
                <span className="text-xs mt-1">Wishlist</span>
              </button>
              <button className="flex flex-col items-center text-white hover:text-[#EBC80C] group">
                <div className="relative">
                  <ShoppingCartOutlinedIcon />
                  <span className="absolute -top-1 -right-1 bg-[#1B6392] outline outline-2 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center group-hover:bg-[#1B6392] group-hover:text-[#EBC80C]">
                    0
                  </span>
                </div>
                <span className="text-xs mt-1">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;

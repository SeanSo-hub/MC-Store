import React, { useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const SearchBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const toggleState = useCallback(
    (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
      setter((prev) => !prev);
    },
    []
  );

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

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <button
              onClick={() => toggleState(setMenuOpen)}
              className="text-white hover:text-[#EBC80C]"
            >
              <MenuIcon />
            </button>
            <div
              className={`${
                menuOpen ? "block" : "hidden"
              } absolute top-16 left-0 right-0 bg-[#1B6392] p-4 z-10`}
            >
              <ul className="space-y-4">
                <li className="flex items-center gap-2 hover:text-[#EBC80C] transition-colors">
                  <PersonOutlineIcon />
                  Account
                </li>
                <li className="flex items-center gap-2 hover:text-[#EBC80C] transition-colors">
                  <FavoriteBorderIcon />
                  Wishlist
                </li>
                <li className="flex items-center gap-2 hover:text-[#EBC80C] transition-colors">
                  <ShoppingCartOutlinedIcon />
                  Cart
                </li>
              </ul>
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full h-10 pl-4 pr-12 text-[#475156] placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#EBC80C] rounded-lg"
                />
                <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
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
            <button
              onClick={() => toggleState(setOpenLogin)}
              className="flex flex-col items-center text-white hover:text-[#EBC80C] transition-colors"
            >
              <PersonOutlineIcon className="w-6 h-6" />
              <span className="text-xs mt-1">Account</span>
            </button>

            <div
              id="loginDropdown"
              className={`absolute top-[190px] sm:right-0 md:right-[100px] lg:right-[130px] mt-2 min-w-[280px] sm:min-w-[424px] bg-white text-black rounded-sm border shadow-lg transition-all duration-300 ${
                openLogin
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              {openLogin && (
                <div className="flex flex-col gap-4 justify-center items-center m-8">
                  <h1 className="font-semibold">Sign in to your account</h1>
                  <div className="w-full">
                    <h1 className="text-sm">Email address</h1>
                    <input
                      className="rounded-sm outline outline-1 p-2 w-full"
                      type="email"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h1 className="text-sm">Password</h1>
                      <a
                        href="#"
                        className="text-sm text-blue-400 font-semibold"
                      >
                        Forget Password?
                      </a>
                    </div>

                    <input
                      className="rounded-sm outline outline-1 p-2 w-full"
                      type="password"
                      name=""
                      id=""
                    />
                  </div>
                  <button className="bg-[#FA8232] text-white px-6 py-3 rounded-md text-sm font-bold w-full">
                    Login
                  </button>
                  <p>Dont have an account?</p>
                  <button className="outline outline-1 outline-[#FA8232] px-6 py-3 rounded-md text-sm font-bold w-full">
                    Create an account
                  </button>
                </div>
              )}
            </div>

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

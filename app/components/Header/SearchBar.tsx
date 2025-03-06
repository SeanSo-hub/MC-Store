import React, { useState, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../context/Auth";

interface LoginFormProps {
  onSubmit: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  loading: boolean;
  error?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(username, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 justify-center items-center m-8">
        <h1 className="font-semibold">Sign up</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="w-full">
          <h1 className="text-sm">Username</h1>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-sm outline outline-1 p-2 w-full"
            type="text"
            required
          />
        </div>

        <div className="w-full">
          <h1 className="text-sm">Email address</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-sm outline outline-1 p-2 w-full"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <h1 className="text-sm">Password</h1>
            <a href="#" className="text-sm text-blue-400 font-semibold">
              Forget Password?
            </a>
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-sm outline outline-1 p-2 w-full"
            type="password"
            required
            minLength={6}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#FA8232] text-white px-6 py-3 rounded-md text-sm font-bold w-full disabled:opacity-50"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </form>
  );
};

const SearchBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const { session, signUpNewUser, signOut } = useAuth();

  const handleSignup = async (
    username: string,
    email: string,
    password: string
  ) => {
    setLoading(true);
    setError("");

    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        setOpenLogin(false);
      } else {
        setError(result.error || "Failed to create account");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    signOut();
  };

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
                  {session?.user?.email || "Account"}
                </li>
                <li className="flex items-center gap-2 hover:text-[#EBC80C] transition-colors">
                  <FavoriteBorderIcon />
                  Wishlist
                </li>
                <li className="flex items-center gap-2 hover:text-[#EBC80C] transition-colors">
                  <ShoppingCartOutlinedIcon />
                  Cart
                </li>
                {session?.user && (
                  <li className="flex items-center gap-2 hover:text-[#EBC80C] transition-colors">
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 hover:text-[#EBC80C] transition-colors"
                    >
                      <LogoutIcon />
                      SignOut
                    </button>
                  </li>
                )}
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
            <div className="relative">
              <button
                onClick={() => !session?.user && toggleState(setOpenLogin)} // Only toggle if no user is logged in
                className="flex flex-col items-center text-white hover:text-[#EBC80C] transition-colors"
              >
                <PersonOutlineIcon className="w-6 h-6" />
                <span className="text-xs mt-1">
                  {session?.user?.email || "Account"}
                </span>
              </button>

              {/* Show login form only if no user is logged in */}
              {!session?.user && (
                <div
                  id="loginDropdown"
                  className={`absolute top-12 right-0 mt-2 min-w-[280px] sm:min-w-[424px] bg-white text-black rounded-sm border shadow-lg transition-all duration-300 ${
                    openLogin
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  {openLogin && (
                    <LoginForm
                      onSubmit={handleSignup}
                      loading={loading}
                      error={error}
                    />
                  )}
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

            {session?.user && (
              <button
                onClick={handleSignOut}
                className="flex flex-col items-center text-white hover:text-[#EBC80C] transition-colors"
              >
                <LogoutIcon />
                <span className="text-xs mt-1">Sign out</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;

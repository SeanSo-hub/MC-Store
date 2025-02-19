"use client";

import SearchBar from "./SearchBar";
import InfoBar from "./InfoBar";
import ContactBar from "./ContactBar";

const NavBar = () => {
  return (
    <div>
      <InfoBar />
      <header className="border-b-[1px] border-b-[#E4E7E9]">
        <SearchBar />
        <ContactBar />
      </header>
    </div>
  );
};

export default NavBar;

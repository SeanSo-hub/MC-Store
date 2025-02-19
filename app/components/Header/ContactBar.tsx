import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ContactBar = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-4">
      <div className="hidden sm:flex items-center gap-6 text-[#475156]">
        <button className="flex items-center gap-2 bg-[#1B6392] text-white px-4 py-2 rounded">
          <MenuIcon />
          <span>All Categories</span>
          <KeyboardArrowDownIcon />
        </button>

        <a href="#" className="hover:text-[#1B6392]">
          <RoomIcon className="hover:text-[#1B6392]" />
          Track Order
        </a>
        <a href="#" className="hover:text-[#1B6392]">
          <CompareArrowsIcon className="hover:text-[#1B6392]" />
          Compare
        </a>
        <a href="#" className="hover:text-[#1B6392]">
          <SupportAgentIcon className="hover:text-[#1B6392]" />
          Customer support
        </a>
        <a href="#" className="hover:text-[#1B6392]">
          <InfoIcon className="hover:text-[#1B6392]" />
          Need help
        </a>
        <div className="flex-1"></div>
        <a href="#" className="hover:text-[#1B6392]">
          <LocalPhoneIcon className="hover:text-[#1B6392]" />
          +63 992 492 7865
        </a>
      </div>
    </div>
  );
};

export default ContactBar;

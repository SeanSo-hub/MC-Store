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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 hidden sm:block">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#475156]">
        <button className="flex items-center gap-2 bg-[#1B6392] text-white px-4 py-2 rounded-md hover:bg-[#155a83] transition-colors w-full sm:w-auto">
          <MenuIcon className="w-5 h-5" />
          <span className="text-sm sm:text-base">All Categories</span>
          <KeyboardArrowDownIcon className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-4 lg:gap-6 flex-wrap justify-center">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-[#1B6392] transition-colors"
          >
            <RoomIcon className="w-5 h-5" />
            <span className="text-sm">Track Order</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-[#1B6392] transition-colors"
          >
            <CompareArrowsIcon className="w-5 h-5" />
            <span className="text-sm">Compare</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-[#1B6392] transition-colors"
          >
            <SupportAgentIcon className="w-5 h-5" />
            <span className="text-sm">Customer Support</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-[#1B6392] transition-colors"
          >
            <InfoIcon className="w-5 h-5" />
            <span className="text-sm">Need Help</span>
          </a>
        </div>
        <a
          href="tel:+639924927865"
          className="hidden sm:flex items-center gap-2 hover:text-[#1B6392] transition-colors text-sm sm:text-base"
        >
          <LocalPhoneIcon className="w-5 h-5" />
          <span>+63 992 492 7865</span>
        </a>
      </div>
    </div>
  );
};

export default ContactBar;

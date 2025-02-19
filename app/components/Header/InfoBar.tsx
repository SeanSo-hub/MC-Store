import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";

const InfoBar = () => {
  return (
    <div className="bg-[#1B6392] text-white py-2 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <h1>
                Store Location: Fortich St., Yalabyalam city, Bukidnon, PH
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <br />
              <LanguageIcon />
              <span>
                Eng <KeyboardArrowDownIcon className="cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#EBC80C]">
              Shipping
            </a>
            <a href="#" className="hover:text-[#EBC80C]">
              FAQ
            </a>
            <a href="#" className="hover:text-[#EBC80C]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;

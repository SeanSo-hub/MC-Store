import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo/alt-logo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AppStore from "../../../public/footer/appStore.png";
import PlayStore from "../../../public/footer/playStore.png";

function Footer() {
  return (
    <footer className="bg-[#191C1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-3">
                <Image src={Logo} alt="Logo" width={48} height={48} />
                <h1 className="text-2xl sm:text-3xl font-bold">MC Store</h1>
              </div>
              <div className="space-y-2">
                <p className="text-[#77878F] text-sm">Customer Supports:</p>
                <p className="text-lg font-medium">+63 992 492 7865</p>
                <div className="text-[#77878F] text-sm space-y-1">
                  <p>Fortich St.</p>
                  <p>Yalabyalam city, Bukidnon, PH</p>
                </div>
                <a
                  href="mailto:info@mcstore.ph"
                  className="text-sm hover:text-[#EBC80C]"
                >
                  info@mcstore.ph
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="uppercase text-base font-semibold">Top Category</h2>
            <ul className="space-y-2 text-sm">
              {[
                "Computer & Laptop",
                "Smartphone",
                "Headphone",
                "Accessories",
                "Camera & Photo",
                "TV & Homes",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#929FA5] hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-[#EBC80C] flex items-center justify-center lg:justify-start gap-1"
                >
                  Browse All Product
                  <ArrowForwardIcon fontSize="small" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="uppercase text-base font-semibold">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {[
                "Shop Product",
                "Shopping Cart",
                "Wishlist",
                "Compare",
                "Track Order",
                "Customer Help",
                "About Us",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#929FA5] hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="uppercase text-base font-semibold">Download App</h2>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <Image
                src={AppStore}
                alt="App Store"
                className="max-w-[140px] w-full"
              />
              <Image
                src={PlayStore}
                alt="Play Store"
                className="max-w-[140px] w-full"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="uppercase text-base font-semibold">Popular Tag</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {[
                "Game",
                "iPhone",
                "TV",
                "Laptops",
                "SSD",
                "Graphics Card",
                "Speaker",
                "Tablet",
                "Headphone",
                "Monitor",
                "Keyboard",
              ].map((tag) => (
                <button
                  key={tag}
                  className="border border-[#303639] px-2 py-1 text-sm rounded hover:border-[#FFFFFF] hover:bg-[#303639] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[#ADB7BC] py-6 border-t border-[#ADB7BC]">
        <h1>MC - eCommerce store © 2025. Design by Clicon</h1>
      </div>
    </footer>
  );
}

export default Footer;

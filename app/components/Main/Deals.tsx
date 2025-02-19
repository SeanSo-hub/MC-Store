import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import PS5 from "../../../public/deals/ps5.png";
import Drone from "../../../public/deals/drone.png";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Deals() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-center py-[4px] mb-[24px]">
          <div className="flex justify-around items-center gap-2">
            <h1 className="mr-[24px] font-semibold text-[24px]">Best Deals</h1>
            <p className="text-[14px]">Deals ends in</p>
            <p className="bg-[#F3DE6D] px-[12px] py-[6px]">
              16d : 21h : 57m : 23s
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button className="flex justify-center items-center text-[#2DA5F3]">
              <p>Browse All Product</p>
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 mb-4 border sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="row-span-2 m-[24px]">
            <div className="flex flex-col mb-[24px]">
              <h1 className="bg-[#EFD33D] text-center w-[73px] text-[12px] font-semibold py-[5px] px-[10px] rounded-sm z-10">
                32% OFF
              </h1>
              <h1 className="bg-[#EE5858] text-center text-white w-[46px] text-[12px] font-semibold py-[5px] px-[10px] mt-[8px] rounded-sm z-10">
                HOT
              </h1>
              <div className="flex justify-center">
                <Image
                  src={PS5}
                  width={280}
                  height={280}
                  alt="PS5"
                  className="-mt-[60px] z-0"
                />
              </div>
            </div>
            <div className="flex mb-[6px]">
              <StarIcon className="text-[#EBC80C]" />
              <StarIcon className="text-[#EBC80C]" />
              <StarIcon className="text-[#EBC80C]" />
              <StarIcon className="text-[#EBC80C]" />
              <StarIcon className="text-[#EBC80C]" />
              <p className="ml-[2px] text-[#77878F]">(52,677)</p>
            </div>
            <h1 className="text-base line-height-[1.5] mb-[12px]">
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Version
            </h1>
            <div className="flex gap-2 items-center mb-[12px]">
              <h1 className="line-through text-[#77878F]">$865.99</h1>
              <h1 className="text-[#2DA5F3] font-semibold text-[18px]">
                $442.12
              </h1>
            </div>
            <p className="text-[#77878F] mb-[24px]">
              Games built using the Xbox Series X|S development kit showcase
              unparalleled load times, visuals.
            </p>
            <div className="flex justify-between items-center gap-2">
              <button className="bg-[#FFE7D6] p-[12px] rounded-sm">
                <FavoriteBorderIcon />
              </button>
              <button className="uppercase bg-[#FA8232] p-[12px] rounded-sm text-[14px] text-white items-center flex font-bold shadow-2xl max-h-[48px]">
                <ShoppingCartIcon className="mr-[4px]" />
                Add to cart
              </button>
              <button className="bg-[#FFE7D6] p-[12px] rounded-sm">
                <VisibilityIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col p-[16px] border">
            <div className="flex flex-col">
              <h1 className="bg-[#929FA5] text-center text-white w-[73px] text-[12px] font-semibold py-[5px] px-[10px] rounded-sm z-10">
                Sold out
              </h1>
              <div className="flex justify-center">
                <Image src={Drone} width={216} height={216} alt="Drone" />
              </div>
            </div>
            <h1 className="text-[#191C1F] mt-[12px]">
              Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
            </h1>
            <h1 className="text-[#2DA5F3] font-semibold text-[18px]">$2,300</h1>
          </div>
          <div className="flex flex-col p-[16px] border">
            <div className="flex flex-col">
              <h1 className="bg-[#929FA5] text-center text-white w-[73px] text-[12px] font-semibold py-[5px] px-[10px] rounded-sm z-10">
                Sold out
              </h1>
              <div className="flex justify-center">
                <Image src={Drone} width={216} height={216} alt="Drone" />
              </div>
            </div>
            <h1 className="text-[#191C1F] mt-[12px]">
              Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
            </h1>
            <h1 className="text-[#2DA5F3] font-semibold text-[18px]">$2,300</h1>
          </div>
          <div className="flex flex-col p-[16px] border">
            <div className="flex flex-col">
              <h1 className="bg-[#929FA5] text-center text-white w-[73px] text-[12px] font-semibold py-[5px] px-[10px] rounded-sm z-10">
                Sold out
              </h1>
              <div className="flex justify-center">
                <Image src={Drone} width={216} height={216} alt="Drone" />
              </div>
            </div>
            <h1 className="text-[#191C1F] mt-[12px]">
              Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
            </h1>
            <h1 className="text-[#2DA5F3] font-semibold text-[18px]">$2,300</h1>
          </div>
          <div className="flex flex-col p-[16px] border">
            <div className="flex flex-col">
              <h1 className="bg-[#929FA5] text-center text-white w-[73px] text-[12px] font-semibold py-[5px] px-[10px] rounded-sm z-10">
                Sold out
              </h1>
              <div className="flex justify-center">
                <Image src={Drone} width={216} height={216} alt="Drone" />
              </div>
            </div>
            <h1 className="text-[#191C1F] mt-[12px]">
              Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
            </h1>
            <h1 className="text-[#2DA5F3] font-semibold text-[18px]">$2,300</h1>
          </div>
          <div className="flex flex-col p-[16px] border">
            <div className="flex flex-col">
              <h1 className="bg-[#929FA5] text-center text-white w-[73px] text-[12px] font-semibold py-[5px] px-[10px] rounded-sm z-10">
                Sold out
              </h1>
              <div className="flex justify-center">
                <Image src={Drone} width={216} height={216} alt="Drone" />
              </div>
            </div>
            <h1 className="text-[#191C1F] mt-[12px]">
              Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
            </h1>
            <h1 className="text-[#2DA5F3] font-semibold text-[18px]">$2,300</h1>
          </div>
          <div className="flex flex-col p-[16px] border ">
            <div className="flex flex-col">
              <h1 className="bg-[#929FA5] text-center text-white w-[73px] text-[12px] font-semibold py-[5px] px-[10px] rounded-sm z-10">
                Sold out
              </h1>
              <div className="flex justify-center">
                <Image src={Drone} width={216} height={216} alt="Drone" />
              </div>
            </div>
            <h1 className="text-[#191C1F] mt-[12px]">
              Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
            </h1>
            <h1 className="text-[#2DA5F3] font-semibold text-[18px]">$2,300</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deals;

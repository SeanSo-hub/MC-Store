import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Xbox from "../../../public/hero/xbox.png";
import Pixel6 from "../../../public/hero/pixel 6.png";
import Flipbuds from "../../../public/hero/flipbuds.png";
import Image from "next/image";
import Divider from "../../../public/hero/Devider.png";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-7xl min-h-[520px] pt-6 mx-auto px-4">
      <div className="flex justify-center items-center flex-col lg:flex-row h-auto max-h-[520px] max-w-7xl md:max-h-[1000px] max-sm:max-h-full w-full bg-[#F2F4F5] rounded-md outline outline-1 outline-black">
        <div className="flex flex-col gap-4 py-10 px-6">
          <p className="text-[#2DA5F3] uppercase text-sm text-[14px] font-semibold">
            <span>
              <Image
                src={Divider}
                alt="hero"
                width={24}
                className="w-100% h-100% inline mr-2 justify-center items-center"
              />
            </span>
            The best place to play
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl">Xbox Consoles</h1>
          <p className="text-sm md:text-base lg:text-lg">
            Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
            for $2 USD.
          </p>
          <button className="uppercase text-sm md:text-base font-bold text-white bg-[#FA8232] py-3 md:py-4 w-full md:w-[180px] lg:w-[191px] h-12 md:h-[50px] lg:h-[56px] rounded-md">
            Shop now <ArrowForwardIcon />
          </button>
        </div>
        <div className="flex max-w-[350px] w-full h-full">
          <div className="flex justify-center items-end md:w-auto h-full">
            <Image
              src={Xbox}
              alt="xbox"
              width={368}
              height={408}
              className="h-100% mb-20"
            />
          </div>
          <div className="flex w-[50px] justify-end items-start mt-6 sm:mt-8 md:mt-10">
            <div className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8 my-4 sm:my-5 md:my-6 w-16 sm:w-20 md:w-24 lg:w-[104px] rounded-full outline outline-4 outline-white">
              <div className="bg-[#2DA5F3] rounded-full w-16 sm:w-20 md:w-24 lg:w-[101px] h-16 sm:h-20 md:h-24 lg:h-[100px] flex justify-center items-center">
                <p className="text-base sm:text-lg md:text-xl lg:text-3xl text-white font-semibold">
                  $299
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:max-w-[424px] sm:max-w-full h-auto max-h-[520px] md:max-h-[1000px]">
        <div className="flex bg-[#191C1F] w-full h-full rounded-md">
          <div className="pl-6 md:my-[40px] lg:my-[46px]">
            <h1 className="uppercase mb-1 text-sm md:text-[13px] lg:text-[14px] text-[#EBC80C]">
              summer sales
            </h1>
            <h1 className="text-white mb-4 font-semibold text-lg md:text-xl lg:text-2xl">
              New Google Pixel 6 Pro
            </h1>
            <button className="uppercase text-sm font-semibold text-white py-3 w-full md:w-[150px] lg:w-[156px] h-12 bg-[#FA8232] rounded-md">
              Shop now <ArrowForwardIcon />
            </button>
          </div>
          <div className="flex flex-col justify-end items-end min-w-[200px] h-full">
            <div className="bg-[#EBC80C] flex justify-center items-center w-20 md:w-24 h-8 md:h-10 rounded-md mr-6 mb-6">
              <h1 className="uppercase font-semibold text-sm md:text-base">
                29% off
              </h1>
            </div>
            <div>
              <Image
                src={Pixel6}
                alt="Pixel"
                width={312}
                height={312}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex bg-[#F2F4F5] mt-6 w-full h-full lg:h-[248px] rounded-md justify-center items-center">
          <div className="mt-6 mr-10">
            <Image
              src={Flipbuds}
              alt="Flipbuds"
              width={160}
              height={160}
              className="w-100% h-100%"
            />
          </div>
          <div className="flex flex-col my-6 w-full md:w-[160px] lg:w-[172px]">
            <h1 className="text-lg md:text-xl lg:text-2xl mb-3">
              Xiaomi FlipBuds Pro
            </h1>
            <h1 className="text-[#2DA5F3] font-semibold text-md md:text-lg lg:text-[18px] mb-4">
              $299 USD
            </h1>
            <button className="uppercase text-sm font-semibold text-white py-3 w-full md:w-[150px] lg:w-[156px] h-12 bg-[#FA8232] rounded-md">
              Shop now <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

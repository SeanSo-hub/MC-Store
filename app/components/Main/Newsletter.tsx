import React from "react";
import Image from "next/image";
import Brands from "../../../public/CTA/brands.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Newsletter() {
  return (
    <section>
      <div className="flex flex-col gap-8 justify-center items-center text-white bg-[#1B6392] px-4 sm:px-6 lg:px-8">
        <h1 className="mt-12 text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Subscribe to our news letter
        </h1>
        <p className="w-full sm:w-[536px] text-sm sm:text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          placeat, reprehenderit, quibusdam blanditiis labore aliquam deleniti
          it.
        </p>
        <div className="flex gap-4 justify-center items-center w-full sm:w-[624px] bg-white rounded-[3px]">
          <form
            className="flex flex-col sm:flex-row gap-4 justify-center items-center m-[12px] w-full"
            action=""
          >
            <input
              className="p-3 w-full sm:w-[424px] text-black rounded-sm"
              type="email"
              placeholder="Email address..."
            />
            <button className="w-full px-6 sm:w-auto h-12 bg-[#FA8232] rounded-sm uppercase flex justify-center items-center font-semibold">
              Subscribe
              <ArrowForwardIcon />
            </button>
          </form>
        </div>
        <Image src={Brands} alt="Brands" className="mb-[72px]" />
      </div>
    </section>
  );
}

export default Newsletter;

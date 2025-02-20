import React from "react";
import Image from "next/image";
import Brands from "../../../public/CTA/brands.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Newsletter() {
  return (
    <section className="bg-[#1B6392] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Subscribe to our newsletter
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-center leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            placeat, reprehenderit, quibusdam blanditiis labore aliquam deleniti
            it.
          </p>
          <div className="w-full max-w-3xl bg-white rounded-md">
            <form
              className="flex flex-col sm:flex-row gap-4 p-3 sm:p-4"
              action="#"
            >
              <input
                className="flex-1 p-3 text-black rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FA8232] focus:border-transparent"
                type="email"
                placeholder="Email address..."
                required
              />
              <button
                className="w-full sm:w-auto px-6 py-3 bg-[#FA8232] rounded-sm uppercase font-semibold flex items-center justify-center gap-2 hover:bg-[#e5731e] transition-colors"
                type="submit"
              >
                Subscribe
                <ArrowForwardIcon fontSize="small" />
              </button>
            </form>
          </div>
          <div className="mb-2 sm:mb-4">
            <Image src={Brands} alt="Partner Brands" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

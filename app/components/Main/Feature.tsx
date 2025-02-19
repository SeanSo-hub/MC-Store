import React from "react";
import Image from "next/image";
import Package from "../../../public/hero/Package.png";
import Trophy from "../../../public/hero/Trophy.png";
import CreditCard from "../../../public/hero/CreditCard.png";
import Headphones from "../../../public/hero/Headphones.png";
import Line from "../../../public/hero/Line.png";

function Feature() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-4">
      <div className="flex flex-col justify-evenly items-center gap-4  px-4 py-4 outline outline-1 outline-[#E4E7E9] rounded-[6px] sm:md:flex-row">
        <div className="flex gap-4">
          <Image
            src={Package}
            width={40}
            height={40}
            alt="Package"
          />
          <div>
            <h1>Fast Delivery</h1>
            <p>Delivery in 24h</p>
          </div>
        </div>
        <div>
          <Image src={Line} alt="Line" className="hidden sm:md:block" />
        </div>
        <div className="flex gap-4">
          <Image src={Trophy} width={40} height={40} alt="Trophy" />
          <div>
            <h1>24 hour return</h1>
            <p>100% money-back guarantee</p>
          </div>
        </div>
        <div>
          <Image src={Line} alt="Line" className="hidden sm:md:block" />
        </div>
        <div className="flex gap-4">
          <Image src={CreditCard} width={40} height={40} alt="Credit Card" />
          <div>
            <h1>Secure Payment</h1>
            <p>Your money is safe</p>
          </div>
        </div>
        <div>
          <Image src={Line} alt="Line" className="hidden sm:md:block" />
        </div>
        <div className="flex gap-4">
          <Image src={Headphones} width={40} height={40} alt="Headphones" />
          <div>
            <h1>Support 24/7</h1>
            <p>Live contact/messages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;

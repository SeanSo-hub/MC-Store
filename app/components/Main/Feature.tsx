import React from "react";
import Image from "next/image";
import Package from "../../../public/hero/Package.png";
import Trophy from "../../../public/hero/Trophy.png";
import CreditCard from "../../../public/hero/CreditCard.png";
import Headphones from "../../../public/hero/Headphones.png";
import Line from "../../../public/hero/Line.png";

function Feature() {
  const features = [
    {
      icon: Package,
      title: "Fast Delivery",
      description: "Delivery in 24h",
    },
    {
      icon: Trophy,
      title: "24 Hour Return",
      description: "100% money-back guarantee",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Your money is safe",
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Live contact/messages",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-4 p-4 sm:p-6 bg-white border border-[#E4E7E9] rounded-lg">
        {features.map((feature, index) => (
          <React.Fragment key={feature.title}>
            <div className="flex items-center gap-4 lg:col-span-2">
              <Image
                src={feature.icon}
                width={40}
                height={40}
                alt={feature.title}
                className="flex-shrink-0"
              />
              <div className="space-y-1">
                <h2 className="text-sm md:text-base font-semibold text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>

            {index < features.length - 1 && (
              <div className="hidden lg:flex lg:col-span-1 justify-self-center items-center">
                <Image
                  src={Line}
                  alt="Divider"
                  className="h-12 w-auto text-gray-300"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Feature;

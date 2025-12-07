import React from "react";

export default function PriorityBanner() {
  return (
    <div className="w-full bg-[#003A3E] rounded-3xl p-10 relative overflow-hidden">

      {/* Top Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-40 bg-no-repeat bg-cover opacity-80"
        style={{
          backgroundImage: "url('/be-a-merchant-bg.png')",
        }}
      ></div>

      {/* Right Background Image */}
      <div
        className="absolute right-0 bottom-0 w-1/2 h-full bg-no-repeat bg-contain bg-right opacity-70"
        style={{
        //   backgroundImage: "url('/images/bg-right-image.png')",
                    backgroundImage: "url('/location-merchant.png')",

        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug">
            Merchant and Customer Satisfaction <br />
            is Our First Priority
          </h2>

          <p className="text-gray-200 mt-4 max-w-md">
            We offer the lowest delivery charge with the highest value along with
            100% safety of your product. Fastbox courier delivers your parcels in
            every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-semibold transition">
              Become a Merchant
            </button>

            <button className="bg-[#003A3E] border border-lime-400 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Empty column to place right image */}
        <div className="hidden md:block"></div>
      </div>

    </div>
  );
}

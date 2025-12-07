import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
      <div className="bg-white h-[200px] rounded-xl p-6 shadow-sm flex gap-6 items-center md:flex-row flex-col text-center md:text-left">
      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center">
        <img src={icon} alt="feature icon" className="w-full h-full object-contain" />
      </div>

      <div>
      </div>

      {/* Text */}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

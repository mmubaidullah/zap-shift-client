import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName, review: reviewText, user_photoURL } = review;
    return (
        <div className="bg-white rounded-2xl shadow p-8 max-w-xl mx-auto">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-4xl text-[#C3DFE2] mb-4" />

      {/* Review Text */}
      <p className="mb-6">
        {reviewText}
      </p>

      {/* Divider Line */}
      <div className="border-t border-dashed border-[#03464D]  mb-6"></div>

      {/* Author Section */}
      <div className="flex items-center gap-4">
        {/* Avatar Circle */}
        <div className="w-12 h-12"><img className="rounded-full" src={user_photoURL} alt="" /></div>

        {/* Author Info */}
        <div>
          <h4 className="text-lg font-semibold text-teal-900">{userName}</h4>
          <p className="text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;
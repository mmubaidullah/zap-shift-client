import React from "react";
import FeatureCard from "./FeatureCard";

import LiveParcelPic from '../../../assets/live-tracking.png';
import SafeDeliveryPic from '../../../assets/safe-delivery.png';

const FeaturesSection = () => {
    const features = [
        {
            icon: LiveParcelPic,
            title: "Live Parcel Tracking",
            description:
                "Stay updated in real-time with our live tracking feature. Monitor your shipment’s journey and get instant status updates.",
        },
        {
            icon: SafeDeliveryPic,
            title: "100% Safe Delivery",
            description:
                "We ensure your parcels are delivered with maximum care and security. Our reliable process guarantees damage-free delivery.",
        },
        {
            icon: SafeDeliveryPic,
            title: "24/7 Call Center Support",
            description:
                "Our dedicated support team is available anytime to assist you with questions, updates, or delivery concerns.",
        },
    ];

    return (
        <div className="max-w-5xl h-auto mx-auto py-16 px-4 space-y-8">

            <div className="border-t border-dashed border-gray-700"></div>

            {features.map((item, index) => (
                <FeatureCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                />
            ))}
            <div className="border-t border-dashed border-gray-700"></div>
        </div>
    );
};

export default FeaturesSection;

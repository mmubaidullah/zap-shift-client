import React, { useState } from "react";

const initialFaqs = [
  {
    q: "How does this posture corrector work?",
    a: "A posture corrector works by providing support and gentle alignment..."
  },
  {
    q: "Is it suitable for all ages and body types?",
    a: "Yes! It is designed to fit a wide range of ages and body types..."
  },
  {
    q: "Does it really help with back pain and posture improvement?",
    a: "Regular use can help promote better posture and relieve discomfort..."
  },
  {
    q: "Does it have smart features like vibration alerts?",
    a: "Some models offer smart vibration reminders..."
  },
  {
    q: "How will I be notified when the product is back in stock?",
    a: "You will receive an email notification once the product is available..."
  }
];

const moreFaqs = [
  {
    q: "Can I wear it under clothing?",
    a: "Yes, it is lightweight and can be worn discreetly under clothing."
  },
  {
    q: "How long should I wear it each day?",
    a: "It is recommended to wear it 1–3 hours a day as your body adjusts."
  },
  {
    q: "Is it washable?",
    a: "Yes, the straps and pads are washable. Hand wash is recommended."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const faqs = showMore ? [...initialFaqs, ...moreFaqs] : initialFaqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-14 flex justify-center">
      <div className="max-w-3xl w-full px-4">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Frequently Asked Question (FAQ)</h2>
          <p className="text-gray-600 mt-2">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`collapse collapse-arrow bg-white shadow-sm rounded-lg transition-all 
                ${isOpen ? "bg-lime-50 border border-lime-300" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={isOpen}
                  onChange={() => toggleFAQ(index)}
                />
                <div className="collapse-title text-lg font-medium">
                  {item.q}
                </div>
                <div className="collapse-content">
                  <p className="text-gray-700">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className="btn bg-lime-500 hover:bg-lime-600 text-black px-6 rounded-full"
            >
              See More FAQ’s <span className="ml-1">↗</span>
            </button>
          ) : (
            <button
              onClick={() => setShowMore(false)}
              className="btn bg-gray-300 hover:bg-gray-400 text-black px-6 rounded-full"
            >
              Show Less
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

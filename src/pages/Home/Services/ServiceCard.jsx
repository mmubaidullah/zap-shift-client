// ServiceCard.jsx

const ServiceCard = ({ icon, title, desc, highlight }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow transition 
      ${highlight 
        ? "bg-green-300 text-black shadow-lg scale-[1.02]" 
        : "bg-white text-gray-800"
      }`}
    >
      <div className="text-5xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
};

export default ServiceCard;

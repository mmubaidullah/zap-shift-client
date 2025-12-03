import React from 'react';

const WorkStep = ({icon, title, desc}) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    );
};

export default WorkStep;
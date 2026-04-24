import React from 'react';

const Conditions = ({ conditionData, setSelectedCondition }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {Object.keys(conditionData).map((key) => (
        <button
          key={key}
          onClick={() => setSelectedCondition(key)}
          className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#5C97F8] transition-all text-left flex items-center gap-4 group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">
            {conditionData[key].icon}
          </span>
          <span className="font-bold text-slate-700">
            {conditionData[key].title}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Conditions;
import React from 'react';
import { ArrowLeft, Info, Pill, ClipboardList, ShieldCheck } from 'lucide-react';

const ResultView = ({ data, activeTab, setActiveTab, onBack }) => {
  return (
    <div className="pt-24 pb-20 px-4 md:px-10 max-w-5xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 bg-[#5C97F8] px-5 py-2.5 rounded-full text-white hover:bg-blue-600 mb-8 transition-all font-semibold shadow-lg shadow-blue-200 active:scale-95"
      >
        <ArrowLeft size={18} /> Back to search
      </button>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Results for {data.title}</h1>
        <p className="text-slate-400 text-sm font-medium tracking-wide italic">Based on your community's local health data</p>
      </header>

      {/* Warning Box */}
      <div className={`p-6 rounded-2xl mb-10 flex gap-4 items-start ${data.warning.type === 'professional' ? 'bg-[#FFF9F0] border border-[#F5E6D3]' : 'bg-emerald-50 border border-emerald-100'}`}>
        <Info className={data.warning.type === 'professional' ? 'text-orange-500' : 'text-emerald-500'} />
        <div>
          <h4 className="font-bold text-slate-800 mb-1">{data.warning.type === 'professional' ? 'Professional care recommended' : 'Home care suitable'}</h4>
          <p className="text-sm text-slate-600 leading-relaxed">{data.warning.message}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 flex gap-2 mb-10">
        {[
          { id: 'options', label: 'Affordable Options' },
          { id: 'prescriptions', label: 'Prescriptions' },
          { id: 'guidance', label: 'Care Guidance' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 rounded-xl font-bold text-xs md:text-sm transition-all ${activeTab === tab.id ? 'bg-[#5C97F8] text-white shadow-lg shadow-[#EFF6FF]' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {/* TAB: OPTIONS */}
        {activeTab === 'options' && data.options.map((opt, i) => (
          <div key={i} className="bg-white p-6 rounded-[28px] border border-white shadow-sm flex justify-between items-center hover:shadow-md transition-shadow">
            <div className="flex gap-5 items-center">
              <div className="p-4 bg-emerald-50 text-emerald-500 rounded-2xl shadow-inner"><Pill /></div>
              <div>
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">{opt.category}</p>
                <h4 className="font-bold text-slate-800 text-lg">{opt.title}</h4>
                <p className="text-xs text-slate-400 font-medium">{opt.desc}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full mb-2 inline-block">SAVE {opt.save}</span>
              <p className="font-black text-slate-800 text-lg">{opt.price}</p>
            </div>
          </div>
        ))}

        {/* TAB: PRESCRIPTIONS */}
        {activeTab === 'prescriptions' && data.prescriptions.map((med, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-white shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-50 text-[#5C97F8] rounded-2xl"><ClipboardList /></div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">{med.name}</h4>
                  <p className="text-sm text-slate-400 font-semibold">{med.strength} • {med.dosage}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest mb-1">Duration</p>
                <p className="text-lg font-bold text-slate-800">{med.duration}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#F4F8FB] p-4 rounded-2xl border border-slate-100">
                <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Frequency</p>
                <p className="font-bold text-slate-800">{med.frequency}</p>
              </div>
              <div className="bg-[#F4F8FB] p-4 rounded-2xl border border-slate-100">
                <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Safety Status</p>
                <p className="font-bold text-emerald-600 flex items-center gap-2">Verified Sanctuary Care <ShieldCheck size={14}/></p>
              </div>
            </div>
            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p className="text-[10px] text-emerald-600 font-black uppercase mb-1">Usage Instructions</p>
              <p className="text-sm text-slate-700 leading-relaxed font-medium italic">"{med.instructions}"</p>
            </div>
          </div>
        ))}

        {/* TAB: GUIDANCE */}
        {activeTab === 'guidance' && (
          <div className="bg-white p-10 rounded-[32px] border border-white shadow-sm">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-800">
              <div className="w-2 h-8 bg-emerald-500 rounded-full" />
              Next Steps for Recovery
            </h3>
            <div className="space-y-8">
              {data.guidance.map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  {i !== data.guidance.length - 1 && <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-slate-100" />}
                  <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-black shrink-0 z-10 border border-emerald-100">
                    {i + 1}
                  </span>
                  <div className="pb-4">
                    <h4 className="font-bold text-slate-800 text-lg mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultView;
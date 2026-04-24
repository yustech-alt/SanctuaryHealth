import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, ShieldCheck, ArrowLeft, Pill, Info, ChevronRight, ClipboardList } from 'lucide-react';
import { conditionData } from '../Features/Prescription/ConditionData';
import Features from '../Features/Prescription/Features';

const PrescriptionPage = () => {
  const [activeTab, setActiveTab] = useState('costs');
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const data = selectedCondition ? conditionData[selectedCondition] : null;

  // VIEW 1: SEARCH & GRID VIEW
  if (!data) {
    return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F0F5FA] text-slate-900">
      
      <div className="pt-28 px-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Know what your health <span className="text-orange-500">will cost you</span></h2>
        <p className="text-slate-500 mb-10">Get instant cost estimates and find affordable alternatives.</p>
        
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Describe symptoms or search condition..."
            className="w-full py-5 pl-14 pr-32 rounded-full border-none shadow-xl focus:ring-2 focus:ring-blue-500/20 text-lg"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            onClick={() => setSelectedCondition('malaria')} // For demo purposes, this will always show malaria results. In a real app, you'd match searchQuery to conditionData keys.
            className="absolute right-2 top-2 bottom-2 px-8 bg-[#5C97F8] text-white rounded-full font-bold hover:bg-orange-600 transition-all"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.keys(conditionData).map(key => (
            <button 
              key={key} 
              onClick={() => setSelectedCondition(key)}
              className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-500 transition-all text-left flex items-center gap-4 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{conditionData[key].icon}</span>
              <span className="font-bold text-slate-700">{conditionData[key].title}</span>
            </button>
          ))}
        </div>
        
        <Features />


      </div>
    </div>
    );
  }

  // VIEW 2: RESULTS VIEW (Tabs)
  return (
    <div className="pt-24 pb-20 px-4 md:px-10 max-w-5xl mx-auto">
      <button 
        onClick={() => setSelectedCondition(null)}
        className="flex items-center gap-2 bg-[#5C97F8] px-4 py-2 rounded-full text-white hover:text-slate-600 mb-6 transition-colors font-semibold"
      >
        <ArrowLeft size={16} /> Back to search
      </button>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Results for {data.title}</h1>
        <p className="text-slate-400 text-sm font-medium tracking-wide">Updated 2 hours ago • Serving Lagos area</p>
      </header>

      {/* Warning Box */}
      <div className={`p-6 rounded-2xl mb-10 flex gap-4 items-start ${data.warning.type === 'professional' ? 'bg-[#FFF9F0] border border-[#F5E6D3]' : 'bg-emerald-50 border border-emerald-100'}`}>
        <Info className={data.warning.type === 'professional' ? 'text-orange-500' : 'text-emerald-500'} />
        <div>
          <h4 className="font-bold text-slate-800 mb-1">{data.warning.type === 'professional' ? 'Professional care recommended' : 'Home care suitable'}</h4>
          <p className="text-sm text-slate-600 leading-relaxed">{data.warning.message}</p>
        </div>
      </div>

      {/* Navigation Tabs - Added "prescriptions" tab */}
      <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 flex gap-2 mb-10">
        {[
          { id: 'options', label: 'Affordable Options' },
          { id: 'prescriptions', label: 'Prescriptions' },
          { id: 'guidance', label: 'Care Guidance' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 rounded-xl font-bold text-xs md:text-sm transition-all ${activeTab === tab.id ? 'bg-[#5C97F8] text-white shadow-lg shadow-[#EFF6FF]' : 'text-slate-400 hover:text-slate-600'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        
        {/* TAB 1: COSTS */}
        {/* {activeTab === 'costs' && data.costs.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-[28px] border border-white shadow-sm flex justify-between items-center group hover:border-blue-100 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                <ShieldCheck size={16} className="text-emerald-500" />
              </div>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3">{item.type}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-red-400" /> {item.dist}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-blue-400" /> {item.wait}</span>
                <span className="flex items-center gap-1.5"><Star size={14} className="text-orange-400 fill-orange-400" /> {item.rating}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-orange-600 font-black text-xl tracking-tight">{item.price}</p>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">Estimated Cost</p>
            </div>
          </div>
        ))} */}

        {/* TAB 2: AFFORDABLE OPTIONS */}
        {activeTab === 'options' && data.options.map((opt, i) => (
          <div key={i} className="bg-white p-6 rounded-[28px] border border-white shadow-sm flex justify-between items-center">
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

        {/* TAB 3: PRESCRIPTIONS (The missing part) */}
        {activeTab === 'prescriptions' && data.prescriptions.map((med, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-white shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl"><ClipboardList /></div>
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
                <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Status</p>
                <p className="font-bold text-emerald-600 flex items-center gap-2">Verified <ShieldCheck size={14}/></p>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <p className="text-[10px] text-emerald-500 font-black uppercase mb-1">Pharmacist Instructions</p>
              <p className="text-sm text-slate-700 leading-relaxed font-medium italic">"{med.instructions}"</p>
            </div>
          </div>
        ))}

        {/* TAB 4: GUIDANCE */}
        {activeTab === 'guidance' && (
          <div className="bg-white p-10 rounded-[32px] border border-white shadow-sm">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-emerald-500 rounded-full" />
              What to do next
            </h3>
            <div className="space-y-8">
              {data.guidance.map((step, i) => (
                <div key={i} className="flex gap-6 relative">
                  {i !== data.guidance.length - 1 && <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-slate-100" />}
                  <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-black shrink-0 z-10 border border-emerald-100">{step.step}</span>
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

export default PrescriptionPage;
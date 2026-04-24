import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Star, ShieldCheck, ArrowLeft, Pill, Info, ClipboardList } from 'lucide-react';
import { conditionData } from '../Features/Prescription/ConditionData';
import Features from '../Features/Prescription/Features';

const PrescriptionPage = () => {
  const [activeTab, setActiveTab] = useState('options'); // Default to options
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  // Fix 2: Reset to 'options' tab whenever the data changes
  useEffect(() => {
    if (selectedCondition) {
      setActiveTab('options');
    }
  }, [selectedCondition]);

  // Fix 1 & 3: Professional Search Logic
  const handleSearch = () => {
    setError("");
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setError("Search is required. Please type a condition or symptom.");
      return;
    }

    // Search logic: finds key where title or warning message matches the query
    const foundKey = Object.keys(conditionData).find(key => {
      const condition = conditionData[key];
      return (
        condition.title.toLowerCase().includes(query) ||
        condition.warning.message.toLowerCase().includes(query) ||
        key.includes(query)
      );
    });

    if (foundKey) {
      setSelectedCondition(foundKey);
    } else {
      setError("No results found for that condition. Try 'Malaria' or 'Cough'.");
    }
  };

  const data = selectedCondition ? conditionData[selectedCondition] : null;

  // VIEW 1: SEARCH & GRID VIEW
  if (!data) {
    return (
      <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F0F5FA] text-slate-900">
        <div className="pt-28 px-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-2">Know what your health <span className="text-orange-500">will cost you</span></h2>
          <p className="text-slate-500 mb-10">Get instant cost estimates and find affordable alternatives.</p>
          
          <div className="relative max-w-2xl mx-auto mb-4">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Describe symptoms or search condition..."
              className={`w-full py-5 pl-14 pr-32 rounded-full border-none shadow-xl focus:ring-2 text-lg ${error ? 'ring-2 ring-red-500' : 'focus:ring-blue-500/20'}`}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (error) setError("");
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button 
              onClick={handleSearch}
              className="absolute right-2 top-2 bottom-2 px-8 bg-[#5C97F8] text-white rounded-full font-bold hover:bg-blue-600 transition-all active:scale-95"
            >
              Search
            </button>
          </div>
          
          {/* Error Message */}
          {error && <p className="text-red-500 font-semibold mb-6 text-sm">⚠️ {error}</p>}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {Object.keys(conditionData).map(key => (
              <button 
                key={key} 
                onClick={() => setSelectedCondition(key)}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#5C97F8] transition-all text-left flex items-center gap-4 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{conditionData[key].icon}</span>
                <span className="font-bold text-slate-700">{conditionData[key].title}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-12">
            <Features />
          </div>
        </div>
      </div>
    );
  }

  // VIEW 2: RESULTS VIEW
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F0F5FA] text-slate-900">
      <div className="pt-24 pb-20 px-4 md:px-10 max-w-5xl mx-auto">
        <button 
          onClick={() => {
            setSelectedCondition(null);
            setSearchQuery("");
          }}
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

        {/* Tab Content */}
        <div className="space-y-4">

          {/* TAB 1: AFFORDABLE OPTIONS */}
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

          {/* TAB 2: PRESCRIPTIONS */}
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

          {/* TAB 3: GUIDANCE */}
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
    </div>
  );
};

export default PrescriptionPage;
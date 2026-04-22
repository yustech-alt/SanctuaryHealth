import React from 'react';

function ConsultationRequest() {
    return (
        <div className="col-span-12 lg:col-span-7">
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 h-full">
                
                <div className="flex justify-between items-start mb-10">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">Your Consultation Request</h3>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Reference: #VC-2024-8892</p>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Doctor Assigned</span>
                </div>
                </div>

                {/* Patient Input Summary */}
                <div className="grid grid-cols-3 gap-6 mb-12">
                <div>
                    <p className="text-[10px] font-bold text-blue-500 uppercase mb-2">Condition</p>
                    <p className="font-bold text-slate-800">General Consultation</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-blue-500 uppercase mb-2">Symptoms</p>
                    <p className="font-bold text-slate-800">Headache, Fever</p>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-blue-500 uppercase mb-2">Duration</p>
                    <p className="font-bold text-slate-800">2 days</p>
                </div>
                </div>

                {/* Ready to Connect Gradient Card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#5C97F8] to-[#3B82F6] p-10 rounded-[24px] text-white">
                <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-3">Ready to connect?</h4>
                    <p className="text-blue-50 max-w-xs mb-8 leading-relaxed opacity-90">
                    Dr. Ayobami is currently in his virtual sanctuary and awaiting your call to begin your personalized care session.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-sm transition-all flex items-center gap-2 border border-white/30">
                        Start Consultation Video
                    </button>
                    <button className="bg-white text-[#3B82F6] px-10 py-4 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all">
                        Start Chat
                    </button>
                    </div>
                </div>
                
                {/* Background Icon Decoration */}
                <div className="absolute right-[-20px] top-[-20px] opacity-10">
                    <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                        <div className="w-40 h-40 border-[20px] border-white rounded-full" />
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default ConsultationRequest;
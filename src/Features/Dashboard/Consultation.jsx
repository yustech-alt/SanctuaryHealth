import React from 'react';

function DashboardConsultation() {
    return (
       <section className="bg-white p-8 rounded-[32px] shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-6">Quick Consultation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-2 block">Specialty/Dept</label>
                    <select className="w-full bg-[#F3F4F6] p-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer appearance-none">
                        <option>General Medicine</option>
                        <option>Pediatrics</option>
                    </select>
                </div>
                <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-2 block">Duration of symptoms</label>
                <select className="w-full bg-[#F3F4F6] p-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer appearance-none">
                    <option>Less than 24 hours</option>
                    <option>2-3 Days</option>
                </select>
                </div>
            </div>
            <div className="mb-8">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-2 block">Describe Symptoms</label>
                <textarea 
                placeholder="Explain how you feel..." 
                className="w-full bg-[#F3F4F6] p-4 rounded-xl text-sm font-medium h-28 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                ></textarea>
            </div>
            <button className="w-full bg-[#5C97F8] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 active:scale-[0.99] transition-all">
                Request Consultation
            </button>
        </section>
    )
}

export default DashboardConsultation;
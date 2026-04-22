import React from 'react';
import {FiCheckCircle} from "react-icons/fi";

function DashboardPendingRX() {
    return (
        <div className="bg-[#E9F3F0] p-8 rounded-[32px] border border-[#D1E6E0]">
            <h4 className="text-[11px] font-black text-[#2D6A58] uppercase tracking-widest mb-6">Pending RX</h4>
            <div className="bg-white p-6 rounded-[24px] flex flex-col gap-5 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <FiCheckCircle className="w-6 h-6" />
                </div>
                <div>
                <p className="font-bold text-slate-800 text-lg">Metformin 500mg</p>
                <p className="text-[11px] text-slate-400 font-semibold">Prescribed by Dr. Amaka Okafor</p>
                </div>
            </div>
            <button className="w-full bg-[#5C97F8] text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 transition-transform active:scale-95">
                Start Medication
            </button>
            </div>
        </div>
    )
}

export default DashboardPendingRX;
import React from "react";
import { Calendar, ChevronRight } from "lucide-react";

function DashboardUpcoming() {
    return(
        <div className="bg-[#F1F4F9] p-8 rounded-[32px]">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Upcoming</h4>
                <Calendar className="w-5 h-5 text-slate-300" />
            </div>
            <div className="bg-white p-6 rounded-[24px] shadow-sm">
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter mb-1">Tomorrow, 10:00 AM</p>
                <p className="font-bold text-xl text-slate-900 leading-tight">Dr. Amaka Okafor</p>
                <p className="text-sm text-slate-400 font-medium mb-6">General Practitioner</p>
                <button className="w-full bg-[#5C97F8] text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 transition-transform active:scale-95">
                Join Call
                </button>
            </div>
        </div>
)

}

export default DashboardUpcoming;
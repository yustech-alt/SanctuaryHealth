import React from 'react';
import { Pill, ChevronRight } from 'lucide-react';

function DashboardPrescriptionHistory() {
    return (
        <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-50">
            <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-8">Prescription History</h4>
            <div className="space-y-6">
                <div className="flex justify-between items-center cursor-pointer group">
                    <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">
                        <Pill className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-bold text-slate-800">Paracetamol</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Sep 28, 2023</p>
                    </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-all" />
                </div>
                <button className="w-full text-center text-blue-500 text-xs font-black uppercase tracking-widest pt-6 border-t border-slate-50 hover:text-blue-600 transition-colors">
                View All Records
                </button>
            </div>
        </div>
    )

}

export default DashboardPrescriptionHistory;
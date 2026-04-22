import React from 'react';
import { 
  Heart, Activity, Thermometer, Pill, Calendar, ChevronRight 
} from 'lucide-react';
import { FiCheckCircle } from "react-icons/fi";

function DashboardMedicationManagement() {
    return (
        <section className="bg-white p-8 rounded-[32px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold text-slate-900">Medication Management</h4>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Treatment</span>
            </div>
            
            <div className="space-y-4">
                <div className="bg-[#F4F8FB] p-6 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-emerald-500"><Pill /></div>
                        <div>
                            <p className="font-bold text-slate-800">Amoyicillin 500mg</p>
                            <p className="text-xs text-slate-400 font-medium">Twice daily after meals</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-emerald-500 font-black uppercase tracking-tighter">Progress</p>
                        <p className="font-bold text-sm text-slate-800">Day 5 <span className="text-slate-400 font-normal">of 10</span></p>
                    </div>
                    </div>
                    <div className="w-full bg-[#E2E8EE] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#5C97F8] h-full w-1/2 rounded-full shadow-inner"></div>
                    </div>
                </div>

                <div className="bg-[#F4F8FB] p-4 rounded-2xl flex justify-between items-center border border-slate-50">
                    <div className="flex gap-4 items-center">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-blue-500"><FiCheckCircle className="w-5 h-5"/></div>
                        <div>
                        <p className="font-bold text-slate-800">Antacid Suspension</p>
                        <p className="text-xs text-slate-400 font-medium">Course completed yesterday</p>
                        </div>
                    </div>
                    <button className="bg-[#5C97F8] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md shadow-blue-100 hover:brightness-105 transition-all">
                    Health Assessment
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DashboardMedicationManagement;
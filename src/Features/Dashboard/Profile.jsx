import React from 'react';
import { 
  Heart, Activity, Thermometer, Pill, Calendar, ChevronRight 
} from 'lucide-react';
import { FiCheckCircle } from "react-icons/fi";


function DashboardProfile() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-200 rounded-2xl overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" alt="Chidi" className="object-cover w-full h-full"/>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">32 Years • Male</p>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">Chidi Adebayo</h3>
                  <div className="flex items-center gap-1.5 mt-0.5 text-emerald-700">
                    <FiCheckCircle className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">NIN Verified</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex items-center gap-3 bg-[#FDEEEE] px-4 py-3 rounded-2xl min-w-[140px]">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase font-black">Blood Group</p>
                    <p className="font-bold text-sm text-slate-900">O Positive</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#EBF2FF] px-4 py-3 rounded-2xl min-w-[140px]">
                  <Activity className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase font-black">Location</p>
                    <p className="font-bold text-sm text-slate-900">Lagos, NG</p>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default DashboardProfile;
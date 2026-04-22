import React from 'react';
import { 
  Heart, Activity, Thermometer, Pill, Calendar, ChevronRight 
} from 'lucide-react';


const VitalsCard = ({ label, value, status, icon, color }) => (
  <div className="bg-white p-5 rounded-[24px] border border-white shadow-sm flex-1">
    <div className="flex items-center gap-2 mb-3">
      <div className="text-red-400">{icon}</div>
      <p className="text-[11px] text-gray-500 font-semibold">{label}</p>
    </div>
    <p className="text-2xl font-bold text-slate-900 mb-1">{value}</p>
    <p className={`text-[13px] font-medium ${color}`}>↓ {status}</p>
  </div>
);
function DashboardVisitSummary() {
    return (
        <section className="bg-[#FFF9F0] p-8 rounded-[32px] border border-[#F5E6D3]">
            <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-800">Kiosk Visit Summary</h4>
                <span className="text-[11px] font-bold text-blue-500">Last visit: 2 days ago</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
                <VitalsCard label="Heart Rate" value="72 bpm" status="Normal" icon={<Heart className="w-4 h-4" />} color="text-emerald-500" />
                <VitalsCard label="BP" value="120/80" status="Healthy" icon={<Activity className="w-4 h-4" />} color="text-emerald-500" />
                <VitalsCard label="Temp" value="36.8 °C" status="Normal" icon={<Thermometer className="w-4 h-4" />} color="text-emerald-500" />
            </div>
        </section>

    )
    }

    export default DashboardVisitSummary;
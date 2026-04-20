import React from 'react';
import { 
  Heart, Activity, Thermometer, Pill, Calendar, ChevronRight, Search, Bell, Settings 
} from 'lucide-react';
import { FiCheckCircle } from "react-icons/fi";
import DashboardNav from '../ui/DashboardNav';

const VitalsCard = ({ label, value, status, icon, color }) => (
  <div className="bg-white p-5 rounded-[28px] shadow-sm flex-1 border border-white">
    <div className="flex items-center gap-2 mb-4">
      <div className="text-red-400">{icon}</div>
      <p className="text-[11px] text-gray-500 font-semibold tracking-wide">{label}</p>
    </div>
    <p className="text-2xl font-bold text-gray-800 mb-1">{value}</p>
    <p className={`text-[13px] font-bold ${color}`}>↓ {status}</p>
  </div>
);

function HomeDashboardPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F0F5FA] text-slate-900">
      <DashboardNav />

      {/* Main Content Wrapper */}
      <div className="p-4 md:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <header className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900">Welcome Back, Chidi</h2>
              <p className="text-gray-500 font-medium">Your health journey is looking stable today.</p>
            </header>

            {/* Profile Header Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-200 rounded-2xl overflow-hidden shadow-md">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" alt="Chidi" className="object-cover w-full h-full"/>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">32 Years • Male</p>
                  <h3 className="text-2xl font-bold text-gray-900">Chidi Adebayo</h3>
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
                    <p className="font-bold text-sm text-gray-800">O Positive</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-[#EBF2FF] px-4 py-3 rounded-2xl min-w-[140px]">
                  <Activity className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase font-black">Location</p>
                    <p className="font-bold text-sm text-gray-800">Lagos, NG</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kiosk Visit Summary Card */}
            <section className="bg-[#FFF9F0] p-8 rounded-[32px] border border-[#F5E6D3]">
               <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-gray-800 tracking-tight">Kiosk Visit Summary</h4>
                  <span className="text-[11px] font-bold text-blue-400 bg-white/50 px-3 py-1 rounded-full">Last visit: 2 days ago</span>
               </div>
               <div className="flex flex-col sm:flex-row gap-5">
                  <VitalsCard label="Heart Rate" value="72 bpm" status="Normal" icon={<Heart className="w-4 h-4" />} color="text-emerald-500" />
                  <VitalsCard label="BP" value="120/80" status="Healthy" icon={<Activity className="w-4 h-4" />} color="text-emerald-500" />
                  <VitalsCard label="Temp" value="36.8 °C" status="Normal" icon={<Thermometer className="w-4 h-4" />} color="text-emerald-500" />
               </div>
            </section>

            {/* Medication Management Card */}
            <section className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-50">
               <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-bold text-gray-900">Medication Management</h4>
                  <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">Active Treatment</span>
               </div>
               
               <div className="space-y-4">
                  <div className="bg-[#F3F7FA] p-6 rounded-2xl border border-slate-100">
                     <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-4">
                           <div className="p-3 bg-white rounded-xl shadow-sm text-emerald-500"><Pill /></div>
                           <div>
                              <p className="font-bold text-gray-800">Amoyicillin 500mg</p>
                              <p className="text-xs text-slate-400 font-medium">Twice daily after meals</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-[10px] text-emerald-500 font-black uppercase tracking-tighter">Progress</p>
                           <p className="font-bold text-sm text-gray-800">Day 5 <span className="text-slate-400 font-normal">of 10</span></p>
                        </div>
                     </div>
                     <div className="w-full bg-[#E2E8EE] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#5C97F8] h-full w-1/2 rounded-full shadow-inner"></div>
                     </div>
                  </div>

                  <div className="bg-[#F3F7FA] p-4 rounded-2xl flex justify-between items-center border border-slate-50">
                     <div className="flex gap-4 items-center">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-blue-500"><FiCheckCircle className="w-5 h-5"/></div>
                        <div>
                           <p className="font-bold text-gray-800">Antacid Suspension</p>
                           <p className="text-xs text-slate-400 font-medium">Course completed yesterday</p>
                        </div>
                     </div>
                     <button className="bg-[#5C97F8] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-200 hover:brightness-105 transition-all">
                        Health Assessment
                     </button>
                  </div>
               </div>
            </section>

            {/* Quick Consultation Section */}
            <section className="bg-white p-8 rounded-[32px] shadow-sm">
               <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Consultation</h4>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-2 block">Specialty/Dept</label>
                    <select className="w-full bg-[#F3F4F6] p-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer">
                       <option>General Medicine</option>
                       <option>Pediatrics</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-2 block">Duration of symptoms</label>
                    <select className="w-full bg-[#F3F4F6] p-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer">
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
          </div>

          {/* RIGHT COLUMN (WIDGETS) */}
          <div className="col-span-12 lg:col-span-4 space-y-8 lg:mt-12">
            {/* Pending RX Card */}
            <div className="bg-[#E9F3F0] p-8 rounded-[32px] border border-[#D1E6E0]">
              <h4 className="text-[11px] font-black text-[#2D6A58] uppercase tracking-widest mb-6">Pending RX</h4>
              <div className="bg-white p-6 rounded-[24px] flex flex-col gap-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><FiCheckCircle className="w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-gray-800">Metformin 500mg</p>
                    <p className="text-[11px] text-slate-400 font-semibold">Prescribed by Dr. Amaka Okafor</p>
                  </div>
                </div>
                <button className="w-full bg-[#5C97F8] text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100">
                  Start Medication
                </button>
              </div>
            </div>

            {/* Upcoming Section Card */}
            <div className="bg-[#F1F4F9] p-8 rounded-[32px]">
               <div className="flex justify-between items-center mb-6">
                  <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Upcoming</h4>
                  <Calendar className="w-5 h-5 text-slate-300" />
               </div>
               <div className="bg-white p-6 rounded-[24px] shadow-sm">
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter mb-1">Tomorrow, 10:00 AM</p>
                  <p className="font-bold text-xl text-gray-900 leading-tight">Dr. Amaka Okafor</p>
                  <p className="text-sm text-slate-400 font-medium mb-6">General Practitioner</p>
                  <button className="w-full bg-[#5C97F8] text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 transition-transform active:scale-[0.98]">
                    Join Call
                  </button>
               </div>
            </div>

            {/* Prescription History Widget */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-50">
               <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-8">Prescription History</h4>
               <div className="space-y-6">
                  <div className="flex justify-between items-center cursor-pointer group">
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-slate-50 rounded-xl text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all"><Pill className="w-5 h-5" /></div>
                        <div>
                           <p className="font-bold text-gray-800">Paracetamol</p>
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
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeDashboardPage;
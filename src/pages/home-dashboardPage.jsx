import React from 'react';
import { 
  Heart, Activity, Thermometer, Pill, Calendar, ChevronRight 
} from 'lucide-react';// Added missing imports for the icons used in your code
import { FiCheckCircle } from "react-icons/fi";

import DashboardNav from '../ui/DashboardNav';

// 1. Move VitalsCard outside or before the main component
const VitalsCard = ({ label, value, status, icon, color }) => (
  <div className="bg-white p-7 rounded-[32px] shadow-sm border border-white hover:border-primary-blue/20 transition-all cursor-default">
    <div className="flex items-center gap-2 mb-4">
      <div className="text-red-400">{icon}</div>
      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{label}</p>
    </div>
    <p className="text-3xl font-black mb-2">{value}</p>
    <p className={`text-xs font-black ${color}`}>↓ {status}</p>
  </div>
);

function HomeDashboardPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }} className="min-h-screen bg-blue-50  text-dark-main">
      <DashboardNav />

      {/* Main Content */}
      <div className="bg-feature-bg min-h-screen p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          
          {/* Main Feed (Left Column) */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <header>
              <h2 className="text-4xl font-bold tracking-tight">Welcome Back, Chidi</h2>
              <p className="text-gray-500 mt-1">Your health journey is looking stable today.</p>
            </header>

            {/* Profile Header Card */}
            <div className="bg-white p-8 rounded-[32px] flex flex-wrap items-center justify-between shadow-sm border border-white/50">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gray-100 rounded-3xl overflow-hidden shadow-inner">
                   <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" alt="Chidi" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">32 Years • Male</p>
                  <h3 className="text-2xl font-bold">Chidi Adebayo</h3>
                  <div className="flex items-center gap-1.5 mt-1 text-[10px] bg-green-50 text-green-700 px-3 py-1 rounded-full font-black">
                    <span className="bg-green-700 text-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">✓</span>
                    NIN VERIFIED
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <div className="flex items-center gap-3 bg-red-50 p-4 rounded-3xl min-w-[140px]">
                  <div className="p-2 bg-white rounded-xl shadow-sm text-red-500"><Heart className="w-5 h-5 fill-current" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-black">Blood Group</p>
                    <p className="font-bold text-lg">O Positive</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-3xl min-w-[140px]">
                  <div className="p-2 bg-white rounded-xl shadow-sm text-primary-blue"><Activity className="w-5 h-5" /></div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-black">Location</p>
                    <p className="font-bold text-lg">Lagos, NG</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vitals Section */}
            <section>
               <div className="flex justify-between items-center mb-5">
                  <h4 className="text-lg font-bold">Kiosk Visit Summary</h4>
                  <span className="text-[11px] font-bold text-primary-blue bg-blue-50 px-3 py-1.5 rounded-full">Last visit: 2 days ago</span>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <VitalsCard label="Heart Rate" value="72 bpm" status="Normal" icon={<Heart className="w-4 h-4" />} color="text-green-500" />
                  <VitalsCard label="BP" value="120/80" status="Healthy" icon={<Activity className="w-4 h-4" />} color="text-green-500" />
                  <VitalsCard label="Temp" value="36.8 °C" status="Normal" icon={<Thermometer className="w-4 h-4" />} color="text-green-500" />
               </div>
            </section>

            {/* Medication Management Section */}
            <section className="bg-white p-8 rounded-[32px] shadow-sm border border-white/50">
               <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-bold">Medication Management</h4>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Treatment</span>
               </div>
               
               <div className="space-y-4">
                  <div className="bg-feature-bg p-5 rounded-2xl border border-blue-50">
                     <div className="flex justify-between items-start mb-3">
                        <div className="flex gap-4">
                           <div className="p-3 bg-white rounded-xl shadow-sm text-green-600"><Pill /></div>
                           <div>
                              <p className="font-bold">Amoyicillin 500mg</p>
                              <p className="text-xs text-gray-400">Twice daily after meals</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Progress</p>
                           <p className="font-bold">Day 5 <span className="text-gray-400 font-normal text-xs">of 10</span></p>
                        </div>
                     </div>
                     <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                        <div className="bg-primary-blue h-full w-1/2 rounded-full"></div>
                     </div>
                  </div>

                  <div className="bg-feature-bg p-5 rounded-2xl flex justify-between items-center border border-transparent">
                     <div className="flex gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary-blue"><Activity /></div>
                        <div>
                           <p className="font-bold">Antacid Suspension</p>
                           <p className="text-xs text-gray-400">Course completed yesterday</p>
                        </div>
                     </div>
                     <button className="bg-[#5C97F8] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-blue-200">
                        Health Assessment
                     </button>
                  </div>
               </div>
            </section>

            {/* Quick Consultation Form */}
            <section className="bg-white p-8 rounded-[32px] shadow-sm">
               <h4 className="text-lg font-bold mb-6">Quick Consultation</h4>
               <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block">Specialty/Dept</label>
                    <select className="w-full bg-gray-100 p-4 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer">
                       <option>General Medicine</option>
                       <option>Pediatrics</option>
                       <option>Cardiology</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block">Duration of symptoms</label>
                    <select className="w-full bg-gray-100 p-4 rounded-xl text-sm focus:outline-none appearance-none cursor-pointer">
                       <option>Less than 24 hours</option>
                       <option>1-3 Days</option>
                       <option>1 Week+</option>
                    </select>
                  </div>
               </div>
               <div className="mb-6">
                  <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block">Describe Symptoms</label>
                  <textarea 
                    placeholder="Explain how you feel..." 
                    className="w-full bg-gray-100 p-4 rounded-xl text-sm h-24 focus:outline-none resize-none"
                  ></textarea>
               </div>
               <button className="w-full bg-[#5C97F8] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all">
                  Request Consultation
               </button>
            </section>
          </div>

          {/* Right Sidebar Widgets */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <p>Lagos Abuja</p>
            <div className="bg-[#29715833] p-8 rounded-[32px] border border-[#006C46]">
              <h4 className="text-xs font-black text-[#006C46] uppercase tracking-widest mb-6">Pending RX</h4>
              <div className="bg-white p-5 rounded-2xl mb-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                    <FiCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">Metformin 500mg</p>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Prescribed by Dr. Amaka Okafor
                    </p>
                  </div>
                </div>
                <button className="w-full bg-[#5C97F8] text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-transform">
                  Start Medication
                </button>
              </div>
            </div>

            <div className="bg-#E0E3E54D p-8 rounded-[32px] shadow-sm relative overflow-hidden">
               <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Upcoming</h4>
                  <Calendar className="w-4 h-4 text-gray-400" />
               </div>
               <div className="bg-white p-5 rounded-2xl mb-6 shadow-sm flex flex-col">
                  <div className="text-[10px] font-black text-[#5C97F8] uppercase mb-2">Tomorrow, 10:30 AM</div>
                  <p className="font-bold text-lg">Dr. Amaka Okafor</p>
                  <p className="text-sm text-gray-500 mb-6">General Practitioner</p>
                  <button className="w-full bg-[#5C97F8] text-white py-4 rounded-2xl font-bold shadow-lg shadow-white">
                    Join Call
                  </button>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm">
               <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Prescription History</h4>
               <div className="space-y-6">
                  <div className="flex justify-between items-center cursor-pointer group">
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-primary-blue/10 transition-colors"><Pill className="w-5 h-5 text-gray-600" /></div>
                        <div>
                           <p className="font-bold text-sm">Paracetamol</p>
                           <p className="text-[10px] text-gray-400 font-bold uppercase">Sep 28, 2023</p>
                        </div>
                     </div>
                     <ChevronRight className="w-4 h-4 text-[#6D7A71] group-hover:text-[#5C97F8]" />
                  </div>
                  <button className="w-full text-center text-[#5C97F8] text-xs font-black uppercase tracking-widest pt-4 border-t border-gray-50">
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

// 2. Export the component name, not a function call
export default HomeDashboardPage;
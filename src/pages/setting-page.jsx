import React, { useState } from 'react';
import { 
  User, 
  ShieldCheck, 
  BellRing, 
  Globe, 
  LogOut, 
  Camera,
  ChevronRight,
  Lock
} from 'lucide-react';

function SettingPage() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-[#F0F5FA] text-slate-900">
      <div className="pt-28 pb-20 px-6 md:px-10 max-w-5xl mx-auto">
        
        {/* Header Area */}
        <header className="mb-12">
          <p className="text-[10px] font-black text-[#006D44] uppercase tracking-[0.2em] mb-2">
            Sanctuary Settings
          </p>
          <h2 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">Account Control</h2>
          <p className="text-slate-500 text-lg">Manage your identity, security, and clinical preferences.</p>
        </header>

        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Column: Profile Card */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-[40px] overflow-hidden border-4 border-[#F0F5FA] shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" 
                    alt="Chidi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-1 right-1 bg-[#006D44] text-white p-2.5 rounded-2xl shadow-lg border-4 border-white hover:scale-110 transition-transform">
                  <Camera size={18} />
                </button>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900">Chidi</h3>
              <p className="text-[#006D44] font-bold text-sm mb-6">Verified Member</p>
              
              <div className="w-full pt-6 border-t border-slate-50 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold px-4 py-3 bg-[#F8FAFC] rounded-2xl text-slate-500">
                  <span>Member Since</span>
                  <span className="text-slate-800">Dec 2025</span>
                </div>
              </div>

              <button className="mt-8 flex items-center justify-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest hover:bg-red-50 w-full py-4 rounded-2xl transition-colors">
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          </div>

          {/* Right Column: Settings Sections */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            
            {/* General Information */}
            <div className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-[#006D44] rounded-xl"><User size={20}/></div>
                Personal Details
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" defaultValue="Chidi" className="w-full bg-[#F8FAFC] p-4 rounded-2xl font-bold outline-none border-none focus:ring-2 focus:ring-emerald-100" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" defaultValue="chidiadebayo@dev.com" className="w-full bg-[#F8FAFC] p-4 rounded-2xl font-bold outline-none border-none focus:ring-2 focus:ring-emerald-100" />
                </div>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold mb-8 flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><ShieldCheck size={20}/></div>
                Privacy & Safety
              </h4>

              <div className="space-y-4">
                {/* Toggle Item */}
                <div className="flex items-center justify-between p-6 bg-[#F8FAFC] rounded-3xl">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl text-blue-500 shadow-sm"><BellRing size={20}/></div>
                    <div>
                      <p className="font-bold text-slate-800">Health Alerts</p>
                      <p className="text-xs text-slate-400 font-medium">Get notified about prescription refills.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setNotifications(!notifications)}
                    className={`w-14 h-8 rounded-full transition-all relative ${notifications ? 'bg-[#006D44]' : 'bg-slate-300'}`}
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-sm ${notifications ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>

                {/* Link Item */}
                <div className="flex items-center justify-between p-6 border border-slate-50 rounded-3xl hover:bg-slate-50 cursor-pointer transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-100 rounded-2xl text-slate-600 group-hover:bg-white transition-colors"><Lock size={20}/></div>
                    <div>
                      <p className="font-bold text-slate-800">Two-Factor Auth</p>
                      <p className="text-xs text-slate-400 font-medium">Add an extra layer of medical security.</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-300" />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button className="px-8 py-4 font-bold text-slate-400 hover:text-slate-600 transition-colors">Discard</button>
              <button className="bg-[#006D44] text-white px-10 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-emerald-100 active:scale-95 transition-all">
                Save Sanctuary Changes
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;

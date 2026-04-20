import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

function DashboardNav() {
  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
        
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold text-[#006D44] tracking-tight">SanctuaryHealth</h1>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-400">
            <button className="text-[#006D44] border-b-2 border-[#006D44] pb-1">Home</button>
            <button className="hover:text-dark-main transition-colors">Consultations</button>
            <button className="hover:text-dark-main transition-colors">My Records</button>
            <button className="hover:text-dark-main transition-colors">Prescriptions</button>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative group">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 group-focus-within:text-primary-blue" />
            <input 
              type="text" 
              placeholder="Search records..." 
              className="bg-gray-100 rounded-full py-2.5 px-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue/20 w-48 lg:w-72 transition-all"
            />
          </div>
          <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100"><Bell className="w-5 h-5 text-gray-600" /></button>
          <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100"><Settings className="w-5 h-5 text-gray-600" /></button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-blue/20 cursor-pointer">
             <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="User Profile" />
          </div>
        </div>

      </div>
    </nav>
  );
}

export default DashboardNav;
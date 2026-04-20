import React, { useState, useEffect } from 'react';
import { Search, Bell, Settings } from 'lucide-react';

function DashboardNav() {
  const [scrolled, setScrolled] = useState(false);

  // Sync scroll logic with your reference Navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        // Using the exact colors/blur from your reference
        background: scrolled ? "rgba(212, 212, 212, 0.727)" : "white",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled
          ? "0 1px 20px rgba(0,0,0,0.08)"
          : "0 1px 0 #f1f5f9",
        transition: "all 0.3s ease",
      }}
    >
      {/* Aligned with max-w-7xl to match your HomeDashboardPage grid */}
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between h-20">
        
        {/* Left: Logo & App Links */}
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold text-[#006D44] tracking-tight cursor-pointer">
            SanctuaryHealth
          </h1>
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <button className="text-[#006D44] border-b-2 border-[#006D44] pb-1 bg-transparent border-none cursor-pointer">
              Home
            </button>
            <button className="text-gray-400 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">
              Consultations
            </button>
            <button className="text-gray-400 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">
              My Records
            </button>
            <button className="text-gray-400 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer">
              Prescriptions
            </button>
          </div>
        </div>
        
        {/* Right: Dashboard Actions */}
        <div className="flex items-center gap-6">
          <div className="relative group hidden lg:block">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400 group-focus-within:text-blue-500" />
            <input 
              type="text" 
              placeholder="Search records..." 
              className="bg-gray-100/50 rounded-full py-2.5 px-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-72 transition-all border-none"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 bg-white/50 rounded-full hover:bg-white transition-colors border-none cursor-pointer shadow-sm">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-white/50 rounded-full hover:bg-white transition-colors border-none cursor-pointer shadow-sm">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Profile Section */}
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default DashboardNav;
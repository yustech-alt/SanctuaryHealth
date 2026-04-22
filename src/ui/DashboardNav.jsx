import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added necessary hooks
import { Search, Bell, Settings } from 'lucide-react';

function DashboardNav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Used to check which link is active

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Helper function to style active links
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return isActive 
      ? "text-[#006D44] border-b-2 border-[#006D44] pb-1 font-bold" 
      : "text-gray-400 hover:text-gray-900 transition-colors";
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(212, 212, 212, 0.727)" : "white",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled
          ? "0 1px 20px rgba(0,0,0,0.08)"
          : "0 1px 0 #f1f5f9",
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between h-20">
        
        {/* Left: Logo & App Links */}
        <div className="flex items-center gap-10">
          <h1 
            onClick={() => navigate("/")} 
            className="text-2xl font-bold text-[#006D44] tracking-tight cursor-pointer"
          >
            SanctuaryHealth
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            {/* Using Link for better performance and SEO */}
            <Link to="/dashboard" className={getLinkStyle("/dashboard")}>
              Dashboard
            </Link>
            <Link to="/dashboard/consultation" className={getLinkStyle("/dashboard/consultation")}>
              Consultations
            </Link>
            <Link to="/dashboard/records" className={getLinkStyle("/dashboard/records")}>
              My Records
            </Link>
            <Link to="/dashboard/prescription" className={getLinkStyle("/dashboard/prescription")}>
              Prescriptions
            </Link>
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
            
            {/* Settings button routed to dashboard settings */}
            <button 
              onClick={() => navigate("/dashboard/settings")}
              className={`p-2 rounded-full transition-colors border-none cursor-pointer shadow-sm ${location.pathname === '/dashboard/settings' ? 'bg-blue-100 text-blue-600' : 'bg-white/50 hover:bg-white text-gray-600'}`}
            >
              <Settings className="w-5 h-5" />
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
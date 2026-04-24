import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Bell, Settings, Menu, X } from 'lucide-react'; // Added Menu and X icons

function DashboardNav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for phone menu
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when switching pages
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return isActive 
      ? "text-[#006D44] border-b-2 border-[#006D44] md:pb-1 font-bold" 
      : "text-gray-400 hover:text-gray-900 transition-colors";
  };

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Consultations", path: "/dashboard/consultation" },
    { name: "My Records", path: "/dashboard/records" },
    { name: "Prescriptions", path: "/dashboard/prescription" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255, 255, 255, 0.85)" : "white",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "0 1px 0 #f1f5f9",
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        
        {/* Left: Logo & Desktop App Links */}
        <div className="flex items-center gap-10">
          <h1 
            onClick={() => navigate("/")} 
            className="text-xl md:text-2xl font-bold text-[#006D44] tracking-tight cursor-pointer"
          >
            SanctuaryHealth
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={getLinkStyle(link.path)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          <div className="relative group hidden lg:block">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search records..." 
              className="bg-gray-100/50 rounded-full py-2.5 px-10 text-sm focus:outline-none w-64 transition-all border-none"
            />
          </div>
          
          <button className="p-2 bg-white/50 rounded-full hover:bg-white transition-colors border-none shadow-sm hidden sm:block">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          
          <button 
            onClick={() => navigate("/dashboard/settings")}
            className={`p-2 rounded-full transition-colors border-none shadow-sm ${location.pathname === '/dashboard/settings' ? 'bg-blue-100 text-blue-600' : 'bg-white/50 hover:bg-white text-gray-600'}`}
          >
            <Settings className="w-5 h-5" />
          </button>
          
          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden p-2 text-gray-600 bg-gray-100 rounded-lg border-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Profile Section */}
          <div className="hidden sm:flex items-center gap-3 ml-2 pl-4 border-l border-gray-200">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" 
                alt="User profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile Sidebar Menu --- */}
      <div className={`
        fixed top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out md:hidden overflow-hidden
        ${isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
      `}>
        <div className="p-6 flex flex-col gap-6 font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-lg py-2 ${location.pathname === link.path ? 'text-[#006D44]' : 'text-gray-500'}`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-50" />
          <div className="flex items-center gap-4 py-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
               <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="user" />
            </div>
            <span className="text-sm font-bold">My Account</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNav;
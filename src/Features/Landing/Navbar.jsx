import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
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
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <span
          className="text-xl font-bold cursor-pointer"
          style={{ color: "#3b82f6" }}
          onClick={() => scrollTo("hero")}
        >
          SanctuaryHealth
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", id: "hero" },
            { label: "Features", id: "features" },
            { label: "Process", id: "process" },
            { label: "Testimonials", id: "testimonials" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-gray-600 hover:text-blue-500 transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate("/auth")}
            className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors bg-transparent border-none cursor-pointer px-3 py-2"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="text-sm font-semibold text-white px-5 py-2 rounded-lg transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#3b82f6" }}
          >
            Emergency Care
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer text-xl text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Home", id: "hero" },
            { label: "Features", id: "features" },
            { label: "Process", id: "process" },
            { label: "Testimonials", id: "testimonials" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-gray-600 text-left bg-transparent border-none cursor-pointer py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => navigate("/auth")}
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg w-full"
            style={{ background: "#3b82f6" }}
          >
            Emergency Care
          </button>
        </div>
      )}
    </nav>
  );
}